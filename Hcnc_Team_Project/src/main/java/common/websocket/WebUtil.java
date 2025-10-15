package common.websocket;


import javax.websocket.Session;                //웹소켓 세션 임포트
import java.util.Map;                          //자바 맵
import java.util.concurrent.ConcurrentHashMap; //멀티스레드 환경에서 안전한 HashMap
import com.google.gson.Gson;                   //Google에서 만든 JSON 변환 라이브러리
import com.google.gson.JsonObject;             //Gson의 JSON 객체 클래스


public class WebUtil {
	
	//구글이 만든 Json통 생성
	private static Gson gson = new Gson();
	 
	//새로운 오더 왔다는 유저 ->관리자
	//  ***파라미터 오더넘버, 주문 시간
    public static void sendNewOrderNotification(String orderNo, String inputDt) {
        String message = "신규 주문 발생! " + inputDt;
        
        
        JsonObject notification = new JsonObject();
        notification.addProperty("type", "NEW_ORDER");
        notification.addProperty("message", message);
        notification.addProperty("orderNo", orderNo);
        notification.addProperty("regDate", getCurrentDateTime());
        
        NotificationWebSocket.sendToAllAdmins(gson.toJson(notification));
        
        System.out.println("📢 신규 주문 알림 전송: " + orderNo);
    }
    
    /**
     * 주문 상태 변경 알림 전송 (고객에게)
     * @param customerId 고객ID
     * @param orderNo 주문번호
     * @param newStatus 변경된 상태
     */
    public static void sendOrderStatusChangeNotification(String customerId, String orderNo, String newStatus) {
        String message = "주문 상태 변경\n주문상태: " + newStatus;
        
        JsonObject notification = new JsonObject();
        notification.addProperty("type", "ORDER_STATUS_CHANGE");
        notification.addProperty("message", message);
        notification.addProperty("orderNo", orderNo);
        notification.addProperty("orderStatus", newStatus);
        notification.addProperty("regDate", getCurrentDateTime());
        
        NotificationWebSocket.sendToUser(customerId, gson.toJson(notification));
        
        System.out.println("📧 주문 상태 변경 알림 전송: " + customerId);
    }
    
    /**
     * 신규 1:1 문의 알림 전송 (관리자들에게)
     * @param postNo 게시글번호
     * @param inputDt 작성일시
     */
    public static void sendNewInquiryNotification(String userId) {
        String message = "신규 1:1 문의! " + getCurrentDateTime();
        
        JsonObject notification = new JsonObject();
        notification.addProperty("type", "NEW_INQUIRY");
        notification.addProperty("message", message);
        notification.addProperty("senderId", userId);
        notification.addProperty("regDate", getCurrentDateTime());
        
        NotificationWebSocket.sendToAllAdmins(gson.toJson(notification));
        
        System.out.println("📢 신규 문의 알림 전송: " + userId);
    }
    
    /**
     * 1:1 문의 답변 알림 전송 (고객에게)
     * @param customerId 고객ID
     * @param postNo 게시글번호
     * @param commentNo 댓글번호
     */
    public static void sendInquiryReplyNotification(String customerId, String postNo) {
        String message = "1:1 문의 답변이 등록되었습니다.";
        
        JsonObject notification = new JsonObject();
        notification.addProperty("type", "INQUIRY_REPLY");
        notification.addProperty("message", message);
        notification.addProperty("postNo", postNo);
        notification.addProperty("regDate", getCurrentDateTime());
        
        NotificationWebSocket.sendToUser(customerId, gson.toJson(notification));
        
        System.out.println("📧 문의 답변 알림 전송: " + customerId);
    }
    
    private static String getCurrentDateTime() {
        return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                .format(new java.util.Date());
    }
}
