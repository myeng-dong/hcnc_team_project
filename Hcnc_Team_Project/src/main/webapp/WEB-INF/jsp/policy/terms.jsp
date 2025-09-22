<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<jsp:include page="../layout/headerlink.jsp" />

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>배송정책</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container privacy">
    	<div class="breadcrumb">
	      <a href="/">홈</a>
	      <span>›</span>
	      <strong>정책</strong>
	    </div>
	    <div class="sub-area view-area">
	        <div class="sub-title-area">
	        	<h3>[ 배송정책 ]</h3>
	        </div>
	        <div class="sub-content-area">
	        	<div class="view-privacy-area">
	        		<div class="view-board-table">
	        			<h4>관리자에서 작성한 정책</h4>
	        			<div class="privacy-content">
	        				{정책을 불러오는 영역}
	        			</div>
	        		</div>  	
	        	</div>
	        </div>
    	</div>
    <jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
