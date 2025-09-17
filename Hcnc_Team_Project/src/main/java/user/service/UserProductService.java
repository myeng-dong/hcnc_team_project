package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import user.mapper.UserProductMapper;

@Service
@Transactional
public class UserProductService {
	
	@Autowired
	private UserProductMapper userProductMapper;

	public List<HashMap<String, Object>> selectProductByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.selectProductByUser(param);
	}

	public int insertCartItemByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		int result = 0;
		try {
			result = userProductMapper.insertCartItemByUser(param);
			
		} catch(DuplicateKeyException e) {
			result = 2;
		}
		return result;
	}

	public List<HashMap<String, Object>> slectOptionInfoByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.slectOptionInfoByUser(param);
	}
}
