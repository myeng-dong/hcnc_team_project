package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserProductMapper")
public interface UserProductMapper {

	List<HashMap<String, Object>> selectProductByUser(Map<String, Object> param);

	List<Map<String, Object>> selectMNProductListByUser();//메인에서 NEW BEST불러가는용 

	List<Map<String, Object>> selectHotProductListByUser();//메인에서 HOT불러가는용 임시


}
