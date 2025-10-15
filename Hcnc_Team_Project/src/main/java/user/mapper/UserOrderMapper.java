package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserOrderMapper")
public interface UserOrderMapper {

	List<HashMap<String, Object>> selectOrderRequestItemListByUser(Long cartId);

	HashMap<String, Object> selectItemCntByUser(Long cartId);

	HashMap<String, Object> selectOrderMemberBasicInfoByUser(Map<String, Object> param);

	Integer selectMemberPointByUser(Map<String, Object> param);

	List<HashMap<String, Object>> selectMemberCouponListByUser(Map<String, Object> param);

	List<HashMap<String, Object>> selectMemberAddressListByUser(Map<String, Object> param);

	int orderDataSaveByUser(Map<String, Object> order);

	Long getOrderIdByUser(Map<String, Object> order);

	int insertOrderItemsByUser(Map<String, Object> item);

	int insertPointByUser(Map<String, Object> order);

	int updateCouponByUser(Map<String, Object> order);

}
