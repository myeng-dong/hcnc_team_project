package user.web;

import java.security.MessageDigest;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
	
	// 이메일 인증번호를 서버메모리에 저장하기위한 Class
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
		if (info != null && info.getCode() == inputCode) {
        emailAuthMap.remove(email);
        return true;
    }
    	return false;
	}
	
	public static int RandomCode () {
		int number = (int)(Math.random() * 900000) + 100000;
		return number;
	}
	
	 public static String sha256(String input) {
	        try {
	            MessageDigest md = MessageDigest.getInstance("SHA-256");
	            byte[] hash = md.digest(input.getBytes("UTF-8"));

	            StringBuilder hexString = new StringBuilder();
	            for (byte b : hash) {
	                String hex = String.format("%02x", b);
	                hexString.append(hex);
	            }
	            return hexString.toString();

	        } catch (Exception e) {
	            throw new RuntimeException(e);
	        }
	}

	private void sendVerificationEmail(String to, ModelAndView mv) throws Exception {
		String subject = "DDD.D 이메일 인증번호";
		String text = "DDD.D 이메일 인증번호: ";
		int code = RandomCode();
		saveAuthCode(to, code);
		mailService.sendMail(to, subject, text + code); 
		mv.addObject("status", 200);
		mv.addObject("to", to);
	}
	// LOGIN 로그인
	@RequestMapping("/login.do")
	public ModelAndView loginPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/login");
		return mv;
	}
	
	@RequestMapping("/selectLoginByUser.do")
	public ModelAndView selectLoginByUser(@RequestParam("id") String id,
            @RequestParam("password") String password, HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		Map<String, Object> login = new HashMap();
		login.put("id",id);
		login.put("password",sha256(password));
		try{
			Map<String, Object> info = userMemberService.selectLoginByUser(login);
			if(info == null) {
				mv.addObject("status", 404);
			}
			if("O".equals(info.get("PASSWORD"))) {
				HttpSession session = request.getSession();
				info.put("userType", "user");
				session.setAttribute("userInfo", info);
				mv.addObject("status", 200);
				mv.addObject("result", info);
			}
		}catch (Exception e){
			System.out.println(e);
			mv.addObject("status", 500);
		}
		mv.setViewName("jsonView");
		return mv;
	}
	
	// FIND 회원정보 찾기
	@RequestMapping("/findId.do")
	public ModelAndView findIdPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/find-id");
		return mv;
	}

	@RequestMapping("/findPw.do")
	public ModelAndView findPwPage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("sign/find-pw");
		return mv;
	}

	@RequestMapping("/updatePasswordByUser.do")
	public ModelAndView updateUserPassword(
		@RequestParam("id") String id,
		@RequestParam("password") String password
	) {
		ModelAndView mv = new ModelAndView();
		Map<String, Object> param = new HashMap();
		param.put("id",id);
		param.put("password",sha256(password));
		int count = userMemberService.updatePasswordByUser(param);
		if(count == 1){
			mv.addObject("status",200);
		} else{
			mv.addObject("status",409);
		}
		mv.setViewName("jsonView");
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
        sign.put("password", sha256(password));
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
	        @RequestParam("to") String to,
			@RequestParam(value="type") String type,
			@RequestParam(value="id", required=false) String id
        ) {
	    ModelAndView mv = new ModelAndView("mailResult");
	    mv.setViewName("jsonView");
	    try {
			if(type.equals("sign")){
				int emailChk = userMemberService.selectEmailCheckByUser(to);	
				if(emailChk == 0){
					sendVerificationEmail(to,mv);
				} else {
					mv.addObject("status", 409);
				}
			}
			if(type.equals("find-id")){
				int emailChk = userMemberService.selectEmailCheckByUser(to);
				if(emailChk == 1){
					sendVerificationEmail(to,mv);
				} else {
					mv.addObject("status", 409);
				}
			}
			if(type.equals("find-pw") && id != null){
				int emailChk = userMemberService.selectEmailCheckByUser(to);
				int idCnt = userMemberService.selectIdCheckByUser(id);
				if(emailChk + idCnt == 2){
					sendVerificationEmail(to,mv);
				} else {
					mv.addObject("status", 409);
				}
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	    return mv;
	}
	
	@RequestMapping("/selectVerifyAuthByUser.do")
	public ModelAndView selectVerifyAuthByUser(
			@RequestParam("to") String to,
			@RequestParam("code") int code,
			@RequestParam("type") String type
			) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("jsonView");
		boolean isSame = verifyAuthCode(to,code);
		mv.addObject("result", isSame);
		mv.addObject("resultInfo", null);
		String[] findTypes = {"find-id", "find-pw"};
		if(Arrays.asList(findTypes).contains(type) && isSame){
			Map<String, Object> info = userMemberService.selectFindIdByUser(to);
			mv.addObject("resultInfo", info);
		}
		return mv;
	}
}
