package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import lombok.Data;
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
		
		HashMap<String, Object> cartTotalPrice = userCartService.selectedTotalPriceByUser(param);
		
		mav.addObject("cartList", cartList);
		mav.addObject("cartTotalPrice", cartTotalPrice);
		
		return mav;
	}
	
	// 상품 수량 디비 저장
	@RequestMapping(value="/updateQuantity.do")
	public ModelAndView updateQuantity(@RequestParam HashMap<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		userCartService.updateQuantity(param);

		HashMap<String, Object> cartTotalPrice = userCartService.selectedTotalPriceByUser(param);
		
		mav.addObject("cartTotalPrice", cartTotalPrice);
		
		return mav;
	}
	
	// 상품 체크박스 수정 + 전체 체크박스 컨트롤
	@RequestMapping(value="/updateChkBox.do")
	public ModelAndView updateChkBox(@RequestParam HashMap<String, Object> param){
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		userCartService.updateChkBox(param);
		
		HashMap<String, Object> cartTotalPrice = userCartService.selectedTotalPriceByUser(param);
		
		mav.addObject("cartTotalPrice", cartTotalPrice);
		
		
		return mav;
	}

	// 상품 삭제
	@RequestMapping(value="/deleteProduct.do")
	public ModelAndView deleteProduct(@RequestParam HashMap<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		userCartService.deleteProduct(param);
		
		return mav;
	}
	
	// 체크박스 선택한 상품만 주문하기
	@RequestMapping(value="/orderSelected.do")
	public ModelAndView orderSelected(@RequestParam HashMap<String, Object> param) {
		ModelAndView mav = new ModelAndView();
		
		System.out.println(param);
		
		return mav;
	}

	// 장바구니 옵션 변경
	@RequestMapping(value="/updateOption.do")
	public ModelAndView updateOption(@RequestParam HashMap<String, Object> param) {
	    ModelAndView mav = new ModelAndView("jsonView");
	    
	    try {
	        HashMap<String, Object> result = userCartService.updateOptionByUser(param);
	        
	        // Service에서 받은 결과를 그대로 전달
	        mav.addObject("success", result.get("success"));
	        if((Boolean)result.get("success")) {
	            mav.addObject("newPrice", result.get("newPrice"));
	            mav.addObject("cartTotalPrice", result.get("cartTotalPrice"));
	        } else {
	            mav.addObject("message", result.get("message"));
	            mav.addObject("errorCode", result.get("errorCode"));
	        }
	        
	    } catch (Exception e) {
	        e.printStackTrace();
	        mav.addObject("success", false);
	        mav.addObject("message", "옵션 변경 중 오류 발생");
	    }
	    
	    return mav;
	}
}
