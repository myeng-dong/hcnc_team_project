package admin.mapper;


import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("PromotionMapper")
public interface PromotionMapper {

	List<Map<String, Object>> selectNewMemListByAdmin(Map<String, Object> param);
	//리스트
	List<Map<String, Object>> selectPromoListByAdmin(Map<String, Object> param);
	//뷰
	Map<String, Object> selectPromoViewByAdmin(String promotionId);


	int insertPromoBaseByAdmin(Map<String, Object> param);
	int insertPromoDiscountByAdmin(Map<String, Object> param);
	int insertPromoTargetByAdmin(Map<String, Object> param);
	int insertPromoCouponByAdmin(Map<String, Object> param);
	
	int updatePromoBaseByAdmin(Map<String, Object> param);
	int updatePromoDiscountByAdmin(Map<String, Object> param);
	int updatePromoTargetByAdmin(Map<String, Object> param);
	int updatePromoCouponByAdmin(Map<String, Object> param);

	

	
}
