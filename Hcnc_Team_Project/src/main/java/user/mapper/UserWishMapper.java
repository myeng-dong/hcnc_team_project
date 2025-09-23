package user.mapper;

import java.util.HashMap;
import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserWishMapper")
public interface UserWishMapper {


	// 위시리스트 조회
	List<HashMap<String, Object>> selectWishlistByUser(HashMap<String, Object> param);

	// 카테고리별 개수 조회
	List<HashMap<String, Object>> getCategoryCount(HashMap<String, Object> param);

	// 장바구니 아이템 중복 확인
	HashMap<String, Object> checkCartItem(HashMap<String, Object> param);
	
	// 사용자 장바구니 생성
	int createUserCart(HashMap<String, Object> param);
	
	// 장바구니 추가
	int addToCart(HashMap<String, Object> param);
	
	// 장바구니 수량 업데이트
	int updateCartQuantity(HashMap<String, Object> param);

}
