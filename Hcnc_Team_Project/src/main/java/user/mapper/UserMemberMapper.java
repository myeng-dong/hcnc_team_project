package user.mapper;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserMemberMapper")
public interface UserMemberMapper {
	public int selectIdCheckByUser(String id);

	public int selectEmailCheckByUser(String email);

	public int insertSignUpByUser(Map<String, Object> sign);

	public Map<String, Object> selectLoginByUser(Map<String, Object> login);
}