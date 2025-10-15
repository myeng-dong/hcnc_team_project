package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
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

	public int insertCartItemByUser(Map<String, Object> param, List<Long> optionIds) {
		// TODO Auto-generated method stub
		int result = 0;
		try {
			// CART_ITEMS 데이터 insert
			// INSERT 후 param Map에 cartItemId가 자동으로 추가됨
			userProductMapper.insertCartItemByUser(param);
			Long cartItemId = Long.parseLong(param.get("cartItemId").toString());
			
			System.out.println("cartItemId : " + cartItemId);
			
			// CART_ITEM_OPTIONS 데이터 insert
			boolean cartItemOptions = true;
			if(optionIds.size() > 0) {
				Map<String, Object> optionId = new HashMap<String, Object>();
				
				optionId.put("cartItemId", cartItemId);
				
				for(int i=0; i < optionIds.size(); i++) {
					
					optionId.put("optionId", optionIds.get(i));
					
					int optionInsert =  userProductMapper.insertCartItemOptionByUser(optionId);
					
					if(optionInsert != 1) {
						cartItemOptions = false;
					}
				}
			}
			
			if(cartItemOptions) {
				result = 1;
				System.out.println("옵션처리 성공!");
			} else {
				result = 0;
				System.out.println("옵션처리 실패x");
			}
			
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
	
	// 신상품 리스트 조회
	@Cacheable("newProducts")
	public List<Map<String, Object>> selectNewProductList(int page, int pageSize, String sortType, String mainCateId, String subCateId) {
	    int offset = (page - 1) * pageSize;
	    
	    Map<String, Object> params = new HashMap<>();
	    params.put("offset", offset);
	    params.put("pageSize", pageSize);
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectNewProListByUser(params);
	}

	// 신상품 총 개수 조회
	@Cacheable("newProductsCnt")
	public int selectNewProductCount(String sortType, String mainCateId, String subCateId) {
	    Map<String, Object> params = new HashMap<>();
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectNewProCountByUser(params);
	}

	// 추천상품 리스트 조회
	@Cacheable("recommendProducts")
	public List<Map<String, Object>> selectRecommendProductList(int page, int pageSize, String sortType, String mainCateId, String subCateId) {
	    int offset = (page - 1) * pageSize;
	    
	    Map<String, Object> params = new HashMap<>();
	    params.put("offset", offset);
	    params.put("pageSize", pageSize);
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectRecommendProListByUser(params);
	}

	// 추천상품 총 개수 조회
	@Cacheable("recommendProductsCnt")
	public int selectRecommendProductCount(String sortType, String mainCateId, String subCateId) {
	    Map<String, Object> params = new HashMap<>();
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectRecommendProCountByUser(params);
	}

	// 인기상품 리스트 조회
	@Cacheable("hotProducts")
	public List<Map<String, Object>> selectHotProductList(int page, int pageSize, String sortType, String mainCateId, String subCateId) {
	    int offset = (page - 1) * pageSize;
	    
	    Map<String, Object> params = new HashMap<>();
	    params.put("offset", offset);
	    params.put("pageSize", pageSize);
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectHotProListByUser(params);
	}

	// 인기상품 총 개수 조회
	@Cacheable("hotProductsCnt")
	public int selectHotProductCount(String sortType, String mainCateId, String subCateId) {
	    Map<String, Object> params = new HashMap<>();
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectHotProCountByUser(params);
	}

	// 카테고리별 리스트 조회
	public List<Map<String, Object>> selectCategoryProductList(int page, int pageSize, String sortType, String mainCateId, String subCateId) {
	    int offset = (page - 1) * pageSize;
	    
	    Map<String, Object> params = new HashMap<>();
	    params.put("offset", offset);
	    params.put("pageSize", pageSize);
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectCategoryProductsListByUser(params);
	}

	// 카테고리별 총 개수 조회
	public int selectCategoryProductCount(String sortType, String mainCateId, String subCateId) {
	    Map<String, Object> params = new HashMap<>();
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    return userProductMapper.selectCategoryProductsCountByUser(params);
	}
	

}
