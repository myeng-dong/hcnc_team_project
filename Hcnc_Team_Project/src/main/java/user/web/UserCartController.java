package user.web;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserCartService;

@Controller
public class UserCartController {
	
	@Autowired
	private UserCartService userCartService;
	
	// 페이지 로드
	@RequestMapping(value="/cartView.do")
	public String cartView() {
		return "cart/cart";
	}
	
	
	// 장바구니 리스트 조회 기능을 하는 로직
	@RequestMapping(value="/selectCartListByUser.do")
	public ModelAndView selectCartListByUser(@RequestParam HashMap<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		List<HashMap<String, Object>> cartList = userCartService.selectCartListByUser(param);
		
		mav.addObject("cartList", cartList);
		
		return mav;
	}
	
	// 상품 수량 디비 저장
	@RequestMapping(value="/updateQuantity.do")
	public ModelAndView updateQuantity(@RequestParam HashMap<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		userCartService.updateQuantity(param);
		
		return mav;
	}
	
}
