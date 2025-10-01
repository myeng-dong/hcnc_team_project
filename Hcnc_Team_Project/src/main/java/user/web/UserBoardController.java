package user.web;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserBoardService;
import user.service.UserMemberService;

@Controller
@RequestMapping("/board")
public class UserBoardController {
	@Autowired
	UserBoardService userBoardService;
	
	@Autowired
	private UserMemberService userMemberService;
	
	// 게시글 첫 페이지
	@RequestMapping(value="/home.do")
	public String cartView() {
		return "notice/list";
	}
	
	@RequestMapping(value="/list.do")
	public ModelAndView listPage(
	    @RequestParam(value="alertMessage", required=false) String alertMessage,
	    HttpServletRequest request) {
	    
	    ModelAndView mav = new ModelAndView();
	    
	    // alert 메시지가 있으면 전달
	    if(alertMessage != null && !alertMessage.isEmpty()) {
	        mav.addObject("alertMessage", alertMessage);
	    }
	    
	    mav.setViewName("notice/list");
	    return mav;
	}
  
	//게시글 조회 위의 (게시글 첫 페이지) 실행시 페이지 온로드때 실행된다..
	@RequestMapping(value="/noticeListData.do")
	public ModelAndView getNoticeList(
	        @RequestParam(defaultValue = "1") int pageIndex,       //페이지 인덱스값 설정 : 1
	        @RequestParam(defaultValue = "5") int pageSize,        //한페이지당 조회될 게시글 설정  : 5
	        @RequestParam(required = false) String category,       //카테고리 설정 : jsp에서 기본값을 ''로 설정
	        @RequestParam(required = false) String searchKeyword,  //서치할 키워드 설정
	        @RequestParam(required = false) String searchType      //서치할 타입 설정
	        ) {
	    
	    ModelAndView mav = new ModelAndView("jsonView");  // jsonView로 설정
	    
	    try {
	        Map<String, Object> params = new HashMap<>();           //파라미터통을 위한 해쉬맵 생성
	        params.put("pageIndex", pageIndex);                     //파라미터통에 페이지 인덱스 담음
	        params.put("pageSize", pageSize);                       //파라미터통에 페이지 사이즈 담음
	        params.put("firstIndex", (pageIndex - 1) * pageSize);   //파라미터통에 첫페이지 담음
	        params.put("category", category);                       //파라미터통에 카테고리 담음 초기값 ''
	        params.put("searchKeyword", searchKeyword);             //파라미터통에 검색할 키워드 담음
	        params.put("searchType", searchType);                   //파라미터통에 검색할 타입을 담음
	        
	        System.out.println(params);
	        
	        //파라미터통에 담은 내용을 쏴서 게시글리스트 조회 조회되는 보드ID = 1,2,4임
	        List<Map<String, Object>> posts = userBoardService.selectPostListByUser(params);
	        
	        //게시글의 갯수를 카운팅용
	        int totalCount = userBoardService.selectPostTotalCountByUser(params);
	        
	        mav.addObject("success", true);
	        mav.addObject("resultList", posts);
	        mav.addObject("pageIndex", pageIndex);
	        mav.addObject("totalCount", totalCount);
	        mav.addObject("totalPages", (int) Math.ceil((double) totalCount / pageSize));
	        
	    } catch (Exception e) {
	        System.out.println("에러 발생: " + e.getMessage());
	        e.printStackTrace();
	        mav.addObject("success", false);
	        mav.addObject("message", "데이터 조회 중 오류: " + e.getMessage());
	    }
	    
	    return mav;
	}
	
	
	//게시글 상세 조회시 링크 
	@RequestMapping(value="/detail.do")
    public ModelAndView boardDetail(HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        
        try {
        	//포스트아이디를 넘기면 서블렛 리퀘스트로 받아옴
        	int postId = Integer.parseInt(request.getParameter("postId"));
        	
			//유저인포와  별개로 일단 게시글 상세 mav에 담아줌
            Map<String, Object> postDetail = userBoardService.selectUserPostDetailByUser(postId);
			mav.addObject("postDetail", postDetail);
			
			//게시글에 달린 댓글 mav에 담아줌
			List<Map<String, Object>> comment = userBoardService.selectUserCommentByUser(postId);
			mav.addObject("comment", comment);
			
		    HttpSession session = request.getSession(false);
		  //세션이 있으면 아래 내용 실행
		    if (session != null) {
	            Map<String, Object> info = (Map<String, Object>) session.getAttribute("userInfo");
	            
	            // info가 null이 아닐 때만 처리
	            if (info != null) {
	                String loginUser = (String) info.get("MEMBER_ID");
	                String writer = (String) postDetail.get("MEMBER_ID");
	                
	                // 두 값이 모두 null이 아니고, 다를 때만 조회수 증가
	                if (loginUser != null && writer != null && !loginUser.equals(writer)) {
	                    userBoardService.updateUserPostCntByUser(postId);
	                }
	                
	                // 유저 정보
	                mav.addObject("status", 200);
	                Map<String, Object> user = userMemberService.selectUserInfoByUser(loginUser);
	                mav.addObject("user", user);
	            }else {
	            }
	        }
        }catch(Exception e){
        	  System.out.println("===== detail.do 에러 발생 =====");
              e.printStackTrace();
              mav.setViewName("error/500");
        }
        	
        mav.setViewName("notice/detail"); 
        return mav;
    }

	
	@RequestMapping(value="/insert.do")
	public ModelAndView insertPage(HttpServletRequest request) {
	    ModelAndView mav = new ModelAndView();
	    
	    try {
	        HttpSession session = request.getSession(false);
	        
	        // 세션이 없거나 userInfo가 없으면
	        if (session == null || session.getAttribute("userInfo") == null) {
	            // 게시판 목록 페이지로 리다이렉트하면서 메시지 전달
	            mav.addObject("alertMessage", "로그인이 필요합니다.");
	            mav.setViewName("redirect:/board/list.do");
	            return mav;
	        }
	        
	        Map<String, Object> info = (Map<String, Object>) session.getAttribute("userInfo");
	        String loginUser = (String) info.get("MEMBER_ID");
	        
	        // 유저 정보 조회
	        Map<String, Object> user = userMemberService.selectUserInfoByUser(loginUser);
	        
	        mav.addObject("status", 200);
	        mav.addObject("user", user);
	        
	        List<Map<String, Object>> postType = userBoardService.selectUserPostTypeByUser();
	        mav.addObject("postType", postType);
	        
	    } catch(Exception e) {
	        System.out.println("===== insert.do 에러 발생 =====");
	        e.printStackTrace();
	        
	        mav.addObject("alertMessage", "오류가 발생했습니다. 다시 시도해주세요.");
	        mav.setViewName("redirect:/board/list.do");
	        return mav;
	    }
	    
	    mav.setViewName("notice/insertPost");
	    return mav;
	}
	
	//게시글 작성
	@RequestMapping(value="/write.do")
	public ModelAndView insertPost(@RequestParam Map<String, Object> params) {
	    ModelAndView mav = new ModelAndView();
	    
	    try {
	        userBoardService.insertUserPostByUser(params);
	        
	        mav.addObject("success", true);
	        mav.addObject("message", "등록 완료");
	    } catch (Exception e) {
	        mav.addObject("success", false);
	        mav.addObject("message", "등록 실패");
	        e.printStackTrace();
	    }
	    
	    mav.setViewName("notice/list");
	    return mav;
	}
	
	//댓글 작성
	@RequestMapping(value="/commentWrite.do")
	public ModelAndView insertComment(@RequestParam Map<String, Object> params) {
	    ModelAndView mav = new ModelAndView();
	    
	    try {
	    	System.out.println("댓글 달기 실행");
	        userBoardService.insertUserCommentByUser(params);
	        
	        mav.addObject("success", true);
	        mav.addObject("message", "등록 완료");
	    } catch (Exception e) {
	        mav.addObject("success", false);
	        mav.addObject("message", "등록 실패");
	        e.printStackTrace();
	    }
	    
	    mav.setViewName("notice/detail");
	    return mav;
	}
	@RequestMapping(value="commentDelete.do")
	public ModelAndView deleteComment(@RequestParam Map<String, Object> params) {
		ModelAndView mav = new ModelAndView();
		
		try {
			System.out.println("댓글 삭제 실행");
			userBoardService.deleteUserCommentByUser(params);
			
			
		}catch(Exception e) {
			
			e.printStackTrace();
			
		}
		
		return mav;
	}
	
}
