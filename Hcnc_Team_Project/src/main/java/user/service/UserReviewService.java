package user.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import admin.util.UploadFile;
import admin.util.UploadFile.ImageType;
import admin.util.UploadResult;
import user.mapper.UserReviewMapper;

@Service
public class UserReviewService {

	@Autowired
	private UserReviewMapper userReviewMapper;
	
	@Autowired
	private UploadFile uploadFile;
	
	public List<HashMap<String, Object>> selectReviewListByUser(Map<String, Object> param) {
		return userReviewMapper.selectReviewListByUser(param);
	}

	public HashMap<String, Object> selectReviewCntByUser(Map<String, Object> param) {
		return userReviewMapper.selectReviewCntByUser(param);
	}

	public List<HashMap<String, Object>> selectReviewListPagedByUser(Map<String, Object> queryParam) {
		return userReviewMapper.selectReviewListPagedByUser(queryParam);
	}

	@Transactional
	public int insertReviewByUser(Map<String, Object> param, List<MultipartFile> photos) {
		int result = 1;
		
		int reviewInsert = userReviewMapper.insertReviewByUser(param);
		if(reviewInsert < 1) {
			System.out.println("리뷰 데이터 등록 실패");
			result = 0;
		}

		// 파일 처리
		try {
	        if (photos != null && !photos.isEmpty()) {
	            System.out.println("업로드된 사진 개수: " + photos.size());
	            
	            for (MultipartFile photo : photos) {
	                String filename = photo.getOriginalFilename();
	                long fileSize = photo.getSize();
	                
	                // 확장자 추출
	                String extension = "";
	                if (filename != null && filename.contains(".")) {
	                    extension = filename.substring(filename.lastIndexOf("."));
	                }
	                // UUID로 새 파일명 생성
	                String attachedName = "REVIEW" + UUID.randomUUID().toString() + extension;
	                
	                System.out.println("파일명: " + filename);
	                System.out.println("파일 크기: " + fileSize + " bytes");
	                
	                UploadResult ur = uploadFile.uploadToFile(photo, ImageType.REVIEW);
	                String fileUrl = ur.getFileName();
	                
	                param.put("imgOriginName", filename);
	                param.put("imgAttachedName", attachedName);
	                param.put("imgPath", fileUrl);

	                int imageInsert = userReviewMapper.insertReviewImage(param);
	                if(imageInsert < 1) {
	                	System.out.println("리뷰 이미지 등록 실패");
	                	result = 0;
	                }
	                
	                System.out.println("파일이 성공적으로 업로드되었습니다: " + fileUrl);
	            }
	        } else {
	            System.out.println("업로드된 사진 없음");
	        }
		} catch(Exception e) {
			e.printStackTrace();
			result = 0;
			System.out.println("사진업로드 중 오류 발생");
		}

		return result;
	}

  public List<HashMap<String, Object>> selectOrderProductListByUser(Map<String, Object> param) {
		List<HashMap<String, Object>> orderProductList = userReviewMapper.selectOrderProductListByUser(param);

		// orderId 기준으로 그룹화
		Map<Long, HashMap<String, Object>> orderItemMap = new LinkedHashMap<>();

		for (HashMap<String, Object> row : orderProductList) {
			Long orderId = (Long) row.get("ORDER_ID");

			if(!orderItemMap.containsKey(orderId)) {
				HashMap<String, Object> orderItem = new HashMap<>();

				orderItem.put("ORDER_ID", orderId);
				orderItem.put("ORDER_NUMBER", row.get("ORDER_NUMBER"));
				orderItem.put("TOTAL_AMOUNT", row.get("TOTAL_AMOUNT"));
				orderItem.put("ORDER_DT", row.get("ORDER_DT"));

				orderItem.put("orderItems", new ArrayList<HashMap<String, Object>>());

				orderItemMap.put(orderId, orderItem);
			}

			// 주문 항목 추가
			List<HashMap<String, Object>> orderItems = (List<HashMap<String, Object>>) orderItemMap.get(orderId).get("orderItems");

			HashMap<String, Object> orderItem = new HashMap<>();

			orderItem.put("ORDER_ITEM_ID", row.get("ORDER_ITEM_ID"));
			orderItem.put("PRODUCT_ID", row.get("PRODUCT_ID"));
			orderItem.put("PRODUCT_NAME", row.get("PRODUCT_NAME"));
			orderItem.put("PRICE", row.get("PRICE"));
			orderItem.put("QUANTITY", row.get("QUANTITY"));
			orderItem.put("IMAGE_URL", row.get("IMAGE_URL"));
			orderItem.put("ALT_TEXT", row.get("ALT_TEXT"));

			orderItems.add(orderItem);
		}

		return new ArrayList<>(orderItemMap.values());
	}

  public List<HashMap<String, Object>> selectReviewStatusListByUser(Map<String, Object> param) {
		return userReviewMapper.selectReviewStatusListByUser(param);
  }

	public HashMap<String, Object> selectProductInfoForReviewByUser(Map<String, Object> param) {
		return userReviewMapper.selectProductInfoForReviewByUser(param);
	}
}
