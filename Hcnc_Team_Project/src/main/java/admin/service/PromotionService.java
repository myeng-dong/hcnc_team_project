package admin.service;


import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import admin.mapper.PromotionMapper;



@Service
public class PromotionService {
	@Autowired
	private PromotionMapper promotionMapper;

	public List<Map<String, Object>> selectPromoListByAdmin(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return promotionMapper.selectPromoListByAdmin(param);
	}

	public Map<String, Object> selectPromoViewByAdmin(String promotionId) {
		// TODO Auto-generated method stub
		return promotionMapper.selectPromoViewByAdmin(promotionId);
	}

	@Transactional
	public int insertPromotionByAdmin(Map<String, Object> param) {
	    //기본 프로모션 정보 등록 (selectKey로 promotionId 받아옴)
	    int result1 = promotionMapper.insertPromoBaseByAdmin(param);
	    
	    // 생성된 promotionId를 사용해서 나머지 테이블들 등록
	    Long promotionId = (Long) param.get("promotionId");
	    param.put("promotionId", promotionId);
	    
	    //할인 정보 등록
	    int result2 = promotionMapper.insertPromoDiscountByAdmin(param);
	    //대상 정보 등록
	    int result3 = promotionMapper.insertPromoTargetByAdmin(param); 
	    //쿠폰 정보 등록
	    int result4 = promotionMapper.insertPromoCouponByAdmin(param);
	    
	    return result1 + result2 + result3 + result4; // 총 영향받은 행 수
	}

	
	@Transactional
	public int updatePromotionByAdmin(Map<String, Object> param) {
	    // 기본 프로모션 정보 수정
	    int result1 = promotionMapper.updatePromoBaseByAdmin(param); 
	    // 할인 정보 수정
	    int result2 = promotionMapper.updatePromoDiscountByAdmin(param);
	    // 대상 정보 수정
	    int result3 = promotionMapper.updatePromoTargetByAdmin(param);
	    // 쿠폰 정보 수정
	    int result4 = promotionMapper.updatePromoCouponByAdmin(param);
	    
	    return result1 + result2 + result3 + result4;
	}
	

}
