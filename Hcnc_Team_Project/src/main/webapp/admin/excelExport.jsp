<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page import="java.io.*, java.net.URLEncoder" %>
<%@ page import="javax.servlet.*, javax.servlet.http.*" %>
<%@ page import="javax.xml.parsers.*" %>
<%@ page import="org.w3c.dom.*" %>
<%@ page import="org.xml.sax.InputSource" %>

<%@ page import="org.apache.poi.hssf.usermodel.*" %>  <%-- .xls 형식(HSSF) --%>
<%@ page import="org.apache.poi.ss.usermodel.*" %>
<%@ page import="org.apache.poi.ss.util.CellRangeAddress" %>
<%@ page import="org.apache.poi.ss.util.RegionUtil" %>


<%--  [통합 JSP 안내]

 이 파일은 3가지 사용법을 모두 지원합니다.

 1) (권장, 긴 XML 안전) 2단계 토큰 방식
    - 준비(prepare):  POST excelExport.jsp?mode=prepare  (xmlData 포함)
        => 응답: {"ok":true,"token":"..."}
    - 다운로드:       GET  excelExport.jsp?mode=download&token=...

 2) (간단) 직접 다운로드
    - POST excelExport.jsp   (xmlData 포함)  => 바로 파일 다운로드

 ※ 주의: 다운로드 창을 띄우려면 XHR이 아닌 '파일 다운로드 네비게이션'으로 호출하세요.
    (Nexacro FileDownload 컴포넌트 사용 권장) 
--%>


<%
    // -------------------------------------------
    // 0) 공용 유틸: XML 파싱 → Workbook 생성 함수
    //    - JSP 안에서 재사용하기 위해 메서드를 선언합니다.
    // -------------------------------------------
%>
<%!
    // XML 문자열을 파싱하여 HSSFWorkbook(.xls)을 만들어 반환
    // xml 형식:
    // <Rows>
    //   <Header>
    //     <Cell row="" col="" rowspan="" colspan="">TEXT</Cell>...
    //   </Header>
    //   <Body>
    //     <Row>
    //       <C0>값</C0><C1>값</C1>...
    //     </Row>...
    //   </Body>
    // </Rows>
    private HSSFWorkbook buildWorkbookFromXml(String xml) throws Exception {
        // 1) XML 파싱
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        InputSource is = new InputSource(new StringReader(xml));
        is.setEncoding("UTF-8");
        Document doc = builder.parse(is);

        // 2) 워크북/시트 생성(HSSF => .xls)
        HSSFWorkbook wb = new HSSFWorkbook();
        HSSFSheet sheet = wb.createSheet("Sheet1");

                
        // 3) 스타일 준비
        HSSFCellStyle headerStyle = wb.createCellStyle();
        headerStyle.setAlignment(HorizontalAlignment.CENTER);
        headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        headerStyle.setBorderTop(BorderStyle.THIN);
        headerStyle.setBorderBottom(BorderStyle.THIN);
        headerStyle.setBorderLeft(BorderStyle.THIN);
        headerStyle.setBorderRight(BorderStyle.THIN);
        HSSFFont headerFont = wb.createFont();
        headerFont.setBold(true);
        headerStyle.setFont(headerFont);

        HSSFCellStyle bodyStyle = wb.createCellStyle();
        bodyStyle.setAlignment(HorizontalAlignment.LEFT);
        bodyStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        bodyStyle.setBorderTop(BorderStyle.THIN);
        bodyStyle.setBorderBottom(BorderStyle.THIN);
        bodyStyle.setBorderLeft(BorderStyle.THIN);
        bodyStyle.setBorderRight(BorderStyle.THIN);

        int currentRow = 0;

        // 4) Header 처리 (멀티헤더/병합 지원)
        try {
            NodeList headerList = doc.getElementsByTagName("Header");
            if (headerList.getLength() > 0) {
                Element headerEl = (Element) headerList.item(0);
                NodeList cellNodes = headerEl.getElementsByTagName("Cell");

                for (int i = 0; i < cellNodes.getLength(); i++) {
                    Element cell = (Element) cellNodes.item(i);

                    int row     = parseIntSafe(cell.getAttribute("row"), 0);
                    int col     = parseIntSafe(cell.getAttribute("col"), 0);
                    int rowspan = parseIntSafe(cell.getAttribute("rowspan"), 1);
                    int colspan = parseIntSafe(cell.getAttribute("colspan"), 1);

                    String text = getNodeText(cell);

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
                        RegionUtil.setBorderTop(BorderStyle.THIN, region, sheet);
                        RegionUtil.setBorderBottom(BorderStyle.THIN, region, sheet);
                        RegionUtil.setBorderLeft(BorderStyle.THIN, region, sheet);
                        RegionUtil.setBorderRight(BorderStyle.THIN, region, sheet);
                    }

                    if (row > currentRow) currentRow = row;
                }
                currentRow++; // 헤더 마지막 다음 줄부터 바디 시작
            }
        } catch (Exception ignore) {}

        // 5) Body 처리
        try {
            NodeList bodyList = doc.getElementsByTagName("Body");
            if (bodyList.getLength() > 0) {
                Element bodyEl = (Element) bodyList.item(0);
                NodeList rowList = bodyEl.getElementsByTagName("Row");

                for (int i = 0; i < rowList.getLength(); i++) {
                    Element rowEl = (Element) rowList.item(i);
                    HSSFRow excelRow = sheet.createRow(currentRow++);

                    int cidx = 0;
                    while (true) {
                        String tag = "C" + cidx;
                        NodeList cols = rowEl.getElementsByTagName(tag);
                        if (cols == null || cols.getLength() == 0) break;

                        String v = getNodeText((Element) cols.item(0));
                        HSSFCell excelCell = excelRow.createCell(cidx++);
                        excelCell.setCellValue(v);
                        excelCell.setCellStyle(bodyStyle);
                    }
                }
            }
        } catch (Exception ignore) {}

        // 6) (선택) 첫 행 기준 컬럼 너비 자동
        try {
            HSSFRow firstRow = sheet.getRow(0);
            if (firstRow != null) {
                short lastCell = firstRow.getLastCellNum();
                for (int i = 0; i < lastCell; i++) sheet.autoSizeColumn(i);
            }
        } catch (Exception ignore) {}

        return wb;
    }

    // 텍스트/CDATA 추출
    private String getNodeText(Element el) {
        if (el == null) return "";
        StringBuilder sb = new StringBuilder();
        NodeList childNodes = el.getChildNodes();
        for (int k = 0; k < childNodes.getLength(); k++) {
            Node child = childNodes.item(k);
            if (child.getNodeType() == Node.TEXT_NODE || child.getNodeType() == Node.CDATA_SECTION_NODE) {
                sb.append(child.getNodeValue());
            }
        }
        return sb.toString();
    }

    // 안전한 int 변환
    private int parseIntSafe(String s, int dft) {
        try { return Integer.parseInt(s); } catch (Exception e) { return dft; }
    }
%>

<%
    // -------------------------------------------
    // 1) 요청 파라미터 공통 처리
    // -------------------------------------------
    request.setCharacterEncoding("UTF-8");
    String mode  = request.getParameter("mode");   // "prepare" | "download" | null
    String xml   = request.getParameter("xmlData");
    String token = request.getParameter("token");

    // 세션 키 프리픽스(충돌 방지)
    final String KEY_PREFIX = "EXCEL_XML_";

    // -------------------------------------------
    // 2) mode=prepare : 긴 xmlData를 세션에 저장하고 토큰 반환(JSON)
    //    - Nexacro에서 XHR POST로 호출
    // -------------------------------------------
    if ("prepare".equalsIgnoreCase(mode)) {
        response.setContentType("application/json; charset=UTF-8");

        if (xml == null || xml.trim().isEmpty()) {
            out.print("{\"ok\":false,\"message\":\"xmlData empty\"}");
            return;
        }
        String tk = java.util.UUID.randomUUID().toString();
        
/*         request.getSession(false).setAttribute(KEY_PREFIX + tk, xml);
        out.print("{\"ok\":true,\"token\":\"" + tk + "\"}");
        return; */
        
        //수정: 로그인 세션만 사용 (새 세션 생성 금지)
        HttpSession sessionU = request.getSession(false); // 원래: true
        if (sessionU == null) {
            out.print("{\"ok\":false,\"message\":\"login session not found\"}");
            return;
        }

        sessionU.setAttribute(KEY_PREFIX + tk, xml);
        out.print("{\"ok\":true,\"token\":\"" + tk + "\"}");
        return;
    }

    // -------------------------------------------
    // 3) mode=download : 세션의 token으로 xml을 찾아 즉시 다운로드
    //    - Nexacro FileDownload로 GET 호출
    // -------------------------------------------
    if ("download".equalsIgnoreCase(mode)) {
        if (token == null || token.trim().isEmpty()) {
            response.setContentType("text/plain; charset=UTF-8");
            out.print("token is required");
            return;
        }
        HttpSession sess = request.getSession(false);
        if (sess == null) {
            response.setContentType("text/plain; charset=UTF-8");
            out.print("session not found");
            return;
        }
        
        String xmlFromSession = (String) sess.getAttribute(KEY_PREFIX + token);
        if (xmlFromSession == null || xmlFromSession.trim().isEmpty()) {
            response.setContentType("text/plain; charset=UTF-8");
            out.print("xmlData not found for token");
            return;
        }
        // 일회성 사용 후 정리(원하면 주석 처리)
        sess.removeAttribute(KEY_PREFIX + token);

        // 워크북 생성 → 다운로드 스트림
        HSSFWorkbook wb = null;
        try {
            wb = buildWorkbookFromXml(xmlFromSession);
        } catch (Exception ex) {
            response.setContentType("text/plain; charset=UTF-8");
            out.print("build workbook error: " + ex.getMessage());
            return;
        }

        String filename = "GridData_" + (new java.text.SimpleDateFormat("yyyyMMdd_HHmmss").format(new java.util.Date())) + ".xls";
        String enc = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20");

        response.reset();
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + enc);
        response.setHeader("Content-Transfer-Encoding", "binary");

        /* 충돌방지 추가 */
/*         out.clear();
        out = pageContext.pushBody(); */
        
        
        
        ServletOutputStream sos = null;
        try {
            sos = response.getOutputStream();
            wb.write(sos);
            sos.flush();
        } finally {
            try { if (wb != null) wb.close(); } catch (Exception ignore) {}
            try { if (sos != null) sos.close(); } catch (Exception ignore) {}
        }
        return;
    }

    // -------------------------------------------
    // 4) (기본) 직접 다운로드: xmlData를 바로 받아 즉시 다운로드
    //    - 주로 폼 전송/프레임 네비게이션으로 POST 호출할 때 사용
    // -------------------------------------------
    if (xml == null || xml.trim().isEmpty()) {
        response.setContentType("text/plain; charset=UTF-8");
        out.print("xmlData is empty. Use mode=prepare or POST xmlData.");
        return;
    }

    HSSFWorkbook wb = null;
    try {
        wb = buildWorkbookFromXml(xml);
    } catch (Exception ex) {
        response.setContentType("text/plain; charset=UTF-8");
        out.print("build workbook error: " + ex.getMessage());
        return;
    }

    String filename = "GridData_" + (new java.text.SimpleDateFormat("yyyyMMdd_HHmmss").format(new java.util.Date())) + ".xls";
    String enc = URLEncoder.encode(filename, "UTF-8").replaceAll("\\+", "%20");

    response.reset();
    response.setContentType("application/vnd.ms-excel");
    response.setHeader("Content-Disposition", "attachment; filename=\"" + filename + "\"; filename*=UTF-8''" + enc);
    response.setHeader("Content-Transfer-Encoding", "binary");

    ServletOutputStream sos = null;
    try {
        sos = response.getOutputStream();
        wb.write(sos);
        sos.flush();
    } finally {
        try { if (wb != null) wb.close(); } catch (Exception ignore) {}
        try { if (sos != null) sos.close(); } catch (Exception ignore) {}
                                
    }
%>
