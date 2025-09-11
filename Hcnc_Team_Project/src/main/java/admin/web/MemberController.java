package admin.web;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.MemberService;

@Controller
public class MemberController {
	
	@Autowired
	private MemberService memberService;

	    //관리자 로그인
		//By gj 09.10
		@RequestMapping(value = "adminLoginByAdmin.do")
		public NexacroResult adminLogin(@ParamDataSet(name = "ds_admin", required = false) Map<String, Object> param,
				HttpServletRequest request) {

			NexacroResult result = new NexacroResult();

			Map<String, Object> adminInfo = memberService.adminLogin(param);

			try {

				if (adminInfo != null) {
					if ("O".equals(adminInfo.get("PASSWORD").toString())) {
						HttpSession session = request.getSession();
						session.setAttribute("adminInfo", adminInfo);
						result.addDataSet("ds_loginChk", adminInfo);
					}
				}
			} catch (Exception e) {
				System.out.println(e);
				result.setErrorCode(-1);
				result.setErrorMsg("catch 오류 >>>");
			}
			return result;
		};
		
		//관리자 로그아웃 
}
