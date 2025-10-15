package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import user.service.UserReviewService;

@Controller
public class UserReviewController {

	@Autowired
	private UserReviewService userReviewService; 
	
	
	// @RequestMapping(value="/selectReviewList.do")
	// public ModelAndView selectReviewListByUser(@RequestParam Map<String, Object> param) {
	// 	ModelAndView mav = new ModelAndView("jsonView");
		
	// 	System.out.println("리뷰 리스트 : " + param);
		
	// 	// 해당 상품 전체 리뷰 조회
	// 	List<HashMap<String, Object>> reviews = userReviewService.selectReviewListByUser(param);
		
	// 	// 해당 상품 리뷰 전체 수 조회
	// 	HashMap<String, Object> reviewCnt = userReviewService.selectReviewCntByUser(param);
		
	// 	mav.addObject("reviews", reviews);
	// 	mav.addObject("reviewCnt", reviewCnt);
		
	// 	return mav;
	// }
	
	@RequestMapping("/selectReviewListPaged.do")
	public ModelAndView selectReviewListPagedByUser(@RequestParam Map<String, Object> param) {
		ModelAndView mav = new ModelAndView("jsonView");
		
		System.out.println(param);
		
		try {
		    // 파라미터 해부
		    int productId = Integer.parseInt(param.get("productId").toString());
		    int page = Integer.parseInt(param.getOrDefault("page", "1").toString());
		    int pageSize = Integer.parseInt(param.getOrDefault("pageSize", "10").toString());
		    
		    // OFFSET 계산
		    int offset = (page - 1) * pageSize;
		    
		    // boolean 파라미터 안전하게 변환
		    boolean byReview = "true".equals(String.valueOf(param.get("byReview")));
		    boolean byInputDT = "true".equals(String.valueOf(param.get("byInputDT")));
		    
		    // 쿼리 파라미터 설정
		    Map<String, Object> queryParam = new HashMap<>();
		    queryParam.put("productId", productId);
		    queryParam.put("pageSize", pageSize);
		    queryParam.put("offset", offset);
		    queryParam.put("byReview", byReview); 
		    queryParam.put("byInputDT", byInputDT);
	        
				// 리뷰 리스트 조회 (LIMIT/OFFSET 으로 페이징처리)
				List<HashMap<String, Object>> reviews = userReviewService.selectReviewListPagedByUser(queryParam);
		
    		// 해당 상품 리뷰 전체 수 조회
    		HashMap<String, Object> reviewCnt = userReviewService.selectReviewCntByUser(param);
    		
    		mav.addObject("reviewCnt", reviewCnt);
    		mav.addObject("reviews", reviews);

		} catch(Exception e) {
			mav.addObject("error", "리뷰 조회 중 오류발생");
		}
		
		return mav;
	}
	
	
	@RequestMapping(value="/reviewCreate.do")
	public ModelAndView reviewCreate(
			@RequestParam("orderId") Long orderId,
			@RequestParam("productId") Long productId,
			@RequestParam("title") String title,
			@RequestParam("content") String content,
			@RequestParam("rating") Double rating,
			@RequestParam(value = "photos", required = false) List<MultipartFile> photos,
			HttpSession session
		) {
		
		ModelAndView mav = new ModelAndView("jsonView");
		
		
		Map<String, Object> param = new HashMap<String, Object>();
		
		@SuppressWarnings("unchecked")
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}
		
		param.put("orderId", orderId);
		param.put("productId", productId);
		param.put("title", title);
		param.put("content", content);
		param.put("rating", rating);
		
		// 리뷰 정보 출력
		System.out.println(param);
		
		int result = userReviewService.insertReviewByUser(param, photos);

		mav.addObject("result", result);
            
		return mav;
	}

	
	@RequestMapping(value="/orderProductListRead.do")
	public ModelAndView orderProductListRead(HttpSession session) {
		ModelAndView mav = new ModelAndView("jsonView");

		Map<String, Object> param = new HashMap<String, Object>();

		@SuppressWarnings("unchecked")
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}

		// 주문 상품 목록
		List<HashMap<String, Object>> orderProductList = userReviewService.selectOrderProductListByUser(param);
		mav.addObject("orderProductList", orderProductList);

		// 회원 리뷰 조회
		List<HashMap<String, Object>> userReviewList = userReviewService.selectReviewStatusListByUser(param);
		mav.addObject("userReviewList", userReviewList);

		

		return mav;
	}

	@RequestMapping(value="/getProductInfoForReviewWrite.do")
	public ModelAndView getProductInfoForReviewWrite(@RequestParam Map<String, Object> param, HttpSession session) {
		ModelAndView mav = new ModelAndView("jsonView");

		@SuppressWarnings("unchecked")
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}
		
		System.out.println("리뷰 작성 페이지 - 상품 정보 : " + param);
		
		HashMap<String, Object> productInfo = userReviewService.selectProductInfoForReviewByUser(param);
		mav.addObject("productInfo", productInfo);
		
		return mav;
	}

	@RequestMapping(value="/getReviewForRead.do")
	public ModelAndView getReviewForRead(@RequestParam Map<String, Object> param, HttpSession session) {
		ModelAndView mav = new ModelAndView("jsonView");

		@SuppressWarnings("unchecked")
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}
		
		HashMap<String, Object> reviewInfo = userReviewService.selectReviewForReadByUser(param);
		mav.addObject("reviewInfo", reviewInfo);
		
		return mav;
	}

	@RequestMapping(value="/reviewUpdate.do")
	public ModelAndView reviewUpdate(
			@RequestParam("reviewId") Long reviewId,
			@RequestParam("orderId") Long orderId,
			@RequestParam("productId") Long productId,
			@RequestParam("title") String title,
			@RequestParam("content") String content,
			@RequestParam("rating") Double rating,
			@RequestParam(value = "deletedImageIds", required = false) List<Long> deletedImageIds,
			@RequestParam(value = "photos", required = false) List<MultipartFile> photos,
			HttpSession session
		) {
		
		ModelAndView mav = new ModelAndView("jsonView");

		Map<String, Object> param = new HashMap<String, Object>();
		
		@SuppressWarnings("unchecked")
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}
		
		param.put("reviewId", reviewId);
		param.put("orderId", orderId);
		param.put("productId", productId);
		param.put("title", title);
		param.put("content", content);
		param.put("rating", rating);
		
		// 리뷰 정보 출력
		System.out.println(param);
		System.out.println(deletedImageIds);
		
		int result = userReviewService.updateReviewByUser(param, deletedImageIds, photos);

		mav.addObject("result", result);
						
		return mav;
	}

	@RequestMapping(value="/reviewDelete.do")
	public ModelAndView reviewDelete(@RequestParam Map<String, Object> param, HttpSession session) {
		ModelAndView mav = new ModelAndView("jsonView");

		@SuppressWarnings("unchecked")
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
		if(userInfo != null) {
			String memberId = (String) userInfo.get("MEMBER_ID");
			param.put("memberId", memberId);
		}

		int result = userReviewService.deleteReviewByUser(param);
		mav.addObject("result", result);

		return mav;
	}

	@RequestMapping(value="/reviewControl.do")
	public ModelAndView reviewControl() {
		ModelAndView mav = new ModelAndView();
		
		mav.setViewName("review/reviewControl");
		
		return mav;
	}
}
