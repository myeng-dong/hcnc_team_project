package admin.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.MemberService;

@Controller
public class MemberController {

	@Autowired
	private MemberService memberService;

	// 관리자 로그인
	// By GJ.09.10
	@RequestMapping(value = "/adminLoginCheckByAdmin.do")
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
			} else {
				// 새로고침해서 다시 닉네임 띄우게 자바단에서 해결
				result.addDataSet("ds_loginChk", isLogin);
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

		Map<String, Object> adminInfo = memberService.adminLogin(param);

		try {

			if (adminInfo != null) {
				if ("O".equals(adminInfo.get("PASSWORD").toString())) {
					HttpSession session = request.getSession();

					System.out.println(session.getAttribute("adminInfo"));
					session.setAttribute("adminInfo", adminInfo);

					String memberId = String.valueOf(adminInfo.get("MEMBER_ID"));

					Cookie idCookie = new Cookie("ADMIN_ID", memberId);

					idCookie.setPath("/");
					idCookie.setMaxAge(3600); // 1시간 유지

					// 쿠키 생성하기!!
					response.addCookie(idCookie); // 클라이언트로 쿠키 내려보내기

					System.out.println("ADMIN_ID 쿠키 발급: " + memberId);

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

	// 관리자 로그아웃 (세션 + 쿠키 모두 정리)
	// By GJ.09.11
	@RequestMapping(value = "/adminLogoutByAdmin.do")
	public NexacroResult adminLogout(HttpServletRequest request, HttpServletResponse response) {
		NexacroResult result = new NexacroResult();

		try {
			// 세션 정리
			HttpSession session = request.getSession(false);
			if (session != null) {
				// 세션 무효화
				session.invalidate();
			}

			// 쿠키 정리 (memberId 쿠키 만료)
			expireCookie(response, "memberId");

			System.out.println("로그아웃 완료");

			return result;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	// 쿠키 만료 메소드
	private void expireCookie(HttpServletResponse response, String cookieName) {
		Cookie cookie = new Cookie(cookieName, null);
		cookie.setPath("/"); // 경로 지정 (중요)
		cookie.setMaxAge(0); // 즉시 만료
		response.addCookie(cookie);
	}

	// 회원 조회
	@RequestMapping(value = "/selectMemberListByAdmin.do")
	public NexacroResult selectMemberList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {

			// 조회 결과를 list에 담고....
			List<Map<String, Object>> selectList = memberService.selectMemberList(param);

			// 넥사크로에 다시 보낸다!
			result.addDataSet("ds_list", selectList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("catch 오류 >>>");
		}
		return result;
	};

	
	// 회원등급 조회
	@RequestMapping(value = "/selectMemberGradeListByAdmin.do")
	public NexacroResult selectMemberGradeList() {

		NexacroResult result = new NexacroResult();

		try {
			// 회원등급 전체 조회 (param 필요 없음)
			List<Map<String, Object>> gradeList = memberService.selectMemberGradeList();

			// ds_grade라는 이름으로 넥사크로에 전달
			result.addDataSet("ds_grade", gradeList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("회원등급 조회 실패 >>> " + e.getMessage());
		}
		return result;
	}

}
