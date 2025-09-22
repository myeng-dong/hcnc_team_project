<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<jsp:include page="../layout/headerlink.jsp" />

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>이벤트::상세보기</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container eventdetail">
    	<div class="breadcrumb">
	      <a href="/">홈</a>
	      <span>›</span>
	      <strong>이벤트</strong>
	      <span>›</span>
	      <strong>상세보기</strong>
	    </div>
	    <div class="sub-area view-area">
	        <div class="sub-title-area">
	        	<h3>[ 상세 이벤트 내역 ]</h3>
	        </div>
	        <div class="sub-content-area">
	        	<div class="view-event-area">
	        		<table class="view-board-table">
	        			<thead>
	        				<tr>
		        				<th colspan="2">제목</th>
		        			</tr>
		        			<tr>
		        				<th>작성자 : {변수}</th>
		        				<th>작성일 : {변수}</th>
		        			</tr>
	        			</thead>
	        			<tbody>
	        				<tr>
	        					<td colspan="2">
	        						컨텐츠 영역 chkeditor불러오는 영역임
	        						이벤트에도 적용해야할듯
	        					</td>
	        				</tr>
	        				<!-- 시작:첨부파일을 사용자에서 출력하는 란이있다면 추가될 영역 -->
	        				<tr>
	        					<td>
	        					첨부파일 #1 
	        					</td>
	        					<td>
	        						<p><a href=""> 다운받는 링크 및 원본제목을 출력 시켜주는 영역 공지사항정도?</a></p>
	        					</td>
	        				</tr>
	        				<!-- 종료:첨부파일을 사용자에서 출력하는 란이있다면 추가될 영역 -->
	        			</tbody>
	        		</table>  	
	        	</div>
	        	<div class="pagination">
	        	 <a href="#" class="list">목록으로 가기</a>
	        	 <!-- view페이지 pagination작업조건 시간날때 이거 시간내에 못할거같으면 목록으로 가기버튼 -->
				  <a href="#" class="prev">이전글 ::제목불러오기</a>
				  <a href="#" class="next">다음글::제목불러오기</a>
				</div>
	        </div>
    	</div>
    <jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
