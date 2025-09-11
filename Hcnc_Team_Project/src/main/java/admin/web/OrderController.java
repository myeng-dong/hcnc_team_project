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
	
	@RequestMapping(value="selectOrderListByAdmin.do")
	public NexacroResult selectOrderListByAdmin( 
			@ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> orderList = orderService.selectOrderListByAdmin(dsSearch);
		
		result.addDataSet("ds_order", orderList);

		return result;
	}

}
