package admin.util;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;

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
	 public UploadResult uploadToFile(MultipartFile file) throws IOException {
	        String flaskUrl = "http://192.168.0.150:5000/";
	        
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
	        ResponseEntity<String> flaskResponse = restTemplate.exchange(
	            flaskUrl,
	            HttpMethod.POST,
	            requestEntity,
	            String.class
	        );

	        return new UploadResult(flaskResponse.getBody(), "http://192.168.0.150:5000/dood/"+newFileName);
	    }
	/*
	 * @PostMapping("/api/upload.do") public ResponseEntity<String>
	 * uploadToFlask(@RequestParam("file") MultipartFile file) { // 1. Flask 서버 URL
	 * String flaskUrl = "http://192.168.0.150:5000/";
	 * 
	 * // 2. Flask로 전달할 데이터 (FormData 형식) 준비 MultiValueMap<String, Object> body =
	 * new LinkedMultiValueMap<>();
	 * 
	 * try { // 원본 파일명 가져오기 String originalFilename = file.getOriginalFilename();
	 * 
	 * // 파일명을 UTF-8로 URL 인코딩 String encodedFilename =
	 * URLEncoder.encode(originalFilename, StandardCharsets.UTF_8.toString());
	 * ByteArrayResource resource = new ByteArrayResource(file.getBytes()) { // 파일
	 * 이름을 유지하기 위해 getFilename()을 오버라이드
	 * 
	 * @Override public String getFilename() { return encodedFilename; } };
	 * 
	 * // Resource를 MultiValueMap에 추가 body.add("file", resource);
	 * 
	 * } catch (IOException e) { // 파일을 읽는 중 발생한 오류 처리 e.printStackTrace(); return
	 * ResponseEntity.status(500).body("{\"error\": \"파일 데이터 읽기 오류\"}"); }
	 * 
	 * HttpHeaders headers = new HttpHeaders();
	 * headers.setContentType(MediaType.MULTIPART_FORM_DATA); // Content-Type 설정
	 * headers.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
	 * // UTF-8 강제
	 * 
	 * HttpEntity<MultiValueMap<String, Object>> requestEntity = new
	 * HttpEntity<>(body, headers);
	 * 
	 * // 3. RestTemplate으로 Flask에 요청 (POST) RestTemplate restTemplate = new
	 * RestTemplate(); ResponseEntity<String> flaskResponse = restTemplate.exchange(
	 * flaskUrl, HttpMethod.POST, requestEntity, String.class );
	 * 
	 * // 4. Flask의 최종 응답 (이미지 URL)을 클라이언트에 전달 return flaskResponse; }
	 */
}
