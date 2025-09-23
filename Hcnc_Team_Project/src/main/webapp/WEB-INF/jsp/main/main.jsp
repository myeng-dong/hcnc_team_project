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
    <link rel="stylesheet" href="../../../css/egovframework/main.css">
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
					<ul class="list flex">
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>필기구</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>노트/다이어리</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>파일/사무용품</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>디자인/데코</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>학용품/취미</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>화방/제도</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>md 두디픽</dd>
							</dl>
						</li>
						<li>
							<dl class="flex fd-column">
								<dt class="icon-area"></dt>
								<dd>신제품</dd>
							</dl>
						</li>
					</ul>
				</div>			
			</section>
			
			<section class="new_area prd_area">
			    <div class="inner">
			        <p class="sub-comment"  data-aos="fade-up">DOO.D 신상품</p>
			        <div class="newSwiper"  data-aos="fade-up"  data-aos-delay="300">
			        	<div class="new_list flex prdList f-wrap ju-between swiper-wrapper">
				        	<!-- 시작:상품리스트 변수 -->
				        	<c:choose>
				        	<c:when test="${not empty newProducts}">
				        	<c:forEach var="newlist" items="${newProducts}" begin="0" end="7">
				            <div class="prdItem swiper-slider">
							  <a href="/productDetailView.do?productId=${newlist['PRODUCT_ID']}" class="prdLink">						  
							  <div class="thumbnail">
							    <img src="상품이미지" alt="타이틀"/>
							    <%-- soldout은 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible --%>
							    <span class="soldout">SOLD OUT</span>
							  </div>
							
							  <div class="description">
							    <div class="reviews"> 리뷰 ${newlist['REVIEW_COUNT']} | <i class="xi-star"></i>${product.AVG_STAR_POINT}/5.0</div>
							
							    <p class="name">${newlist['PRODUCT_NAME']}</p>
								<div class="priceArea">
							      <span class="salePercent">{할인퍼센트}%</span>
							      <%-- 어.. 이것도 soldout이면 soldout이어야하네 --%>
							      <span class="priceSale">${newlist['PRODUCT_PRICE']}원</span>
							      <span class="originPrice">${newlist['SALED_PRICE']}원</span>
							    </div>
							    <div class="flex ju-between">
							   		<div class="icons flex">
							   			<!-- new인 동시에 추천일수도있지않나? 하나만 하는건가 -->
								      <img src="NEW" alt=""/>
								      <img src="인기상품" alt=""/>
								      <img src="추천상품" alt=""/>
								    </div>
								    <div>
								    	<button type="button"><i class="xi-cart"></i></button>
								    	<%-- 변수처리요청 위시픽이면 채워진하트아이콘 --%>
								    	<button type="button"><i class="xi-heart"></i></button>
	        							<button type="button"><i class="xi-share-alt"></i></button>
								    </div>
							    </div>
							  </div>
							  </a>
							</div>
				        	<%-- 종료:상품리스트 변수 --%>
				        	</c:forEach>
				        	</c:when>
				        	<c:otherwise>
			                    <div class="prdItem nodata">
			                        <div class="nodata"> 등록된 신상품이 없습니다.</div>
			                    </div>
			                </c:otherwise>
			                </c:choose>
				        </div>
				        <script>
						  var swiper = new Swiper(".newSwiper", {
						    autoplay: {      
						      delay: 2500,
						      disableOnInteraction: false,
						    },
						    loop: true,
						    loopAdditionalSlides: 1,
						    slidesPerView: 3,       
						    spaceBetween: 20,       // 슬라이드 사이 여백(px)
						    pagination: {
						      el: ".new-swiper-pagination",
						      clickable: true,
						    },
						  });
						</script>
			        </div>
			        <div class="btn-view-more-wrap flex ju-center"> <!-- 신상품리스트바로가기링크 -->
						<a href="#" class="btn-view-more"><span>신상품 더보기</span></a>
					</div>
			    </div>

			</section>
			
			<section class="recommend_area prd_area">
			    <div class="inner">
			        <p class="sub-comment"  data-aos="fade-up">DOO.D 추천상품</p>
			        <div class="recommend_list swiper recommendSwiper"  data-aos="fade-up"  data-aos-delay="300">
					  <div class="swiper-wrapper">
					    <!-- 시작:상품리스트 변수 -->
					    <c:choose>
					      <c:when test="${not empty recommendProducts}">
					        <c:forEach var="recomendlist" items="${recommendProducts}" begin="0" end="7">
					          <div class="swiper-slide prdItem ">
					            <a href="/detail.do?pro_code=${recomendlist['PRODUCT_CODE']}" class="prdLink">						  
					              <div class="thumbnail">
					                <img src="상품이미지" alt="타이틀"/>
					                <span class="soldout">SOLD OUT</span>
					              </div>
					
					              <div class="description">
					                <div class="reviews">
					                  리뷰 ${recomendlist.REVIEW_COUNT} | 
					                  <i class="xi-star"></i>${product.AVG_STAR_POINT}/5.0
					                </div>
					
					                <p class="name">${recomendlist['PRODUCT_NAME']}</p>
					                <div class="priceArea">
					                  <span class="salePercent">{할인퍼센트}%</span>
					                  <span class="priceSale">${recomendlist['PRODUCT_PRICE']}원</span>
					                  <span class="originPrice">${recomendlist['SALED_PRICE']}원</span>
					                </div>
					
					                <div class="flex ju-between">
					                  <div class="icons flex">
					                    <img src="NEW" alt=""/>
					                    <img src="인기상품" alt=""/>
					                    <img src="추천상품" alt=""/>
					                  </div>
					                  <div>
					                    <button type="button"><i class="xi-cart"></i></button>
					                    <button type="button"><i class="xi-heart"></i></button>
					                    <button type="button"><i class="xi-share-alt"></i></button>
					                  </div>
					                </div>
					              </div>
					            </a>
					          </div>
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
						<a href="#" class="btn-view-more"><span>추천상품 더보기</span></a>
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
			
			<section class="recommend_area prd_area">
			    <div class="inner">
			        <p class="sub-comment">DOO.D 추천상품</p>
			        <ul class="recommend_list flex prdList f-wrap ju-between">
			        	<!-- 시작:상품리스트 변수 -->
			        	<c:choose>
			        	<c:when test="${not empty recommendProducts}">
			        	<c:forEach var="recomendlist" items="${recommendProducts}" begin="0" end="7">
			            <li class="prdItem">
						  <a href="/detail.do?pro_code=${recomendlist['PRODUCT_CODE']}" class="prdLink">						  
						  <div class="thumbnail">
						    <img src="상품이미지" alt="타이틀"/>
						    <%-- soldout은 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible --%>
						    <span class="soldout">SOLD OUT</span>
						  </div>
						
						  <div class="description">
						    <div class="reviews"> 리뷰 ${recomendlist.REVIEW_COUNT} | <i class="xi-star"></i>${product.AVG_STAR_POINT}/5.0</div>
						
						    <p class="name">${recomendlist['PRODUCT_NAME']}</p>
							<div class="priceArea">
						      <span class="salePercent">{할인퍼센트}%</span>
						      <%-- 어.. 이것도 soldout이면 soldout이어야하네 --%>
						      <span class="priceSale">${recomendlist['PRODUCT_PRICE']}원</span>
						      <span class="originPrice">${recomendlist['SALED_PRICE']}원</span>
						    </div>
						    <div class="flex ju-between">
						   		<div class="icons flex">
						   			<!-- new인 동시에 추천일수도있지않나? 하나만 하는건가 -->
							      <img src="NEW" alt=""/>
							      <img src="인기상품" alt=""/>
							      <img src="추천상품" alt=""/>
							    </div>
							    <div>
							    	<button type="button"><i class="xi-cart"></i></button>
							    	<%-- 변수처리요청 위시픽이면 채워진하트아이콘 --%>
							    	<button type="button"><i class="xi-heart"></i></button>
        							<button type="button"><i class="xi-share-alt"></i></button>
							    </div>
						    </div>
						  </div>
						  </a>
						</li>
			        	<%-- 종료:상품리스트 변수 --%>
			        	</c:forEach>
			        	</c:when>
			        	<c:otherwise>
		                    <li class="prdItem nodata">
		                        <div class="nodata"> 등록된 추천상품이 없습니다.</div>
		                    </li>
		                </c:otherwise>
		                </c:choose>
			        </ul>
			        <div class="btn-view-more-wrap flex ju-center"> <!-- 추천상품리스트바로가기링크 -->
						<a href="#" class="btn-view-more"><span>추천상품 더보기</span></a>
					</div>
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
					<div class="hot_list prdlist swiper hotSwiper "  data-aos="fade-up" data-aos-delay="300">
					  <div class="swiper-wrapper">
					    <!-- 시작:상품리스트 변수 -->
					    <c:choose>
					      <c:when test="${not empty hotProducts}">
					        <c:forEach var="hotlist" items="${hotProducts}" begin="0" end="7">
					          <div class="swiper-slide prdItem">
					            <a href="/detail.do?pro_code=${hotlist['PRODUCT_CODE']}" class="prdLink">						  
					              <div class="thumbnail">
					                <img src="상품이미지" alt="타이틀"/>
					                <span class="soldout">SOLD OUT</span>
					              </div>
					
					              <div class="description">
					                <div class="reviews">
					                  리뷰 ${hotlist['REVIEW_COUNT']} | 
					                  <i class="xi-star"></i>${product.AVG_STAR_POINT}/5.0
					                </div>
					
					                <p class="name">${hotlist['PRODUCT_NAME']}</p>
					                <div class="priceArea">
					                  <span class="salePercent">{할인퍼센트}%</span>
					                  <span class="priceSale">${hotlist['PRODUCT_PRICE']}원</span>
					                  <span class="originPrice">${hotlist['SALED_PRICE']}원</span>
					                </div>
					
					                <div class="flex ju-between">
					                  <div class="icons flex">
					                    <img src="NEW" alt=""/>
					                    <img src="인기상품" alt=""/>
					                    <img src="추천상품" alt=""/>
					                  </div>
					                  <div>
					                    <button type="button"><i class="xi-cart"></i></button>
					                    <button type="button"><i class="xi-heart"></i></button>
					                    <button type="button"><i class="xi-share-alt"></i></button>
					                  </div>
					                </div>
					              </div>
					            </a>
					          </div>
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
										
					<div class="btn-view-more-wrap flex ju-center"> <!-- 추천리스트바로가기링크 -->
						<a href="#" class="btn-view-more"><span>추천상품 더보기</span></a>
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
			</section>


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
