<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!-- GNB -->
<nav id="gnb" class="gnb" style="flex-direction: column;">
  <!--gnb -->
  <div class="one-dept">
  	<div class="inner">
	    <ul class="flex" style="display: flex;">
	      <li><a href="/newlist.do">신상품</a></li>
	      <li><a href="/recommendlist.do">추천상품</a></li>
	      <li><a href="/hotlist.do">인기상품</a></li>
	      <li><a href="/board/home.do">게시판</a></li>
	    </ul>
	  </div>
  </div>
  <div class="category-bar" id="categoryBar">
	  <div class="inner">
	    <ul class="category-menu flex" style="display: flex;">
	      <li class="category-col">
	        <button id="allCategoryToggle"><i class="xi-list-square"></i>전체메뉴</button>
	      </li>
    <c:forEach var="mainCategory" items="${categories}">
		  <li class="category-col">
		    <h5>
		      <a href="/product/list.do?mainCateId=${mainCategory['MAIN_CATE_ID']}">
		        ${mainCategory['MAIN_CATE_NM']}
		      </a>
		    </h5>
		    <c:if test="${not empty categories}">
		    <ul class="subcategory-col">
		      <li>${mainCategory['MAIN_CATE_NM']}</li>
		      <c:forEach var="subCategory" items="${mainCategory.subCategories}">
		        <li>
		          <a href="/product/list.do?mainCateId=${mainCategory['MAIN_CATE_ID']}&subCateId=${subCategory['SUB_CATE_ID']}" style="text-align: center; color:#333">
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
// window.addEventListener("scroll", function () {
//   const gnb = document.getElementById("gnb");
//   if (window.scrollY > 130) {
//     gnb.classList.add("fixed");
//   } else {
//     gnb.classList.remove("fixed");
//   }
// });

window.addEventListener("load", function() {
  var toggleBtn = document.getElementById("allCategoryToggle");
  var categoryBar = document.getElementById("categoryBar");
  var categoryMenu = document.querySelector(".category-menu");
  var categoryCols = categoryMenu.querySelectorAll(".category-col");
  var subCategoryCols = document.querySelector(".subcategory-col");
  
  var isFixedOpen = false;

  function setBeforeHeight() {
    var wasHidden = !categoryBar.classList.contains("show");
    if (wasHidden) {
      categoryBar.classList.add("show");
    }

    var maxHeight = 0;

    Array.prototype.forEach.call(categoryCols, function(col, colIndex) {
      if (colIndex === 0) return;

      var subcategoryUl = col.querySelector(".subcategory-col");
      if (!subcategoryUl) return;

      var ulHeight = subcategoryUl.offsetHeight;
      if (ulHeight > maxHeight) {
        maxHeight = ulHeight;
      }

      var lis = subcategoryUl.querySelectorAll("li");
      Array.prototype.forEach.call(lis, function(li) {
        var liHeight = li.offsetHeight;
        if (liHeight > maxHeight) {
          maxHeight = liHeight;
        }
      });
    });

    if (wasHidden) {
      categoryBar.classList.remove("show");
    }

    if (maxHeight === 0) return;

    var finalHeight = maxHeight+10;

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
      "left: 0%;" +
      "width: 100%;" +
      "background-color: #fff;" +
      "top: 45px;" +
      "z-index: 30;" +
      "box-shadow: 0 5px 5px 0 rgba(0,0,0,0.3);" +
      "}";
    document.head.appendChild(style);
  }

  // 즉시 실행해서 높이 세팅
  setTimeout(setBeforeHeight, 500);

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
  Array.prototype.forEach.call(categoryCols, function(col) {
    col.addEventListener("mouseenter", function() {
      if (!isFixedOpen) {
        categoryBar.classList.add("show");
        setTimeout(setBeforeHeight, 50);
      }
    });

    categoryMenu.addEventListener("mouseleave", function() {
      if (!isFixedOpen) {
        categoryBar.classList.remove("show");
      }
    });
  });
});
</script>
<style>
  .subcategory-col a:hover{
    background-color: #fff5f5;
    border-radius: 4px;
    color:#e63946 !important;
  }
</style>