<!-- <%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> -->

<!-- <!DOCTYPE html> -->
<!-- <jsp:include page="../layout/headerlink.jsp" /> -->

<html lang="ko" style="display: none">
  <head>
    <meta charset="UTF-8" />
    <title>검색완료페이지</title>
    <jsp:include page="../layout/headertop.jsp" />
    <jsp:include page="../layout/headertop.jsp" />
  </head>
  <body>
    <div class="container-wrap">
      <jsp:include page="../layout/header.jsp" />
      <script></script>
      <script>
        let list = []; //검색상품

        if (list.length === 0) {
          document.getElementById("no-data").style.display = "block";
          document.getElementById("search-results").style.display = "none";
        } else {
          document.getElementById("no-data").style.display = "none";
          document.getElementById("search-results").style.display = "block";
        }
      </script>

      <div class="searh-result-area container">
        <h3>${검색어} 검색</h3>
        <p>결과 총 n개입니다</p>

        <!-- 검색결과가 없을 때 -->
        <div id="no-data" class="no-data">
          <p>검색 결과가 없습니다.</p>
        </div>

        <!-- 검색결과가 있을 때 그외 추가 list에서 출력하는게 있다면 유사하게 사용 -->
        <div id="search-results" class="search-results">
          <div class="product">
            <img src="image1.jpg" alt="상품 1" />
            <p class="title">상품제목</p>
            <p class="price">₩30,000</p>
          </div>
          <div class="product">
            <img src="image1.jpg" alt="상품 1" />
            <p class="title">상품제목</p>
            <p class="price">₩30,000</p>
          </div>

          <div class="product">
            <img src="image1.jpg" alt="상품 1" />
            <p class="title">상품제목</p>
            <p class="price">₩30,000</p>
          </div>
        </div>
      </div>

      <jsp:include page="../layout/footer.jsp" />
    </div>
  </body>
</html>
