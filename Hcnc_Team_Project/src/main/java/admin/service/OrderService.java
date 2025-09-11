package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.OrderMapper;

@Service
public class OrderService {
	
	@Autowired
	private OrderMapper orderMapper;

	public List<Map<String, Object>> selectOrderListByAdmin(Map<String, Object> dsSearch) {
		return orderMapper.selectOrderListByAdmin(dsSearch);
	}
	

	
}
