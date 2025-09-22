<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- GNB -->
<nav class="gnb">
  <div class="inner">
    <ul class="flex">
      <li><a href="#">신상품</a></li>
      <li><a href="#">추천상품</a></li>
      <li><a href="#">인기상품</a></li>
      <li><a href="#">이벤트</a></li>
      <li><a href="#">게시판</a></li>
    </ul>
  </div>
</nav>

<div class="category-bar">
  	<div class="inner">
  		<ul class="flex category-onedept-bar">
		    <li><button id="allCategoryToggle"><i class="xi-list-square"></i>전체메뉴</button></li>
		    <li class="hover-item"><a href="#">필기구</a></li>
		    <li class="hover-item"><a href="#">노트/다이어리</a></li>
		    <li class="hover-item"><a href="#">파일/사무용품</a></li>
		    <li class="hover-item"><a href="#">디자인/데코</a></li>
		    <li class="hover-item"><a href="#">학용품/취미</a></li>
		    <li class="hover-item"><a href="#">화방/제도</a></li>
		  </ul>
  	</div>
  
  <!-- 카테고리 2차 메뉴 -->
	<div class="category-menu" id="categoryMenu">
	  <div class="inner">
	    <div class="flex">
	    	<div class="category-col first">
	    		<p>
	    			로고나 이미지
	    		</p>
	    	</div>
	    	<!-- 시작 : 각 1차 카테고리별 2차 메뉴 -->
	    	<div class="category-col">
		      <h5>필기구</h5>
		      <ul>
		        <li><a href="#">볼펜</a></li>
		        <li><a href="#">연필/샤프</a></li>
		        <li><a href="#">형광펜</a></li>
		        <li><a href="#">만년필</a></li>
		      </ul>
		    </div>
		    <div class="category-col">
		      <h5>노트/다이어리</h5>
		      <ul>
		        <li><a href="#">일반노트</a></li>
		        <li><a href="#">스프링노트</a></li>
		        <li><a href="#">플래너</a></li>
		        <li><a href="#">바인더</a></li>
		      </ul>
		    </div>
		    <div class="category-col">
		      <h5>파일/사무용품</h5>
		      <ul>
		        <li><a href="#">클리어파일</a></li>
		        <li><a href="#">바인더</a></li>
		        <li><a href="#">데스크용품</a></li>
		      </ul>
		    </div>
		    <div class="category-col">
		      <h5>디자인/데코</h5>
		      <ul>
		        <li><a href="#">마스킹테이프</a></li>
		        <li><a href="#">스티커</a></li>
		        <li><a href="#">데코소품</a></li>
		      </ul>
		    </div>
		    <div class="category-col">
		      <h5>학용품/취미</h5>
		      <ul>
		        <li><a href="#">계산기</a></li>
		        <li><a href="#">학습교구</a></li>
		        <li><a href="#">DIY 키트</a></li>
		      </ul>
		    </div>
		    <div class="category-col">
		      <h5>화방/제도</h5>
		      <ul>
		        <li><a href="#">수채화</a></li>
		        <li><a href="#">아크릴</a></li>
		        <li><a href="#">캔버스</a></li>
		        <li><a href="#">제도용품</a></li>
		      </ul>
		    </div>
	    </div>
	  </div>
	</div>
</div>



<script>
const toggleBtn = document.getElementById("allCategoryToggle");
const categoryMenu = document.getElementById("categoryMenu");

let fixedOpen = false;

// 버튼 클릭 토글
toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  fixedOpen = !fixedOpen;
  if (fixedOpen) {
    categoryMenu.classList.add("show");
  } else {
    categoryMenu.classList.remove("show");
  }
});

// 밖일때리무부
document.addEventListener("click", (e) => {
  if (fixedOpen && !categoryMenu.contains(e.target) && e.target !== toggleBtn) {
    fixedOpen = false;
    categoryMenu.classList.remove("show");
  }
});

// hover-item 호버 시 열기/닫기 (고정 상태가 아닐 때만)
const hoverItems = document.querySelectorAll(".category-onedept-bar");
hoverItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    if (!fixedOpen) categoryMenu.classList.add("show");
  });
  item.addEventListener("mouseleave", () => {
    if (!fixedOpen) categoryMenu.classList.remove("show");
  });
});
</script>

