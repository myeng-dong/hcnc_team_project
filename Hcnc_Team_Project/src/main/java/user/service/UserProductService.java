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
	
	// 서브 상세리스트 > 메인출력용 분리 사유: 캐싱
	// 신상품 리스트 조회
	public List<Map<String, Object>> selectNewProductList(int page, int pageSize, String sortType, String mainCateId, String subCateId) {
	    int offset = (page - 1) * pageSize;
	    
	    Map<String, Object> params = new HashMap<>();
	    params.put("offset", offset);
	    params.put("pageSize", pageSize);
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    List<Map<String, Object>> newProducts = userProductMapper.selectNewProListByUser(params);
	    
	    // 부족하면 일반상품 최신순으로 채우기
	    if (newProducts.size() < pageSize) {
	        int needCount = pageSize - newProducts.size();
	        params.put("offset", 0);
	        params.put("pageSize", needCount);
	        List<Map<String, Object>> normalProducts = userProductMapper.selectNormalProListByRecent(params);
	        newProducts.addAll(normalProducts);
	        
	        // 합친 후 다시 정렬
	        if (sortType != null) {
	            switch (sortType) {
	                case "name":
	                    newProducts.sort((a, b) -> {
	                        String nameA = (String) a.get("PRODUCT_NAME");
	                        String nameB = (String) b.get("PRODUCT_NAME");
	                        return nameA.compareTo(nameB);
	                    });
	                    break;
	                case "lowPrice":
	                    newProducts.sort((a, b) -> {
	                        Number priceA = (Number) (a.get("SALED_PRICE") != null ? a.get("SALED_PRICE") : a.get("PRODUCT_PRICE"));
	                        Number priceB = (Number) (b.get("SALED_PRICE") != null ? b.get("SALED_PRICE") : b.get("PRODUCT_PRICE"));
	                        return Double.compare(priceA.doubleValue(), priceB.doubleValue());
	                    });
	                    break;
	                case "highPrice":
	                    newProducts.sort((a, b) -> {
	                        Number priceA = (Number) (a.get("SALED_PRICE") != null ? a.get("SALED_PRICE") : a.get("PRODUCT_PRICE"));
	                        Number priceB = (Number) (b.get("SALED_PRICE") != null ? b.get("SALED_PRICE") : b.get("PRODUCT_PRICE"));
	                        return Double.compare(priceB.doubleValue(), priceA.doubleValue());
	                    });
	                    break;
	            }
	        }
	    }
	    
	    return newProducts;
	}

	// 인기상품 리스트 조회
	public List<Map<String, Object>> selectHotProductList(int page, int pageSize, String sortType, String mainCateId, String subCateId) {
	    int offset = (page - 1) * pageSize;
	    
	    Map<String, Object> params = new HashMap<>();
	    params.put("offset", offset);
	    params.put("pageSize", pageSize);
	    params.put("sortType", sortType);
	    params.put("mainCateId", mainCateId);
	    params.put("subCateId", subCateId);
	    
	    List<Map<String, Object>> hotProducts = userProductMapper.selectHotProListByUser(params);
	    
	    // 부족하면 조회수 높은 상품으로 채우기
	    if (hotProducts.size() < pageSize) {
	        int needCount = pageSize - hotProducts.size();
	        params.put("offset", 0);
	        params.put("pageSize", needCount);
	        List<Map<String, Object>> normalProducts = userProductMapper.selectNormalProListByViewCnt(params);
	        hotProducts.addAll(normalProducts);
	        
	        // 합친 후 다시 정렬
	        if (sortType != null) {
	            switch (sortType) {
	                case "name":
	                    hotProducts.sort((a, b) -> {
	                        String nameA = (String) a.get("PRODUCT_NAME");
	                        String nameB = (String) b.get("PRODUCT_NAME");
	                        return nameA.compareTo(nameB);
	                    });
	                    break;
	                case "lowPrice":
	                    hotProducts.sort((a, b) -> {
	                        Number priceA = (Number) (a.get("SALED_PRICE") != null ? a.get("SALED_PRICE") : a.get("PRODUCT_PRICE"));
	                        Number priceB = (Number) (b.get("SALED_PRICE") != null ? b.get("SALED_PRICE") : b.get("PRODUCT_PRICE"));
	                        return Double.compare(priceA.doubleValue(), priceB.doubleValue());
	                    });
	                    break;
	                case "highPrice":
	                    hotProducts.sort((a, b) -> {
	                        Number priceA = (Number) (a.get("SALED_PRICE") != null ? a.get("SALED_PRICE") : a.get("PRODUCT_PRICE"));
	                        Number priceB = (Number) (b.get("SALED_PRICE") != null ? b.get("SALED_PRICE") : b.get("PRODUCT_PRICE"));
	                        return Double.compare(priceB.doubleValue(), priceA.doubleValue());
	                    });
	                    break;
	            }
	        }
	    }
	    
	    return hotProducts;
	}

	// 추천상품 리스트 조회
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

	

}
