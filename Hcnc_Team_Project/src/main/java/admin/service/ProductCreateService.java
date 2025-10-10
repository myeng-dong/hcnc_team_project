package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.ProductCreateMapper;

@Service
public class ProductCreateService {

    @Autowired
    private ProductCreateMapper productMapper;

    
    //상품목록 조회
    public List<Map<String,Object>> selectProductListByAdmin(Map<String,Object> p) {
        return productMapper.selectProductListByAdmin(p);
    }

    public int insertProductCreateByAdmin(Map<String,Object> p) {
        return productMapper.insertProductCreateByAdmin(p);
    }

    public Map<String,Object> selectTargetProductByAdmin(String productId){
    	return productMapper.selectTargetProductByAdmin(productId);
    }
    
    public List<Map<String,Object>> selectProductImageListByAdmin(String productId){
    	return productMapper.selectProductImageListByAdmin(productId);
    }

    public int insertCreateInventoryByAdmin(Map<String,Object> p) {
        return productMapper.insertCreateInventoryByAdmin(p);
    }

    public int insertProductImageByAdmin(Map<String,Object> fileInfo) {
        return productMapper.insertProductImageByAdmin(fileInfo);
    }

    public int updateProductCreateByAdmin(Map<String,Object> p) {
        return productMapper.updateProductCreateByAdmin(p);
    }
    
    public int deleteProductImageListByAdmin(String fileUrl) {
        return productMapper.deleteProductImageListByAdmin(fileUrl);
    }

	public List<Map<String, Object>> selectMainCategoryComboByAdmin() {
		return productMapper.selectMainCategoryComboByAdmin();
	}

	public List<Map<String, Object>> selectSubCategoryComboByAdmin(int mainCateId) {
		return productMapper.selectSubCategoryComboByAdmin(mainCateId);
	}
	
	
	
	
	
	// ---- 카테고리 ----
	public void insertCategoryByAdmin(Map<String,Object> p) {
	    productMapper.insertCategoryByAdmin(p);
	}
	public void updateCategoryByAdmin(Map<String,Object> p) {
	    productMapper.updateCategoryByAdmin(p);
	}
	public void deleteCategoryByAdmin(Map<String,Object> p) {
	    productMapper.deleteCategoryByAdmin(p);
	}


	
	// ------ 옵션 -------

    public List<Map<String,Object>> selectOptionByAdmin(Map<String,Object> p) {
        return productMapper.selectOptionByAdmin(p);
    }
    
    public List<Map<String,Object>> selectProductCategoryListByAdmin() {
        return productMapper.selectProductCategoryListByAdmin();
    }

    public int updateProductImageByAdmin(Map<String,Object> p) {
        return productMapper.updateProductImageByAdmin(p);
    }

	public void updateProductVisibleByAdmin(Map<String, Object> p) {
		productMapper.updateProductVisibleByAdmin(p);
	}
	
	public void updateOption(Map<String, Object> option) {
		productMapper.updateOption(option);
	}

	public Map<String, Object> selectOptionOneByAdmin(Long optionId) {
		return productMapper.selectOptionOneByAdmin(optionId);
	}


	
	
}

