package user.web;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import user.service.UserBoardService;

@Controller
@RequestMapping("/board")
public class UserBoardController {
	@Autowired
	UserBoardService userBoardService;
	
	@RequestMapping(value="/home.do")
	public String cartView() {
		return "notice/list";
	}
  
    @RequestMapping(value="/eventList.do")
    public ModelAndView eventList() {
        ModelAndView mav = new ModelAndView();
        List<Map<String, Object>> posts = userBoardService.getBoardPosts("EVENT");
        mav.addObject("boardList", posts);
        mav.setViewName("event/list");
        return mav;
    }
    
	@RequestMapping(value="/noticeList.do")
    public ModelAndView noticeList() {
        ModelAndView mav = new ModelAndView();
        List<Map<String, Object>> posts = userBoardService.getBoardPosts("NOTICE");
        mav.addObject("noticeList", posts);
        mav.setViewName("notice/list"); 
        return mav;
    }

	
	@RequestMapping(value="/noticeListData.do")
	public ModelAndView getNoticeList(
	        @RequestParam(defaultValue = "1") int pageIndex,
	        @RequestParam(defaultValue = "10") int pageSize,
	        @RequestParam(required = false) String category,
	        @RequestParam(required = false) String searchKeyword) {
	    
	    ModelAndView mav = new ModelAndView("jsonView");  // jsonView로 설정
	    
	    System.out.println("===== Controller 호출 =====");
	    System.out.println("pageIndex: " + pageIndex);
	    
	    try {
	        Map<String, Object> params = new HashMap<>();
	        params.put("pageIndex", pageIndex);
	        params.put("pageSize", pageSize);
	        params.put("firstIndex", (pageIndex - 1) * pageSize);
	        params.put("category", category);
	        params.put("searchKeyword", searchKeyword);
	        
	        List<Map<String, Object>> posts = userBoardService.selectPostListByUser(params);
	        int totalCount = userBoardService.selectPostTotalCountByUser(params);
	        
	        System.out.println("조회 결과: " + posts.size() + "건");
	        
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

}
