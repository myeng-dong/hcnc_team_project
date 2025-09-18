<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- jsp:include page="../layout/header-top.jsp" /-->

<jsp:include page="../layout/header.jsp" />
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="../layout/menu.jsp" />
  
<style>
	.swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      width: 100%;
      text-align: center;
      background: #444;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img.mainbanner-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
</style>  
<div class="container">
	<main class="main_area">
		<section class="main_banner_area">
			<div class="swiper mySwiper">
			    <div class="swiper-wrapper">
			    	 <div class="swiper-slide">
			      	<div>1</div>
				  	<div>2</div>
			      </div>
			      <c:forEach var="banner" items="${mainBanners}">
				  <div class="swiper-slide">
				    <c:choose>
				      <c:when test="${not empty banner.linkedUrl}">
				        <a href="${banner.linkedUrl}">
				          <img class="mainbanner-img" src="${banner.imgPath}" alt="${banner.imgOriginName}" />
				        </a>
				      </c:when>
				      <c:otherwise>
				        <img class="mainbanner-img" src="${banner.imgPath}" alt="${banner.imgOriginName}" />
				      </c:otherwise>
				    </c:choose>
				  </div>
				</c:forEach>
			    </div>
			    <div class="swiper-pagination"></div>
			  </div>
			
			  <!-- Swiper JS -->
			  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
			
			  <!-- Initialize Swiper -->
			  <script>
			    var swiper = new Swiper(".mySwiper", {
			    	slidesPerView: 1,        // 화면에 1개씩 보이도록
			        spaceBetween: 0,          // 슬라이드 사이 간격
			        loop: true,               // 마지막 슬라이드 뒤에 첫 슬라이드로 이어짐
			        pagination: {
			            el: ".swiper-pagination",
			            clickable: true       // 점 클릭 가능
			        },
			        autoplay: {
			            delay: 3000,          // 3초마다 자동 슬라이드
			            disableOnInteraction: false
			        }
			    });
			  </script>
		</section>

		<section class="new_item_area">
			<div class="inner">
				<div class="new_item_title_area">
					<h2 class="section_title">NEW ITEM</h2>
				</div>
				<div class="new_item_list flex">
					<div class="new_item_card">
						<img src="/images/item1.jpg" alt="">
						<p class="item_name">상품명</p>
						<p class="item_price">10,000원</p>
						<button class="btn btn_primary">구매하기</button>
					</div>
					<!-- 반복 -->
				</div>
			</div>
		</section>

		<section class="recommend_area">
			<div class="inner">
				<div class="recommend_title_area">
					<h2 class="section_title">추천 상품</h2>
				</div>
				<div class="recommend_list flex">
					<!-- 카드 반복 -->
				</div>
			</div>
		</section>
	</main>
</div>


<jsp:include page="../layout/footer.jsp" />
