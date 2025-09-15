package admin.web;

import java.util.List;
import java.util.Map;


import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


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
		System.out.println("배너 리스트는 잘불러오는중");
		System.out.println(selectBannerList);
		result.addDataSet("ds_banner", selectBannerList);
		return result;
	}
	
	@RequestMapping(value="/insertBannerByAdmin.do")
	public NexacroResult insertBannerByAdmin(@ParamDataSet(name="ds_bwrite", required = false) Map<String, Object> dsBWrite, HttpSession session) {
		NexacroResult result = new NexacroResult();
			try{
				bannerService.insertBannerByAdmin(dsBWrite);
				result.setErrorCode(0);
				result.setErrorMsg("글작성완료 ");
			}
			catch(Exception e){ //아예 안됨
				System.out.println(e);
				result.setErrorCode(-1);
				result.setErrorMsg("글작성실패");
			}
			return result;
	}

	@RequestMapping(value="/updateBannerByAdmin.do")
	public NexacroResult updateBannerByAdmin(@ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBUpdate,HttpSession session) {
		NexacroResult result = new NexacroResult();
		try{
			bannerService.updateBannerByAdmin(dsBUpdate);
			result.setErrorCode(0);
			result.setErrorMsg("글업데이트작성했다 ");
		}
		catch(Exception e){ //아예 안됨
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("글업데이트 실패");
		}
		return result;

	}


}
