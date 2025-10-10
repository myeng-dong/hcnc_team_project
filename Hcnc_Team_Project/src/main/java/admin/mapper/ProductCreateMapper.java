package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("ProductCreateMapper")
public interface ProductCreateMapper {
    List<Map<String,Object>> selectProductListByAdmin(Map<String,Object> p);
    int insertProductCreateByAdmin(Map<String,Object> p);
    Map<String, Object> selectTargetProductByAdmin(String productId);
    int insertCreateInventoryByAdmin(Map<String,Object> p);
    int insertProductImageByAdmin(Map<String,Object> p);
    List<Map<String,Object>> selectProductImageListByAdmin(String productId);
    int deleteProductImageListByAdmin(String fileUrl);
    int updateProductCreateByAdmin(Map<String,Object> p);
	List<Map<String, Object>> selectMainCategoryComboByAdmin();
	List<Map<String, Object>> selectSubCategoryComboByAdmin(int mainCateId);
	
	
	
	// ---- 카테고리 ----
	List<Map<String,Object>> selectProductCategoryListByAdmin();
	void insertCategoryByAdmin(Map<String,Object> p);
	void updateCategoryByAdmin(Map<String,Object> p);
	void deleteCategoryByAdmin(Map<String,Object> p);
	
	
	
	// ----- 옵션 -----
	List<Map<String, Object>> selectOptionByAdmin(Map<String, Object> p);
	int updateProductImageByAdmin(Map<String,Object> p);
	void updateProductVisibleByAdmin(Map<String, Object> p);
	void updateOption(Map<String, Object> option);
	Map<String, Object> selectOptionOneByAdmin(Long optionId);



	
}