package user.mapper;

import java.util.HashMap;
import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserCartMapper")
public interface UserCartMapper {
	public List<HashMap<String, Object>> selectCartListByUser(HashMap<String, Object> param);

	public int updateQuantity(HashMap<String, Object> param);

	public int deleteProduct(HashMap<String, Object> param);

	public int updateChkBox(HashMap<String, Object> param);

	public HashMap<String, Object> selectedTotalPriceByUser(HashMap<String, Object> param);

	public int updateOptionByUser(HashMap<String, Object> param);

	public int updateCartItemPriceByUser(HashMap<String, Object> param);
	
	// 위시리스트에 상품 추가
	public int insertToWishlist(HashMap<String, Object> param);

	// 위시리스트에서 상품 제거
	public int deleteFromWishlist(HashMap<String, Object> param);

	// 위시리스트 상품 조회
	public HashMap<String, Object> selectWishlistItem(HashMap<String, Object> param);
	
	// 회원별 WISH 조회
	public HashMap<String, Object> selectWishByMemberId(HashMap<String, Object> param);

	// WISH 테이블에 회원 위시리스트 생성
	public int insertWish(HashMap<String, Object> param);
}
