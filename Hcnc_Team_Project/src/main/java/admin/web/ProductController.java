package admin.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.ProductService;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;
	
	
	
	
	//상품목록리스트조회
	@RequestMapping(value="/selectProductListByAdmin.do")
	public NexacroResult selectProductListByAdmin(
			 @ParamDataSet(name="ds_in_proList", required=false) List<Map<String,Object>> in) {
		NexacroResult rs = new NexacroResult();
		
		Map<String, Object> p = (in != null && !in.isEmpty()) ? in.get(0) : new HashMap<>();
		List<Map<String, Object>> proList = productService.selectProductListByAdmin(p);
		
		rs.addDataSet("ds_out_proList", proList); 
		return rs;
	}
	
	
	
	
	
	
	
	
	
}
