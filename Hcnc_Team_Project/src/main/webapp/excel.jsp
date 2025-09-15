
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*, org.apache.poi.hssf.usermodel.*, org.apache.poi.ss.usermodel.*, org.w3c.dom.*, javax.xml.parsers.*, org.xml.sax.InputSource" %>
<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*, org.apache.poi.ss.usermodel.*, org.apache.poi.xssf.usermodel.XSSFWorkbook" %>
<%@ page import="java.io.*, java.util.*, org.apache.poi.hssf.usermodel.*, org.apache.poi.ss.usermodel.*, javax.servlet.*" %>
<%@ page import="org.xml.sax.InputSource" %>
<%@ page import="javax.xml.parsers.DocumentBuilder" %>
<%@ page import="javax.xml.parsers.DocumentBuilderFactory" %>
<%@ page import="org.w3c.dom.Document" %>
<%@ page import="org.w3c.dom.NodeList" %>
<%@ page import="org.w3c.dom.Node" %>
<%@ page import="java.io.StringReader" %>
 
 
<%
System.out.println("강해란 바보1");
// 1. 클라이언트 인코딩 처리
request.setCharacterEncoding("UTF-8");
// 2. 사용자 문서 경로 설정
String userHome = System.getProperty("user.home"); // 예: C:\Users\사용자명
String documentsPath = userHome + File.separator + "Documents";
String fileName = "GridData.xls";
String fullPath = documentsPath + File.separator + fileName;
// 3. 파라미터로 전달된 xmlData 가져오기
String xmlData = request.getParameter("xmlData");
 
 System.out.println("강해란 바보2"); 
if (xmlData == null || xmlData.trim().equals("")) {
    out.println("데이터가 없습니다.");
    return;
}
 
  System.out.println("강해란 바보3");  
try {
    // 4. XML 파싱
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    InputSource is = new InputSource(new StringReader(xmlData));
    is.setEncoding("UTF-8"); // XML 내부 문자 인코딩
    Document doc = builder.parse(is);
    NodeList rowList = doc.getElementsByTagName("Row");
    // 5. 엑셀 Workbook 생성
    HSSFWorkbook workbook = new HSSFWorkbook();
    HSSFSheet sheet = workbook.createSheet("Sheet1");
 
    System.out.println("강해란 바보4");   
    for (int i = 0; i < rowList.getLength(); i++) {
        HSSFRow excelRow = sheet.createRow(i);
        Node rowNode = rowList.item(i);
        NodeList cellList = rowNode.getChildNodes();
        int cellIndex = 0;
 
         System.out.println("강해란 바보5");   
        for (int j = 0; j < cellList.getLength(); j++) {
            Node cellNode = cellList.item(j);
            if (cellNode.getNodeType() == Node.ELEMENT_NODE) {
                StringBuilder cellText = new StringBuilder();
                NodeList childNodes = cellNode.getChildNodes();
                for (int k = 0; k < childNodes.getLength(); k++) {
                    Node child = childNodes.item(k);
                    if (child.getNodeType() == Node.TEXT_NODE || child.getNodeType() == Node.CDATA_SECTION_NODE) {
                        cellText.append(child.getNodeValue());
                    }
                }
                Cell excelCell = excelRow.createCell(cellIndex++);
                excelCell.setCellValue(cellText.toString());
            }
        }
    }
    // 6. 저장할 폴더 없으면 생성
    File dir = new File(documentsPath);
    if (!dir.exists()) {
        dir.mkdirs();
    }
    // 7. 엑셀 파일 저장
    FileOutputStream fos = new FileOutputStream(fullPath);
    workbook.write(fos);
    fos.close();
    workbook.close();
    // 8. 성공 메시지 출력
    out.println("서버 내문서 폴더에 엑셀 파일 저장 완료: " + fullPath);
} catch (Exception e) {
    out.println("파일 저장 중 오류 발생: " + e.getMessage());
}
%>