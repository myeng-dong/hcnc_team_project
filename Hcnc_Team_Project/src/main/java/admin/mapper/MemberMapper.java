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

}
