package admin.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import admin.mapper.ReviewAwardMapper;

@Service
public class ReviewAwardService {
    
    @Autowired
    private ReviewAwardMapper reviewAwardMapper;
    
    // 관리자 리뷰 리스트 조회
    public List<Map<String, Object>> selectProductReviewListByAdmin(Map<String, Object> params) {
        return reviewAwardMapper.selectProductReviewListByAdmin(params);
    }
    
    // 자동 포인트 지급 (스케줄러)
    @Scheduled(fixedDelay = 10000) // 매일 자정
    @Transactional
    public void insertAutoReviewRewardPointsByAdmin() {
        Map<String, Object> params = new HashMap<>();
        params.put("changeType", "적립");
        params.put("rewardPoint", 500);
        params.put("descriptionPrefix", "[리뷰 이벤트 포인트 지급]");
        
        int count = reviewAwardMapper.insertAutoReviewRewardPointsByAdmin(params);
        System.out.println("자동 지급된 리뷰포인트 건수: " + count);
    }
    
    // 수동 포인트 지급
    @Transactional 
    public int insertReviewRewardPointsByAdmin(Map<String, Object> review) {
        System.out.println("수동 포인트 지급 시작: " + review);
        int result = reviewAwardMapper.insertReviewRewardPointsByAdmin(review);
        System.out.println("수동 포인트 지급 결과: " + result);
        return result;
    }
}