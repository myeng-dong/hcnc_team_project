package admin.web;

import java.io.File;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest; // javax 유지

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.ProductService;

@Controller
public class ProductController {

    @Autowired
    private ProductService productService;

    // 상품 목록 조회
    @RequestMapping("/selectProductListByAdmin.do")
    public NexacroResult selectProductListByAdmin(
            @ParamDataSet(name="ds_searchCond", required=false) Map<String,Object> cond) {

        // null 방지
        if (cond == null) cond = new HashMap<>();

        // 'all'/'allS' 같은 프론트 기본값은 서버에서 무시 처리
        Object qs = cond.get("QUANTITY_STATUS");
        if (qs != null && "allS".equalsIgnoreCase(String.valueOf(qs))) {
            cond.remove("QUANTITY_STATUS");
        }
        Object iv = cond.get("IS_VISIBLE");
        if (iv != null && "all".equalsIgnoreCase(String.valueOf(iv))) {
            cond.remove("IS_VISIBLE");
        }
        
        
        // 날짜 값 정규화 (유효하지 않으면 제거)
        String sd = normalizeYmd(cond.get("START_DATE"));
        String ed = normalizeYmd(cond.get("END_DATE"));
        if (sd == null) cond.remove("START_DATE"); else cond.put("START_DATE", sd);
        if (ed == null) cond.remove("END_DATE");   else cond.put("END_DATE", ed);
        
        System.out.println(">>> [Controller cond] " + cond);

        List<Map<String,Object>> list = productService.selectProductListByAdmin(cond);

        NexacroResult rs = new NexacroResult();
        rs.addDataSet("ds_out_proList", list);
        return rs;
    }

 // 추가: 'yyyy-MM-dd'만 통과시키는 헬퍼
    private String normalizeYmd(Object x) {
        if (x == null) return null;
        String s = String.valueOf(x).trim();
        return s.matches("\\d{4}-\\d{2}-\\d{2}") ? s : null;
    }
    
    
    // 대분류 콤보
    @RequestMapping("/selectMainCategoryComboByAdmin.do")
    public NexacroResult selectMainCategoryComboByAdmin() {
        NexacroResult result = new NexacroResult();
        List<Map<String,Object>> list = productService.selectMainCategoryComboByAdmin();
        result.addDataSet("ds_mainCate", list);
        return result;
    }

    // 중분류 콤보 (대분류 선택시)
    @RequestMapping("/selectSubCategoryComboByAdmin.do")
    public NexacroResult selectSubCategoryComboByAdmin(
            @ParamVariable(name="MAIN_CATE_ID") int mainCateId) {
        NexacroResult result = new NexacroResult();
        List<Map<String,Object>> list = productService.selectSubCategoryComboByAdmin(mainCateId);
        result.addDataSet("ds_subCate", list);
        return result;
    }

    
 // ----------------- 카테고리 관리 -----------------

	 // 대분류 조회
	 @RequestMapping("/selectMainCategoryByAdmin.do")
	 public NexacroResult selectMainCategoryByAdmin() {
	     NexacroResult result = new NexacroResult();
	     result.addDataSet("ds_mainCate", productService.selectMainCategoryByAdmin());
	     return result;
	 }
	
	 // 중분류 조회
	 @RequestMapping("/selectSubCategoryByAdmin.do")
	 public NexacroResult selectSubCategoryByAdmin() {
	     NexacroResult result = new NexacroResult();
	     result.addDataSet("ds_subCate", productService.selectSubCategoryByAdmin());
	     return result;
	 }
	
	 // 추가
	 @RequestMapping("/insertCategoryByAdmin.do")
	 public NexacroResult insertCategoryByAdmin(@ParamDataSet(name="ds_in") Map<String,Object> param) {
	     productService.insertCategoryByAdmin(param);
	     return new NexacroResult();
	 }
	
	 // 수정
	 @RequestMapping("/updateCategoryByAdmin.do")
	 public NexacroResult updateCategoryByAdmin(@ParamDataSet(name="ds_in") Map<String,Object> param) {
	     productService.updateCategoryByAdmin(param);
	     return new NexacroResult();
	 }
	
	 // 삭제
	 @RequestMapping("/deleteCategoryByAdmin.do")
	 public NexacroResult deleteCategoryByAdmin(@ParamDataSet(name="ds_in") Map<String,Object> param) {
	     productService.deleteCategoryByAdmin(param);
	     return new NexacroResult();
 }

	 
	 
	 
	 
	// 상품 진열상태 변경
	 @RequestMapping("/updateProductVisibleByAdmin.do")
	 public NexacroResult updateProductVisibleByAdmin(
	         @ParamDataSet(name="ds_in") List<Map<String,Object>> dsIn) {

	     for (Map<String,Object> row : dsIn) {
	         productService.updateProductVisibleByAdmin(row);
	     }
	     return new NexacroResult();
	 }

	 
	 
	 
	 
	 

    
    
 // ----------------- 옵션 관리 -----------------
    
	 //옵션 목록 리스트 조회,검색
	 @RequestMapping("/selectOptionByAdmin.do")
	 public NexacroResult selectOptionByAdmin(
			 @ParamDataSet(name = "ds_searchCond", required = false) Map<String, Object> cond) {
		 NexacroResult result = new NexacroResult();
		 
		 // null 방지
		 if (cond == null) cond = new HashMap<>();
		 
		 result.addDataSet("ds_out_opList", productService.selectOptionByAdmin(cond));
		 return result;
	 }
	    
	    
	    
    
   
	// 옵션 진열상태 변경 (선택된 행들 일괄 처리)
	 @RequestMapping("/updateOptionVisibleByAdmin.do")
	 public NexacroResult updateOptionVisibleByAdmin(
	         @ParamDataSet(name="ds_in") List<Map<String,Object>> dsIn) {

	     for (Map<String,Object> row : dsIn) {
	    	 
	         // row 예시: {OPTION_ID=5, IS_VISIBLE="N"}
	         productService.updateOptionVisibleByAdmin(row);
	     }

	     return new NexacroResult(); // 성공 여부만 반환
	 }

    
    
    
    
	 
	 
	// 옵션 단건 조회(옵션 저장시 타입 노멀값으로 가져오기위해)
	 @RequestMapping("/selectOptionOneByAdmin.do")
	 public NexacroResult selectOptionOneByAdmin(
	         @ParamVariable(name="OPTION_ID") Long optionId) {

	     NexacroResult result = new NexacroResult();
	     Map<String,Object> option = productService.selectOptionOneByAdmin(optionId);
	     if(option != null) {
	         result.addDataSet("ds_optionReg", Collections.singletonList(option));
	     }
	     return result;
	 }

	 
	 
	 
    
    // 옵션 저장
    @RequestMapping("/saveOptionByAdmin.do")
    public NexacroResult saveOptionByAdmin(
    		@ParamDataSet(name = "ds_optionReg") List<Map<String, Object>> optionList,
    		HttpServletRequest request) {
    	
    	NexacroResult result = new NexacroResult();
    	
    	try {
    		
    		String loginId = (String) request.getSession().getAttribute("loginId");

    		for (Map<String, Object> option : optionList) {
    		    Object optionId = option.get("OPTION_ID");

    		    if (optionId != null && !"".equals(optionId.toString())) {
    		        // PK 있으면 update
    		        option.put("UPDATE_ID", loginId);
    		        productService.updateOption(option);
    		    } else {
    		        // PK 없으면 insert
    		        option.put("INPUT_ID", loginId);
    		        productService.insertOption(option);
    		    }
    		}

			
			result.setErrorCode(0);
			result.setErrorMsg("옵션 저장 성공");
			
		} catch (Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg("옵션 저장 실패" + e.getMessage());
			
		}
    	
    	return result;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	// ----------------- 상품관리 -----------------  
	// 상품 등록 (상품/옵션/재고)
	@RequestMapping("/insertProductByAdmin.do")
	public NexacroResult insertProductByAdmin(
	        @ParamDataSet(name="ds_product") List<Map<String,Object>> dsProduct,
	        @ParamDataSet(name="ds_selOptions", required=false) List<Map<String,Object>> dsSelOptions,
	        @ParamDataSet(name="ds_inventory", required=false) List<Map<String,Object>> dsInventory) {

	    NexacroResult rs = new NexacroResult();

	    // 1) 상품 저장
	    if (dsProduct == null || dsProduct.isEmpty()) {
	        throw new IllegalArgumentException("상품 정보가 누락되었습니다.");
	    }
	    Map<String,Object> p = dsProduct.get(0);
	    productService.insertProduct(p); // useGeneratedKeys → p에 PRODUCT_ID 세팅됨
	    Long productId = (Long) p.get("PRODUCT_ID");

	    // 2) 옵션 저장 (팝업에서 선택한 옵션들)
	    if (dsSelOptions != null) {
	        for (Map<String,Object> opt : dsSelOptions) {
	            opt.put("PRODUCT_ID", productId);
	            productService.insertOption(opt);
	        }
	    }

	    // 3) 재고 저장
	    if (dsInventory != null) {
	        for (Map<String,Object> inv : dsInventory) {
	            inv.put("PRODUCT_ID", productId);
	            productService.insertInventory(inv);
	        }
	    }

	    // 4) 반환 (등록된 PRODUCT_ID 넘겨줌)
	    Map<String,Object> out = new HashMap<>();
	    out.put("PRODUCT_ID", productId);
	    rs.addDataSet("ds_out_product", Collections.singletonList(out));
	    return rs;
	}


    // 5) CKEditor 이미지 업로드
    @RequestMapping(value="/uploadImageProductByAdmin.do", method=RequestMethod.POST)
    @ResponseBody
    public String uploadImageProductByAdmin(@RequestParam("upload") MultipartFile file,
                                            HttpServletRequest request) throws Exception {
        String uploadPath = request.getServletContext().getRealPath("/resources/upload/product/");
        File dir = new File(uploadPath);
        if(!dir.exists()) dir.mkdirs();

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        File dest = new File(uploadPath, fileName);
        file.transferTo(dest);

        String fileUrl = request.getContextPath() + "/resources/upload/product/" + fileName;

        Map<String,Object> fileInfo = new HashMap<>();
        fileInfo.put("PRODUCT_ID", 0L);                    // 임시(상품연결 전)
        fileInfo.put("IMAGE_URL", fileUrl);
        fileInfo.put("ALT_TEXT", file.getOriginalFilename());
        fileInfo.put("SORT_NUMBER", 0);
        fileInfo.put("IS_MAIN", "N");
        productService.insertProductImage(fileInfo);

        String callback = request.getParameter("CKEditorFuncNum");
        return "<script>window.parent.CKEDITOR.tools.callFunction("
                + callback + ", '" + fileUrl + "', '이미지가 업로드되었습니다.');</script>";
    }

    // 6) 이미지 매핑 및 대표이미지 지정
    @RequestMapping("/updateProductImageMappingByAdmin.do")
    public NexacroResult updateProductImageMappingByAdmin(@RequestParam Map<String,Object> param) {
        NexacroResult rs = new NexacroResult();
        productService.updateProductImageMapping(param); // PRODUCT_ID로 매핑
        productService.setMainImage(param);              // 첫 이미지 대표 지정
        return rs;
    }
}
