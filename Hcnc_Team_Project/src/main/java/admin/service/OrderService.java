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
	
	//주문 상세조회
	public List<Map<String, Object>> selectOrderDetailListByAdmin(Map<String, Object> dsSearch) {
		return orderMapper.selectOrderDetailListByAdmin(dsSearch);
	}

	public List<Map<String, Object>> selectPaymentListByAdmin(Map<String, Object> dsSearch) {
		return orderMapper.selectPaymentListByAdmin(dsSearch);
	}

	public void updatePaymentListByAdmin(Map<String, Object> row) {
		orderMapper.updatePaymentListByAdmin(row);
	}
	

	
}
