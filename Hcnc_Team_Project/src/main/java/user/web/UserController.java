package user.web;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import user.service.UserService;
import user.service.UserBannerService; // 추가

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserBannerService userBannerService; 
	
	@RequestMapping("/main.do")
	public ModelAndView userMain() { 
		ModelAndView mv = new ModelAndView();
		
		// Grade 데이터
		List<Map<String,Object>> gradeList = userService.selectGradeListByUser();
		System.out.println(gradeList);
		mv.addObject("gradeList", gradeList);
		
		List<Map<String,Object>> bannerList = userBannerService.selectBannerListByUser();
		
		System.out.println("총 배너 개수 확인용: " + bannerList.size());
		
		// 배너 타입별로 분리
		List<Map<String,Object>> mainBanners = new ArrayList<>();
		List<Map<String,Object>> topBanners = new ArrayList<>();
		List<Map<String,Object>> popupBanners = new ArrayList<>();
		
		for(Map<String,Object> banner : bannerList) {
		    String type = (String) banner.get("BANNER_TYPE");
		    switch(type) {
		        case "main": mainBanners.add(banner); 
		        	System.out.println(bannerList);
		        break;
		        case "top": topBanners.add(banner);
		        	System.out.println(bannerList);
		        break;
		        case "popup": popupBanners.add(banner); 
		        	System.out.println(bannerList);
		        break;
		    }
		}
		
		System.out.println("mainBanners 개수: " + mainBanners.size());
		System.out.println("topBanners 개수: " + topBanners.size());
		System.out.println("popupBanners 개수: " + popupBanners.size());
		
		mv.addObject("mainBanners", mainBanners);
		mv.addObject("topBanners", topBanners);
		mv.addObject("popupBanners", popupBanners);
		mv.setViewName("main/main");
	    return mv;
	}
}