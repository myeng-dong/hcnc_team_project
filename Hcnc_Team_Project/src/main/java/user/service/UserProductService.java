package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserProductMapper;

@Service
public class UserProductService {
	
	@Autowired
	private UserProductMapper userProductMapper;

	public List<HashMap<String, Object>> selectProductByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.selectProductByUser(param);
	}

	public List<Map<String, Object>> selectMNProductListByUser() {
		// TODO Auto-generated method stub
		return userProductMapper.selectMNProductListByUser();//메인에서 NEW BEST불러가는용 임시
	}
	
	
}
