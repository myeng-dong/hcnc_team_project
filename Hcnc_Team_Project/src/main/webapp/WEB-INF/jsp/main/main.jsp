<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>메인페이지</title>
    <jsp:include page="../layout/headertop.jsp" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="/css/egovframework/main.css">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
	
    <div class="container main">
        <main class="main_area">
            <section class="main_banner_area">
                <div class="swiper mainBannerSwiper">
                    <div class="swiper-wrapper">
                        <c:forEach var="banner" items="${mainBanners}">
						    <div class="swiper-slide">
						        <c:choose>
						            <c:when test="${not empty banner['IMG_PATH']}">
						                <a href="${banner['LINKED_URL']}" class="full-link">
						                    <div class="img-area" style="background:url('${banner['IMG_PATH']}') center center / cover no-repeat;">
						                        <!-- <p>${banner['BANNER_TITLE']}</p> -->
						                    </div>
						                </a>
						            </c:when>
						            <c:otherwise>
						                <a href="#" class="full-link">
						                    <div class="img-area nodata">
						                    </div>
						                </a>
						            </c:otherwise>
						        </c:choose>
						    </div>
						</c:forEach>
                    </div>
                    <div class="main-swiper-pagination"></div>
                </div>
            </section>

			  <script>
			    var swiper = new Swiper(".mainBannerSwiper", {
			    	autoplay: {     //자동슬라이드 (false-비활성화)
						delay: 2500, // 시간 설정
						disableOnInteraction: false, // false-스와이프 후 자동 재생
					},
    		        loopAdditionalSlides : 1, 
			    	loop: true,
					pagination: {
					  el: ".main-swiper-pagination",
					},
			    });
			  </script>
			<!-- 인기 상품 -->
			<section class="best_area">
			    <div class="inner">
			        <p class="sub-comment">인기 상품</p>
			        <div class="best_list flex">
			            <c:forEach var="item" items="${bestItems}">
			                <div class="best_card">
			                    <img src="${item.imgPath}" alt="${item.name}">
			                    <p class="item_name">${item.name}</p>
			                    <p class="item_price">${item.price}원</p>
			                </div>
			            </c:forEach>
			            <!-- 예시 -->
			            <div class="best_card">
			                <img src="/images/sample_item1.jpg" alt="펜">
			                <p class="item_name">고급 볼펜</p>
			                <p class="item_price">3,000원</p>
			            </div>
			            <div class="best_card">
			                <img src="/images/sample_item2.jpg" alt="노트">
			                <p class="item_name">다이어리 노트</p>
			                <p class="item_price">12,000원</p>
			            </div>
			        </div>
			    </div>
			</section>
			
			<!-- MD 추천 상품 -->
			<section class="mdpick_area">
			    <div class="inner">
			        <p class="sub-comment">MD 추천 상품</p>
			        <div class="mdpick_list flex">
			            <div class="mdpick_card">
			                <img src="/images/sample_item3.jpg" alt="노트북">
			                <p class="item_name">고급 노트북</p>
			                <p class="item_price">25,000원</p>
			            </div>
			            <div class="mdpick_card">
			                <img src="/images/sample_item4.jpg" alt="펜 세트">
			                <p class="item_name">펜 세트</p>
			                <p class="item_price">8,000원</p>
			            </div>
			        </div>
			    </div>
			</section>
			
			<!-- TOP N 상품 -->
			<section class="topn_area">
			    <div class="inner">
			        <p class="sub-comment">TOP N 상품</p>
			        <div class="topn_list swiper">
			            <div class="swiper-wrapper">
			                <div class="swiper-slide">
			                    <img src="/images/sample_item5.jpg" alt="스케치북">
			                    <p class="item_name">스케치북</p>
			                    <p class="item_price">5,000원</p>
			                </div>
			                <div class="swiper-slide">
			                    <img src="/images/sample_item6.jpg" alt="메모지">
			                    <p class="item_name">메모지</p>
			                    <p class="item_price">2,000원</p>
			                </div>
			            </div>
			            <div class="swiper-pagination"></div>
			        </div>
			    </div>
			</section>
			
			<!-- 신규 상품 -->
			<section class="new_item_area">
			    <div class="inner">
			        <p class="sub-comment">신규 상품</p>
			        <div class="new_item_list flex">
			            <div class="new_card">
			                <img src="/images/sample_item7.jpg" alt="연필 세트">
			                <p class="item_name">연필 세트</p>
			                <p class="item_price">4,500원</p>
			            </div>
			            <div class="new_card">
			                <img src="/images/sample_item8.jpg" alt="파일 폴더">
			                <p class="item_name">파일 폴더</p>
			                <p class="item_price">3,200원</p>
			            </div>
			        </div>
			    </div>
			</section>
			
			<!-- 사용 팁 -->
			<section class="beauty_tip_area">
			    <div class="inner">
			        <p class="sub-comment">사용 팁</p>
			        <div class="beauty_tip_list flex">
			            <div class="tip_card">
			                <img src="/images/sample_tip1.jpg" alt="정리 팁">
			                <p class="tip_title">효율적인 문구 정리 팁</p>
			            </div>
			            <div class="tip_card">
			                <img src="/images/sample_tip2.jpg" alt="필기 팁">
			                <p class="tip_title">편안한 필기를 위한 팁</p>
			            </div>
			        </div>
			    </div>
			</section>
			
			<!-- 리뷰 & 이벤트 -->
			<section class="review_event_area">
			    <div class="inner">
			        <p class="sub-comment">리뷰 & 이벤트</p>
			        <div class="review_event_list flex">
			            <div class="event_card">
			                <p class="event_title">신규 가입자 10% 할인</p>
			                <p class="event_desc">9월 한정 신규 가입 고객 전용</p>
			            </div>
			            <div class="event_card">
			                <p class="event_title">리뷰 작성 이벤트</p>
			                <p class="event_desc">리뷰 작성 시 포인트 500원 지급</p>
			            </div>
			        </div>
			    </div>
			</section>
			
			<!-- 커뮤니티 -->
			<section class="community_area">
			    <div class="inner">
			        <p class="sub-comment">커뮤니티</p>
			        <div class="community_list flex">
			            <div class="community_card">
			                <p class="commu_title">효율적인 공부법 공유</p>
			                <p class="commu_writer">by 사용자1</p>
			            </div>
			            <div class="community_card">
			                <p class="commu_title">새 학기 준비물 추천</p>
			                <p class="commu_writer">by 사용자2</p>
			            </div>
			        </div>
			    </div>
			</section>
						

        </main>
    </div>
    
	<jsp:include page="../layout/popup.jsp" />
	<jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
