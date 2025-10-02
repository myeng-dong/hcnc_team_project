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
	    List<Map<String, Object>> list = promotionMapper.selectPromoListByAdmin(param);
	    
	    // 화면 표시용 데이터 변환
	    for(Map<String, Object> item : list) {
	        // TARGET_VALUE 변환 (null 체크 추가)
	        String targetValue = (String) item.get("TARGET_VALUE");
	        String targetDisplay = "";
	        
	        if(targetValue != null) {
	            switch(targetValue) {
	                case "all": targetDisplay = "전체회원"; break;
	                case "new": targetDisplay = "신규회원"; break;
	                case "grade": targetDisplay = "등급별"; break;
	                case "6": targetDisplay = "다이아"; break;
	                case "5": targetDisplay = "플래티넘"; break;
	                case "4": targetDisplay = "골드"; break;
	                case "3": targetDisplay = "실버"; break;
	                case "2": targetDisplay = "브론즈"; break;
	                case "1": targetDisplay = "일반"; break;
	                default: targetDisplay = targetValue; break;
	            }
	        } else {
	            targetDisplay = "-"; // null인 경우 기본값
	        }
	        item.put("TARGET_VALUE_DISPLAY", targetDisplay);
	    }
	    
	    return list;
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
