package user.service;

import java.util.HashMap;
import java.util.List;


import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserWishMapper;

@Service
public class UserWishService {

	@Autowired
	private UserWishMapper userWishMapper;

	
	// 위시리스트 조회

    public List<HashMap<String, Object>> selectWishlistByUser(HashMap<String, Object> param) {
        return userWishMapper.selectWishlistByUser(param);
    }
    

    // 카테고리별 개수 조회

    public List<HashMap<String, Object>> getCategoryCount(HashMap<String, Object> param) {
        return userWishMapper.getCategoryCount(param);
    }
    


    // 장바구니 추가 (증복체크포함)
    @Transactional
    public int addToCart(HashMap<String, Object> param) {
        try {
            // 1. 먼저 사용자 장바구니 생성 (없으면)
            userWishMapper.createUserCart(param);
            
            // 2. 이미 장바구니에 있는지 확인
            HashMap<String, Object> existingItem = userWishMapper.checkCartItem(param);
            
            if (existingItem != null) {
                // 3. 이미 있으면 수량 증가
                Object existingQtyObj = existingItem.get("QUANTITY");
                int existingQty = 0;
                if (existingQtyObj != null) {
                    if (existingQtyObj instanceof Number) {
                        existingQty = ((Number) existingQtyObj).intValue();
                    } else if (existingQtyObj instanceof String) {
                        existingQty = Integer.parseInt((String) existingQtyObj);
                    }
                }
                
                Object addQtyObj = param.get("quantity");
                int addQty = 1;
                if (addQtyObj != null) {
                    if (addQtyObj instanceof Number) {
                        addQty = ((Number) addQtyObj).intValue();
                    } else if (addQtyObj instanceof String) {
                        addQty = Integer.parseInt((String) addQtyObj);
                    }
                }
                
                // 기존 수량 + 추가 수량
                param.put("quantity", existingQty + addQty);
                return userWishMapper.updateCartQuantity(param);
                
            } else {
                // 4. 없으면 새로 추가
                return userWishMapper.addToCart(param);
            }
            
        } catch (Exception e) {
            System.out.println("장바구니 추가 중 오류: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("장바구니 추가 중 오류 발생: " + e.getMessage(), e);
        }
    }
    
    // 장바구니 아이템 존재 확인
    public HashMap<String, Object> checkCartItem(HashMap<String, Object> param) {
        return userWishMapper.checkCartItem(param);

    }
    
    // 장바구니 수량 업데이트
    @Transactional
    public int updateCartQuantity(HashMap<String, Object> param) {
        return userWishMapper.updateCartQuantity(param);
    }

}
