package admin.service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import admin.mapper.BannerMapper;

@Service
public class BannerService {
    
    @Autowired
    private BannerMapper bannerMapper;
    
    public List<Map<String, Object>> selectBannerListByAdmin() {
        return bannerMapper.selectBannerListByAdmin();
    }
    
    // 파일 업로드 로직을 Service로 이동
    public NexacroResult uploadBannerFile(List<MultipartFile> bFiles, List<String> attachedNames, HttpServletRequest request) throws Exception {
        NexacroResult result = new NexacroResult();
        
        if (bFiles == null || bFiles.isEmpty()) {
            result.setErrorCode(9901);
            result.setErrorMsg("파일이 없습니다.");
            return result;
        }
        
        String uploadDir = getProjectUploadPath(request);
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();
        
        List<Map<String, Object>> fileList = new ArrayList<>();
        
        for (int i = 0; i < bFiles.size(); i++) {
            MultipartFile file = bFiles.get(i);
            String saveFileName = attachedNames.get(i);
            File serverFile = new File(dir, saveFileName);
            file.transferTo(serverFile);
            
            String relativePath = "/file/banner/" + saveFileName;
            Map<String, Object> fileInfo = new HashMap<>();
            fileInfo.put("IMG_PATH", relativePath);
            fileList.add(fileInfo);
        }
        
        result.addDataSet("ds_file", fileList);
        if (!fileList.isEmpty()) {
            result.addVariable("IMG_PATH", (String) fileList.get(0).get("IMG_PATH"));
        }
        
        result.setErrorCode(0);
        result.setErrorMsg("업로드 성공");
        return result;
    }
    
    // Insert 로직을 Service로 이동
    public NexacroResult insertBanner(Map<String, Object> dsBWrite) {
        NexacroResult result = new NexacroResult();
        try {
            if (dsBWrite != null) {
                // URL 정규화 처리
                normalizeLinkedUrl(dsBWrite);
                
                int insertCount = bannerMapper.insertBannerByAdmin(dsBWrite);
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
    
    // Update 로직을 Service로 이동
    public NexacroResult updateBanner(Map<String, Object> dsBUpdate) {
        NexacroResult result = new NexacroResult();
        try{
            // URL 정규화 처리
            normalizeLinkedUrl(dsBUpdate);
            
            int updateCount = bannerMapper.updateBannerByAdmin(dsBUpdate);
            if (updateCount > 0) {
                result.setErrorCode(0);
                result.setErrorMsg("배너 수정 완료");
            } else {
                result.setErrorCode(-1);
                result.setErrorMsg("배너 수정 실패");
            }
        } catch(Exception e){
            e.printStackTrace();
            result.setErrorCode(-1);
            result.setErrorMsg("배너 수정 실패");
        }
        return result;
    }
    
    // 기존 Mapper 호출 메서드들 (호환성 유지)
    public int insertBannerByAdmin(Map<String, Object> dsBWrite) {
        return bannerMapper.insertBannerByAdmin(dsBWrite);
    }
    
    public int updateBannerByAdmin(Map<String, Object> dsBUpdate) {
        return bannerMapper.updateBannerByAdmin(dsBUpdate);
    }
    
    // Private 메서드들
    private String getProjectUploadPath(HttpServletRequest request) {
        String contextPath = request.getServletContext().getRealPath("/");
        
        if (contextPath.contains("tmp0")) {
            String basePath = contextPath.substring(0, contextPath.indexOf(".metadata"));
            return basePath + "Hcnc_Team_Project/file/banner/";
        } else {
            return contextPath + "file/banner/";
        }
    }
    
    private void normalizeLinkedUrl(Map<String, Object> bannerData) {
        String linkedUrl = (String) bannerData.get("LINKED_URL");
        if (linkedUrl != null && !linkedUrl.trim().isEmpty()) {
            linkedUrl = addProtocolIfNeeded(linkedUrl);
            bannerData.put("LINKED_URL", linkedUrl);
        }
    }
    
    private String addProtocolIfNeeded(String url) {
        url = url.trim();
        
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        }
        
        if (url.startsWith("www.")) {
            return "https://" + url;
        } else {
            return "https://www." + url;
        }
    }
}