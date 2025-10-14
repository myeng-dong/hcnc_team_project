package common.websocket;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.factory.annotation.Autowired;
import admin.service.WebsocketService;

@ServerEndpoint("/notification/{userId}")
public class NotificationWebSocket {
    
	@Autowired
	private WebsocketService websocketService;
	
    // 접속된 사용자 관리 (userId -> Session)
    private static Map<String, Session> clients = new ConcurrentHashMap<>();
    // 관리자 여부 캐시
    private static Map<String, Boolean> adminCache = new ConcurrentHashMap<>();
    
    @OnOpen //웹소켓 열기
    public void onOpen(Session session, @PathParam("userId") String userId) {
    	//클라이언트 통 userId에 세션 담음 
        clients.put(userId, session);
        //유저 아이디로 관리자인지 조회하는 함수처리해서 true or false 리턴
        boolean isAdmin = checkAdminUser(userId);
        
        //어드민 캐시에 정보 저장
        adminCache.put(userId, isAdmin);
    }
    
    @OnClose //웹소켓 닫기
    public void onClose(Session session, @PathParam("userId") String userId) {
    	//클라이언트 통에서 유저 아이디 삭제
        clients.remove(userId);
        //어드민 캐시에서 유저 아이디 삭제
        adminCache.remove(userId);
    }
    
    
    @OnError //웹소켓 에러 발생 시
    public void onError(Throwable error, Session session, @PathParam("userId") String userId) {
        System.err.println("웹소켓 에러: " + userId);
        error.printStackTrace();
    }
    
    
    
    
    // *********************여기서부터 외부에서 호출 가능한 메서드!!!!*****************************
    
    
    
    // 모든 관리자에게 메세지 전송
    public static void sendToAllAdmins(String message) {
    	//몇명의 관리자에게 보냈는지 담을 변수통
        int sentCount = 0;
        
        //맵 돌리면서 모든 관리자에게 메세지 보냄
        for (Map.Entry<String, Session> entry : clients.entrySet()) {
            String userId = entry.getKey();
            Session session = entry.getValue();
            
            Boolean isAdmin = adminCache.get(userId);
            
            //어드민이 널이 아니고 , 값이 있고, 세션이 열려있을 때 아래 내용 실행
            if (isAdmin != null && isAdmin && session.isOpen()) {
                sendMessage(session, message);
                sentCount++;
            }
        }
        
        System.out.println(" 관리자 " + sentCount + "명에게 알림 전송");
    }
    

    //유저에게 메세지 전송
    public static void sendToUser(String userId, String message) {
    	//유저세션에 유저의 아이디를 담음
        Session userSession = clients.get(userId);
        
        //유저세션이 널이 아니면 유저 세션이 열려있을때(로그인한상태이면) 아래 내용 실행
        if (userSession != null && userSession.isOpen()) {
        	//메세지 보내기 실행
            sendMessage(userSession, message);
            System.out.println(" 사용자 " + userId + "에게 알림 전송");
        } else {
            System.out.println("사용자 " + userId + " 미접속 상태");
        }
    }
    
    
    
    //메시지 전송
    private static void sendMessage(Session session, String message) {
        try {
            if (session != null && session.isOpen()) {
                session.getBasicRemote().sendText(message);
            }
        } catch (IOException e) {
            System.err.println("메시지 전송 실패: " + e.getMessage());
        }
    }
    
    
    
    //********************아래부턴 쓸모없는 함수 **********************************
    
    
    //관리자 여부 확인 메서드
    private boolean checkAdminUser(String userId) {
        boolean isAdmin = false;
        
        try {
            String userType = websocketService.selectUserTypeByAdmin(userId);
            // "admin"이면 true, 아니면 false
            isAdmin = "admin".equals(userType);
            
        } catch (Exception e) {
            System.err.println("관리자 확인 실패: " + e.getMessage());
        } 
        return isAdmin;
    }
    
    
}