package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("ProductMapper")
public interface ProductMapper {
    List<Map<String,Object>> selectProductListByAdmin(Map<String,Object> p);
    void insertProduct(Map<String,Object> p);
    void insertOption(Map<String,Object> p);
    void insertInventory(Map<String,Object> p);
    void insertProductImage(Map<String,Object> p);
    void updateProductImageMapping(Map<String,Object> p);
    void setMainImage(Map<String,Object> p);
	List<Map<String, Object>> selectMainCategoryComboByAdmin();
	List<Map<String, Object>> selectSubCategoryComboByAdmin(int mainCateId);
	
	
	
	// ---- 카테고리 ----
	List<Map<String,Object>> selectMainCategoryByAdmin();
	List<Map<String,Object>> selectSubCategoryByAdmin();
	void insertCategoryByAdmin(Map<String,Object> p);
	void updateCategoryByAdmin(Map<String,Object> p);
	void deleteCategoryByAdmin(Map<String,Object> p);
	
	
	
	// ----- 옵션 -----
	List<Map<String, Object>> selectOptionByAdmin(Map<String, Object> p);
	void updateOptionVisibleByAdmin(Map<String,Object> p);
	void updateProductVisibleByAdmin(Map<String, Object> p);
	void updateOption(Map<String, Object> option);
	Map<String, Object> selectOptionOneByAdmin(Long optionId);



	
}
