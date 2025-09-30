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

	public List<HashMap<String, Object>> selectProductByUser(Long productId) {
		// TODO Auto-generated method stub
		return userProductMapper.selectProductByUser(productId);
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

	public List<HashMap<String, Object>> slectOptionInfoByUser(Long productId) {
		// TODO Auto-generated method stub
		return userProductMapper.slectOptionInfoByUser(productId);
	}

	public int insertQnAByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.insertQnAByUser(param);
	}
	
	public List<HashMap<String, Object>> selectProductQnAListByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.selectProductQnAListByUser(param);
	}

	public HashMap<String, Object> selectQnADetailByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.selectQnADetailByUser(param);
	}

	public int updateProductQnAByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.updateProductQnAByUser(param);
	}

	public int deleteQnAByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.deleteQnAByUser(param);
	}


	public HashMap<String, Object> selectProductDescriptionByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userProductMapper.selectProductDescriptionByUser(param);
	}


	public List<Map<String, Object>> selectTypeProductListByUser() {
		// TODO Auto-generated method stub
		return userProductMapper.selectTypeProductListByUser();//메인에서 NEW BEST불러가는용
	}

	public List<Map<String, Object>> selectHotProductListByUser() {
		// TODO Auto-generated method stub
		return userProductMapper.selectHotProductListByUser(); // 인기상품불러가능용
	}
	
	public List<Map<String, Object>> selectCateGoryProductsListByUser() {
		// TODO Auto-generated method stub
		return userProductMapper.selectCateGoryProductsListByUser(); //카테고리불러가는거
	}
	

	
}
