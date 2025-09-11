package admin.mapper;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("MemberMapper")
public interface MemberMapper {
	
	//관리자 로그인
	Map<String, Object> adminLogin(Map<String, Object> param);

}
