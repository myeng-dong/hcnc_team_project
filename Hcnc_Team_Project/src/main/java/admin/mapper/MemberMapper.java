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

}
