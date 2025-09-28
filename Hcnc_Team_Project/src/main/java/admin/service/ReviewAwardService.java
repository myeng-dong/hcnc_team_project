package admin.service;
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
    public List<Map<String, Object>> selectProductReviewListByAdmin() {
        return reviewAwardMapper.selectProductReviewListByAdmin();
    }
    
    // 자동 포인트 지급 (스케줄러)
    @Scheduled(cron = "0 0 0 * * *") // 매일 자정 (수정됨)
    @Transactional
    public void insertAutoReviewRewardPointsByAdmin() {
        int count = reviewAwardMapper.insertAutoReviewRewardPointsByAdmin();
        System.out.println("자동 지급된 리뷰포인트 건수: " + count);
    }
    
    // 수동 포인트 지급
    @Transactional 
    public int insertReviewRewardPointsByAdmin(Map<String, Object> review) {
        System.out.println("수동 포인트 지급 시작: " + review); // 디버깅 로그 추가
        int result = reviewAwardMapper.insertReviewRewardPointsByAdmin(review);
        System.out.println("수동 포인트 지급 결과: " + result); // 디버깅 로그 추가
        return result;
    }
}