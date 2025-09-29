package admin.util;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

// 파일 전송에 성공할시 1.성공 body 2.파일명을 리턴함
// 192.168.0.150:5000/dood/파일명 으로 이미지 불러오기 가능
@Service
public class UploadFile {
	 private final String URL = "http://192.168.0.150:5000/";
	 
	 public enum ImageType {
		    BANNER("banner/"),
		    PRODUCT("save/"),
		    REVIEW("review/"),
		 	PREVIEW("preview/");

		    private final String description;

		    ImageType(String description) {
		        this.description = description;
		    }

		    public String getDescription() {
		        return description;
		    }
		}
	 
	 public String extractFileName(String fullPath) {
		    // fullPath: "http://192.168.0.150:5000/dood/preview/dood12345.jpg"
		    if (fullPath == null || fullPath.isEmpty()) return "";
		    
		    // URL + 경로 부분 제거
		    int lastSlash = fullPath.lastIndexOf('/');
		    if (lastSlash != -1 && lastSlash + 1 < fullPath.length()) {
		        return fullPath.substring(lastSlash + 1); // dood12345.jpg
		    }
		    return fullPath; // 혹시 /가 없으면 그대로 반환
		}
	 /*
	  *  isPreview
	  *  true : preview폴더에 저장 (삭제해도되는 이미지)
	  *  false: save폴더에 저장 (삭제되면 안되는 이미지)
	  */
	 public UploadResult uploadToFile(MultipartFile file,ImageType imageType) throws IOException {
	        String mode = URL + imageType.getDescription();
	        long timestamp = System.currentTimeMillis();
	        String originalFilename = file.getOriginalFilename();
	        String ext = "";
	        
	        if (originalFilename != null && originalFilename.contains(".")) {
	            ext = originalFilename.substring(originalFilename.lastIndexOf("."));
	        }
	        String newFileName = "dood" + timestamp + ext;
	        String encodedFilename = URLEncoder.encode(newFileName, StandardCharsets.UTF_8.toString());

	        ByteArrayResource resource = new ByteArrayResource(file.getBytes()) {
	            @Override
	            public String getFilename() {
	                return encodedFilename;
	            }
	        };

	        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
	        body.add("file", resource);

	        HttpHeaders headers = new HttpHeaders();
	        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

	        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

	        RestTemplate restTemplate = new RestTemplate();
	        ResponseEntity<String> response = restTemplate.exchange(
        		mode,
	            HttpMethod.POST,
	            requestEntity,
	            String.class
	        );
	        String resultUrl = URL + "dood/"+ imageType.getDescription() + newFileName;
	        return new UploadResult(response.getBody(), resultUrl);
	    }
	 
	 // Preview -> save로 이동
	 public String moveFile(String filename, ImageType moveTarget) {
		    String url = URL + "move";
		    String splitFileName = extractFileName(filename);
		    System.out.println(splitFileName);
		    RestTemplate restTemplate = new RestTemplate();

		    Map<String, String> body = new HashMap<>();
		    body.put("filename", splitFileName);
		    body.put("target", moveTarget.toString());

		    HttpHeaders headers = new HttpHeaders();
		    headers.setContentType(MediaType.APPLICATION_JSON);

		    HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(body, headers);

		    ResponseEntity<String> response = restTemplate.exchange(
		        url,
		        HttpMethod.POST,
		        requestEntity,
		        String.class
		    );

		    return response.getBody();
		}
	 // 삭제
	 public UploadResult deleteFile(String fileUrl, ImageType deleteTarget) {
	        String deleteUrl = URL + "delete"; // Flask에서 삭제 API 엔드포인트
	        String splitFileName = extractFileName(fileUrl);
	        RestTemplate restTemplate = new RestTemplate();
	        
	        Map<String, String> body = new HashMap<>();
		    body.put("filename", splitFileName);
		    body.put("target", deleteTarget.toString());
		    
	        HttpHeaders headers = new HttpHeaders();
	        headers.setContentType(MediaType.APPLICATION_JSON);

	       
	        HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(body, headers);

	        ResponseEntity<String> response = restTemplate.exchange(
	                deleteUrl,
	                HttpMethod.POST,
	                requestEntity,
	                String.class
	        );

	        return new UploadResult(response.getBody(), splitFileName);
	    }
}
