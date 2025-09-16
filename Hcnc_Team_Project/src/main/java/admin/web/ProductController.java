package admin.web;

import java.io.File;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest; // javax 로 변경

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
            @ParamVariable(name="SEARCH_TEXT", required=false) String searchText,
            @ParamVariable(name="SEARCH_TYPE", required=false) String searchType,
            @ParamVariable(name="IS_VISIBLE", required=false) String isVisible,
            @ParamVariable(name="QUANTITY_STATUS", required=false) String quantityStatus,
            @ParamVariable(name="START_DATE", required=false) String startDate,
            @ParamVariable(name="END_DATE", required=false) String endDate,
            @ParamVariable(name="MAIN_CATE_ID", required=false) String mainCateId,
            @ParamVariable(name="SUB_CATE_ID", required=false) String subCateId
    ) {
        Map<String,Object> p = new HashMap<>();
        if (searchText != null) p.put("SEARCH_TEXT", searchText);
        if (searchType != null) p.put("SEARCH_TYPE", searchType);
        if (isVisible != null) p.put("IS_VISIBLE", isVisible);
        if (quantityStatus != null) p.put("QUANTITY_STATUS", quantityStatus);
        if (startDate != null) p.put("START_DATE", startDate);
        if (endDate != null) p.put("END_DATE", endDate);
        if (mainCateId != null) p.put("MAIN_CATE_ID", mainCateId);
        if (subCateId != null) p.put("SUB_CATE_ID", subCateId);

        System.out.println(">>> [Controller param] " + p);

        List<Map<String,Object>> list = productService.selectProductListByAdmin(p);

        NexacroResult rs = new NexacroResult();
        rs.addDataSet("ds_out_proList", list);
        return rs;
    }


    
    
		/*
		 * @RequestMapping("/selectProductListByAdmin.do") public NexacroResult
		 * selectProductListByAdmin(
		 * 
		 * @ParamDataSet(name="ds_in_proList", required=false) List<Map<String,Object>>
		 * in,
		 * 
		 * @RequestParam Map<String,Object> param, HttpServletRequest request) {
		 * 
		 * System.out.println("params=" + param); NexacroResult rs = new
		 * NexacroResult();
		 * 
		 * // 1) ds_in_proList + RequestParam 병합 Map<String,Object> p = (in != null &&
		 * !in.isEmpty()) ? new HashMap<>(in.get(0)) : new HashMap<>(); if (param !=
		 * null) p.putAll(param); System.out.println(">>> [Controller param] " + p);
		 * 
		 * // 2) 'undefined' → "" 치환 cleanParam(p, "PRODUCT_NAME", "IS_VISIBLE",
		 * "QUANTITY_STATUS", "START_DATE", "END_DATE", "MAIN_CATE_NM", "SUB_CATE_NM");
		 * 
		 * // 3) 디버깅 로그 System.out.println("[selectProductListByAdmin] params = " + p);
		 * 
		 * List<Map<String,Object>> list = productService.selectProductListByAdmin(p);
		 * System.out.println(">>> [Controller param] " + p);
		 * 
		 * // 5) 결과 rs.addDataSet("ds_out_proList", list);
		 * 
		 * try { System.out.println(">>> selectProductListByAdmin.do called"); } catch
		 * (Exception e) { rs.setErrorCode(-1); } return rs; }
		 */
    
    
    
    
    
    // 간단한 파라미터 클리너
    private void cleanParam(Map<String,Object> p, String... keys){
        for (String k : keys){
            Object v = p.get(k);
            if (v == null) continue;
            String s = String.valueOf(v);
            if ("undefined".equalsIgnoreCase(s) || "null".equalsIgnoreCase(s)) {
                p.put(k, "");
            }
        }
    }
    
    
    //대분류
    @RequestMapping("selectMainCategoryComboByAdmin.do")
    public NexacroResult selectMainCategoryComboByAdmin() {
        NexacroResult result = new NexacroResult();
        List<Map<String,Object>> list = productService.selectMainCategoryComboByAdmin();
        result.addDataSet("ds_mainCate", list);
        return result;
    }
    
    //중분류
    @RequestMapping("selectSubCategoryComboByAdmin.do")
    public NexacroResult selectSubCategoryComboByAdmin(@ParamVariable(name="MAIN_CATE_ID") int mainCateId) {
        NexacroResult result = new NexacroResult();
        List<Map<String,Object>> list = productService.selectSubCategoryComboByAdmin(mainCateId);
        result.addDataSet("ds_subCate", list);
        return result;
    }
    
    // 상품 등록
    @RequestMapping("/insertProductByAdmin.do")
    public NexacroResult insertProductByAdmin(
            @ParamDataSet(name="ds_product") List<Map<String,Object>> dsProduct,
            @ParamDataSet(name="ds_option", required=false) List<Map<String,Object>> dsOption,
            @ParamDataSet(name="ds_inventory", required=false) List<Map<String,Object>> dsInventory) {

        NexacroResult rs = new NexacroResult();

        // 1. 상품 저장
        Map<String,Object> p = dsProduct.get(0);
        productService.insertProduct(p);
        Long productId = (Long) p.get("PRODUCT_ID");

        // 2. 옵션 저장
        if(dsOption != null) {
            for(Map<String,Object> opt : dsOption) {
                opt.put("PRODUCT_ID", productId);
                productService.insertOption(opt);
            }
        }

        // 3. 재고 저장
        if(dsInventory != null) {
            for(Map<String,Object> inv : dsInventory) {
                inv.put("PRODUCT_ID", productId);
                productService.insertInventory(inv);
            }
        }

        // 4. 반환
        Map<String,Object> out = new HashMap<>();
        out.put("PRODUCT_ID", productId);
//        rs.addDataSet("ds_out_product", List.of(out));
        rs.addDataSet("ds_out_product", Collections.singletonList(out));
        

        return rs;
    }

    // CKEditor 이미지 업로드
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
        fileInfo.put("PRODUCT_ID", 0L);
        fileInfo.put("IMAGE_URL", fileUrl);
        fileInfo.put("ALT_TEXT", file.getOriginalFilename());
        fileInfo.put("SORT_NUMBER", 0);
        fileInfo.put("IS_MAIN", "N");
        productService.insertProductImage(fileInfo);

        String callback = request.getParameter("CKEditorFuncNum");
        return "<script>window.parent.CKEDITOR.tools.callFunction("
                + callback + ", '" + fileUrl + "', '이미지가 업로드되었습니다.');</script>";
    }

    // 이미지 매핑
    @RequestMapping("/updateProductImageMappingByAdmin.do")
    public NexacroResult updateProductImageMappingByAdmin(@RequestParam Map<String,Object> param) {
        NexacroResult rs = new NexacroResult();
        productService.updateProductImageMapping(param);
        productService.setMainImage(param);
        return rs;
    }
}

