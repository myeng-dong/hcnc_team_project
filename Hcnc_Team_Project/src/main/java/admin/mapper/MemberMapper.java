package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("MemberMapper")
public interface MemberMapper {
	
	//관리자 로그인
	Map<String, Object> adminLogin(Map<String, Object> param);
	
	//회원 목록조회 
	List<Map<String, Object>> selectMemberList(Map<String, Object> param);
	
	//회원 등급 조회
	List<Map<String, Object>> selectMemberGradeList();
	
	//관리자 등록하기 
	int insertMember(Map<String, Object> param);
	
	//관리자 등록시 중복체크
	int isDuplicated(Map<String, Object> param);
	
	//회원 상세조회
	Map<String, Object> selectMemberDetail(String memberId);
	
	//회원 정보 수정
	int memberUpdate(Map<String, Object> param);
	
	//회원 정보 수정시 중복체크 
	int updateDuplicated(Map<String, Object> param);
	
	//회원 등급 관리 조회
	List<Map<String, Object>> selectGradeManage(Map<String, Object> param);
	
	//회원 등급변경
	int updateMemberGrade(Map<String, Object> updateGrade);
	
	
	//관리자 제외한 등급 조회 
	List<Map<String, Object>> selectGradeExceptionAdminList();
	
	// 휴면/탈퇴 회원 조회
	List<Map<String, Object>> selectDormantWithdrawnMembers(Map<String, Object> param);

	//휴면처리(스케쥴러) : 자동 
	int updateDormantMembers();
	
	//탈퇴처리(스케쥴러): 자동
	int deleteOldWithdrawnMembers();
	
	// 휴면 회원 복구 : 넥사크로 수동
	int reactivateDormantMember(Map<String,Object> param);
	
	//회원 삭제 상태만  : 넥사크로 수동
	int withdrawMember(Map<String, Object> param);
	
	//회원 쿠폰, 포인트 조회
	List<Map<String, Object>> selectPointAndCouponList(Map<String, Object> param);
	
	//포인트 상세조회 중 사용 유형들 조회
	List<Map<String, Object>> selectMemberChageTypeList(Map<String, Object> param);
	
	//포인트 상세보기 리스트
	List<Map<String, Object>> selectPointDetailList(Map<String, Object> param);
	
	//쿠폰 상세보기 리스트
	List<Map<String, Object>> selectCouponDetailList(Map<String, Object> param);

	//포인트 적립 및 차감
	int insertPoint(Map<String, Object> point);
	
	//쿠폰 지급
	int insertCoupon(Map<String, Object> param);
	
	//블랙리스트 조회
	List<Map<String, Object>> selectBlackListByAdmin(Map<String, Object> param);
	
	//블랙리스트 상세조회(신고내역)
	List<Map<String, Object>> selectBlackDetailListByAdmin(String memberId);
	
	//블랙리스트 신고 취소
	int updateMemberBlackStatusListByAdmin(Map<String, Object> row);
	
	//회원 가입 이력 조회
	List<Map<String, Object>> selectMemberRegHistoryListByAdmin(Map<String, Object> param);
	
	//스케쥴러 : 서버시작시 바로 + 매일 새벽 2시에 회원등급 자동 변경
	int updateAllMemberGradeAutoByAdmin();
	
	//회원가입 이력  통계,차트 
	List<Map<String, Object>> selectLoginTypeStatsByAdmin();
	
	//회원 탈퇴 이력 조회
	List<Map<String, Object>> selectWithdrawMemberListByAdmin(Map<String, Object> param);
	
	//월별 회원 탈퇴 통계
	List<Map<String, Object>> selectMemberWithdrawCntByAdmin();
	

}
