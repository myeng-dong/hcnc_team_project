package user.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
		// TODO Auto-generated method stub
		return userReviewMapper.selectReviewListByUser(param);
	}

	public HashMap<String, Object> selectReviewCntByUser(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return userReviewMapper.selectReviewCntByUser(param);
	}

	public List<HashMap<String, Object>> selectReviewListPagedByUser(Map<String, Object> queryParam) {
		// TODO Auto-generated method stub
		return userReviewMapper.selectReviewListPagedByUser(queryParam);
	}

	public int insertReviewByUser(Map<String, Object> param, List<MultipartFile> photos) {
		
		//// TODO : REVIEWS 테이블에 데이터 insert 후 REVIEW_ID 반환 되도록 해야됨.
		
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
	                String attachedName = UUID.randomUUID().toString() + extension;
	                
	                System.out.println("파일명: " + filename);
	                System.out.println("파일 크기: " + fileSize + " bytes");
	                
	                // 파일 저장 로직
	                // String savedPath = saveFile(photo);
	                
	                UploadResult ur = uploadFile.uploadToFile(photo, ImageType.PREVIEW);
	                String fileUrl = ur.getFileName();
	                
	                //////// TODO REVIEW_ID 필요 //////
	                param.put("imgOriginName", filename);
	                param.put("imgAttachedName", attachedName);
	                param.put("imgPath", fileUrl);
	            }
	        } else {
	            System.out.println("업로드된 사진 없음");
	        }
		} catch(Exception e) {
			System.out.println("사진업로드 중 오류 발생");
		}
        
		return 0;
	} 
}
