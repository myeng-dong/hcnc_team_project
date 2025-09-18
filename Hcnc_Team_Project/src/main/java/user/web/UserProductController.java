package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
		
		List<HashMap<String, Object>> productDetail = userProductService.selectProductByUser(param);
		
		List<HashMap<String, Object>> productOptionInfo = userProductService.slectOptionInfoByUser(param);
		
		mav.addObject("product", productDetail);
		mav.addObject("productOptions", productOptionInfo);
		
		return mav;
	}
	
	@RequestMapping(value="/insertCartItem.do")
	public ModelAndView insertCartItemByUser(@RequestParam Map<String, Object> param) {
		
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		int insertCartItem = userProductService.insertCartItemByUser(param);
		
		mav.addObject("insertResult", insertCartItem);
		
		System.out.println(insertCartItem);
		
		return mav;
	}
	
	@RequestMapping(value="/insertQnA.do")
	public ModelAndView insertQnAByUser(@RequestParam Map<String, Object> param, RedirectAttributes redirectAttributes) {
		ModelAndView mav = new ModelAndView();
		
		String productId = (String) param.get("productId");
		
		int insertQnA = userProductService.insertQnAByUser(param);
		
		redirectAttributes.addFlashAttribute("message", "등록이 완료되었습니다.");
		redirectAttributes.addFlashAttribute("messageType", "success");
		
		mav.setViewName("redirect:/productDetailView.do?productId=" + productId);
		
		return mav;
	}
	
	@RequestMapping(value="/selectProductQnAList.do")
	public ModelAndView selectProductQnAListByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		List<HashMap<String, Object>> productQnAList = userProductService.selectProductQnAListByUser(param);
		
		mav.addObject("qnaList", productQnAList);
		
		return mav;
	}
}
