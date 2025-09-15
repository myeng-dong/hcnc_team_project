package user.mapper;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("UserMemberMapper")
public interface UserMemberMapper {
	public int selectIdCheckByUser(String id);

	public int selectEmailCheckByUser(String email);

	public int insertSignUpByUser();
}
