package user.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserCouponMapper;
import user.mapper.UserMemberMapper;

@Service
public class UserMemberService {
	@Autowired
	private UserMemberMapper userMemberMapper;
	
	@Autowired
	private UserCouponService userCouponService;
	
	public int selectIdCheckByUser(String id) {
		return userMemberMapper.selectIdCheckByUser(id);
	}

	public int selectEmailCheckByUser(String email) {
		return userMemberMapper.selectEmailCheckByUser(email);
	}

	public int insertSignUpByUser(Map<String, Object> sign) {
		int result = userMemberMapper.insertSignUpByUser(sign);
		if (result > 0) {
	        String memberId = (String) sign.get("id"); //회원가입시 아이디훔침
	        try {
	            userCouponService.insertSignUpCoupon(memberId);  //신규회원 쿠폰 발급용으로 추가함
	        } catch(Exception e) {
	        	System.out.println("신규회원 쿠폰 발급 실패: " + e.getMessage()); // 실패해도 회원가입은 유지최대한 들건들이기
	        }
	    }
	    return result;
	}

	public Map<String, Object> selectLoginByUser(Map<String, Object> login) {
		return userMemberMapper.selectLoginByUser(login);
	}
	
	public Map<String, Object> selectFindIdByUser(String email) {
		return userMemberMapper.selectFindIdByUser(email);
	}

	public Map<String, Object> selectUserInfoByUser(String id) {
		return userMemberMapper.selectUserInfoByUser(id);
	}

	public int updatePasswordByUser(Map<String, Object> param) {
		return userMemberMapper.updatePasswordByUser(param);
	}

	public int updateMemberByUser(Map<String, Object> param) {
		return userMemberMapper.updateMemberByUser(param);
	}

	public List<Map<String, Object>> selectMypageShippingInfoByUser(String id){
		return userMemberMapper.selectMypageShippingInfoByUser(id);
	}

	public int updateWithDrawByUser(String id) {
		return userMemberMapper.updateWithDrawByUser(id);
	}

	public int updateLastLoginByUser(String id) {
		return userMemberMapper.updateLastLoginByUser(id);
	}
}
