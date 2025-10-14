package user.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
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

	/*
	 * public List<HashMap<String, Object>> selectProductByUser(Long productId) { //
	 * TODO Auto-generated method stub return
	 * userProductMapper.selectProductByUser(productId); }
	 */
	
	public List<HashMap<String, Object>> selectProductByUser(Long productId) {
		
		List<HashMap<String, Object>> selectProduct = userProductMapper.selectProductByUser(productId);
		
		// cartItemId 기준으로 그룹화
		Map<Long, HashMap<String, Object>> productMap = new LinkedHashMap<>();
		
		for(HashMap<String, Object> row: selectProduct) {
			Long product = (Long) row.get("PRODUCT_ID");
			
			// 해당 cartItemId가 cartItemMap에 없는 경우
			if(!productMap.containsKey(product)) {
				HashMap<String, Object> item = new HashMap<>();
				
				item.put("PRODUCT_CODE", row.get("PRODUCT_CODE"));
	            item.put("PRODUCT_NAME", row.get("PRODUCT_NAME"));
	            item.put("PRODUCT_PRICE", row.get("PRODUCT_PRICE"));
	            item.put("SALED_PRICE", row.get("SALED_PRICE"));
	            item.put("PRODUCT_CONTENT", row.get("PRODUCT_CONTENT"));
	            item.put("PRODUCT_WEIGHT", row.get("PRODUCT_WEIGHT"));
	            item.put("IS_VISIBLE", row.get("IS_VISIBLE"));
	            
	            // 옵션이 있는 경우 담을 리스트 추가해놓기
	            item.put("imgs", new ArrayList<HashMap<String, Object>>());
			
	            productMap.put(product, item);
			}
			
			// 옵션 정보 추가 (옵션이 있는 경우만)
			if(row.get("IMAGE_ID") != null) {
				HashMap<String, Object> img = new HashMap<>();
				
				img.put("IMAGE_ID", row.get("IMAGE_ID"));
				img.put("IMAGE_URL", row.get("IMAGE_URL"));
				img.put("ALT_TEXT", row.get("ALT_TEXT"));
				img.put("SORT_NUMBER", row.get("SORT_NUMBER"));
				img.put("IS_MAIN", row.get("IS_MAIN"));
	            
	            @SuppressWarnings("unchecked")
				List<HashMap<String, Object>> imgs =
	            		(List<HashMap<String, Object>>) productMap.get(product).get("imgs");
	            
	            imgs.add(img);
			}
		}
		
		// Map의 values를 List로 반환
		return new ArrayList<>(productMap.values());
	}

	public HashMap<String, Object> insertCartItemByUser(Map<String, Object> param, List<Long> optionIds) {
		// TODO Auto-generated method stub
		HashMap<String, Object> resultData = new HashMap<String, Object>();
		int result = 0;
		try {
			// 1. CART_ID 조회
			Long  cartIdSelect = userProductMapper.selectCartIdByUser(param);
			if(cartIdSelect != null) {
				param.put("cartId", cartIdSelect);
			} else {
				userProductMapper.insertCartsByUser(param);
			}
			
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
			
			resultData.put("result", result);
			resultData.put("cartId", param.get("cartId"));
		} catch(DuplicateKeyException e) {
			result = 2;
			resultData.put("result", result);
		}
		return resultData;
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
