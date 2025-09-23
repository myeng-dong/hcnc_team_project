<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<jsp:include page="../layout/headerlink.jsp" />

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>이벤트목록</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container eventlist">
      <div class="inner">
    	<div class="breadcrumb">
	      <a href="/">홈</a>
	      <span>›</span>
	      <strong>이벤트</strong>
	    </div>
	    <div class="sub-area">
	        <div class="sub-title-area">
	        	<h3>[ 프로모션 ]</h3>
	        	<!-- 이름만 탭이고 게시판 이동으로 쓸거임 변수 없이 일단 강제 사유 : 미사용 게시판있음-->
	        	<div class="tab-area"> 
	        		<div class="tab-list flex">
	        			<div class="tab-cont"><a href="/noticeList.do">공지사항</a></div>
	        			<div class="tab-cont "><a href="/faqList.do">FAQ</a></div>
	        			<div class="tab-cont on "><a href="/eventList.do">이벤트</a></div>
	        		</div>
	        	</div>
	        </div>
	        <div class="sub-content-area">
	        	<div class="sub-category-area">
	        		<ul class="flex f-wrap">   			
	        			<li><button type="button">전체 </button></li>
	        			<li><button type="button">진행 </button></li>
	        			<li><button type="button">종료 </button></li>
	        		</ul>
	        	</div>
        	<div class="event-area">
        		<div class="flex f-wrap ju-between">
        			<!-- 이벤트 게시판은 3개씩 3줄 9개 출력후 페이지 네이션 하단 eventItem 반복아리아 -->
        			<div class="eventItem">
        				<a href="#">
        					<dl>
        						<dt><img alt="" src=""/></dt>
        						<dd>
        						<p><span>상태출력 진행or종료</span></p>
        						<p>제목이 출력됨</p>
        						<p>0000.00.00</p>
        						</dd>
        					</dl>
        				</a>
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
      </div>	
    <jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
