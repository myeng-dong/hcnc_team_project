package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import admin.mapper.PromotionMapper;

@Service
public class PromotionService {
	
	@Autowired
	private PromotionMapper promotionMapper;
	
	public List<Map<String, Object>> selectNewMemListByAdmin(Map<String, Object> param) {
		if(param.get("IS_USED") != null) {
	        param.put("IS_USED", String.valueOf(param.get("IS_USED")));
	    }
	    
	    if(param.get("SEARCH_COMBO") != null) {
	        param.put("SEARCH_COMBO", String.valueOf(param.get("SEARCH_COMBO")));
	    }
	    
	    if(param.get("SEARCH_DATA") != null) {
	        param.put("SEARCH_DATA", String.valueOf(param.get("SEARCH_DATA")));
	    }
	    
	    return promotionMapper.selectNewMemListByAdmin(param);
	}
	
	public List<Map<String, Object>> selectPromoListByAdmin(Map<String, Object> param) {
	    List<Map<String, Object>> list = promotionMapper.selectPromoListByAdmin(param);
	    
	    for(Map<String, Object> item : list) { //grid출력용
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
	            targetDisplay = "-";
	        }
	        item.put("TARGET_VALUE_DISPLAY", targetDisplay);
	    }
	    
	    return list;
	}
	
	public Map<String, Object> selectPromoViewByAdmin(String promotionId) {
		return promotionMapper.selectPromoViewByAdmin(promotionId);
	}
	
	@Transactional(rollbackFor = Exception.class)
	public int insertPromotionByAdmin(Map<String, Object> param) {
	    try {
	        System.out.println("[1/4] 기본 프로모션 정보 등록");
	        int result1 = promotionMapper.insertPromoBaseByAdmin(param);
	        
	        Long promotionId = (Long) param.get("promotionId");
	        if (promotionId == null) {
	            throw new RuntimeException("promotionId 생성 실패");
	        }
	        param.put("promotionId", promotionId);
	        
	        System.out.println("[2/4] 할인 정보 등록");
	        int result2 = promotionMapper.insertPromoDiscountByAdmin(param);
	        
	        System.out.println("[3/4] 대상 정보 등록");
	        int result3 = promotionMapper.insertPromoTargetByAdmin(param);
	        
	        System.out.println("[4/4] 쿠폰 정보 등록");
	        int result4 = promotionMapper.insertPromoCouponByAdmin(param);
	        
	        int totalResult = result1 + result2 + result3 + result4;
	        System.out.println("총 등록 행 수: " + totalResult);
	        
	        return totalResult;
	        
	    } catch (Exception e) {
	        System.out.println("오류 발생: " + e.getMessage());
	        e.printStackTrace();
	        throw e; // 롤백
	    }
	}
	
	@Transactional(rollbackFor = Exception.class)
	public int updatePromotionByAdmin(Map<String, Object> param) {
	    try {
	        System.out.println("[1/4] 기본 프로모션 정보 수정");
	        int result1 = promotionMapper.updatePromoBaseByAdmin(param);
	        
	        System.out.println("[2/4] 할인 정보 수정");
	        int result2 = promotionMapper.updatePromoDiscountByAdmin(param);
	        
	        System.out.println("[3/4] 대상 정보 수정");
	        int result3 = promotionMapper.updatePromoTargetByAdmin(param);
	        
	        System.out.println("[4/4] 쿠폰 정보 수정");
	        int result4 = promotionMapper.updatePromoCouponByAdmin(param);
	        
	        int totalResult = result1 + result2 + result3 + result4;
	        System.out.println("총 수정 행 수: " + totalResult);
	        
	        return totalResult;
	        
	    } catch (Exception e) {
	        System.out.println("수정 오류 발생: " + e.getMessage());
	        e.printStackTrace();
	        throw e; // 트랜잭션 롤백
	    }
	}
}