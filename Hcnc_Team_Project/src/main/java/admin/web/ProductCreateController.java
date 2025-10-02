package admin.web;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest; // javax 유지

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.ProductCreateService;
import admin.util.UploadFile;
import admin.util.UploadFile.ImageType;
import admin.util.UploadResult;

@Controller
public class ProductCreateController {
	
	@Autowired
	ProductCreateService productCreateService;
	@Autowired
	UploadFile uploadFile;
	
	@RequestMapping(value="/selectProductCategoryListByAdmin.do", produces = "application/json; charset=utf-8")
    public ResponseEntity<String> getCategories() throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Map<String,Object>> categorys = productCreateService.selectProductCategoryListByAdmin();
	   	System.out.println(objectMapper.writeValueAsString(categorys));
        String jsonString = objectMapper.writeValueAsString(categorys);
        
        return ResponseEntity.ok(jsonString);
    }
	
	@RequestMapping(value="/previewProductCreateByAdmin.do")
	public NexacroResult previewProductCreateByAdmin(
			 @RequestParam("file") MultipartFile file
			){
		NexacroResult rs = new NexacroResult();
		try {
			UploadResult ur = uploadFile.uploadToFile(file, ImageType.PREVIEW); 
			String fileName = ur.getFileName();
			Map<String,Object> res = new HashMap();
			res.put("fileName",fileName);
			rs.addDataSet("preview",res);
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return rs;
	}
	
	@RequestMapping(value = "/insertProductCreateByAdmin.do")
	public NexacroResult insertProductCreateByAdmin(
	        @ParamDataSet(name = "ds_product", required = false) Map<String, Object> ds_product,
	        @ParamDataSet(name = "preview", required = false) List<Map<String, Object>> preview
	) {
	    NexacroResult rs = new NexacroResult();

	    try {
	    	int imageSize = (preview != null) ? preview.size() : 0;
	        System.out.println(ds_product);
	        System.out.println(preview);

	        // 1. 제품 정보 Insert
	        Map<String, Object> product = ds_product;
	        int count = productCreateService.insertProductCreateByAdmin(product);
	        
	        Long productId = (Long) product.get("PRODUCT_ID");
	        
	        if (count != 1) {
	            rs.addDataSet("createStatus", "PRODUCT");
	            return rs;
	        }
	        int sortNum = 0;
	        for (Map<String, Object> pre : preview) {
	            Map<String, Object> insertPreview = new HashMap<>();
	            String fileName = (String) pre.get("fileUrl");

	            insertPreview.put("PRODUCT_ID", productId);
	            insertPreview.put("IMAGE_URL", fileName);
	            insertPreview.put("SORT_NUMBER", sortNum);
	            sortNum++;
	            productCreateService.insertProductImageByAdmin(insertPreview);
	            uploadFile.moveFile(fileName,ImageType.PRODUCT);
	        }

	        if (imageSize != sortNum) {
	            rs.addDataSet("createStatus", "IMAGE");
	            return rs;
	        }

	        Map<String, Object> insertInven = new HashMap<>();
	        insertInven.put("PRODUCT_ID", productId);
	        insertInven.put("STOCK", ds_product.get("STOCK"));
	        int inventoryCount = productCreateService.insertCreateInventoryByAdmin(insertInven);

	        if (inventoryCount != 1) {
	            rs.addDataSet("createStatus", "INVEN");
	            return rs;
	        }

	        rs.addDataSet("createStatus", "SUCCESS");
	        return rs;

	    } catch (Exception e) {
	        System.out.println(e);
	    }

	    return rs;
	}
	
	@RequestMapping(value="/deleteFile.do")
	public  NexacroResult insertProductCreateByAdmin(
			@ParamDataSet(name="ds_deleteImage", required = false) List<Map<String, Object>> ds_deleteImage
			){
		NexacroResult rs = new NexacroResult();
		List<Map<String,String>> result = new ArrayList<>();
		try {
			for(Map<String, Object> image : ds_deleteImage) {
				String fileName = (String)image.get("fileName");
				UploadResult ur = uploadFile.deleteFile(fileName,ImageType.PRODUCT);
				Map<String, String> map = new HashMap<>();
				map.put("fileName",ur.getFileName());
				result.add(map);
			}
			rs.addDataSet("ds_delete_result",result);
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return rs;
	}
	
	
}
