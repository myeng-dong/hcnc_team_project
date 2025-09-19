<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<jsp:include page="../layout/headerlink.jsp" />

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>각자페이지마다 pagename</title>
    <jsp:include page="../layout/headertop.jsp" />
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container pagename">
        <p>test page임</p>
    </div>
    <jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
