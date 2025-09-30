package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserOrderService;

@Controller
public class UserOrderController {
	
	@Autowired
	private UserOrderService userOrderService;

	// 페이지 로드
	@RequestMapping(value="/orderView.do")
	public ModelAndView orderView(@RequestParam("cartId") Long cartId) {
		ModelAndView mav = new ModelAndView();
		
		System.out.println(cartId);
		
		HashMap<String, Object> itemCnt = userOrderService.selectItemCntByUser(cartId);
		List<HashMap<String, Object>> requestInfoList = userOrderService.selectOrderRequestItemListByUser(cartId);
		
		mav.addObject("itemCnt", itemCnt);
		mav.addObject("itemsInfo", requestInfoList);
		
		System.out.println(requestInfoList);
		
		
		mav.setViewName("order/order");
	
		return mav;
	}
//	
//	@RequestMapping(value="/orderMeberInfo.do")
//	public ModelAndView selectOrderMeberInfoByUser(@RequestParam Map<String, Object> param) {
//		ModelAndView mav = new ModelAndView("jsonView");
//		
//		System.out.println(param);
//		
//		List<HashMap<String, Object>> resultInfo = userOrderService.selectOrderMeberInfoByUser(param);
//		
//		mav.addObject("resultInfo", resultInfo);
//		
//		return mav;
//	}
//	
	@RequestMapping(value="/orderMemberData.do")
	public ModelAndView selectRequestedOrderInfoByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		HashMap<String, Object> resultInfo = userOrderService.selectRequestedOrderInfoByUser(param);
		
		mav.addObject("resultInfo", resultInfo);
		
		return mav;
	}
	
	@RequestMapping(value="/orderDataSave.do")
	public ModelAndView orderDataSave(@RequestParam("items") Map<String, Object> items, @RequestParam("order") Map<String, Object> order) {
		ModelAndView mav = new ModelAndView();
		
		System.out.println(items);
		System.out.println(order);
		
		return mav;
	}
	
	@RequestMapping(value="/orders/prepare")
	public ModelAndView orderPrepare(@RequestBody Map<String, Object> param) {
		ModelAndView mav = new ModelAndView();

		System.out.println(param);
		
		return mav;
	}
	
	@RequestMapping(value="/paySuccess.do")
	public ModelAndView paySuccess() {
		ModelAndView mav = new ModelAndView();
		mav.setViewName("order/payments/paySuccess");
		return mav;
	}
}
