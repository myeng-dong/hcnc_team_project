package user.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserProductService;

@Controller
public class UserProductController {
	
	@Autowired
	private UserProductService userProductService;

	@RequestMapping(value="/productDetailView.do")
	public String productDetailView() {
		return "product/detail";
	}
	///////////////////////////////////////////////////////////////
	
	@RequestMapping(value="/selectProductByUser.do")
	public ModelAndView selectProductByUser(@RequestParam Map<String, Object> param) {
		
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		HashMap<String, Object> productDetail = userProductService.selectProductByUser(param);

		mav.addObject("product", productDetail);
		
		return mav;
	}
}
