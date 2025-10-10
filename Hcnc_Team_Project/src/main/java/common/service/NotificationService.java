package common.service;

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
}
