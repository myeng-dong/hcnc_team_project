package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.WebsocketMapper;

@Service
public class WebsocketService {
	
	@Autowired
	private WebsocketMapper websocketMapper;

	public String selectUserTypeByAdmin(String userId) {
		return websocketMapper.selectUserTypeByAdmin(userId);
	}
	
	
	
}
