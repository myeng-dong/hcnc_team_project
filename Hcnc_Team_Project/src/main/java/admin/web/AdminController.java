package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.AdminService;

@Controller
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value="/selectGradeListByAdmin.do")
	public NexacroResult selectGradeListByAdmin(
	/*
	 * @ParamDataSet(name="ds_data", required = false) Map<String, Object> ds_data
	 */
			) {
		NexacroResult rs = new NexacroResult();
		List<Map<String, Object>> selectGradeList = adminService.selectGradeListByAdmin();
		System.out.println("admin good");
		System.out.println(selectGradeList);
		rs.addDataSet("ds_list", selectGradeList);
		return rs;
	}
	

}
