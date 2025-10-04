package user.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserCartService;
import user.service.UserProductService;

@Controller
public class UserCartController {
	
	@Autowired
	private UserCartService userCartService;
	@Autowired
	private UserProductService userProductService;
	
	// 페이지 로드
	@RequestMapping(value="/cartView.do")
	public String cartView() {
		return "cart/cart";
	}
	
	
	// 장바구니 리스트 조회 기능을 하는 로직
	@RequestMapping(value="/selectCartListByUser.do")
	public ModelAndView selectCartListByUser(@RequestParam HashMap<String, Object> param, HttpSession session) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}
		
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
	
	/*
	 * // 체크박스 선택한 상품만 주문하기
	 * 
	 * @RequestMapping(value="/orderSelected.do") public ModelAndView
	 * orderSelected(@RequestParam HashMap<String, Object> param) { ModelAndView mav
	 * = new ModelAndView();
	 * 
	 * System.out.println(param);
	 * 
	 * return mav; }
	 */

	// 장바구니 옵션 변경
	@RequestMapping(value="/updateOption.do")
	public ModelAndView updateOption(HttpServletRequest request) {
	    ModelAndView mav = new ModelAndView("jsonView");
	    
	 // optionIds 배열 따로 받기
	 		String[] optionIdsStr = request.getParameterValues("optionIds");
	 		List<Long> optionIds = new ArrayList<Long>();
	 		if (optionIdsStr != null) {
	 			for (String id : optionIdsStr) {
	 				optionIds.add(Long.parseLong(id));
	 			}
	 		}
	 		
	 		// 나머지 파라미터 데이터 Map으로 처리
	 		HashMap<String, Object> param = new HashMap<>();
	 		
	 	    param.put("cartId", request.getParameter("cartId"));
	 	    param.put("cartItemId", request.getParameter("cartItemId"));
	 	    param.put("option", request.getParameter("option"));
	 	    param.put("optionPrice", request.getParameter("optionPrice"));
	 		
	 		
	 	    System.out.println("옵션 IDs: " + optionIds);
	 	    System.out.println("파라미터: " + param);
	 	    
	 	    try {
	 	    	HashMap<String, Object> result = userCartService.updateOptionByUser(param, optionIds);
	 	    
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
	
	// 위시리스트 토글 (추가/제거)
	@RequestMapping(value="/toggleWishlist.do")
	public ModelAndView toggleWishlist(@RequestParam HashMap<String, Object> param, HttpSession session) {
	    ModelAndView mav = new ModelAndView("jsonView");
	    
	    Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
	    if(userInfo != null) {
	    	String memberId = (String) userInfo.get("MEMBER_ID");
	    	param.put("memberId", memberId);
	    }
	    
	    System.out.println("위시리스트 토글 파라미터: " + param);
	    
	    try {
	        HashMap<String, Object> result = userCartService.toggleWishlist(param);
	        
	        mav.addObject("success", result.get("success"));
	        mav.addObject("isInWishlist", result.get("isInWishlist"));
	        mav.addObject("message", result.get("message"));
	        
	    } catch (Exception e) {
	        e.printStackTrace();
	        mav.addObject("success", false);
	        mav.addObject("message", "위시리스트 처리 중 오류가 발생했습니다.");
	    }
	    
	    return mav;
	}

	// 위시리스트 상태 확인
	@RequestMapping(value="/checkWishlistStatus.do")
	public ModelAndView checkWishlistStatus(@RequestParam HashMap<String, Object> param) {
	    ModelAndView mav = new ModelAndView("jsonView");
	    
	    try {
	        boolean isInWishlist = userCartService.checkWishlistStatus(param);
	        
	        mav.addObject("success", true);
	        mav.addObject("isInWishlist", isInWishlist);
	        
	    } catch (Exception e) {
	        e.printStackTrace();
	        mav.addObject("success", false);
	        mav.addObject("message", "위시리스트 상태 확인 중 오류가 발생했습니다.");
	    }
	    
	    return mav;
	}
	
	// 옵션 변경 시 상품 옵션 리스트 조회
	@RequestMapping(value="/selectProductOptions.do")
	public ModelAndView selectProductOptions(@RequestParam("productId") Long productId) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		List<HashMap<String, Object>> productOptionInfo = userProductService.slectOptionInfoByUser(productId);
		
		mav.addObject("options", productOptionInfo);
		
		return mav;
	}
	
}
