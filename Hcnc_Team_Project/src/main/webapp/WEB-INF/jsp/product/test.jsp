<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<jsp:include page="../layout/headerlink.jsp" />
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>각자페이지마다 pagename</title>
    <jsp:include page="../layout/headertop.jsp" />
  </head>
  <body>
    <jsp:include page="../layout/header.jsp" />
    <jsp:include page="../layout/menu.jsp" />

    <div class="container-wrap">
      <div class="container pagename">
        <p>test page임</p>
      </div>
    </div>

    <jsp:include page="../layout/footer.jsp" />
  </body>
</html>
