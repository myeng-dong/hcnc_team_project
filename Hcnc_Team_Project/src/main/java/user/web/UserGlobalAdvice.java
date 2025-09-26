package user.web;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import user.service.UserCategoryService;

//공용일때 advice
@ControllerAdvice
public class UserGlobalAdvice {

    @Autowired
    private UserCategoryService userCategoryService;

    @ModelAttribute("categories") 
    public List<Map<String, Object>> getCategoryList() {

        List<Map<String, Object>> mainCategories = userCategoryService.selectMainCategoryListByUser();
        
        for (Map<String, Object> main : mainCategories) {
        	int mainCateId = ((Number) main.get("MAIN_CATE_ID")).intValue();
            List<Map<String, Object>> subCategories = userCategoryService.selectSubCategoryListByUser(mainCateId);

            if (subCategories == null) {
                subCategories = new ArrayList<>();
            }
            main.put("subCategories", subCategories);
        }
  
        return mainCategories;
    }
}