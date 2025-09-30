package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserOrderMapper")
public interface UserOrderMapper {

	List<HashMap<String, Object>> selectOrderRequestItemListByUser(Long cartId);

	HashMap<String, Object> selectItemCntByUser(Long cartId);

	List<HashMap<String, Object>> selectOrderMeberInfoByUser(Map<String, Object> param);

	HashMap<String, Object> selectOrderMemberBasicInfoByUser(Map<String, Object> param);

	Integer selectMemberPointByUser(Map<String, Object> param);

	List<HashMap<String, Object>> selectMemberCouponListByUser(Map<String, Object> param);

	List<HashMap<String, Object>> selectMemberAddressListByUser(Map<String, Object> param);

}
