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


    // 결제 상태 업데이트
    @RequestMapping(value="/updatePaymentListByAdmin.do")
    public NexacroResult updatePaymentListByAdmin(
            @ParamDataSet(name="ds_selected", required=false) List<Map<String, Object>> dsSelected) {

        NexacroResult result = new NexacroResult();

        if (dsSelected != null) {
            for (Map<String,Object> row : dsSelected) {
                orderService.updatePaymentListByAdmin(row);
            }
        }

        return result;
    }
    
    // 배송내역 조회
  	@RequestMapping(value="/selectShipListByAdmin.do")
  	public NexacroResult selectShipListByAdmin( 
  			@ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
  		NexacroResult result = new NexacroResult();
  		
  		List<Map<String, Object>> shipList = orderService.selectShipListByAdmin(dsSearch);
  		
  		result.addDataSet("ds_ship", shipList);

  		return result;
  	}

  	 // 배송 상태 업데이트 -> 배송대기? 인서트문 : 업데이트문
    @RequestMapping(value="/updateShipListByAdmin.do")
    public NexacroResult updateShipListByAdmin(
            @ParamDataSet(name="ds_selected", required=false) List<Map<String, Object>> dsSelected) {
    	
    	int insertCnt = 0;     // 인서트문 실행된 갯수 파악할 변수
    	int upCnt = 0;         // 업데이트문 실행된 갯수 파악할 변수
    			
        NexacroResult result = new NexacroResult(); 

        if (dsSelected != null) {
        	 for (Map<String, Object> row : dsSelected) {
        	        Object shipmentId = row.get("SHIPMENT_ID");
        	        
        	        System.out.println("---------------------------------------------------");
        	        System.out.println(shipmentId);
        	        System.out.println("---------------------------------------------------");
        	        
        	        if (shipmentId == null || "".equals(shipmentId.toString())) { // 배송ID가 없으면 데이터가 없으므로
        	            // INSERT 실행
        	        	orderService.insertShipListByAdmin(row);
        	        	insertCnt++;
        	        	System.out.println("실행된 인서트문의 갯수 : "+insertCnt);
        	        	
        	        } else { // 배송ID가 있으면 업데이트문 실행
        	            // UPDATE 실행
        	        	orderService.updateShipListByAdmin(row);
        	        	upCnt++;
        	        	System.out.println("실행된 업데이트문의 갯수 : "+upCnt);
        	        }
        	    }
        }
        return result;
    }

    @RequestMapping(value="/selectOrderItemByAdmin.do")
  	public NexacroResult selectOrderItemByAdmin( 
  			@ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
  		NexacroResult result = new NexacroResult();
  		
  		List<Map<String, Object>> orderItemList = orderService.selectOrderItemByAdmin(dsSearch);
  		
  		result.addDataSet("ds_item", orderItemList);

  		return result;
  	}
}
