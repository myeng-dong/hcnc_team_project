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
import admin.util.PasswordUtil;

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

		// 로그인도 암호하 과정과 똑같이 비밀번호 param에서 꺼내서 암호화로 덮어쓰기
		String password = String.valueOf(param.get("PASSWORD"));
		String crypto = PasswordUtil.encryptSHA256(password);

		param.put("PASSWORD", crypto);

		Map<String, Object> adminInfo = memberService.adminLogin(param);

		try {

			if (adminInfo != null) {
				if ("O".equals(adminInfo.get("PASSWORD").toString())) {
					HttpSession session = request.getSession();

					System.out.println(session.getAttribute("adminInfo"));
					session.setAttribute("adminInfo", adminInfo);

					// 쿠키에 member_id를 넣기 위해 String 변환
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
			result.setErrorMsg("로그인 실패");
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
	// By.PJ 09.15
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
			result.setErrorMsg("회원조회 중 오류");
		}
		return result;
	};

	// 회원등급 조회
	// BY.PJ 09.15, 09.16
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

	// 관리자 등록 및 암호화
	// BY.PJ 09.16
	@RequestMapping(value = "/insertMemberByAdmin.do")
	public NexacroResult insertMember(@ParamDataSet(name = "ds_member", required = false) Map<String, Object> param) {
		// 1.넥사크로에서 전송된 DataSet을 Map으로 받음
		// 1-1. 받아오는 데이터 셋과 이름이 일치해야한다.
		// 1-2. Map<String, Object> param 이렇게 받아올게요 라는 뜻
		NexacroResult result = new NexacroResult();

		// 비밀번호 param에서 꺼내서 암호화로 덮어쓰기
		String password = String.valueOf(param.get("PASSWORD"));
		String crypto = PasswordUtil.encryptSHA256(password);

		param.put("PASSWORD", crypto);

		try {

			// 아아디, 비밀번호, 휴대전화, 이메일 중복체크
			int duplicate = memberService.isDuplicated(param);

			if (duplicate > 0) {
				result.setErrorCode(-1);
				result.setErrorMsg("중복된 아이디, 이메일 또는 전화번호가 있습니다");

				return result;
			}

			Map<String, Object> dsInsCnt = new HashMap<>();

			int inserted = memberService.insertMember(param);

			dsInsCnt.put("INSERTED", inserted);
			result.addDataSet("ds_insCnt", dsInsCnt);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("등록실패");
		}
		return result;

	}

	// 회원 목록 상세 보기
	@RequestMapping(value = "/selectMemberDetailByAdmin.do")
	public NexacroResult selectMemberDetail(@ParamVariable(name = "memberId", required = false) String memberId) {
	
		NexacroResult result = new NexacroResult();

		try {

			Map<String, Object> memberDetail = memberService.selectMemberDetail(memberId);

			result.addDataSet("ds_memberDt", memberDetail);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("상세조회 중 오류발생");
		}
		return result;
	};

}
