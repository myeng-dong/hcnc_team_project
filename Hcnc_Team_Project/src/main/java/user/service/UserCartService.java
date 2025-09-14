package user.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserCartMapper;


@Service
public class UserCartService {
	
	@Autowired
	private UserCartMapper cartMapper;
	
	public List<HashMap<String, Object>> selectCartListByUser(HashMap<String, Object> param){
		return cartMapper.selectCartListByUser(param);
	}

	public int updateQuantity(HashMap<String, Object> param) {
		return cartMapper.updateQuantity(param);
		
	}

	public int deleteProduct(HashMap<String, Object> param) {
		return cartMapper.deleteProduct(param);
		
	}

	public int updateChkBox(HashMap<String, Object> param) {
		// TODO Auto-generated method stub
		return cartMapper.updateChkBox(param);
	}
	
}