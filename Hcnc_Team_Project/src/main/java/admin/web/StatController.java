package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.StatService;


@Controller
public class StatController {
	
	@Autowired
	private StatService statservice;
	
	//통계 조회
	@RequestMapping(value="selectStatByAdmin.do")
	public NexacroResult selectStatByAdmin( 
			@ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> StatList = statservice.selectStatByAdmin(dsSearch);
		
		result.addDataSet("ds_stat", StatList);

		return result;
	}
	
	// 통계 상세 조회
	@RequestMapping(value="selectStatDetailByAdmin.do")
	public NexacroResult selectStatDetailByAdmin(
			@ParamDataSet(name="ds_detailsearch", required=false) Map<String, Object> dsDetailSearch) {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> statDetailList = statservice.selectStatDetailByAdmin(dsDetailSearch);
		
		result.addDataSet("ds_detailstat", statDetailList);
		
		return result;	
	}
	
	
	
}
