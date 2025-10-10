<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>FAQ</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
</head>
<body>

<div class="container-wrap">
	<jsp:include page="../layout/header.jsp" />
    <div class="container faqlist">
      <div class="inner">
    	<div class="breadcrumb">
	      <a href="/">홈</a>
	      <span>›</span>
	      <strong>FAQ</strong>
	    </div>
	    <div class="sub-area">
	        <div class="sub-title-area">
	        	<h3>[ FAQ ]</h3>
	        </div>
	        <div class="sub-content-area">
        	
        	<div class="faq-area">
        		<div class="faq-list" role="list">
        		  <!-- 시작:반복되는 faq-item 탭분류가 있다면 쓰겠지만 faq는 질문에 대한 정해진 대답출력영역임 -->
				  <div class="faq-item" role="listitem">
				    <p class="faq-head">
				      <button class="faq-toggle" aria-expanded="false" aria-controls="faq-panel-1" id="faq-btn-1" type="button">
				        <span class="faq-q"> {타입이 faq일때 title 변수} </span>
				        <span class="faq-icon" aria-hidden="true">＋</span>
				      </button>
				    </p>
				    <div class="faq-panel" id="faq-panel-1" role="region" aria-labelledby="faq-btn-1" hidden>
				      <div class="faq-body">
				        {타입이 faq일때 content 변수}
				      </div>
				    </div>
				  </div>
				  <!-- 종료:반복되는 faq-item 탭분류가 있다면 쓰겠지만 faq는 질문에 대한 정해진 대답출력영역임 -->
				</div>	
        	</div>
        </div>
      </div>
    </div>	
    <jsp:include page="../layout/footer.jsp" />
</div>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".faq-toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const panel = item.querySelector(".faq-panel");
      const expanded = btn.getAttribute("aria-expanded") === "true";

      // 닫기
      if (expanded) {
        btn.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        item.classList.remove("open");
      } 
      // 열기
      else {
        btn.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        item.classList.add("open");
      }
    });
  });
});
</script>
</body>
</html>
