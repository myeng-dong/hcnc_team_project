package user.interceptor;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class UserInterceptor implements HandlerInterceptor {

	private static void sendAlertAndRedirect(HttpServletResponse response, String message, String redirectUrl) throws IOException {
	    response.setContentType("text/html;charset=UTF-8");
	    response.getWriter().write(
	            "<script>" +
	            "if(confirm('" + message + "')){" +
	            "  location.href='" + redirectUrl + "';" +
	            "} else {" +
	            "  location.href='/main.do';" +  // 취소 시 메인 페이지 이동
	            "}" +
	            "</script>"
	    );
	    response.getWriter().flush();
	}
    
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        boolean needRedirect = false;
        HttpSession session = request.getSession(false);

        if (session == null) {
            needRedirect = true;
        } else {
            try {
                Map<String, Object> info = (Map<String, Object>) session.getAttribute("userInfo");
                String memberId = (info != null) ? (String) info.get("MEMBER_ID") : null;

                if (memberId == null || memberId.isEmpty()) {
                    needRedirect = true;
                }
            } catch (Exception e) {
                e.printStackTrace();
                needRedirect = true;
            }
        }

        if (needRedirect) {
            sendAlertAndRedirect(response, "로그인 후 사용 가능합니다. 로그인 페이지로 이동하시겠습니까?", "/login.do");
            return false;
        }

        return true;
    }
	
	@Override
	public void postHandle(
			HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
			throws Exception {
	}
	@Override
	public void afterCompletion(
			HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
	}
	

}