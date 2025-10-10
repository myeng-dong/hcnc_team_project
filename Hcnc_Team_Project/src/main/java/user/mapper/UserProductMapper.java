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

	List<Map<String, Object>> selectTypeProductListByUser();//메인에서 NEW BEST불러가는용 

	List<Map<String, Object>> selectHotProductListByUser();//메인에서 HOT불러가는용 임시

	HashMap<String, Object> selectProductDescriptionByUser(Map<String, Object> param);

	int selectCategoryProductsCount(Map<String, Object> params);

	// 신상 
    List<Map<String, Object>> selectNewProListByUser(Map<String, Object> params);
    int selectNewProCountByUser(Map<String, Object> params);
    
    // 추천 
    List<Map<String, Object>> selectRecommendProListByUser(Map<String, Object> params);
    int selectRecommendProCountByUser(Map<String, Object> params);
    
    // 인기
    List<Map<String, Object>> selectHotProListByUser(Map<String, Object> params);
    int selectHotProCountByUser(Map<String, Object> params);
    
    // 카테고리별
    List<Map<String, Object>> selectCategoryProductsListByUser(Map<String, Object> params);
    int selectCategoryProductsCountByUser(Map<String, Object> params);



}
