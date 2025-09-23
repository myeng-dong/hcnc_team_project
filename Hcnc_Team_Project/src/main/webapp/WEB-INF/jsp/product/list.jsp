<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>상품목록</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
</head>
<body>
<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container productlist">
    	<div class="breadcrumb">
	      <a href="/">홈</a>
	      <span>›</span>
	      <strong>상품목록</strong>
	    </div>
	    <div class="sub-area">
	        <div class="sub-title-area">
	        	<h3>[ 타이틀뿌리는스타일 ]</h3>
	        </div>
	        <div class="sub-content-area">
        	<div class="sub-category-area">
        		<ul class="flex f-wrap">
        			<!--시작:반복변수 -->
        			<li><a href="">2카테고리 ex연필 볼펜 </a></li>
        			<!-- 종료:반복변수 -->
        		</ul>
        	</div>
        	<div class="sub-search-area">
        		<ul></ul>
        	</div>
        	<div class="prdItem_area">
        		<div class="flex prdList f-wrap ju-between">
			        	<!-- 시작:상품리스트 변수 -->
			        	<!-- 조건 : 여긴 16개까지 출력 후 페이지네이션? 쇼핑몰 상품은 많으니까  -->
			           <div class="prdItem">
						  <a href="링크" class="prdLink">
						  
						  <div class="thumbnail">
						    <img src="상품이미지" alt="타이틀">
						    <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
						    <span class="soldout">SOLD OUT</span>
						  </div>
						
						  <div class="description">
						    <div class="reviews"> 리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}</div>
						
						    <p class="name">{상품명변수}</p>
							<div class="priceArea">
						      <span class="salePercent">{할인퍼센트}%</span>
						      <span class="priceSale">{판매되는금액}원</span>
						      <span class="originPrice">{할인금액}원</span>
						    </div>
						    <div class="flex ju-between">
						   		<div class="icons flex">
							      <img src="베스트" alt=""/>
							      <img src="인기상품" alt=""/>
							    </div>
							    <div>
							    	<button type="button"><i class="xi-cart"></i></button>
							    	<!-- 변수처리 위시픽이면 채워진하트아이콘 -->
							    	<button type="button"><i class="xi-heart"></i></button>
        							<button type="button"><i class="xi-share-alt"></i></button>
							    </div>
						    </div>
						  </div>
						  </a>
						</div>
			        	<!-- 종료:상품리스트 변수 -->
			        	
			        	<div class="prdItem">
						  <a href="링크" class="prdLink">
						  
						  <div class="thumbnail">
						    <img src="상품이미지" alt="타이틀">
						    <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
						    <span class="soldout">SOLD OUT</span>
						  </div>
						
						  <div class="description">
						    <div class="reviews"> 리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}</div>
						
						    <p class="name">{상품명변수}</p>
							<div class="priceArea">
						      <span class="salePercent">{할인퍼센트}%</span>
						      <span class="priceSale">{판매되는금액}원</span>
						      <span class="originPrice">{할인금액}원</span>
						    </div>
						    <div class="flex ju-between">
						   		<div class="icons flex">
							      <img src="베스트" alt=""/>
							      <img src="인기상품" alt=""/>
							    </div>
							    <div>
							    	<button type="button"><i class="xi-cart"></i></button>
							    	<!-- 변수처리 위시픽이면 채워진하트아이콘 -->
							    	<button type="button"><i class="xi-heart"></i></button>
        							<button type="button"><i class="xi-share-alt"></i></button>
							    </div>
						    </div>
						  </div>
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
    <jsp:include page="../layout/footer.jsp" />
</div>

</body>
</html>
