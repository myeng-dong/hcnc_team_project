package user.web;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.CartService;

@Controller
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	//페이지 로드
	@RequestMapping(value="/cartView.do")
	public String cartView() {
		return "cart/cart";
	}
	
	
	//장바구니 리스트 조회 기능을 하는 로직
	@RequestMapping(value="/selectCartListByUser.do")
	public ModelAndView selectCartListByUser(@RequestParam HashMap<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		cartService.selectCartListByUser(param);
		
		return mav;
	}
	
}
