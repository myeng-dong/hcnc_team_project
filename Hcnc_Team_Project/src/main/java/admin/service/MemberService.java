package admin.service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.MemberMapper;

@Service
public class MemberService {

	@Autowired
	private MemberMapper memberMapper;

	// 관리자 로그인
	public Map<String, Object> adminLogin(Map<String, Object> param) {

		return memberMapper.adminLogin(param);
	}

	// 회원 목록 조회
	public List<Map<String, Object>> selectMemberList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return memberMapper.selectMemberList(param);
	}

	// 회원 등급 조회
	public List<Map<String, Object>> selectMemberGradeList() {
		return memberMapper.selectMemberGradeList();
	}

	// 관리자 등록
	public int insertMember(Map<String, Object> param) {
		return memberMapper.insertMember(param);
	}

	// 등록시 중복체크
	public int isDuplicated(Map<String, Object> param) {
		return memberMapper.isDuplicated(param);
	}

	// 회원 상세조회
	public Map<String, Object> selectMemberDetail(String memberId) {

		return memberMapper.selectMemberDetail(memberId);
	}

	// 회원 정보 수정
	public int memberUpdate(Map<String, Object> param) {

		return memberMapper.memberUpdate(param);
	}

	// 회원정보 수정시 이메일, 전화번호 중복체크
	public int updateDuplicated(Map<String, Object> param) {

		return memberMapper.updateDuplicated(param);
	}

	// 회원 등급 관리 조회
	public List<Map<String, Object>> selectGradeManage(Map<String, Object> param) {

		return memberMapper.selectGradeManage(param);
	}

	// 회원등급 변경
	public int updateMemberGrade(Map<String, Object> updateGrade) {
		return memberMapper.updateMemberGrade(updateGrade);

	}

	// 관리자 제외 등급 조회
	public List<Map<String, Object>> selectGradeExceptionAdminList() {

		return memberMapper.selectGradeExceptionAdminList();
	}

	// 휴면 처리 -> 스케쥴러
	public int updateDormantMembers() {

		return memberMapper.updateDormantMembers();
	}
	
	// 탈퇴 -> 스케쥴러
	public int deleteOldWithdrawnMembers() {

		return memberMapper.deleteOldWithdrawnMembers();
	}

	// 휴면/탈퇴 회원 조회
	public List<Map<String, Object>> selectDormantWithdrawnMembers(Map<String, Object> param) {
		return memberMapper.selectDormantWithdrawnMembers(param);
	}

	//휴면 회원 복구 (상태를 Y로 변경) -> 넥사크로에서
	public int reactivateDormantMember(List<Map<String, Object>> param) {
		int cnt = 0;

		for (int i = 0; i < param.size(); i++) {
			if (param.get(i).get("CHK").equals("1")) {
				cnt = memberMapper.reactivateDormantMember(param.get(i));
			}
		}
		return cnt;
	}

	// 회원 탈퇴 (상태만 변경) -> 넥사크로에서
	public int withdrawMember(List<Map<String,Object>> param) {
		
		int delCnt = 0;
		
		for(int i = 0; i < param.size(); i++){
			if(param.get(i).get("CHK").equals("1")){
				delCnt = memberMapper.withdrawMember(param.get(i));
			}
		}
		return delCnt;
	}
	
	//회원 크폰, 포인트 조회
	public List<Map<String, Object>> selectPointAndCouponList(Map<String, Object> param) {
		
		return memberMapper.selectPointAndCouponList(param);
	}
	
	//포인트 사용유형 리스트 조회
	public List<Map<String, Object>> selectMemberChageTypeList(Map<String, Object> param) {
		
		return memberMapper.selectMemberChageTypeList(param);
	}
	
	//회원 포인트 상세보기 리스트 
	public List<Map<String, Object>> selectPointDetailList(Map<String, Object> param) {
		
		return memberMapper.selectPointDetailList(param);
	}
	
	//회원 쿠폰 상세보기 리스트
	public List<Map<String, Object>> selectCouponDetailList(Map<String, Object> param) {
		
		return  memberMapper.selectCouponDetailList(param);
	}
	
	//포인트 적립 및 차감
	public int insertPoint(Map<String, Object> point) {
		
		return memberMapper.insertPoint(point);
		
	}
	
	//쿠폰 지급
	public int insertCoupon(Map<String, Object> param) {

		 // UUID 기반 쿠폰 코드 생성
        String uuid = UUID.randomUUID().toString().replace("-", "");
        // 앞 16자리만 사용 (대문자로 변환하면 가독성 ↑)
        String couponCode = uuid.substring(0, 16).toUpperCase();

        // param에 세팅
        param.put("COUPON_CODE", couponCode);

        return memberMapper.insertCoupon(param);
	}
	
	//블랙리스트 조회
	public List<Map<String, Object>> selectBlackListByAdmin(Map<String, Object> param) {
		
		return memberMapper.selectBlackListByAdmin(param);
	}
   

}
