package admin.web;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.service.BannerService;

@Controller
public class BannerController {
	
	@Autowired

	private BannerService bannerService;
	
	@RequestMapping(value="/selectBannerListByAdmin.do")
	public NexacroResult selectBannerListByAdmin() {
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> selectBannerList = bannerService.selectBannerListByAdmin();
		System.out.println("배너 리스트는 잘불러오는중");
		System.out.println(selectBannerList);
		result.addDataSet("ds_banner", selectBannerList);
		return result;
	}
	
	//배너 파일 
	@RequestMapping(value = "/uploadBannerFile.do", method = RequestMethod.POST)
	public NexacroResult uploadBannerFile(
	        @RequestParam("bFile") List<MultipartFile> bFiles,
	        @RequestParam("attachedName") List<String> attachedNames,
	        HttpServletRequest request) throws Exception {
	    NexacroResult result = new NexacroResult();
	    System.out.println(">>> uploadBannerFile 시작");
	    
	    if (bFiles == null || bFiles.isEmpty()) {
	        System.out.println(">>> bFiles가 비어있음");
	        result.setErrorCode(9901);
	        result.setErrorMsg("파일이 없습니다.");
	        return result;
	    }
	    
	    // 실제 프로젝트 경로에 저장하도록 수정
	    String uploadDir = getProjectUploadPath(request);
	    File dir = new File(uploadDir);
	    System.out.println(">>> uploadDir: " + uploadDir);
	    
	    if (!dir.exists()) {
	        System.out.println(">>> 디렉토리 생성: " + uploadDir);
	        dir.mkdirs();
	    }
	    
	    // Dataset에 담을 파일 정보 리스트 생성
	    List<Map<String, Object>> fileList = new ArrayList<>();
	    
	    try {
	        for (int i = 0; i < bFiles.size(); i++) {
	            MultipartFile file = bFiles.get(i);
	            String saveFileName = attachedNames.get(i);
	            System.out.println(">>> 저장 파일 이름: " + saveFileName);
	            
	            File serverFile = new File(dir, saveFileName);
	            System.out.println(">>> serverFile: " + serverFile.getAbsolutePath());
	            file.transferTo(serverFile);
	            System.out.println(">>> 파일 저장 완료");
	            
	            // 상대경로 생성 (웹에서 접근 가능한 경로)
	            String relativePath = "/upload/banner/" + saveFileName;
	            
	            // Dataset에 담을 데이터 생성 (IMG_PATH만 필요)
	            Map<String, Object> fileInfo = new HashMap<>();
	            fileInfo.put("IMG_PATH", relativePath);
	            fileList.add(fileInfo);
	            
	            System.out.println(">>> IMG_PATH: " + relativePath);
	        }
	        
	        // Dataset으로 파일 정보 반환
	        result.addDataSet("ds_file", fileList);
	        
	        // 변수로도 IMG_PATH 반환 (대안)
	        if (!fileList.isEmpty()) {
	            String imgPath = (String) fileList.get(0).get("IMG_PATH");
	            result.addVariable("IMG_PATH", imgPath);
	            System.out.println(">>> 변수로 IMG_PATH 반환: " + imgPath);
	        }
	        
	        result.setErrorCode(0);
	        result.setErrorMsg("업로드 성공");
	        System.out.println(">>> 업로드 성공, Dataset과 변수 반환");
	    } catch (Exception e) {
	        System.out.println(">>> 예외 발생: " + e.getMessage());
	        e.printStackTrace();
	        result.setErrorCode(9902);
	        result.setErrorMsg("파일 저장 중 오류 발생");
	    }
	    
	    return result;
	}

	private String getProjectUploadPath(HttpServletRequest request) {
	    String contextPath = request.getServletContext().getRealPath("/");
	    System.out.println(">>> 현재 contextPath: " + contextPath);
	    
	    if (contextPath.contains("tmp0")) {
	        // 개발환경: 실제 소스 폴더에 저장
	        String basePath = contextPath.substring(0, contextPath.indexOf(".metadata"));
	        
	        // 프로젝트명을 하드코딩하지 않고 동적으로 찾기
	        File baseDir = new File(basePath);
	        File[] dirs = baseDir.listFiles(File::isDirectory);
	        
	        if (dirs != null) {
	            for (int i = 0; i < dirs.length; i++) {
	                File dir = dirs[i];
	                File webappDir = new File(dir, "src/main/webapp");
	                if (webappDir.exists()) {
	                    String projectPath = dir.getAbsolutePath() + "/src/main/webapp/upload/banner/";
	                    System.out.println(">>> 개발환경 - 실제 프로젝트 경로: " + projectPath);
	                    return projectPath;
	                }
	            }
	        }
	        
	        // 만약 못 찾으면 일단 내폴더기준
	        String projectPath = basePath + "Hcnc_Team_Project/src/main/webapp/upload/banner/";
	        System.out.println(">>> 개발환경 - 기본 프로젝트 경로: " + projectPath);
	        return projectPath;
	    } else {
	        // 운영환경: 배포된 경로에 저장  
	        String deployPath = contextPath + "upload/banner/";
	        System.out.println(">>> 운영환경 - 배포 경로: " + deployPath);
	        return deployPath;
	    }
	}

	// 배너 등록 (Dataset 기반)
	@RequestMapping(value="/insertBannerByAdmin.do")
	public NexacroResult insertBannerByAdmin(
	        @ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBWrite) {
	    NexacroResult result = new NexacroResult();
	    try {
	        if (dsBWrite != null) {
	            int insertCount = bannerService.insertBannerByAdmin(dsBWrite);
	            if (insertCount > 0) {
	                result.setErrorCode(0);
	                result.setErrorMsg("배너 작성 완료");
	            } else {
	                result.setErrorCode(-1);
	                result.setErrorMsg("배너 작성 실패");
	            }
	        } else {
	            result.setErrorCode(-1);
	            result.setErrorMsg("데이터가 없습니다.");
	        }
	    } catch(Exception e) {
	        e.printStackTrace();
	        result.setErrorCode(-1);
	        result.setErrorMsg("배너 작성 실패");
	    }
	    return result;
	}

	@RequestMapping(value="/updateBannerByAdmin.do")
	public NexacroResult updateBannerByAdmin(@ParamDataSet(name="ds_bwrite", required=false) Map<String, Object> dsBUpdate,HttpSession session) {
		NexacroResult result = new NexacroResult();
		try{
			int updateCount = bannerService.updateBannerByAdmin(dsBUpdate);
			if (updateCount > 0) {
				result.setErrorCode(0);
				result.setErrorMsg("글업데이트작성했다 ");
			} else {
				result.setErrorCode(-1);
				result.setErrorMsg("글업데이트 실패");
			}
		}
		catch(Exception e){ //아예 안됨
			System.out.println(e);
			result.setErrorCode(-1);
			result.setErrorMsg("글업데이트 실패");
		}
		return result;

	}

}
