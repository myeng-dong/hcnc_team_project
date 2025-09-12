package admin.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.MemberMapper;

@Service
public class MemberService {

	@Autowired
	private MemberMapper memberMapper;
	
	//관리자 로그인 
	public Map<String, Object> adminLogin(Map<String, Object> param) {
		
		return memberMapper.adminLogin(param);
	}
}
