package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import user.mapper.UserOrderMapper;

@Service
public class UserOrderService {

	@Autowired
	private UserOrderMapper userOrderMapper;
	
	public List<HashMap<String, Object>> selectOrderRequestItemListByUser(Long cartId) {
		// TODO Auto-generated method stub
		return userOrderMapper.selectOrderRequestItemListByUser(cartId);
	}

	public HashMap<String, Object> selectItemCntByUser(Long cartId) {
		// TODO Auto-generated method stub
		return userOrderMapper.selectItemCntByUser(cartId);
	}

	@Transactional
	public HashMap<String, Object> selectRequestedOrderInfoByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		HashMap<String, Object> result = new HashMap<>();
		
        try {
        	HashMap<String, Object> basicInfo = userOrderMapper.selectOrderMemberBasicInfoByUser(param);
        	Integer totalPoint = userOrderMapper.selectMemberPointByUser(param);
        	List<HashMap<String, Object>> coupons = userOrderMapper.selectMemberCouponListByUser(param);
        	List<HashMap<String, Object>> address = userOrderMapper.selectMemberAddressListByUser(param);
        	
        	result.putAll(basicInfo);
        	result.put("totalPoint", totalPoint);
        	result.put("coupons", coupons);
        	result.put("address", address);
        	
        } catch(Exception e) {
        	throw new RuntimeException("회원 정보 조회 실패", e);
        }
		return result;
	}

	@Transactional
	public int orderDataSaveByUser(Map<String, Object> order, List<Map<String, Object>> items) {
		int result = 1;
		
		// 1. ORDERS테이블 데이터 입력
		int ordersInsert = userOrderMapper.orderDataSaveByUser(order);
		if(ordersInsert == 1) {
			System.out.println("orders 테이블 데이터 저장완료!");
		} else {
			result = 0;
			System.out.println("orders 테이블 데이터 저장실패");
		}
		
		// 2. ORDER_ID 가져오기
		Long orderId = userOrderMapper.getOrderIdByUser(order);
		order.put("orderId", orderId);
		
		// 3. ORDER_ITEMS에 데이터 입력
		boolean orderItems = true;
		for(int i = 0; i < items.size(); i++) {
			Map<String, Object> item = items.get(i);
			
			item.put("orderId", orderId);
			
			int orderItemsInsert = userOrderMapper.insertOrderItemsByUser(item);
			
			if(orderItemsInsert != 1) {
				orderItems = false;
			}
		}
		
		if(orderItems) {
			System.out.println("orderItems 데이터 저장완료!");
		} else {
			result = 0;
			System.out.println("orderItems 데이터 저장실패");
		}
		
		// 4. 포인트 차감
		boolean points = true;
		if((int) order.get("usedPoint") != 0) {
			int pointInsert = userOrderMapper.insertPointByUser(order);
			
			if(pointInsert != 1) {
				points = false;
			}
		}
		
		if(points) {
			System.out.println("points 테이블 데이터 저장완료!");
		} else {
			result = 0;
			System.out.println("points 테이블 데이터 저장실패 ");
		}
		
		// 5. 쿠폰 차감
		boolean coupons = true;
		if(order.get("couponId") != null) {
			int couponUpdate = userOrderMapper.updateCouponByUser(order);
			
			if(couponUpdate != 1) {
				coupons = false;
			}
		}
		
		if(coupons) {
			System.out.println("coupons 테이블 데이터 저장완료!");
		} else {
			result = 0;
			System.out.println("coupons 테이블 데이터 저장실패");
		}
		
		// 6. 재고 차감
		boolean inventories = true;
		for(int i=0; i < items.size(); i++) {
			Map<String, Object> item = items.get(i);
			
			List<Map<String, Object>> optionIds = userOrderMapper.selectOrderItemOptionListByUser(item); 
			for(int j=0;j < optionIds.size(); j++) {
				Map<String, Object> option = optionIds.get(j);
				int updateQuantity= userOrderMapper.updateQuantityByUser(option);
				
				if(updateQuantity != 1) {
					inventories = false;
				}
			}
		}
		
		if(inventories) {
			System.out.println("inventories 테이블 데이터 저장완료!");
		} else {
			result = 0;
			System.out.println("inventories 테이블 데이터 저장실패");
		}
		
		// 7. 회원 카트ID의 체크된 항목 삭제 처리
		boolean cartItemDelete = true;
		for(int i = 0; i < items.size(); i++) {
			Map<String, Object> item = items.get(i);
			
			int deleteCartItem = userOrderMapper.deleteCartItemByUser(item);
			
			if(deleteCartItem != 1) {
				cartItemDelete = false;
			}
		}
		
		if(cartItemDelete) {
			System.out.println("cartItemDelete 테이블 데이터 저장완료!");
		} else {
			result = 0;
			System.out.println("cartItemDelete 테이블 데이터 저장실패");
		}
		
		// 8. 바로가기 주문이라면 임시 카트 삭제하기
		if(order.get("tempId") != null) {
			int deleteCart = userOrderMapper.deleteCartByUser(order);
			
			if(deleteCart == 1) {
				System.out.println("임시카트 삭제 완료!");
			}
		}
		
		return result;
	}

	public HashMap<String, Object> selectSuccessOrderByUser(String orderNumber) {
		// TODO Auto-generated method stub
		return userOrderMapper.selectSuccessOrderByUser(orderNumber);
	}

	// 주문내역페이지 조회
	public List<HashMap<String, Object>> orderHistory(String memberId) {
	    return userOrderMapper.selectOrderHistoryByUser(memberId);
	}

}
