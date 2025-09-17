package user.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserMemberMapper;

@Service
public class UserMemberService {
	@Autowired
	private UserMemberMapper userMemberMapper;
	
	public int selectIdCheckByUser(String id) {
		return userMemberMapper.selectIdCheckByUser(id);
	}

	public int selectEmailCheckByUser(String email) {
		return userMemberMapper.selectEmailCheckByUser(email);
	}

	public int insertSignUpByUser(Map<String, Object> sign) {
		return userMemberMapper.insertSignUpByUser(sign);
	}

	public Map<String, Object> selectLoginByUser(Map<String, Object> login) {
		return userMemberMapper.selectLoginByUser(login);
	}
	
	public Map<String, Object> selectFindIdByUser(String email) {
		return userMemberMapper.selectFindIdByUser(email);
	}

	public int updatePasswordByUser(Map<String, Object> param) {
		return userMemberMapper.updatePasswordByUser(param);
	}
}
