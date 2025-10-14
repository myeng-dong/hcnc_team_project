package admin.web;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.BannerService;
import admin.util.UploadFile;

@Controller
public class BannerController {
    
    @Autowired
    private BannerService bannerService;
    
    @Autowired
    private UploadFile uploadFile;
    
    @RequestMapping(value="/selectBannerListByAdmin.do")
    public NexacroResult selectBannerListByAdmin(
            @ParamDataSet(name="ds_search", required=false) Map<String, Object> dsSearch) {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> selectBannerList = bannerService.selectBannerListByAdmin(dsSearch);
        result.addDataSet("ds_banner", selectBannerList);
        return result;
    }
    
    @RequestMapping(value = "/selectBannerDetailByAdmin.do")
    public NexacroResult selectBannerDetailByAdmin(
    		@ParamVariable(name = "BANNER_ID", required = false) String bannerId) {
    	NexacroResult result = new NexacroResult();
    	try {
    		Map<String, Object> bannerDetail = bannerService.selectBannerDetailByAdmin(bannerId);
    		result.addDataSet("ds_bwrite", bannerDetail);
    	} catch (Exception e) {
    		System.out.println(e);
    		result.setErrorCode(-1);
    		result.setErrorMsg("상세조회 중 오류발생");
    	}
    	return result;
    }	
    
    @RequestMapping(value = "/previewBannerFile.do")
    public NexacroResult previewBannerFile(@RequestParam("bFile") MultipartFile file) {
        return bannerService.previewBannerFile(file);
    }
    
    @RequestMapping(value="/insertBannerByAdmin.do")
    public NexacroResult insertBannerByAdmin(
            @ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBWrite,
            @ParamDataSet(name="ds_file", required=false) List<Map<String, Object>> dsFile) {
        return bannerService.insertBannerByAdmin(dsBWrite, dsFile);
    }
    
    @RequestMapping(value="/updateBannerByAdmin.do")
    public NexacroResult updateBannerByAdmin(
            @ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBUpdate,
            @ParamDataSet(name="ds_file", required=false) List<Map<String, Object>> dsFile) {
        return bannerService.updateBannerByAdmin(dsBUpdate, dsFile);
    }
    
    @RequestMapping(value="/deleteBannerByAdmin.do")
    public NexacroResult deleteBannerByAdmin(
            @ParamDataSet(name="ds_banner", required=false) List<Map<String, Object>> bannerList) {
        return bannerService.deleteBannerByAdmin(bannerList);
    }
}
