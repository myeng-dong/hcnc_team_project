package admin.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("NotificationMapper")
public interface NotificationMapper {
	
	//안읽은 메세지 개수처리
	int selectUnreadCountByCommon(Map<String, Object> params);

	//알림 리스트 불러오기
	List<Map<String, Object>> selectNotificationList(Map<String, Object> params);

	//알람 리스트 업데이트
	void updateReadStatus(Map<String, Object> params);

	//주문시 알림인서트
	void insertNotificationByAdmin(Map<String, Object> params);

}
