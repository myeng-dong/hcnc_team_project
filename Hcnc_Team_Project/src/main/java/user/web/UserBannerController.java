package user.web;
import java.util.ArrayList;
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
	    ModelAndView mav = new ModelAndView();
	    
	    // 서비스에서 모든 배너를 가져오되, 배너 타입 필터 적용 
	    List<Map<String,Object>> bannerList = userBannerService.selectBannerListByUser();
	    
	 // 전체 데이터 확인
	    System.out.println("=== 전체 배너 데이터 ===");
	    System.out.println("총 배너 개수: " + bannerList.size());
	    
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
	    
	    mav.addObject("mainBanners", mainBanners);
	    mav.addObject("topBanners", topBanners);
	    mav.addObject("popupBanners", popupBanners);
	    mav.setViewName("main/main"); // JSP 경로
	    return mav;
	}
	

}
