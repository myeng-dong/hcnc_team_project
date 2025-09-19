package user.web;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UserCkEditerController {

	
	@RequestMapping("/ckedit.do")
	public ModelAndView userMain() { 
		ModelAndView mv = new ModelAndView();
		
		mv.setViewName("ckediter/ckEditer");
	    return mv;
	}
	

    @PostMapping("/upload.do")
    public ResponseEntity<?> uploadFile(@RequestParam("upload") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // 업로드 디렉토리 설정
            String uploadDir = "C:/uploads/"; // 실제 경로로 변경
            File dir = new File(uploadDir);
            if (!dir.exists()) {
                dir.mkdirs();
            }
            
            // 파일명 생성 (중복 방지)
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String filePath = uploadDir + fileName;
            
            // 파일 저장
            file.transferTo(new File(filePath));
            
            // 웹에서 접근 가능한 URL 반환
            String fileUrl = "/uploads/" + fileName;
            response.put("url", fileUrl);
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            response.put("error", new HashMap<String, String>() {{
                put("message", "업로드 실패: " + e.getMessage());
            }});
            return ResponseEntity.status(500).body(response);
        }
    }
}

