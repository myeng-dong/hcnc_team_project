package admin.web;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FileController {

	// /file/* 요청 시 파일 서빙
    @RequestMapping(value="/file/**")
    public void serveFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
    	System.out.println("메서드 진입 확인");
        String requestURI = request.getRequestURI();
        // /file/ 이후 경로만 추출
        String filePath = requestURI.substring(requestURI.indexOf("/file/") + 6);

        String fullPath = getUploadBasePath(request) + filePath;
        
        System.out.println(">>> getUploadBasePath: " + getUploadBasePath(request));
        System.out.println(">>> fullPath: " + fullPath);
        
        File file = new File(fullPath);

        if (file.exists() && file.isFile()) {
            Path path = file.toPath();
            String mimeType = Files.probeContentType(path);
            if (mimeType == null) mimeType = "application/octet-stream";

            response.setContentType(mimeType);
            Files.copy(path, response.getOutputStream());
            response.getOutputStream().flush();
        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
    }

    private String getUploadBasePath(HttpServletRequest request) {
        String contextPath = request.getServletContext().getRealPath("/");
        if (contextPath.contains("tmp0")) {
            String basePath = contextPath.substring(0, contextPath.indexOf(".metadata"));
            return basePath + "Hcnc_Team_Project/file/";
        } else {
            return contextPath + "file/";
        }
    }
	
    
}
