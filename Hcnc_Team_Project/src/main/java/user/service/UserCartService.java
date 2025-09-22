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

	// 위시리스트 토글 (추가/제거)
	public HashMap<String, Object> toggleWishlist(HashMap<String, Object> param) throws Exception {
	    HashMap<String, Object> result = new HashMap<>();
	    
	    try {
	        boolean isCurrentlyInWishlist = checkWishlistStatus(param);
	        
	        if (isCurrentlyInWishlist) {
	            // 제거
	            cartMapper.deleteFromWishlist(param);
	            result.put("isInWishlist", false);
	        } else {
	            // 추가 - 2단계로 처리
	            // 1. WISH 테이블에 위시리스트 있는지 확인하고 없으면 생성
	            HashMap<String, Object> wishInfo = cartMapper.selectWishByMemberId(param);
	            if (wishInfo == null) {
	                cartMapper.insertWish(param); // WISH 테이블에 레코드 생성
	            }
	            // 2. WISH_ITEMS에 상품 추가
	            cartMapper.insertToWishlist(param);
	            result.put("isInWishlist", true);
	        }
	        
	        result.put("success", true);
	        
	    } catch (Exception e) {
	        result.put("success", false);
	        result.put("message", "처리 중 오류 발생: " + e.getMessage());
	    }
	    
	    return result;
	}

	// 위시리스트 상태 확인
	public boolean checkWishlistStatus(HashMap<String, Object> param) throws Exception {
	    HashMap<String, Object> wishlistItem = cartMapper.selectWishlistItem(param);
	    return wishlistItem != null;
	}
}