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



    public int insertCreateInventoryByAdmin(Map<String,Object> p) {
        return productMapper.insertCreateInventoryByAdmin(p);
    }

    public int insertProductImageByAdmin(Map<String,Object> fileInfo) {
        return productMapper.insertProductImageByAdmin(fileInfo);
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


	
	
}

