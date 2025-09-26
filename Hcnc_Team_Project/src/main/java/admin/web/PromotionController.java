package admin.web;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.PromotionService;

@Controller
public class PromotionController {
	
	@Autowired

	private PromotionService promotionService;
	
	
}
