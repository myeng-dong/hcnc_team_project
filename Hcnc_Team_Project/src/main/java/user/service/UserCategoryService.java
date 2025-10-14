package user.service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import user.mapper.UserCategoryMapper;

@Service
public class UserCategoryService {

	@Autowired
    private UserCategoryMapper userCategoryMapper;

	@Cacheable("categories")
    public List<Map<String, Object>> selectMainCategoryListByUser() {
        List<Map<String, Object>> mainCategories = userCategoryMapper.selectMainCategoryListByUser();      
        return mainCategories;
    }

	@Cacheable(value = "subCategories", key = "#mainCateId")
	public List<Map<String, Object>> selectSubCategoryListByUser(int mainCateId) {
		List<Map<String, Object>> subCategories = userCategoryMapper.selectSubCategoryListByUser(mainCateId);      
		return subCategories;
	}

	 
}
