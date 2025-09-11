package admin.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.BannerService;

@Controller
public class BannerController {
	
	@Autowired
	private BannerService adminService;
	
	@RequestMapping(value="/selectBannerListByAdmin.do")
	public NexacroResult selectBannerListByAdmin() {
		NexacroResult rs = new NexacroResult();
		List<Map<String, Object>> selectBannerList = adminService.selectBannerListByAdmin();
		System.out.println("확인용ㅇ good");
		System.out.println(selectBannerList);
		rs.addDataSet("ds_banner", selectBannerList);
		return rs;
	}
	

}
