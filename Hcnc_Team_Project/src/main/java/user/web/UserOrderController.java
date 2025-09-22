package user.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserOrderController {

	// 페이지 로드
	@RequestMapping(value="/orderView.do")
	public String orderView() {
		return "order/order";
	}
	
}
