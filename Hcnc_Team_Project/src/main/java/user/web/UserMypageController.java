package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import admin.util.PasswordUtil;
import user.mail.UserMailService;
import user.service.UserMemberService;


@Controller
public class UserMypageController {
    @Autowired
	private UserMemberService userMemberService;
	@Autowired
	private UserMailService mailService;

    @RequestMapping(value="/mypage.do",method = RequestMethod.GET)
	public ModelAndView myPage (HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpSession session = request.getSession(false);
		try {
			if(session != null) {
				Map<String, Object> info = (Map<String, Object>) session.getAttribute("userInfo");
				if(info != null) {
					mv.addObject("status",200);
					String id = (String) info.get("MEMBER_ID");
					Map<String, Object> user = userMemberService.selectUserInfoByUser(id);
                    List<Map<String, Object>> orders = userMemberService.selectMypageShippingInfoByUser(id);
					mv.addObject("user",user);
                    mv.addObject("orders",objectMapper.writeValueAsString(orders));
                    System.out.println(orders);
					mv.setViewName("mypage/mypage");
				}
				mv.setViewName("redirect:/login.do");
			} else {
				mv.setViewName("redirect:/login.do");
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		mv.setViewName("mypage/mypage");
		return mv;
	}
    
    @RequestMapping(value="/profile/update.do",method = RequestMethod.GET)
	public ModelAndView memberUpdatePage(HttpServletRequest request) {
    	ModelAndView mv = new ModelAndView();
		ObjectMapper objectMapper = new ObjectMapper();
		HttpSession session = request.getSession(false);
		try {
			if(session != null) {
				Map<String, Object> info = (Map<String, Object>) session.getAttribute("userInfo");
				if(info != null) {
					mv.addObject("status",200);
					String id = (String) info.get("MEMBER_ID");
					Map<String, Object> user = userMemberService.selectUserInfoByUser(id);
					mv.addObject("user",objectMapper.writeValueAsString(user));
					mv.setViewName("mypage/mypage");
				}
				mv.setViewName("redirect:/login.do");
			} 
		} catch (Exception e) {
			// TODO: handle exception
		}
    	
    	mv.setViewName("mypage/update");
    	return mv;
    }
    
    @RequestMapping("/profile/updateMemberByUser.do")
	public ModelAndView updateMemberByUser(
            @RequestParam(value="password",required=false) String password,
            @RequestParam(value="name", required=false) String name,
            @RequestParam(value="email", required=false) String email,
            @RequestParam(value="phone", required=false) String phone,
            @RequestParam(value="birth", required=false) String birth
    ) {
		ModelAndView mv = new ModelAndView("jsonView");
        try{
            Map<String,Object> info = new HashMap<String, Object>();
            if(password != null && !password.equals("")) {
            	System.out.println(password);
            	info.put("password",PasswordUtil.encryptSHA256(password));
        	}
            info.put("name",name);
            info.put("email",email);
            info.put("phone",phone);
            info.put("birth",birth);
            int count = userMemberService.updateMemberByUser(info);
            if(count == 1) {
            	mv.addObject("status",200);
            }
        }catch(Exception e){
            System.out.println(e);
        }
		
		return mv;
	}
}