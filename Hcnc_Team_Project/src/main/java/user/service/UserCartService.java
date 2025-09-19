package user.service;

import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import user.mapper.UserCartMapper;


@Service
@Transactional
public class UserCartService {
	
	@Autowired
	private UserCartMapper cartMapper;
	
	public List<HashMap<String, Object>> selectCartListByUser(HashMap<String, Object> param){
		return cartMapper.selectCartListByUser(param);
	}

	public int updateQuantity(HashMap<String, Object> param) {
		return cartMapper.updateQuantity(param);
		
	}

	public int deleteProduct(HashMap<String, Object> param) {
		return cartMapper.deleteProduct(param);
		
	}

	public int updateChkBox(HashMap<String, Object> param) {
		return cartMapper.updateChkBox(param);
	}

	public HashMap<String, Object> selectedTotalPriceByUser(HashMap<String, Object> param) {
		return cartMapper.selectedTotalPriceByUser(param);
	}

	public HashMap<String, Object> updateOptionByUser(HashMap<String, Object> param) throws Exception {
	    HashMap<String, Object> result = new HashMap<>();
	    
	    try {
	        int updateResult = cartMapper.updateOptionByUser(param);
	        
	        if(updateResult > 0) {
	            // 성공 시 새로운 가격 정보들 조회
	        	cartMapper.updateCartItemPriceByUser(param);
            
	            result.put("success", true);
           
	        } else {
	            result.put("success", false);
	            result.put("message", "옵션 변경 실패");
	        }
	        
	    } catch(DuplicateKeyException e) {
	        result.put("success", false);
	        result.put("message", "이미 동일한 옵션이 장바구니에 있습니다.");
	        result.put("errorCode", "DUPLICATE");
	    }
	    
	    return result;
	}
}