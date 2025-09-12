package admin.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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

	// 관리자 로그인
	// By GJ.09.10
	@RequestMapping(value = "adminLoginCheckByAdmin.do")
	public NexacroResult adminCheckLogin(HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_isLogin", new HashMap<String, Object>());
		System.out.println("ㅎㅇ");
		try {
			HttpSession session = request.getSession(false);
			if (session == null) {
				return result;
			}
			Map<String, Object> isLogin = (Map<String, Object>) session.getAttribute("adminInfo");
			if (isLogin == null) {
				// 로그인 정보 없음
				return result;
			}
			result.addDataSet("ds_isLogin", isLogin);
			return result;

		} catch (Exception e) {
			System.out.println(e);
			return result;
		}
	}

	@RequestMapping(value = "/adminLoginByAdmin.do")
	public NexacroResult adminLogin(@ParamDataSet(name = "ds_admin", required = false) Map<String, Object> param,
			HttpServletRequest request, HttpServletResponse response) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println("로그인시도");

		Map<String, Object> adminInfo = memberService.adminLogin(param);

		
		try {

			if (adminInfo != null) {
				if ("O".equals(adminInfo.get("PASSWORD").toString())) {
					HttpSession session = request.getSession();

					System.out.println(session.getAttribute("adminInfo"));
					session.setAttribute("adminInfo", adminInfo);

//					String memberId = String.valueOf(adminInfo.get("MEMBER_ID"));
//					Cookie idCookie = new Cookie("ADMIN_ID", memberId);
//					idCookie.setPath("/");
//					idCookie.setMaxAge(3600); // 1시간 유지
//					response.addCookie(idCookie); // 클라이언트로 쿠키 내려보내기

//					System.out.println("ADMIN_ID 쿠키 발급: " + memberId);

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

	// 관리자 로그아웃
	// By GJ.09.11
	@RequestMapping(value = "/adminLogoutByAdmin.do")
	public NexacroResult adminLogout(HttpServletRequest request) {
		NexacroResult result = new NexacroResult();
		// request.getSession(false) 인자를 false로 전달하면 세션이 없어도 새로 생성하지 않는다.
		try {
			HttpSession session = request.getSession(false);
			if (session != null) {
				// 세션 끊기
				// session.removeAttribute("adminInfo");
				Thread.sleep(1000);
				session.invalidate();
			}

			System.out.println("ㅂ2");

			return result;
		} catch (Exception e) {
			System.out.println(e);
		}
		return result;
	}

}
