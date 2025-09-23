package user.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.mapper.UserWishMapper;

@Service
public class UserWishService {

	@Autowired
	private UserWishMapper userWishMapper;
	
    public List<HashMap<String, Object>> selectWishlistByUser(HashMap<String, Object> param) {
        return userWishMapper.selectWishlistByUser(param);
    }
    
    public List<HashMap<String, Object>> getCategoryCount(HashMap<String, Object> param) {
        return userWishMapper.getCategoryCount(param);
    }
    
    public int addToCart(HashMap<String, Object> param) {
        return userWishMapper.addToCart(param);
    }
	
}
