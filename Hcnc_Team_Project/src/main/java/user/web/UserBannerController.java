package user.web;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserBannerService;

@Controller
public class UserBannerController {
	
	@Autowired
	private UserBannerService userBannerService;
	
	
	@RequestMapping(value="/selectBannerListByUser.do")
	public ModelAndView selectBannerListByUser() {
		ModelAndView mv = new ModelAndView();
		List<Map<String,Object>> userBannerList = userBannerService.selectBannerListByUser();
		
		System.out.println(userBannerList);
		mv.setViewName("banner/banner");
	    return mv;
	}
	

}
