package admin.web;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.PromotionService;

@Controller
public class PromotionController {
	
	@Autowired

	private PromotionService promotionService;
	
	@RequestMapping(value = "/selectPromoListByAdmin.do")
    public NexacroResult selectPromoListByAdmin(
            @ParamDataSet(name = "ds_search", required = false) Map<String, Object> param) {
        NexacroResult result = new NexacroResult();
        try {
            List<Map<String, Object>> selectPromoList = promotionService.selectPromoListByAdmin(param);
            // 넥사크로에 다시 보낸다!
            result.addDataSet("ds_promo_list", selectPromoList);
        } catch (Exception e) {
            System.out.println(e);
            result.setErrorCode(-1);
            result.setErrorMsg("프로모션 조회 중 오류");
        }
        return result;
    }
	
	@RequestMapping(value = "/selectPromoViewByAdmin.do")
    public NexacroResult selectPromoViewByAdmin(
    		@ParamVariable(name = "promotionId", required = false) String promotionId) {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> promotionView = promotionService.selectPromoViewByAdmin(promotionId);
			result.addDataSet("ds_promo_view", promotionView);

		} catch (Exception e) {
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("상세조회 중 오류발생");
		}
		return result;
    }	
	
	@RequestMapping(value = "/insertPromotionByAdmin.do")
	public NexacroResult insertPromotionByAdmin(
	        @ParamDataSet(name = "ds_promo_write", required = false) Map<String, Object> param) {
	    NexacroResult result = new NexacroResult();
	    try {
	    	int insertCount = promotionService.insertPromotionByAdmin(param);
	        System.out.println("프로모션이 등록되었습니다. (등록된 행 수: " + insertCount + "): 참고로1여야 성공임");
	        
	    } catch (Exception e) {
	        System.out.println(e);
	        result.setErrorCode(-1);
	        result.setErrorMsg("프로모션 등록 중 오류 발생");
	    }
	    return result;
	}
	
	@RequestMapping(value = "/updatePromotionByAdmin.do")
	public NexacroResult updatePromotionByAdmin(
	        @ParamDataSet(name = "ds_promo_write", required = false) Map<String, Object> param) {
	    NexacroResult result = new NexacroResult();
	    try {
	        int updateCount = promotionService.updatePromotionByAdmin(param);
	        System.out.println("프로모션이 수정되었습니다. (수정된 행 수: " + updateCount + ")");
	    } catch (Exception e) {
	        System.out.println(e);
	        result.setErrorCode(-1);
	        result.setErrorMsg("프로모션 수정 중 오류 발생");
	    }
	    return result;
	}
	
}
