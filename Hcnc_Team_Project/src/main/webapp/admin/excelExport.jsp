<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*" %>
<%@ page import="org.apache.poi.hssf.usermodel.*, org.apache.poi.ss.usermodel.*" %>
<%@ page import="org.apache.poi.ss.util.CellRangeAddress" %>
<%@ page import="org.apache.poi.ss.util.RegionUtil" %>
<%@ page import="javax.xml.parsers.*" %>
<%@ page import="org.w3c.dom.*" %>
<%@ page import="org.xml.sax.InputSource" %>
<%@ page import="java.io.StringReader" %>

<%
    request.setCharacterEncoding("UTF-8");

    String userHome = System.getProperty("user.home");
    String documentsPath = userHome + File.separator + "Documents";
    String fileName = "GridData.xls";
    String fullPath = documentsPath + File.separator + fileName;

    String xmlData = request.getParameter("xmlData");
    if (xmlData == null || xmlData.trim().equals("")) {
        out.println("데이터가 없습니다.");
        return;
    }

    try {
    	 
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        InputSource is = new InputSource(new StringReader(xmlData));
        is.setEncoding("UTF-8");
        Document doc = builder.parse(is);
        
        HSSFWorkbook workbook = new HSSFWorkbook();
        HSSFSheet sheet = workbook.createSheet("Sheet1");

        // -------------------------------
        // 스타일 정의
        // -------------------------------
        HSSFCellStyle headerStyle = workbook.createCellStyle();
        headerStyle.setAlignment(HorizontalAlignment.CENTER);
        headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        headerStyle.setBorderTop(BorderStyle.THIN);
        headerStyle.setBorderBottom(BorderStyle.THIN);
        headerStyle.setBorderLeft(BorderStyle.THIN);
        headerStyle.setBorderRight(BorderStyle.THIN);

        HSSFFont headerFont = workbook.createFont();
        headerFont.setBold(true);
        headerStyle.setFont(headerFont);

        HSSFCellStyle bodyStyle = workbook.createCellStyle();
        bodyStyle.setAlignment(HorizontalAlignment.LEFT);
        bodyStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        bodyStyle.setBorderTop(BorderStyle.THIN);
        bodyStyle.setBorderBottom(BorderStyle.THIN);
        bodyStyle.setBorderLeft(BorderStyle.THIN);
        bodyStyle.setBorderRight(BorderStyle.THIN);

        int currentRow = 0;
        // -------------------------------
        // 1. Header 처리 (병합 포함)
        // -------------------------------
        NodeList headerList = doc.getElementsByTagName("Header");
        if (headerList.getLength() > 0) {
            Node headerNode = headerList.item(0);
            NodeList cellNodes = ((Element)headerNode).getElementsByTagName("Cell");

            for (int i = 0; i < cellNodes.getLength(); i++) {
                Element cell = (Element) cellNodes.item(i);

                int row     = Integer.parseInt(cell.getAttribute("row"));
                int col     = Integer.parseInt(cell.getAttribute("col"));
                int rowspan = Integer.parseInt(cell.getAttribute("rowspan"));
                int colspan = Integer.parseInt(cell.getAttribute("colspan"));

                StringBuilder textBuilder = new StringBuilder();
                NodeList childNodes = cell.getChildNodes();
                for (int k = 0; k < childNodes.getLength(); k++) {
                    Node child = childNodes.item(k);
                    if (child.getNodeType() == Node.TEXT_NODE || child.getNodeType() == Node.CDATA_SECTION_NODE) {
                        textBuilder.append(child.getNodeValue());
                    }
                }
                String text = textBuilder.toString();

                HSSFRow r = sheet.getRow(row);
                if (r == null) r = sheet.createRow(row);

                HSSFCell c = r.createCell(col);
                c.setCellValue(text);
                c.setCellStyle(headerStyle);

                if (rowspan > 1 || colspan > 1) {
                    CellRangeAddress region = new CellRangeAddress(
                        row, row + rowspan - 1,
                        col, col + colspan - 1
                    );
                    sheet.addMergedRegion(region);

                    // 병합 영역에도 테두리 강제 적용
                    RegionUtil.setBorderTop(BorderStyle.THIN, region, sheet);
                    RegionUtil.setBorderBottom(BorderStyle.THIN, region, sheet);
                    RegionUtil.setBorderLeft(BorderStyle.THIN, region, sheet);
                    RegionUtil.setBorderRight(BorderStyle.THIN, region, sheet);
                }

                if (row > currentRow) currentRow = row;
            }
            currentRow++;
        }
        // -------------------------------
        // 2. Body 처리
        // -------------------------------
        NodeList bodyList = doc.getElementsByTagName("Body");
        if (bodyList.getLength() > 0) {
            Node bodyNode = bodyList.item(0);
            NodeList rowList = ((Element)bodyNode).getElementsByTagName("Row");

            for (int i = 0; i < rowList.getLength(); i++) {
                Node rowNode = rowList.item(i);
                NodeList cellList = rowNode.getChildNodes();
                HSSFRow excelRow = sheet.createRow(currentRow++);

                int cellIndex = 0;
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
                        excelCell.setCellStyle(bodyStyle); // ★ 테두리 적용
                    }
                }
            }
        }

        File dir = new File(documentsPath);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        FileOutputStream fos = new FileOutputStream(fullPath);
        workbook.write(fos);
        fos.close();
        workbook.close();

        System.out.println("서버 내문서 폴더에 엑셀 저장 완료: " + fullPath);
    } catch (Exception e) {
        System.out.println("엑셀 저장 오류: " + e.getMessage());
    }
%>
