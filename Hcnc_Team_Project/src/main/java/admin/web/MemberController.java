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
			expireCookie(response, "ADMIN_ID");

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

			// 1. 먼저 전체 회원 등급 자동 업데이트 실행
	        memberService.updateAllMemberGradeAuto();
	        
	        // 2.회원 목록 조회(등급도 자동)
	        List<Map<String, Object>> selectList = memberService.selectMemberList(param);
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
			
			//회원등급 자동 업뎃
			 memberService.updateAllMemberGradeAuto();
			
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
	// By.PJ 09.17
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

	// 문자열을 yyyyMMddHHmmss (14자리) 로 맞춰주는 헬퍼
	// 넥사크로에서 캘린더값읆 문자열로 받아오는데 14자리로 고정
	private String normalizeDateString(Object obj) {
		if (obj == null)
			return null;
		String s = obj.toString();
		if (s.length() >= 14) {
			return s.substring(0, 14); // yyyyMMddHHmmss
		} else if (s.length() == 8) {
			return s + "000000"; // yyyyMMdd → yyyyMMdd000000
		} else {
			return null; // 잘못된 값
		}
	}

	// 회원 정보 수정
	// By.PJ 09. 17
	@RequestMapping(value = "/memberUpdateByAdmin.do")
	public NexacroResult memberUpdate(@ParamDataSet(name = "ds_memberDt", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {

			// 날짜 파라미터 변환
			param.put("FIRST_LOGIN_DT", normalizeDateString(param.get("FIRST_LOGIN_DT")));
			param.put("LAST_LOGIN_DT", normalizeDateString(param.get("LAST_LOGIN_DT")));
			param.put("BIRTH", normalizeDateString(param.get("BIRTH")));

			// 비밀번호 암호화 및 이미 암호화 되있다면 패스(비밀번호 변경하지 않았을시 암호화한걸 또 암호화 하는 거 방지)
			if (param.get("PASSWORD") != null && !"".equals(param.get("PASSWORD").toString())) {
				String password = String.valueOf(param.get("PASSWORD"));

				// 이미 해시된 64자리 hex 문자열이면 암호화 스킵
				if (!password.matches("^[0-9a-f]{64}$")) {
					String crypto = PasswordUtil.encryptSHA256(password);
					param.put("PASSWORD", crypto);
				}
			}

			// 중복체크
			int duplicated = memberService.updateDuplicated(param);
			if (duplicated > 0) {
				result.setErrorCode(-1);
				result.setErrorMsg("중복된 이메일 또는 전화번호가 있습니다");
				return result;
			}

			// UPDATE 실행
			int updated = memberService.memberUpdate(param);
			Map<String, Object> dsUpCnt = new HashMap<>();
			dsUpCnt.put("UPDATED", updated);
			result.addDataSet("ds_upCnt", dsUpCnt);

		} catch (Exception e) {
			e.printStackTrace();
			result.setErrorCode(-1);
			result.setErrorMsg("회원 수정 중 오류 발생");
		}
		return result;
	}

	// 회원 등급 관리 리스트 조회
	// By.PJ 09.18
	@RequestMapping(value = "/selectGradeManageByAdmin.do")
	public NexacroResult selectGradeManage(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {
			// 조회 결과를 list에 담고....
			List<Map<String, Object>> selectGradeMange = memberService.selectGradeManage(param);

			// 넥사크로에 다시 보낸다!
			result.addDataSet("ds_gradeList", selectGradeMange);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("회원조회 중 오류");
		}
		return result;
	};

	// 관리자 뺴고 회원만 등급 조회
	// BY.PJ 09.18
	@RequestMapping(value = "/selectGradeExceptionAdminListByAdmin.do")
	public NexacroResult selectGradeExceptionAdminList() {

		NexacroResult result = new NexacroResult();

		try {
			// 회원등급 전체 조회 (param 필요 없음)
			List<Map<String, Object>> gradeExAdminList = memberService.selectGradeExceptionAdminList();

			// ds_grade라는 이름으로 넥사크로에 전달
			result.addDataSet("ds_grade", gradeExAdminList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("회원등급 조회 실패 >>> " + e.getMessage());
		}
		return result;
	}

	// 회원 등급 변경 행 수정
	// By.PJ 09.18
	@RequestMapping(value = "/updateMemberGradeByAdmin.do")
	public NexacroResult updateMemberGrade(
			@ParamDataSet(name = "ds_gradeList", required = false) List<Map<String, Object>> memberGradeMangeList) {
		NexacroResult result = new NexacroResult();
		int updated = 0;

		try {
			for (Map<String, Object> updateGrade : memberGradeMangeList) {
				String rowType = String.valueOf(updateGrade.get("DataSetRowType"));

				if ("2".equals(rowType)) {
					updated = memberService.updateMemberGrade(updateGrade);
				}

			}

			// 업데이트 결과 알기 위해서 int 리턴
			Map<String, Object> dsUpCnt = new HashMap<>();

			dsUpCnt.put("UPDATED", updated);

			result.addDataSet("ds_upCnt", dsUpCnt);
		} catch (Exception e) {
			System.out.println("insert error: " + e.getMessage());
			result.setErrorCode(-1);
			result.setErrorMsg(e.getMessage());
		}
		return result;
	}

	// 휴면/탈퇴 회원 조회
	// By. PJ 09.19
	@RequestMapping(value = "/selectDormantWithdrawnMembersByAdmin.do")
	public NexacroResult selectDormantWithdrawnMembers(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {
			// 휴면/탈퇴 회원 목록 조회
			List<Map<String, Object>> memberList = memberService.selectDormantWithdrawnMembers(param);

			result.addDataSet("ds_list", memberList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("휴면/탈퇴 회원 조회 중 오류");
		}
		return result;
	}

	// 휴면 회원 복구 (다시 활성화 R -> Y)
	// By. 09.19 Pj
	@RequestMapping(value = "/reactivateDormantMemberByAdmin.do")
	public NexacroResult reactivateDormantMember(
			@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> param) {

		NexacroResult result = new NexacroResult();

		try {

			int updated = memberService.reactivateDormantMember(param);

			Map<String, Object> dsUpCnt = new HashMap<>();
			dsUpCnt.put("UPDATED", updated);
			result.addDataSet("ds_upCnt", dsUpCnt);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("휴면 회원 복구 중 오류");
		}
		return result;
	}

	// 회원 탈퇴 상태 처리 (STATUS를 N으로 변경)
	// By.09.19 Pj
	@RequestMapping(value = "/withdrawMemberByAdmin.do")
	public NexacroResult withdrawMember(
			@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> param) {

		NexacroResult result = new NexacroResult();

		try {
			int deleted = memberService.withdrawMember(param);

			Map<String, Object> dsDelCnt = new HashMap<>();
			dsDelCnt.put("DELETED", deleted);
			result.addDataSet("ds_delCnt", dsDelCnt);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("회원 탈퇴 처리 중 오류");
		}
		return result;
	}

	// 회원 포인트, 쿠폰 리스트 조회
	// By. PJ 09.22
	@RequestMapping(value = "/selectPointAndCouponListByAdmin.do")
	public NexacroResult selectPointAndCouponList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {

			List<Map<String, Object>> pointAndCouponList = memberService.selectPointAndCouponList(param);

			result.addDataSet("ds_list", pointAndCouponList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("쿠폰 및 포인트 조회 중  오류");
		}
		return result;
	}

	// 포인트 사용 유형 리스트 조회
	// By.PJ 09.22
	@RequestMapping(value = "/selectMemberChageTypeListByAdmin.do")
	public NexacroResult selectMemberChageTypeList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {
			List<Map<String, Object>> selectChageTypeList = memberService.selectMemberChageTypeList(param);
			result.addDataSet("ds_type", selectChageTypeList);

		} catch (Exception e) {
			e.printStackTrace();
			result.setErrorCode(-1);
			result.setErrorMsg("회원 포인트 유형 조회 실패 >>> " + e.getMessage());
		}
		return result;
	}

	// 해당 회원의 포인트 상세 조회(ds_search에 MEMBER_ID담아서 보내주기 )
	// By.PJ 09.22
	@RequestMapping(value = "/selectPointDetailListByAdmin.do")
	public NexacroResult selectPointDetailList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> pointDetailList = memberService.selectPointDetailList(param);
			result.addDataSet("ds_list", pointDetailList);
		} catch (Exception e) {
			e.printStackTrace();
			result.setErrorCode(-1);
			result.setErrorMsg("포인트 상세조회 중 오류 발생");
		}
		return result;
	}

	// 해당 회원의 쿠폰 상세 조회
	// By.PJ 09.22
	@RequestMapping(value = "/selectCouponDetailListByAdmin.do")
	public NexacroResult selectCouponDetailList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> couponDetailList = memberService.selectCouponDetailList(param);
			result.addDataSet("ds_list", couponDetailList);
		} catch (Exception e) {
			e.printStackTrace();
			result.setErrorCode(-1);
			result.setErrorMsg("포인트 상세조회 중 오류 발생");
		}
		return result;
	}

	// 포인트 적립 및 차감
	// By. PJ 09.23
	@RequestMapping(value = "/insertMemberPointByAdmin.do")
	public NexacroResult insertMemberPoint(
			@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> insertPointList) {
		NexacroResult result = new NexacroResult();
		int inserted = 0;

		try {

			for (Map<String, Object> point : insertPointList) {
				String rowType = String.valueOf(point.get("DataSetRowType"));

				if ("1".equals(rowType)) {
					inserted = memberService.insertPoint(point);
				}

			}
			Map<String, Object> dsInsCnt = new HashMap<>();

			dsInsCnt.put("INSERTED", inserted);

			result.addDataSet("ds_insCnt", dsInsCnt);
		} catch (Exception e) {
			System.out.println("insert error: " + e.getMessage());
			result.setErrorCode(-1);
			result.setErrorMsg(e.getMessage());
		}
		return result;
	}

	// 쿠폰 지급(관리자가 강제 insert 엮을게 필요함)
	// By.PJ 09.23
	@RequestMapping(value = "/insertCouponByAdmin.do")
	public NexacroResult insertCoupon(@ParamDataSet(name = "ds_insert", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {

			Map<String, Object> dsInsCnt = new HashMap<>();

			int inserted = memberService.insertCoupon(param);

			dsInsCnt.put("INSERTED", inserted);
			result.addDataSet("ds_insCnt", dsInsCnt);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("쿠폰 지급중 오류");
		}
		return result;
	}

	// 블랙이 된 회원 리스트 조회
	// By. PJ 09.24
	@RequestMapping(value = "/selectBlackListByAdmin.do")
	public NexacroResult selectBlackListByAdmin(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {

			List<Map<String, Object>> selectBlackList = memberService.selectBlackListByAdmin(param);

			result.addDataSet("ds_list", selectBlackList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("블랙리스트 조회 중 오류");
		}
		return result;
	}

	// 블랙리스트 상세 조회(신고내역)
	// By. PJ 09.25
	@RequestMapping(value = "/selectBlackDetailListByAdmin.do")
	public NexacroResult selectBlackDetailListByAdmin(
			@ParamVariable(name = "memberId", required = false) String memberId) {

		NexacroResult result = new NexacroResult();

		try {

			List<Map<String, Object>> selectBlackListDetail = memberService.selectBlackDetailListByAdmin(memberId);

			result.addDataSet("ds_list", selectBlackListDetail);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("블랙리스트 상세 조회 중 오류");
		}
		return result;
	};

	// 블랙 헤제(신고취소로 상태를 바꿔서 5개 미만으로 줄여서 하는 방식)
	// 신고 처리 변경 행 수정
	// By.PJ 09.25
	@RequestMapping(value = "/updateMemberBlackStatusListByAdmin.do")
	public NexacroResult updateMemberBlackStatusListByAdmin(
	        @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> updateList) {
	    NexacroResult result = new NexacroResult();
	    int updated = 0;
	    
	    try {
	        for (Map<String, Object> row : updateList) {
	            String rowType = String.valueOf(row.get("DataSetRowType"));
	            
	            if ("2".equals(rowType)) { // 수정된 행만 처리
	            	updated = memberService.updateMemberBlackStatusListByAdmin(row);
	                
	            }
	        }
	        
	        Map<String, Object> dsUpCnt = new HashMap<>();
	        dsUpCnt.put("UPDATED", updated);
	        result.addDataSet("ds_upCnt", dsUpCnt);
	        
	    } catch (Exception e) {
	        result.setErrorCode(-1);
	        result.setErrorMsg("신고 상태 변경 중 오류");
	    }
	    return result;
	}
	
	// 회원 가입 이력을 위한 회원 조회
	// By. PJ 09.26
	@RequestMapping(value = "/selectMemberRegHistoryListByAdmin.do")
	public NexacroResult selectMemberRegHistoryListByAdmin(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {

		NexacroResult result = new NexacroResult();

		try {

			List<Map<String, Object>> selectMemberRegList = memberService.selectMemberRegHistoryListByAdmin(param);

			result.addDataSet("ds_list", selectMemberRegList);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("회원 가입 이력 조회중  오류");
		}
		return result;
	}
}
