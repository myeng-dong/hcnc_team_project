<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<jsp:include page="../layout/headerlink.jsp" />

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>공지사항</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container noticelist">
    	<div class="breadcrumb">
	      <a href="/">홈</a>
	      <span>›</span>
	      <strong>공지사항</strong>
	    </div>
	    <div class="sub-area">
	        <div class="sub-title-area">
	        	<h3>[ 공지사항 ]</h3>
	        </div>
	        <div class="sub-content-area">
	        	<div class="sub-category-area">
	        		<ul class="flex f-wrap">   			
	        			<li><button type="button">전체 </button></li>
	        			<li><button type="button">진행 </button></li>
	        			<li><button type="button">종료 </button></li>
	        		</ul>
	        	</div>
	        	<div class="notice-area">
	        		<div class="flex noticeList fd-column">
	        			<div class="notice-top">
	        				<ul class="flex f-nowrap">
	        					<li>NO</li>
	        					<li>제목</li>
	        					<li>작성자</li>
	        					<li>작성일</li>
	        				</ul>
	        			</div>
	        			<!-- 공지사항은 1줄씩 총 10 OR 15개 출력 후 PAGENATION -->
	        			<div class="notice-info">
	        				<div class="noticeItem">
		        				<a href="#">
		        					<ul>
		        						<li>{row값}</li>
		        						<li>{보드카테고리가 공지사항인 제목}</li>
		        						<li>{보드카테고리가 공지사항인 작성자}</li>
		        						<li>{보드카테고리가 공지사항인 작성일}</li>
		        					</ul>
		        				</a>
		        			</div>
	        			</div>
				    </div>    	
	        	</div>
	        	<div class="pagination">
				  <a href="#" class="prev">«</a>
				  <a href="#" class="active">1</a>
				  <a href="#">2</a>
				  <a href="#">3</a>
				  <a href="#">4</a>
				  <a href="#" class="next">»</a>
				</div>
	        </div>
    	</div>
    <jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
