package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import user.service.UserProductService;

@Controller
public class UserProductController {
	
	@Autowired
	private UserProductService userProductService;

	@RequestMapping(value="/productDetailView.do")
	public ModelAndView productDetailView(@RequestParam("productId") Long productId) throws JsonProcessingException {
		
		ModelAndView mav = new ModelAndView();
		
		List<HashMap<String, Object>> productDetail = userProductService.selectProductByUser(productId);
		
		List<HashMap<String, Object>> productOptionInfo = userProductService.slectOptionInfoByUser(productId);
		
		mav.addObject("productDetail", productDetail);
		mav.addObject("optionInfo", productOptionInfo);
		
		// JavaScript에서 사용할 수 있도록 JSON 형태로도 전달
	    ObjectMapper mapper = new ObjectMapper();
	    mav.addObject("productDetailJson", mapper.writeValueAsString(productDetail));
	    mav.addObject("optionInfoJson", mapper.writeValueAsString(productOptionInfo));
	    
		mav.setViewName("product/detail");
		
		return mav;
	}
	///////////////////////////////////////////////////////////////
	
	@RequestMapping(value="/insertCartItem.do")
	public ModelAndView insertCartItemByUser(@RequestParam Map<String, Object> param) {
		
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		int insertCartItem = userProductService.insertCartItemByUser(param);
		
		mav.addObject("insertResult", insertCartItem);
		
		System.out.println(insertCartItem);
		
		return mav;
	}
	
	@RequestMapping(value="/selectProductQnAList.do")
	public ModelAndView selectProductQnAListByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		List<HashMap<String, Object>> qnaList = userProductService.selectProductQnAListByUser(param);
		
		mav.addObject("qnaList", qnaList);
		
		return mav;
	}
	
	@RequestMapping(value="/insertQnA.do")
	public ModelAndView insertQnAByUser(@RequestParam Map<String, Object> param, RedirectAttributes redirectAttributes) {
		ModelAndView mav = new ModelAndView();
		
		String productId = (String) param.get("productId");
		
		int insertQnA = userProductService.insertQnAByUser(param);
		
		redirectAttributes.addFlashAttribute("message", "등록이 완료되었습니다.");
		redirectAttributes.addFlashAttribute("messageType", "insertSuccess");
		
		mav.setViewName("redirect:/productDetailView.do?productId=" + productId);
		
		return mav;
	}
	
	@RequestMapping(value="/selectQnADetail.do")
	public ModelAndView selectQnADetailByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		HashMap<String, Object> qnaDetail = userProductService.selectQnADetailByUser(param);
		
		mav.addObject("qnaDetail", qnaDetail);
		
		return mav;
	}
	
	@RequestMapping(value="/updateProductQnA.do")
	public ModelAndView updateProductQnAByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		userProductService.updateProductQnAByUser(param);
		
		return mav;
	}
	
	@RequestMapping(value="/deleteProductQnA.do")
	public ModelAndView deleteQnAByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		userProductService.deleteQnAByUser(param);
				
		return mav;
		
	}
	
	@RequestMapping(value="/selectProductDescription.do")
	public ModelAndView selectProductDescriptionByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println("description 조회 : " + param);
		
		HashMap<String, Object> description = userProductService.selectProductDescriptionByUser(param);
		if(description != null) {
			mav.addObject("description", description);
		} else {
			mav.addObject("description", "데이터 없습니다.");
		}
		return mav;
	}
	
	private static final int PAGE_SIZE = 16; // 페이지당 상품 수
    private static final int PAGE_BLOCK_SIZE = 10; // 페이지 블록 크기

    @RequestMapping(value="/list.do")
    public ModelAndView selectProductListByCategory(@RequestParam Map<String, Object> param) {
        
        ModelAndView mav = new ModelAndView();
        
        try {
            // 파라미터 추출
            String mainCateId = (String) param.get("mainCateId");
            String subCateId = (String) param.get("subCateId");
            String sortType = param.get("sortType") != null ? (String) param.get("sortType") : "newest";
            int page = param.get("page") != null ? Integer.parseInt((String) param.get("page")) : 1;

            // 상품 총 개수 조회
            int totalCount = userProductService.getCategoryProductsCount(mainCateId, subCateId);

            // 페이징 계산
            int totalPages = (int) Math.ceil((double) totalCount / PAGE_SIZE);
            int offset = (page - 1) * PAGE_SIZE;

            // 페이지 블록 계산
            int startPage = ((page - 1) / PAGE_BLOCK_SIZE) * PAGE_BLOCK_SIZE + 1;
            int endPage = Math.min(startPage + PAGE_BLOCK_SIZE - 1, totalPages);

            // 상품 목록 조회
            List<Map<String, Object>> productList = userProductService.getCategoryProductsList(
                    mainCateId, subCateId, sortType, offset, PAGE_SIZE);

            // ModelAndView에 데이터 추가
            mav.addObject("mainCateId", mainCateId);
            mav.addObject("subCateId", subCateId);
            mav.addObject("productList", productList);
            mav.addObject("totalCount", totalCount);
            mav.addObject("sortType", sortType);
            mav.addObject("currentPage", page);
            mav.addObject("totalPages", totalPages);
            mav.addObject("startPage", startPage);
            mav.addObject("endPage", endPage);

            mav.setViewName("product/list");

        } catch (Exception e) {
            e.printStackTrace();
            mav.addObject("errorMessage", "상품 목록을 불러오는 중 오류가 발생했습니다.");
            mav.setViewName("error/error");
        }
        
        return mav;
    }
}
	
