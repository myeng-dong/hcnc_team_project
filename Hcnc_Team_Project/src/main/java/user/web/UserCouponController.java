package user.web;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import user.service.UserCouponService;

@Controller
public class UserCouponController {
	
	@Autowired
	private UserCouponService userCouponService;
	
	

	

}
