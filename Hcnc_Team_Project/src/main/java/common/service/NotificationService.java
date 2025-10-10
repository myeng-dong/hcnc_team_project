package common.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.NotificationMapper;



@Service
public class NotificationService {

	@Autowired
	private NotificationMapper notificationMapper;



	public int selectUnreadCountByCommon(Map<String, Object> params) {
		// TODO Auto-generated method stub
		return notificationMapper.selectUnreadCountByCommon(params);
	}



	public List<Map<String, Object>> selectNotificationList(Map<String, Object> params) {
		return notificationMapper.selectNotificationList(params);
	}



	public void updateReadStatus(Map<String, Object> params) {
		notificationMapper.updateReadStatus(params);
		
	}
	
	 public void insertOrderStatusNotification(String userId, String orderId, String orderStatus) {
	        Map<String, Object> params = new HashMap<>();
	        params.put("senderId", "ADMIN");            // 관리자가 보낸 것
	        params.put("receiverId", userId);           // 특정 고객에게
	        params.put("receiverType", "USER");         // 받는사람 유저 타입
	        params.put("notiType", "STATUS");           // 알림 타입
	        params.put("notiMessage", "주문상태 변경: " + orderStatus);
	        params.put("orderNo", orderId);
	        params.put("orderStatus", orderStatus);
	        
	        notificationMapper.insertNotificationByAdmin(params);
	        
	        System.out.println("💾 알림 DB 저장 완료 - 주문번호: " + orderId);
	    }
}
