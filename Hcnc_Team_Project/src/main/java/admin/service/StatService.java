package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.StatMapper;

@Service
public class StatService {
	
	@Autowired
	private StatMapper statmapper;

	public List<Map<String, Object>> selectStatByAdmin(Map<String, Object> dsSearch) {
		return statmapper.selectStatByAdmin(dsSearch);
	}
	
}
