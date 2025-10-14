package common.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;

import common.service.NotificationService;

@Controller
@RequestMapping("/notification")
public class NotificationController {
	
	@Autowired
	private NotificationService notificationService;

	 // 미읽음 개수
    @RequestMapping("/unreadCount.do")
    public void getUnreadCount(HttpSession session, HttpServletResponse response) 
            throws IOException {
        
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        try {
            // 세션에서 userInfo Map 꺼내기
            @SuppressWarnings("unchecked")
            Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
            
            if (userInfo == null) {
                out.print("{\"error\":\"로그인이 필요합니다\"}");
                return;
            }
            
            String userId = (String) userInfo.get("MEMBER_ID");
            String memberType = (String) userInfo.get("MEMBER_TYPE");
            
            // "admin" 또는 "user"
            String receiverType = "admin".equals(memberType) ? "ADMIN" : "USER";
            // **👇 이 부분을 수정합니다.**

            
            Map<String, Object> params = new HashMap<>();
            params.put("userId", userId);
            params.put("receiverType", receiverType);
            
            //서비스 호출해서 카운트 받아옴
            // 4. Map 객체를 인자로 전달
            int count = notificationService.selectUnreadCountByCommon(params); 

            out.print("{\"unreadCount\":" + count + "}");
            
        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"error\":\"" + e.getMessage() + "\"}");
        } finally {
            out.flush();
        }
    }
    
    // 알림 목록
    @RequestMapping("/list.do")
    public void getNotificationList(HttpSession session, HttpServletResponse response) 
            throws IOException {
        
    	
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        try {
            @SuppressWarnings("unchecked")
            Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
            
            if (userInfo == null) {
                out.print("{\"error\":\"로그인이 필요합니다\"}");
                return;
            }
            
            String userId = (String) userInfo.get("MEMBER_ID");
            String memberType = (String) userInfo.get("MEMBER_TYPE");
            String receiverType = "admin".equals(memberType) ? "ADMIN" : "USER";
            
            Map<String, Object> params = new HashMap<>();
            params.put("userId", userId);
            params.put("receiverType", receiverType);
            
            List<Map<String, Object>> list = 
                notificationService.selectNotificationList(params);
            
            // Gson으로 List를 JSON으로 변환
            Gson gson = new Gson();
            String json = "{\"list\":" + gson.toJson(list) + "}";
            
            out.print(json);
            
        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"error\":\"" + e.getMessage() + "\"}");
        } finally {
            out.flush();
        }
    }
    
    // 읽음 처리
    @RequestMapping("/markAsRead.do")
    public void markAsRead(HttpServletRequest request, HttpServletResponse response) 
            throws IOException {
        
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        try {
            HttpSession session = request.getSession();
            
            @SuppressWarnings("unchecked")
            Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("userInfo");
            
            if (userInfo == null) {
                out.print("{\"success\":false,\"error\":\"로그인이 필요합니다\"}");
                return;
            }
            
            String userId = (String) userInfo.get("MEMBER_ID");
            String notiId = request.getParameter("notiId");
            
            Map<String, Object> params = new HashMap<>();
            params.put("userId", userId);
            params.put("notiId", notiId);
            
            if (notiId == null || notiId.isEmpty()) {
                out.print("{\"success\":false,\"error\":\"알림 ID가 없습니다\"}");
                return;
            }
            
            notificationService.updateReadStatus(params);
            
            out.print("{\"success\":true}");
            
        } catch (Exception e) {
            e.printStackTrace();
            out.print("{\"success\":false,\"error\":\"" + e.getMessage() + "\"}");
        } finally {
            out.flush();
        }
    }
}
