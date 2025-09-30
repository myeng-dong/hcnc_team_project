package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import user.mapper.UserOrderMapper;

@Service
@Transactional(readOnly = true)
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

	public List<HashMap<String, Object>> selectOrderMeberInfoByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userOrderMapper.selectOrderMeberInfoByUser(param);
	}

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
}
