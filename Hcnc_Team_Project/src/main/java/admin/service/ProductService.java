package admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.mapper.ProductMapper;

@Service
public class ProductService {
	
	@Autowired
	private ProductMapper productMapper;

	
	
	
	
	//상품목록리스트
	public List<Map<String, Object>> selectProductListByAdmin(Map<String, Object> p) {
			return productMapper.selectProductListByAdmin(p);
		}
}
