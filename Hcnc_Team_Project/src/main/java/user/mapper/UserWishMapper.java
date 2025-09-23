package user.mapper;

import java.util.HashMap;
import java.util.List;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserWishMapper")
public interface UserWishMapper {

	List<HashMap<String, Object>> selectWishlistByUser(HashMap<String, Object> param);

	int addToCart(HashMap<String, Object> param);

	List<HashMap<String, Object>> getCategoryCount(HashMap<String, Object> param);

}
