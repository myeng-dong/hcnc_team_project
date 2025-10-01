package user.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserCouponMapper;


@Service
public class UserCouponService {
	@Autowired
	private UserCouponMapper userCouponMapper;
	
	@Transactional
	public int insertSignUpCoupon(String memberId) {
		//나중에 프로모션이랑 합쳐지는지 확인하고 합치기
	    String couponCode = "WELCOME" + UUID.randomUUID().toString();
	    LocalDateTime expiry = LocalDateTime.now().plusDays(7);

	    Map<String, Object> params = new HashMap<>();
	    params.put("memberId", memberId);
	    params.put("couponCode", couponCode);
	    params.put("couponName", "신규회원이벤트");
	    params.put("discountType", "R");   // 할인율
	    params.put("discountValue", 15);   // 15% 기본값
	    params.put("minOrderPrice", 5000);    // 5천원이상구매시사용가능
	    params.put("expiryDt", expiry);
	    params.put("couponName", "WELCOME");
	    
	    System.out.println("회원 ID: " + memberId);
	    System.out.println("쿠폰 코드: " + couponCode);
	    System.out.println("쿠폰명: " + params.get("couponName"));
	    System.out.println("할인 타입: " + params.get("discountType"));
	    System.out.println("할인 값: " + params.get("discountValue"));
	    System.out.println("최소 주문금액: " + params.get("minOrderPrice"));
	    System.out.println("만료일: " + params.get("expiryDt"));
	    System.out.println("쿠폰타입"+params.get("couponType"));
	    
	    return userCouponMapper.insertSignUpCoupon(params);
	}

	@Transactional
	public int insertAutoPromotionCoupon(String memberId) {
		Map<String, Object> params = new HashMap<>();
        params.put("memberId", memberId);

        return userCouponMapper.insertAutoPromotionCoupon(params);
		
	}


}
