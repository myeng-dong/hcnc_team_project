<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>메인페이지</title>
    <jsp:include page="../layout/headertop.jsp" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="../../../css/egovframework/main.css">
    <link rel="stylesheet" href="../../../css/component/productItem.css">
    <link rel="stylesheet" href="../../../js/component/productItem.js">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
		
    <div class="container main">
        <main class="main_area">
            <section class="main_banner_area">
			    <div class="swiper mainBannerSwiper">
			        <div class="swiper-wrapper">
			            <c:choose>
			                <c:when test="${not empty mainBanners}">
			                    <c:forEach var="banner" items="${mainBanners}">
			                        <div class="swiper-slide">
			                            <c:choose>
			                                <c:when test="${not empty banner['LINKED_URL']}">
			                                    <a href="${banner['LINKED_URL']}" class="full-link">
			                                        <div class="img-area" style="background:url('${banner['IMG_PATH']}') center center no-repeat;"></div>
			                                    </a>
			                                </c:when>
			                                <c:otherwise>
			                                    <div class="img-area" style="background:url('${banner['IMG_PATH']}') center center no-repeat;"></div>
			                                </c:otherwise>
			                            </c:choose>
			                        </div>
			                    </c:forEach>
			                </c:when>
			                <c:otherwise>
			                    <div class="swiper-slide">
			                        <div class="img-area nodata"></div>
			                    </div>
			                </c:otherwise>
			            </c:choose>
			        </div>
			        <div class="main-swiper-pagination"></div>
			    </div>
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
			</section>

			<section class="main-quick">
				<div class="inner">
					<ul class="list flex ju-between">
						<li>
							<a href="#">
								<dl class="flex fd-column">
									<dt class="icon-area"></dt>
									<dd>필기구</dd>
								</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>노트/다이어리</dd>
							</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>파일/사무용품</dd>
							</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>디자인/데코</dd>
							</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>학용품/취미</dd>
							</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>화방/제도</dd>
							</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>md 두디픽</dd>
							</dl>
							</a>
						</li>
						<li>
							<a href="#">
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>신제품</dd>
							</dl>
							</a>
						</li>
					</ul>
				</div>			
			</section>
			
			<section class="new_area prd_area">
			    <div class="inner">
			        <p class="sub-comment" data-aos="fade-up">DOO.D 신상품</p>
			        
			        <div class="prdList new_list swiper-wrapper newSwiper" data-aos="fade-up"  data-aos-delay="300">
					    <div class="swiper-wrapper">
					      <c:choose>
					        <c:when test="${not empty newProducts}">
					        <c:forEach var="product" items="${newProducts}" begin="0" end="8">
					            <%@ include file="/WEB-INF/jsp/component/productItem.jsp" %>
					        </c:forEach>
					        </c:when>
					        <c:otherwise>
					            <div class="prdItem nodata">
					                <div class="nodata">등록된 신상품이 없습니다.</div>
					            </div>
					        </c:otherwise>
					        </c:choose>
					     </div>
					 </div>
			
			        <script>
					  var swiper = new Swiper(".newSwiper", {
					    autoplay: {      
					      delay: 2500,
					      disableOnInteraction: false,
					    },
					    loop: true,
					    loopAdditionalSlides: 1,
					    slidesPerView: 4,       
					    spaceBetween: 20
					  });
					</script>
			        <div class="btn-view-more-wrap flex ju-center"> <!-- 신상품리스트바로가기링크 -->
						<a href="#" class="btn-view-more" data-aos="fade-up" data-aos-delay="150"><span>신상품 더보기</span></a>
					</div>
				</div>
			</section>
			
			<section class="recommend_area prd_area">
			    <div class="inner">
			        <p class="sub-comment"  data-aos="fade-up">DOO.D 추천상품</p>
			        <div class="prdList recommend_list swiper-wrapper recommendSwiper"  data-aos="fade-up"  data-aos-delay="300">
					  <div class="swiper-wrapper">
					  
					    <!-- 시작:상품리스트 변수 -->
					    <c:choose>
					      <c:when test="${not empty recommendProducts}">
					        <c:forEach var="product" items="${recommendProducts}" begin="0" end="8">
					          <%@ include file="/WEB-INF/jsp/component/productItem.jsp" %>
					        </c:forEach>
					      </c:when>
					      <c:otherwise>
					        <div class="swiper-slide prdItem nodata">
					          <div class="nodata">등록된 추천상품이 없습니다.</div>
					        </div>
					      </c:otherwise>
					    </c:choose>
					    <!-- 종료:상품리스트 변수 -->
					  </div>
					</div>

			        <div class="btn-view-more-wrap flex ju-center"> <!-- 추천상품리스트바로가기링크 -->
						<a href="#" class="btn-view-more" data-aos="fade-up" data-aos-delay="150"><span>추천상품 더보기</span></a>
					</div>
					<script>
					  var swiper = new Swiper(".recommendSwiper", {
					    autoplay: {      
					      delay: 2500,
					      disableOnInteraction: false,
					    },
					    loop: true,
					    loopAdditionalSlides: 1,
					    slidesPerView: 3,       
					    spaceBetween: 20,       // 슬라이드 사이 여백(px)
					    pagination: {
					      el: ".recommend-swiper-pagination",
					      clickable: true,
					    },
					  });
					</script>
			    </div>
			</section>

			<section class="shortbanner_area">
				<div class="inner">
					<a href="#">
						<div>welcome to Doo.D
						회원가입 즉시 적립금 2000원 지급
						</div>
					</a>
				</div>
			</section>
			
			<section class="hot_area prd_area">
				<div class="inner">
					<p class="sub-comment" data-aos="fade-up">DOO.D 인기상품</p>
					<div class="prdList hot_list swiper-wrapper hotSwiper"  data-aos="fade-up" data-aos-delay="300">
					  <div class="swiper-wrapper">
					    <!-- 시작:상품리스트 변수 -->
					    <c:choose>
					      <c:when test="${not empty hotProducts}">
					        <c:forEach var="product" items="${hotProducts}" begin="0" end="8">
					          <%@ include file="/WEB-INF/jsp/component/productItem.jsp" %>
					        </c:forEach>
					      </c:when>
					      <c:otherwise>
					        <div class="swiper-slide prdItem nodata">
					          <div class="nodata">등록된 인기상품이 없습니다.</div>
					        </div>
					      </c:otherwise>
					    </c:choose>
					    <!-- 종료:상품리스트 변수 -->
					  </div>
					</div>
										
					<div class="btn-view-more-wrap flex ju-center"> <!-- 추천리스트바로가기링크 -->
						<a href="#" class="btn-view-more" data-aos="fade-up" data-aos-delay="150"><span>추천상품 더보기</span></a>
					</div>
					<script>
					  var swiper = new Swiper(".hotSwiper", {
					    autoplay: {      
					      delay: 2500,
					      disableOnInteraction: false,
					    },
					    loop: true,
					    loopAdditionalSlides: 1,
					    slidesPerView: 4,       
					    spaceBetween: 20,       // 슬라이드 사이 여백(px)
					    pagination: {
					      el: ".hot-swiper-pagination",
					      clickable: true,
					    },
					  });
					</script>
				</div>
			</section>
			
			<!-- 이벤트 영역 3개?이미지카드라서-->
			<!-- 
			<section class="review_event_area">
			    <div class="inner">
			        <p class="sub-comment">두디 이벤트</p>
			        <div class="review_event_list flex">
			            <div class="event_card">
			                <p class="event_title">{이벤트게시판타이틀}</p>
			                <p class="event_desc">{이벤트게시판 디스크립션}</p>
			            </div>
			            <div class="event_card">
			                <p class="event_title">리뷰 작성 이벤트</p>
			                <p class="event_desc">리뷰 작성 시 포인트 500원 지급???</p>
			            </div>
			        </div>
			    </div>
			</section>-->

        </main>
    </div>
    
	<jsp:include page="../layout/popup.jsp" />
	<jsp:include page="../layout/footer.jsp" />
</div>
	<script>
	  AOS.init();
	</script>
</body>
</html>

