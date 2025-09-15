package user.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import lombok.Data;

import user.mail.UserMailService;
import user.service.UserMemberService;

@Controller
public class UserMemberController {
	@Autowired
	private UserMemberService userMemberService;
	private UserMailService mailService;
	
	@Data
	public class SignupForm {
		private String id;
		private String password;
		private String name;
		private String email;
		private String emailCode;
		private String phone;
		private String bitrh;
		private String gender;
	}

	@RequestMapping("/insertSignUpByUser.do")
	public ModelAndView insertSignUpByUser (SignupForm signupForm) {
		ModelAndView mv = new ModelAndView();
		System.out.println(signupForm);
		return mv;
	}

	@RequestMapping("/selectIdCheckByUser.do")
	public ModelAndView selectIdCheckByUser (@RequestParam("id") String id) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("jsonView");
		try{
			int idCnt = userMemberService.selectIdCheckByUser(id);
			if(idCnt == 0){
				mv.addObject("status", 200);
			} else {
				mv.addObject("status", 409);
			}
		}catch(Exception e){
			System.out.println(e);
		}
		return mv;
	}

	@RequestMapping("/selectEmailCheckByUser.do")
	public ModelAndView selectEmailCheckByUser(
	        @RequestParam("to") String to,
	        @RequestParam("subject") String subject,
	        @RequestParam("text") String text
        ) {
	    ModelAndView mv = new ModelAndView("mailResult");
	    mv.setViewName("jsonView");
	    try {
			int emailChk = userMemberService.selectEmailCheckByUser(to);
			if(emailChk == 0){
	    		mailService.sendMail(to, subject, text);	
				mv.addObject("status", 200);
			} else {
				mv.addObject("status", 409);
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	    
	    mv.addObject("to", to);
	    
	    return mv;
	}
}
