<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
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
        <div class="inner">
            <div class="breadcrumb">
                <a href="/">홈</a>
                <span>›</span>
                <strong>공지사항</strong>
            </div>
            <div class="sub-area">
                <div class="sub-title-area">
                    <h3>[ 공지사항 ]</h3>
                    <!-- 이름만 탭이고 게시판 이동으로 쓸거임 변수 없이 일단 강제 사유 : 미사용 게시판있음-->
		        	<div class="tab-area"> 
		        		<div class="tab-list flex">
		        			<div class="tab-cont on"><a href="/noticeList.do">공지사항</a></div>
		        			<div class="tab-cont "><a href="/faqList.do">FAQ</a></div>
		        			<div class="tab-cont "><a href="/eventList.do">이벤트</a></div>
		        		</div>
		        	</div>
                </div>
                <div class="sub-content-area">
                    <div class="notice-area">
                        <div class="flex noticeList fd-column">
                            <div class="notice-top">
                                <ul class="flex f-nowrap">
                                    <li>NO</li>
                                    <li>제목</li>
                                    <li>작성자</li>
                                    <li>작성일</li>
                                    <li>조회수</li>
                                </ul>
                            </div>
                            <div class="notice-info">
                            	<!-- noticeItem이 통째로 반복되도록 15개까지 뿌려도 될듯 -->
                            	<!-- 작업실패사유 에디트의 게시글이 notice에서도 출력되서 오류뜸 -->
                              	<div class="noticeItem">
                                    <a href="/boardDetail?post_id={notice['POST_ID']}" class="full-link">
                                        <ul class="flex">
                                        	<!-- 시작:공지는 위에뜨고 그와 별도로 모든 페이지들 출력 -->
                                            <li>1</li>
                                            <!-- 기타:공지시 출력될 영역임 -->
                                            <li><span class="notice-area">공지</span></li>
                                            <!-- 종료:공지는 위에뜨고 그와 별도로 모든 페이지들 출력 -->
                                            <li>{notice['POST_TITLE']}</li>
                                            <!-- 나중에 멤버조인해서 작성자이름불러오기 -->
                                            <li>{notice['MEMBER_ID']}</li>
                                            <li>{notice['INTPUT_DT']}</li>
                                        </ul>
                                    </a>
                                 </div>
                                 <div class="noticeItem"> 
                                     <div class="nodata">
                                      	등록된 공지사항이 없습니다.
                                     </div>
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
        </div>
    </div>
    <jsp:include page="../layout/footer.jsp" />
</div>
</body>
</html>
