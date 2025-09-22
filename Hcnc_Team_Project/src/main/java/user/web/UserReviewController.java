package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserReviewService;

@Controller
public class UserReviewController {

	@Autowired
	private UserReviewService userReviewService;
	
	@RequestMapping(value="/selectReviewList.do")
	public ModelAndView selectReviewListByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println("리뷰 리스트 : " + param);
		
		List<HashMap<String, Object>> reviews = userReviewService.selectReviewListByUser(param);
		
		mav.addObject("reviews", reviews);
		
		return mav;
	}
}
