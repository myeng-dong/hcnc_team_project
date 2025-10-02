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
	
	public int getCategoryProductsCount(String mainCateId, String subCateId) {
		// TODO Auto-generated method stub
        Map<String, Object> params = new HashMap<>();
        params.put("mainCateId", mainCateId);
        params.put("subCateId", subCateId);
        return userProductMapper.selectCategoryProductsCount(params);
    }

    public List<Map<String, Object>> getCategoryProductsList(
    	// TODO Auto-generated method stub
        String mainCateId, String subCateId, String sortType, int offset, int pageSize) {
        
        Map<String, Object> params = new HashMap<>();
        params.put("mainCateId", mainCateId);
        params.put("subCateId", subCateId);
        params.put("sortType", sortType);
        params.put("offset", offset);
        params.put("pageSize", pageSize);
        
        return userProductMapper.selectCategoryProductsListByUser(params);
    }

}
