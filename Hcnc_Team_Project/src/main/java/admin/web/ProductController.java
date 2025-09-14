package admin.web;

import java.io.File;
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
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.ProductService;

@Controller
public class ProductController {

    @Autowired
    private ProductService productService;

    // 상품 목록 조회
    @RequestMapping("/selectProductListByAdmin.do")
    public NexacroResult selectProductListByAdmin(
            @ParamDataSet(name="ds_in_proList", required=false) List<Map<String,Object>> in) {
        NexacroResult rs = new NexacroResult();
        Map<String,Object> p = (in != null && !in.isEmpty()) ? in.get(0) : new HashMap<>();
        rs.addDataSet("ds_out_proList", productService.selectProductListByAdmin(p));
        return rs;
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
        rs.addDataSet("ds_out_product", List.of(out));

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

