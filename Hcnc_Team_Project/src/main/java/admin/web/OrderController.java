package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.OrderService;


@Controller
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	//주문 조회
	
	//주문 상세조회
	@RequestMapping(value="selectOrderDetailListByAdmin.do")
	public NexacroResult selectOrderDetailListByAdmin( 
			@ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> orderList = orderService.selectOrderDetailListByAdmin(dsSearch);
		
		result.addDataSet("ds_order", orderList);

		return result;
	}
	
	//결제내역 조회
	@RequestMapping(value="selectPaymentListByAdmin.do")
	public NexacroResult selectPaymentListByAdmin( 
			@ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> paymentList = orderService.selectPaymentListByAdmin(dsSearch);
		
		result.addDataSet("ds_pay", paymentList);

		return result;
	}

}
