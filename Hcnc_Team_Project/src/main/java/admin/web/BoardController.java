package admin.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.mapper.NotificationMapper;
import admin.service.BoardService;
import common.websocket.WebUtil;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@Autowired
	private NotificationMapper notification;
	
	//1대1 문의 게시판 조회
	@RequestMapping(value="/selectOneOnOneByAdmin.do")
	public NexacroResult selectOneOnOneByAdmin(
			@ParamDataSet(name="ds_search", required = false) Map<String,Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> oneList = boardService.selectOneOnOneByAdmin(dsSearch);
		
		result.addDataSet("ds_board", oneList);

		return result;
	}
	
	//1대1 문의 게시글 답변 추가 + 원 게시물 게시상태 변경
	@RequestMapping(value="/insertCommentByAdmin.do")
	public NexacroResult insertCommentByAdmin(
			@ParamDataSet(name="ds_comment", required = false) Map<String,Object> dsComment) {
		NexacroResult result = new NexacroResult();
		
		String postId = (String) dsComment.get("POST_ID");

		boardService.insertCommentByAdmin(dsComment);    //코멘트 인서트 
		
		if(postId != null && !"".equals(postId)){
			boardService.updatePostStatusByAdmin(dsComment); //코멘트 단 원 게시물의 게시상태 변경
		}
		
		// dsComment에서 정보 빼오기
    	String userId = (String)dsComment.get("RECEIVER_ID");
    	
    	  // 2. 알림 DB 저장 ⭐
        Map<String, Object> params = new HashMap<>();
        params.put("senderId", "ADMIN");
        params.put("receiverId", userId);
        params.put("receiverType", "USER");
        params.put("notiType", "REPLY");
        params.put("notiMessage", postId + "\n 1대1 문의 답변이 달렸습니다.");    
		
		notification.insertNotificationOneByAdmin(params);     
		
		WebUtil.sendInquiryReplyNotification(userId, postId);
		
		return result;
	}
	
	// 공지사항, FAQ, QnA 게시판 조회
	@RequestMapping(value="/selectPostListByAdmin.do")
	public NexacroResult selectPostListByAdmin(
			@ParamDataSet(name="ds_search", required = false) Map<String,Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> postList = boardService.selectPostListByAdmin(dsSearch);
		
		result.addDataSet("ds_board", postList);
		
		return result;
	}
	
	
	// 공지사항, FAQ 에디터 인서트
	@RequestMapping(value="/insertPostByAdmin.do")
	public NexacroResult insertPostByAdmin(
	        @ParamDataSet(name="ds_post", required = false) Map<String,Object> dsPost) {
	    
	    NexacroResult result = new NexacroResult();
	    
	    try {
	        // 데이터 유효성 검사
	        if (dsPost == null || dsPost.isEmpty()) {
	            throw new IllegalArgumentException("게시글 데이터가 없습니다.");
	        }
	        
	        // 필수 필드 검사
	        if (dsPost.get("POST_TITLE") == null || dsPost.get("POST_TITLE").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("제목은 필수입니다.");
	        }
	        
	        if (dsPost.get("POST_CONTENT") == null || dsPost.get("POST_CONTENT").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("내용은 필수입니다.");
	        }
	        
	        if (dsPost.get("BOARD_ID") == null || dsPost.get("BOARD_ID").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("게시판 구분은 필수입니다.");
	        }
	        
	        if (dsPost.get("MEMBER_ID") == null || dsPost.get("MEMBER_ID").toString().trim().isEmpty()) {
	            throw new IllegalArgumentException("작성자 정보가 없습니다.");
	        }
	        
	        // 서비스 호출
	        int insertedCount = boardService.insertPostByAdmin(dsPost);
	        
	        // 성공 여부 확인
	        if (insertedCount > 0) {
	            result.addDataSet("message", insertedCount);
	        } else {
	            result.setErrorCode(-1);
	            result.setErrorMsg("게시글 등록에 실패했습니다.");
	        }
	        
	    } catch (IllegalArgumentException e) {
	        result.setErrorCode(-1);
	        result.setErrorMsg(e.getMessage());
	    } catch (Exception e) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("시스템 오류가 발생했습니다: " + e.getMessage());
	        // 로그 출력
	        e.printStackTrace();
	    }
	    
	    return result;
	}
	
	//게시글 상세 조회
	@RequestMapping(value="/selectPostDetailByAdmin.do")
	public NexacroResult selectPostDetailByAdmin(
			@ParamDataSet(name="ds_postId", required = false) Map<String,Object> dsPostId) {
		
		NexacroResult result = new NexacroResult();
		 try {  
			    
		        Map<String, Object> postDetail = boardService.selectPostDetailByAdmin(dsPostId);
		        result.addDataSet("ds_detail", postDetail);
		        
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 조회 중 오류가 발생했습니다: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}

	
    // 게시글 수정
	@RequestMapping(value="/updatePostByAdmin.do")
	public NexacroResult updatePostByAdmin(
			@ParamDataSet(name="ds_update", required = false) Map<String,Object> dsUpdate) {
		
		NexacroResult result = new NexacroResult();
		 try {  
			 
			 
			 if(dsUpdate == null || dsUpdate.isEmpty()) { //무결성 체크 받아온 데이터가 있는지
				  throw new IllegalArgumentException("수정할 데이터가 없습니다.");
			 }
			 //무결성 체크 받아온 제목이 있는지
			 if(dsUpdate.get("POST_TITLE") == null || dsUpdate.get("POST_TITLE").toString().trim().isEmpty()) {
				  throw new IllegalArgumentException("제목은 필수입니다.");
			 } 
			 //무결성 체크 받아온 내용이 있는지
			 if(dsUpdate.get("POST_CONTENT") == null || dsUpdate.get("POST_CONTENT").toString().trim().isEmpty()) {
				  throw new IllegalArgumentException("내용은 필수입니다.");
			 }
			 
			 //게시글 수정 서비스
		     boardService.updatePostByAdmin(dsUpdate);
		       
		        
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 수정 중에 오류가 발생하였습니다.: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}
	
	// 신고리스트 조회
	@RequestMapping(value="/selectReportByAdmin.do")
	public NexacroResult selectReportByAdmin(
			@ParamDataSet(name="ds_search", required = false) Map<String,Object> dsSearch) {
		
		NexacroResult result = new NexacroResult();
		 try {  
			    //신고 리스트
			 	List<Map<String, Object>> reportList = boardService.selectReportByAdmin(dsSearch);
				result.addDataSet("ds_list", reportList);
				
				//신고 유형을 담을 데이터셋
				List<Map<String, Object>> reportStatusList = boardService.selectReportTypeByAdmin();
		        result.addDataSet("ds_reportType", reportStatusList);
		        
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 조회 중 오류가 발생했습니다: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}
	
	// 신고 상태 업데이트
	@RequestMapping(value="/updateReportByAdmin.do")
	public NexacroResult updateReportByAdmin(
			@ParamDataSet(name="ds_selected", required = false) List<Map<String,Object>> dsSelected) {
		
		NexacroResult result = new NexacroResult();
		 try {          	 
	        	 if(dsSelected != null) {
	        		 for(Map<String, Object> row : dsSelected) {
	        			 Object reportId = row.get("REPORT_ID");
	        			 if(reportId == null) {
	        				 System.out.println("리포트아이디가 없습니다.");
	        			 }else {
	        				 boardService.updateReportByAdmin(row);
	        			 }
	        		 }
	        	 }      
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 수정 중에 오류가 발생하였습니다.: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}
	
	// 신고 댓글 및 신고 리뷰 상세조회
	@RequestMapping(value="/selectReviewCommentByAdmin.do")
	public NexacroResult selectReviewCommentByAdmin(
			@ParamDataSet(name="ds_search", required = false) Map<String,Object> dsSearch) {
		
		NexacroResult result = new NexacroResult();
		
		if(dsSearch.get("REVIEW_ID") != null ) {
		    List<Map<String, Object>> reviewList = boardService.selectReviewReportByAdmin(dsSearch);
		    result.addDataSet("ds_board", reviewList);
		}
		if(dsSearch.get("COMMENT_ID") != null ) {

			List<Map<String, Object>> commentList = boardService.selectcommentReportByAdmin(dsSearch);
			result.addDataSet("ds_board", commentList);
			
		}
		
		
		 try {  
			    //신고 리스트
			 	List<Map<String, Object>> reportList = boardService.selectReportByAdmin(dsSearch);
				result.addDataSet("ds_list", reportList);
				
				//신고 유형을 담을 데이터셋
				List<Map<String, Object>> reportStatusList = boardService.selectReportTypeByAdmin();
		        result.addDataSet("ds_reportType", reportStatusList);
		        
		 }catch (Exception e) {
		        result.setErrorCode(-1);
		        result.setErrorMsg("게시글 조회 중 오류가 발생했습니다: " + e.getMessage());
		        e.printStackTrace();
		 }
		return result;
	}
	

}
