package admin.web;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest; // javax 유지

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.ProductCreateService;

@Controller
public class ProductCreateController {
	
	@Autowired
	ProductCreateService productCreateService;
	
	@RequestMapping(value="/selectProductCategoryListByAdmin.do", produces = "application/json; charset=utf-8")
    public ResponseEntity<String> getCategories() throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Map<String,Object>> categorys = productCreateService.selectProductCategoryListByAdmin();
	   	System.out.println(objectMapper.writeValueAsString(categorys));
        String jsonString = objectMapper.writeValueAsString(categorys);
        
        return ResponseEntity.ok(jsonString);
    }
	/*
	 * @RequestMapping("/selectProductCategoryListByAdmin.do") public NexacroResult
	 * selectProductCategoryListByAdmin() { NexacroResult result = new
	 * NexacroResult(); ObjectMapper objectMapper = new ObjectMapper(); try {
	 * List<Map<String,Object>> categorys =
	 * productCreateService.selectProductCategoryListByAdmin();
	 * System.out.println(objectMapper.writeValueAsString(categorys));
	 * result.addDataSet("ds_cate_main",categorys); } catch (Exception e) {
	 * 
	 * }
	 * 
	 * 
	 * result.add("ds_cate_sub",categorys); return result; }
	 */
	
}
