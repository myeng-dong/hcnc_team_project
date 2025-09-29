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
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.BannerService;

@Controller
public class BannerController {
    
    @Autowired
    private BannerService bannerService;
    
    @RequestMapping(value="/selectBannerListByAdmin.do")
    public NexacroResult selectBannerListByAdmin() {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> selectBannerList = bannerService.selectBannerListByAdmin();
        result.addDataSet("ds_banner", selectBannerList);
        return result;
    }
    
    @RequestMapping(value = "/uploadBannerFile.do", method = RequestMethod.POST)
    public NexacroResult uploadBannerFile(
            @RequestParam("bFile") List<MultipartFile> bFiles,
            @RequestParam("attachedName") List<String> attachedNames,
            HttpServletRequest request) throws Exception {
        
        return bannerService.uploadBannerFile(bFiles, attachedNames, request);
    }

    @RequestMapping(value="/insertBannerByAdmin.do")
    public NexacroResult insertBannerByAdmin(@ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBWrite) {
        return bannerService.insertBanner(dsBWrite);
    }

    @RequestMapping(value="/updateBannerByAdmin.do")
    public NexacroResult updateBannerByAdmin(@ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBUpdate) {
        return bannerService.updateBanner(dsBUpdate);
    }
}
