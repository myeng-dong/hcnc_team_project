package user.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserProductMapper")
public interface UserProductMapper {

	List<HashMap<String, Object>> selectProductByUser(Long productId);

	int insertCartItemByUser(Map<String, Object> param);
	
	List<HashMap<String, Object>> slectOptionInfoByUser(Long productId);

	int insertQnAByUser(Map<String, Object> param);
	
	List<HashMap<String, Object>> selectProductQnAListByUser(Map<String, Object> param);

	HashMap<String, Object> selectQnADetailByUser(Map<String, Object> param);

	int updateProductQnAByUser(Map<String, Object> param);

	int deleteQnAByUser(Map<String, Object> param);

	HashMap<String, Object> selectProductDescriptionByUser(Map<String, Object> param);

}
