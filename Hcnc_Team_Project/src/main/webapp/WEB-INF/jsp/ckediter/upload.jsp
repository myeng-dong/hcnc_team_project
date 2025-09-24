<%@ page contentType="application/json; charset=UTF-8" %>
<%@ page import="java.io.*, java.util.*, org.apache.commons.fileupload.*, org.apache.commons.fileupload.disk.*, org.apache.commons.fileupload.servlet.*" %>

<%
    String uploadPath = application.getRealPath("/editImage/"); // 업로드 폴더 설정
    File uploadDir = new File(uploadPath);
    if (!uploadDir.exists()) {
        uploadDir.mkdir(); // 폴더가 없으면 생성
    }

    String fileName = null;
    String fileUrl = null;

    try {
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        List<FileItem> items = upload.parseRequest(request);

        for (FileItem item : items) {
            if (!item.isFormField()) { // 파일인지 확인
                fileName = new File(item.getName()).getName();
                File uploadedFile = new File(uploadPath + File.separator + fileName);
                item.write(uploadedFile); // 파일 저장

                fileUrl = request.getContextPath() + "/editImage/" + fileName;
            }
        }
    } catch (Exception e) {
        e.printStackTrace();
    }

    // 업로드된 파일의 URL을 JSON 형식으로 반환
    out.print("{ \"url\": \"" + fileUrl + "\" }");
%>