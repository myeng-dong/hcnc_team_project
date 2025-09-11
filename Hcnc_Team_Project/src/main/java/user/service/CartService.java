package user.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.CartMapper;


@Service
public class CartService {
	
	@Autowired
	private CartMapper cartMapper;
	
	public List<HashMap<String, Object>> selectCartListByUser(HashMap<String, Object> param){
		return cartMapper.selectCartListByUser(param);
	}
	
}