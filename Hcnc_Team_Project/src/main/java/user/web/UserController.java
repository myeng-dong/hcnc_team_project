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
	private UserService userService;
	@Autowired
	private UserBannerService userBannerService; 
	@Autowired
	private UserProductService userProductService; 
	
	@RequestMapping("/main.do")
	public ModelAndView userMain() { 
		ModelAndView mv = new ModelAndView();
		//카테고리는 전역에서 
		
		// Grade 데이터
		List<Map<String,Object>> gradeList = userService.selectGradeListByUser();
		System.out.println(gradeList);
		mv.addObject("gradeList", gradeList);
		
		//배너+상품
		List<Map<String,Object>> bannerList = userBannerService.selectBannerListByUser();
		List<Map<String,Object>> productList = userProductService.selectMNProductListByUser();
		List<Map<String,Object>> hotProducts = userProductService.selectHotProductListByUser();
		
		System.out.println("총 배너 개수 확인용: " + bannerList.size());
		System.out.println("총프로덕트확인용: " + productList.size());
		System.out.println("총프로덕트확인용: " + hotProducts.size());
		
		// 배너 타입별로 분리
		List<Map<String,Object>> mainBanners = new ArrayList<>();
		List<Map<String,Object>> topBanners = new ArrayList<>();
		List<Map<String,Object>> popupBanners = new ArrayList<>();
		
		//상품 추천별로 분리
		List<Map<String,Object>> newProducts = new ArrayList<>();
		List<Map<String,Object>> recommendProducts = new ArrayList<>();
		
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
		
		for(Map<String,Object> mnProlist : productList) {
			int sortNumber = ((Number) mnProlist.get("SORT_NUMBER")).intValue();
			switch(sortNumber) {
			case 1 : newProducts.add(mnProlist);
				System.out.println(productList);
			break;
			case 2 : recommendProducts.add(mnProlist);
				System.out.println(productList);
			break;
			}
		}
		
		System.out.println("mainBanners 개수: " + mainBanners.size());
		System.out.println("topBanners 개수: " + topBanners.size());
		System.out.println("popupBanners 개수: " + popupBanners.size());
		
		System.out.println("newProduct 개수: " + newProducts.size());
		System.out.println("recommendProduct 개수: " + recommendProducts.size());
		
		mv.addObject("mainBanners", mainBanners);
		mv.addObject("topBanners", topBanners);
		mv.addObject("popupBanners", popupBanners);

		mv.addObject("newProducts", newProducts);
		mv.addObject("recommendProducts", recommendProducts);
		
		mv.addObject("hotProducts",hotProducts);

		mv.setViewName("main/main");
	    return mv;
	}
}