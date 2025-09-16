package user.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import lombok.Data;

import user.mail.UserMailService;
import user.service.UserMemberService;

@Controller
public class UserMemberController {
	@Autowired
	private UserMemberService userMemberService;
	@Autowired
	private UserMailService mailService;
	
	public class CodeInfo {
	    private int code;           // 인증번호
	    private long createdTime;   // 발급 시간 (밀리초)

	    public CodeInfo(int code, long createdTime) {
	        this.code = code;
	        this.createdTime = createdTime;
	    }

	    public int getCode() {
	        return code;
	    }

	    public long getCreatedTime() {
	        return createdTime;
	    }
	}
	
	private static final Map<String, CodeInfo> emailAuthMap = new ConcurrentHashMap();
	
	public void saveAuthCode(String email, int code) {
	    emailAuthMap.put(email, new CodeInfo(code, System.currentTimeMillis()));
	}
	
	public boolean verifyAuthCode(String email, int inputCode) {
	    CodeInfo info = emailAuthMap.get(email);
	    return info != null && info.getCode() == inputCode;
	}
	
	public static int RandomCode () {
		int number = (int)(Math.random() * 900000) + 100000;
		return number;
	}
	
	// LOGIN 로그인
	@RequestMapping("/login.do")
	public ModelAndView loginPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/login");
		return mv;
	}
	
	// SIGN 회원가입
	@RequestMapping("/sign.do")
	public ModelAndView signUser () {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/sign-up");
		return mv;
	}

	@RequestMapping(value = "/insertSignUpByUser.do", method = RequestMethod.POST)
    public ModelAndView insertSignUpByUser(
            @RequestParam("id") String id,
            @RequestParam("password") String password,
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("birth") String birth,
            @RequestParam("gender") String gender
    ) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("jsonView");
        Map<String, Object> sign = new HashMap();
        sign.put("id", id);
        sign.put("password", password);
        sign.put("name", name);
        sign.put("email", email);
        sign.put("phone", phone);
        sign.put("birth", birth);
        sign.put("gender", gender);
        sign.put("loginType","IDPW");
        try {
        	int count = userMemberService.insertSignUpByUser(sign);
        	if(count == 1) {
        		mv.addObject("status", 200);
        	} else {
        		mv.addObject("status", 500);
        	}
        } catch (Exception e) {
        	mv.addObject("status", 500);
        	System.out.println(e);
        }
        return mv;
    }

	@RequestMapping("/selectIdCheckByUser.do")
	public ModelAndView selectIdCheckByUser (@RequestParam("id") String id) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("jsonView");
		try{
			int idCnt = userMemberService.selectIdCheckByUser(id);
			mv.addObject("count", idCnt);
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
	        @RequestParam("to") String to
        ) {
	    ModelAndView mv = new ModelAndView("mailResult");
	    mv.setViewName("jsonView");
	    try {
			int emailChk = userMemberService.selectEmailCheckByUser(to);
			System.out.println(to);
			System.out.println(emailChk == 0);
			if(emailChk == 0){
				String subject = "DDD.D 이메일 인증번호";
				String text = "DDD.D 이메일 인증번호: ";
				int code = RandomCode();
				saveAuthCode(to,code);
	    		mailService.sendMail(to, subject, text + code);	
				mv.addObject("status", 200);
				mv.addObject("to",to);
			} else {
				mv.addObject("status", 409);
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	    return mv;
	}
	
	@RequestMapping("/selectVerifyAuthByUser.do")
	public ModelAndView selectVerifyAuthByUser(
			@RequestParam("to") String to,
			@RequestParam("code") int code
			) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("jsonView");
		mv.addObject("result", verifyAuthCode(to,code)) ;
		return mv;
	}
}
