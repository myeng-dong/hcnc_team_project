package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserProductMapper")
public interface UserProductMapper {

	List<HashMap<String, Object>> selectProductByUser(Map<String, Object> param);

	int insertCartItemByUser(Map<String, Object> param);
	
	List<HashMap<String, Object>> slectOptionInfoByUser(Map<String, Object> param);

	int insertQnAByUser(Map<String, Object> param);

	List<HashMap<String, Object>> selectProductQnAListByUser(Map<String, Object> param);

}
