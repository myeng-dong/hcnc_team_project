package user.web;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import user.service.UserService;
import user.service.UserBannerService;
import user.service.UserProductService;

@Controller
public class UserController {
	
	@Autowired
	private UserBannerService userBannerService; 
	@Autowired
	private UserProductService userProductService; 
	
	@RequestMapping("/main.do")
	public ModelAndView userMain() { 
		ModelAndView mv = new ModelAndView();
		//카테고리는 전역에서 

		//배너+상품
		List<Map<String,Object>> bannerList = userBannerService.selectBannerListByUser();
		List<Map<String,Object>> productTypeList = userProductService.selectTypeProductListByUser();
		
		// 배너 타입별로 분리
		List<Map<String,Object>> mainBanners = new ArrayList<>();
		List<Map<String,Object>> topBanners = new ArrayList<>();
		List<Map<String,Object>> popupBanners = new ArrayList<>();
		
		//상품 추천별로 분리
		List<Map<String,Object>> newProducts = new ArrayList<>();
		List<Map<String,Object>> recommendProducts = new ArrayList<>();
		List<Map<String,Object>> hotProducts = new ArrayList<>();
		
		for(Map<String,Object> banner : bannerList) {
		    String type = (String) banner.get("BANNER_TYPE");
		    switch(type) {
		        case "main": mainBanners.add(banner); 
		        break;
		        case "top": topBanners.add(banner);
		        break;
		        case "popup": popupBanners.add(banner); 
		        break;
		    }
		}
		
		for(Map<String,Object> typeProlist : productTypeList) {
			String type = (String) typeProlist.get("PRODUCT_TYPE");
			
			if("new".equals(type)) {
		        newProducts.add(typeProlist);
		    } else if("recommend".equals(type)) {
		        recommendProducts.add(typeProlist);
		    }  else if("hot".equals(type)) {
		    	hotProducts.add(typeProlist);
		    } 
		}
			
		mv.addObject("mainBanners", mainBanners);
		mv.addObject("topBanners", topBanners);
		mv.addObject("popupBanners", popupBanners);
		
		mv.addObject("newProducts", newProducts);
		mv.addObject("recommendProducts", recommendProducts);
		mv.addObject("hotProducts", hotProducts);
		
		mv.setViewName("main/main");
	    return mv;
	}
	
	@RequestMapping("/testPay.do")
	public ModelAndView userTestPay() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("payment/pay-test");
		return mv;
	}
	
	@RequestMapping("/success.do")
	public ModelAndView userPayCheckout() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("payment/success");
		return mv;
	}
}