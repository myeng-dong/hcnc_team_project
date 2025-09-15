package user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserMemberMapper;

@Service
public class UserMemberService {
	@Autowired
	private UserMemberMapper userMemberMapper;
	
	public int selectIdCheckByUser(String id) {
		return userMemberMapper.selectIdCheckByUser(String id);
	}

	public int selectEmailCheckByUser(String email) {
		return userMemberMapper.selectEmailCheckByUser(String email);
	}

	public int insertSignUpByUser() {
		return userMemberMapper.insertSignUpByUser();
	}
}
