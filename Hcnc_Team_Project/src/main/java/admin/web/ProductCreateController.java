package admin.web;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest; // javax 유지

import org.springframework.beans.factory.annotation.Autowired;
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
	
	 @RequestMapping("/selectProductCategoryListByAdmin.do")
	 public NexacroResult selectProductCategoryListByAdmin() {
	     NexacroResult result = new NexacroResult();
	     List<Map<String,Object>> categorys = productCreateService.selectProductCategoryListByAdmin();
	     System.out.println(categorys);
	     result.addDataSet("ds_cate_main",categorys);
	     result.addDataSet("ds_cate_sub",categorys);
	     return result;
	 }
	
}
