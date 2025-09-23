package user.web;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
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

    @RequestMapping(value="/faqList.do")
    public ModelAndView faqList() {
        ModelAndView mav = new ModelAndView();
        List<Map<String, Object>> posts = userBoardService.getBoardPosts("FAQ");
        mav.addObject("faqList", posts);
        mav.setViewName("faq/list"); // 공통 JSP
        return mav;
    }

}
