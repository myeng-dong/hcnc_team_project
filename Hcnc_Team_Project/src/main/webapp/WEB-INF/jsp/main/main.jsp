<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../layout/header.jsp" />
<jsp:include page="../layout/menu.jsp" />
  
<div class="container">
	<main class="main_area">
		<section class="main_banner_area">
			<div class="inner">
				<img src="/upload/banner.jpg" alt="메인 배너">
			</div>
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
