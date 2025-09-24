package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.ProductMapper;

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    
    //상품목록 조회
    public List<Map<String,Object>> selectProductListByAdmin(Map<String,Object> p) {
        return productMapper.selectProductListByAdmin(p);
    }

    public void insertProduct(Map<String,Object> p) {
        productMapper.insertProduct(p);
    }



    public void insertInventory(Map<String,Object> p) {
        productMapper.insertInventory(p);
    }

    public void insertProductImage(Map<String,Object> fileInfo) {
        productMapper.insertProductImage(fileInfo);
    }

    public void updateProductImageMapping(Map<String,Object> p) {
        productMapper.updateProductImageMapping(p);
    }

    public void setMainImage(Map<String,Object> p) {
        productMapper.setMainImage(p);
    }

	public List<Map<String, Object>> selectMainCategoryComboByAdmin() {
		return productMapper.selectMainCategoryComboByAdmin();
	}

	public List<Map<String, Object>> selectSubCategoryComboByAdmin(int mainCateId) {
		return productMapper.selectSubCategoryComboByAdmin(mainCateId);
	}
	
	
	
	
	
	// ---- 카테고리 ----
	public List<Map<String,Object>> selectMainCategoryByAdmin() {
	    return productMapper.selectMainCategoryByAdmin();
	}
	public List<Map<String,Object>> selectSubCategoryByAdmin() {
	    return productMapper.selectSubCategoryByAdmin();
	}
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

    public void updateOptionVisibleByAdmin(Map<String,Object> p) {
        productMapper.updateOptionVisibleByAdmin(p);
    }

	public void updateProductVisibleByAdmin(Map<String, Object> p) {
		productMapper.updateProductVisibleByAdmin(p);
	}
	
    public void insertOption(Map<String,Object> p) {
        productMapper.insertOption(p);
    }
    
	public void updateOption(Map<String, Object> option) {
		productMapper.updateOption(option);
	}

	public Map<String, Object> selectOptionOneByAdmin(Long optionId) {
		return productMapper.selectOptionOneByAdmin(optionId);
	}

	public List<Map<String, Object>> selectProductListOptionByAdmin(Map<String, Object> cond) {
		return productMapper.selectProductListOptionByAdmin(cond);
	}


	
	
}
