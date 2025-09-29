package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.ReviewAwardService;

@Controller
public class ReviewAwardController {

    @Autowired
    private ReviewAwardService reviewAwardService;
    
    // 리뷰 리스트 조회
    @RequestMapping(value="/selectProductReviewListByAdmin.do")
    public NexacroResult selectProductReviewListByAdmin() {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> list = reviewAwardService.selectProductReviewListByAdmin();
        result.addDataSet("ds_review_list", list);
        return result;
    }

    // 수동 포인트 지급
    @RequestMapping(value="/insertReviewRewardPointsByAdmin.do")
    public NexacroResult insertReviewRewardPointsByAdmin(
            @ParamDataSet(name="ds_addpoint", required=false) List<Map<String, Object>> dsAddpoint) {

        NexacroResult result = new NexacroResult();
        int inserted = 0;

        try {
            if (dsAddpoint != null) {
                for (Map<String, Object> review : dsAddpoint) {
                    inserted += reviewAwardService.insertReviewRewardPointsByAdmin(review);
                }
            }
            result.setErrorCode(0);
            result.setErrorMsg("포인트 지급 완료");
            result.addVariable("insertedCount", inserted);
        } catch (Exception e) {
            result.setErrorCode(-1);
            result.setErrorMsg(e.getMessage());
        }

        return result;
    }
}
