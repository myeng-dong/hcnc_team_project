package user.service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserCategoryMapper;

@Service
public class UserCategoryService {

	@Autowired
    private UserCategoryMapper userCategoryMapper;

    public List<Map<String, Object>> selectMainCategoryListByUser() {
        List<Map<String, Object>> mainCategories = userCategoryMapper.selectMainCategoryListByUser();      
        return mainCategories;
    }

	public List<Map<String, Object>> selectSubCategoryListByUser(int mainCateId) {
		List<Map<String, Object>> subCategories = userCategoryMapper.selectSubCategoryListByUser(mainCateId);      
		return subCategories;
	}

	 
}
