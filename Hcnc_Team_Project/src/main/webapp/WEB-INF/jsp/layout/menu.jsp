<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!-- GNB -->
<nav id="gnb" class="gnb">
  <!--gnb -->
  <div class="one-dept">
  	<div class="inner">
	    <ul class="flex">
	      <li><a href="/newProList.do">신상품</a></li>
	      <li><a href="/recommendProList.do">추천상품</a></li>
	      <li><a href="/hotProList.do">인기상품</a></li>
	      <li><a href="/event.do">이벤트</a></li>
	      <li><a href="/noticeList.do">게시판</a></li>
	    </ul>
	  </div>
  </div>
  <div class="category-bar" id="categoryBar">
	  <div class="inner">
	    <ul class="category-menu flex">
	      <li class="category-col">
	        <button id="allCategoryToggle"><i class="xi-list-square"></i>전체메뉴</button>
	      </li>
	      <c:forEach var="mainCategory" items="${categories}">
		  <li class="category-col">
		    <h5>
		      <a href="/productlist.do?categoryCode=${mainCategory['MAIN_CATE_ID']}">
		        ${mainCategory['MAIN_CATE_NM']}
		      </a>
		    </h5>
		    <c:if test="${not empty categories}">
		    <ul class="subcategory-col">
		      <li>${mainCategory['MAIN_CATE_NM']}</li>
		      <c:forEach var="subCategory" items="${mainCategory.subCategories}">
		        <li>
		          <a href="/productlist.do?categoryCode=${subCategory['SUB_CATE_ID']}">
		            ${subCategory['SUB_CATE_NM']}
		          </a>
		        </li>
		      </c:forEach>
		    </ul>
		    </c:if>
		  </li>
		</c:forEach>
		<c:if test="${empty categories}">
	        <li class="nodata">카테고리 데이터가 비어있습니다.</p>
	    </c:if>
	    </div>
	  </div>
  <span class="bg"></span>
</nav>

<script>
window.addEventListener("scroll", function () {
  const gnb = document.getElementById("gnb");
  if (window.scrollY > 130) {
    gnb.classList.add("fixed");
  } else {
    gnb.classList.remove("fixed");
  }
});

window.addEventListener("load", function() {
	  var toggleBtn = document.getElementById("allCategoryToggle");
	  var categoryBar = document.getElementById("categoryBar");
	  var categoryMenu = document.querySelector(".category-menu");
	  var categoryCols = categoryMenu.querySelectorAll(".category-col");
	  var isFixedOpen = false;

	  function setBeforeHeight() {
	    
	    var wasHidden = !categoryBar.classList.contains("show");
	    if (wasHidden) {
	      categoryBar.classList.add("show");
	    }

	    var maxHeight = 0;
	    var maxInfo = "";

	    Array.prototype.forEach.call(categoryCols, function(col, colIndex) {

	      if (colIndex === 0) {
	        console.log("첫 번째 컬럼(버튼) - 스킵");
	        return;
	      }

	      var subcategoryUl = col.querySelector(".subcategory-col");
	      if (!subcategoryUl) {
	        console.log("subcategory-col을 찾을 수 없음");
	        return;
	      }

	      console.log("subcategory-col 찾음: " + subcategoryUl.tagName);

	      // ul 높이 체크
	      var ulHeight = subcategoryUl.offsetHeight;
	      console.log("ul 전체 높이: " + ulHeight + "px");

	      if (ulHeight > maxHeight) {
	        maxHeight = ulHeight;
	        maxInfo = "컬럼" + colIndex + " ul전체";
	      }

	      var lis = subcategoryUl.querySelectorAll("li");
	      console.log("li 개수: " + lis.length);

	      Array.prototype.forEach.call(lis, function(li, liIndex) {
	        var liHeight = li.offsetHeight;
	        var liText = li.textContent.trim();
	        console.log('  li[' + liIndex + '] "' + liText + '": ' + liHeight + 'px');

	        if (liHeight > maxHeight) {
	          maxHeight = liHeight;
	          maxInfo = "컬럼" + colIndex + "-li" + liIndex;
	        }
	      });
	    });

	    if (wasHidden) {
	      categoryBar.classList.remove("show");
	    }

	    console.log("최대 높이: " + maxHeight + "px (" + maxInfo + ")");

	    var categoryBarHeight = categoryBar.offsetHeight;
	    console.log("category-bar 전체 높이: " + categoryBarHeight + "px");

	    if (maxHeight === 0) {
	      console.error("노ㅠ이0");
	      return;
	    }

	    var finalHeight = maxHeight;
	    console.log("최종 적용할 높이: " + finalHeight + "px");

	    var existingStyle = document.getElementById("categoryMenuHeight");
	    if (existingStyle) {
	      existingStyle.parentNode.removeChild(existingStyle);
	    }

	    var style = document.createElement("style");
	    style.id = "categoryMenuHeight";
	    style.innerHTML =
	      ".category-bar.show .category-menu::before {" +
	      "height: " + finalHeight + "px;" +
	      "content: '';" +
	      "position: absolute;" +
	      "left: -100%;" +
	      "width: 300%;" +
	      "background-color: #fff;" +
	      "top: 44px;" +
	      "box-shadow: 0 0 0 5px #eee;" + // 디버깅용
	      "}";
	    document.head.appendChild(style);

	  }

	  // 즉시 실행해서 구조 확인
	  setTimeout(function() {
	    console.log("DOM 구조 확인:");
	    console.log("categoryCols 개수:", categoryCols.length);
	    Array.prototype.forEach.call(categoryCols, function(col, i) {
	      console.log("컬럼 " + i + ":", col.innerHTML.substring(0, 100) + "...");
	    });
	    setBeforeHeight();
	  }, 500);

	  // 버튼 클릭
	  toggleBtn.addEventListener("click", function(e) {
	    e.stopPropagation();
	    isFixedOpen = !isFixedOpen;
	    if (isFixedOpen) {
	      categoryBar.classList.add("show");
	      setTimeout(setBeforeHeight, 50);
	    } else {
	      categoryBar.classList.remove("show");
	    }
	  });

	  // 외부 클릭 시 닫기
	  document.addEventListener("click", function(e) {
	    if (isFixedOpen && !categoryBar.contains(e.target) && e.target !== toggleBtn) {
	      isFixedOpen = false;
	      categoryBar.classList.remove("show");
	    }
	  });

	  // hover 이벤트
	  Array.prototype.forEach.call(categoryCols, function(col, index) {

	    col.addEventListener("mouseenter", function() {
	      if (!isFixedOpen) {
	        categoryBar.classList.add("show");
	        setTimeout(setBeforeHeight, 50);
	      }
	    });

	    col.addEventListener("mouseleave", function() {
	      if (!isFixedOpen) {
	        categoryBar.classList.remove("show");
	      }
	    });
	  });
	});

</script>