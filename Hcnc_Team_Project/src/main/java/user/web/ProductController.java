package user.web;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ProductController {

	@RequestMapping(value="/productDetailView.do")
	public String productDetailView() {
		return "product/detail";
	}
	///////////////////////////////////////////////////////////////
	
	@RequestMapping(value="/selectProductByUser.do")
	public ModelAndView selectProductByUser(@RequestParam Map<String, Object> param) {
		
		ModelAndView mav = new ModelAndView();
		
		System.out.println(param);
		
		return mav;
	}
}
