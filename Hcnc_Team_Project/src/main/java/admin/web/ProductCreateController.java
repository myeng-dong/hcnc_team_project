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
        String jsonString = objectMapper.writeValueAsString(categorys);
        
        return ResponseEntity.ok(jsonString);
    }
	
	@RequestMapping(value="/selectTargetProductByAdmin.do")
	public NexacroResult selectTargetProductByAdmin(
			@ParamVariable(name="productId") String productId
			){
		NexacroResult rs = new NexacroResult();
		try {
			System.out.println("productId= "+productId);
			Map<String,Object> product = productCreateService.selectTargetProductByAdmin(productId);
			List<Map<String,Object>> images = productCreateService.selectProductImageListByAdmin(productId);
			System.out.println(product);
			rs.addDataSet("ds_product",product);
			rs.addDataSet("ds_preview_origin",images);
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return rs;
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
	    Map<String,Object> res = new HashMap();
	    try {
	    	int imageSize = (preview != null) ? preview.size() : 0;
	    	System.out.println("CREATE");
	        System.out.println(ds_product);
	        System.out.println(preview);

	        // 1. 제품 정보 Insert
	        Map<String, Object> product = ds_product;
	        int count = productCreateService.insertProductCreateByAdmin(product);
	        
	        Long productId = (Long) product.get("PRODUCT_ID");
	        
	        if (count != 1) {
	        	res.put("status", "PRODUCT");
	            rs.addDataSet("createStatus", res);
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
	        	res.put("status", "IMAGE");
	            rs.addDataSet("createStatus", res);
	            return rs;
	        }

	        Map<String, Object> insertInven = new HashMap<>();
	        insertInven.put("PRODUCT_ID", productId);
	        insertInven.put("STOCK", ds_product.get("STOCK"));
	        int inventoryCount = productCreateService.insertCreateInventoryByAdmin(insertInven);

	        if (inventoryCount != 1) {
	        	res.put("status", "INVEN");
	            rs.addDataSet("createStatus", res);
	            return rs;
	        }
	        res.put("status", "SUCCESS");
	        rs.addDataSet("createStatus", res);
	        return rs;

	    } catch (Exception e) {
	        System.out.println(e);
	    }

	    return rs;
	}

	@RequestMapping(value = "/updateProductCreateByAdmin.do")
	public NexacroResult updateProductCreateByAdmin(
	        @ParamDataSet(name = "ds_product", required = false) Map<String, Object> ds_product,
	        @ParamDataSet(name = "preview", required = false) List<Map<String, Object>> preview,
	        @ParamDataSet(name = "ds_preview_origin", required = false) List<Map<String, Object>> ds_preview_origin,
	        @ParamDataSet(name = "ds_delete_image", required = false) List<Map<String, Object>> ds_delete_image
	) {
	    NexacroResult rs = new NexacroResult();
	    Map<String,Object> res = new HashMap();
	    try {
	    	int imageSize = (preview != null) ? preview.size() : 0;
	    	int deleteImageSize = (ds_delete_image != null) ? ds_delete_image.size() : 0;
	    	System.out.println("UPDATE");
	        System.out.println("ds_product= " + ds_product);
	        System.out.println("preview= " + preview);
	        System.out.println("ds_preview_origin= " + ds_preview_origin);
	        System.out.println("ds_delete_image= " + ds_delete_image);

	        // 1. 제품 정보 Update
	        String productId = String.valueOf(ds_product.get("PRODUCT_ID"));
	        ds_product.put("PRODUCT_ID",productId);
	        int updateCnt = productCreateService.updateProductCreateByAdmin(ds_product);
	        if (updateCnt != 1) {
	        	res.put("status", "PRODUCT");
	            rs.addDataSet("createStatus", res);
	            return rs;
	        }
	        
	        // 사진 삭제 후 업로드 처리
	        if(deleteImageSize != 0) {
	        	for (Map<String, Object> origin :ds_delete_image) {
	        		String fileUrl = (String) origin.get("fileUrl"); 
	        		int delCnt = productCreateService.deleteProductImageListByAdmin(fileUrl);
	        		uploadFile.deleteFile(fileUrl, ImageType.PRODUCT);
	        	}
	        }
	        int sortNum = 0;
	        if(imageSize != 0) {
	 	        for (Map<String, Object> pre : preview) {
	 	            Map<String, Object> insertPreview = new HashMap<>();
	 	            String fileName = (String) pre.get("fileUrl");
	 	            Boolean exist = Boolean.valueOf((String)pre.get("exist"));
	 	            
	 	            insertPreview.put("PRODUCT_ID", productId);
	 	            insertPreview.put("IMAGE_URL", fileName);
	 	            insertPreview.put("SORT_NUMBER", sortNum);
	 	            if(exist) {
	 	            	productCreateService.updateProductImageByAdmin(insertPreview);
	 	            } else {
	 	            	productCreateService.insertProductImageByAdmin(insertPreview);
		 	            uploadFile.moveFile(fileName,ImageType.PRODUCT);
	 	            }
	 	            sortNum++;
	 	        }
	        }
	       

	        if (imageSize != sortNum) {
	        	res.put("status", "IMAGE");
	            rs.addDataSet("createStatus", res);
	            return rs;
	        }
	        res.put("status", "SUCCESS");
	        rs.addDataSet("createStatus", res);
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
