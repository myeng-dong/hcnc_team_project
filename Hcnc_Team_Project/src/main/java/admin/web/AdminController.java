package admin.web;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

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
		System.out.println(selectGradeList);
		rs.addDataSet("ds_list", selectGradeList);
		return rs;
	}
	

}
