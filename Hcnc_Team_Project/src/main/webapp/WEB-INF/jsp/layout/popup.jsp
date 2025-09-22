<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

<div class="popuparea">
<c:if test="${not empty popupBanners}">

  <!-- 팝업 오버레이 -->
  <div class="popup-overlay" id="popupOverlay"></div>

  <div class="popup" id="mainPopup">
    <div class="popup-swiper swiper">
      <div class="swiper-wrapper">
        <!-- 모든 배너를 슬라이드로 추가 -->
        <c:forEach var="banner" items="${popupBanners}">
          <div class="swiper-slide">
            <c:choose>
              <c:when test="${not empty banner.LINKED_URL}">
                <a href="${banner.LINKED_URL}" target="_blank" style="display: block; width: 100%; height: 100%;">
                  <div class="img-area">
                  	<img src="${banner.IMG_PATH}" alt="${banner.IMG_TITLE}">
                  </div>
                </a>
              </c:when>
              <c:otherwise>
                <div class="img-area">
                  	<img src="${banner.IMG_PATH}" alt="${banner.IMG_TITLE}">
                  </div>
              </c:otherwise>
            </c:choose>
          </div>
        </c:forEach>
      </div>
      
      <c:if test="${fn:length(popupBanners) > 1}">
        <div class="popup-swiper-pagination"></div>
        <div class="popup-swiper-button-next"></div>
        <div class="popup-swiper-button-prev"></div>
      </c:if>
    </div>
    
    <div class="popup-bottom">
      <label>
        <input type="checkbox" id="mainPopup-dontshow"> 
        오늘 하루 보지 않기
      </label>
      <button class="popup-close" data-popup="mainPopup">닫기</button>
    </div>
  </div>

</c:if>
</div>

<style>
/* 팝업 공통 */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 500px;
  background: #fff;
  border: 1px solid #ccc;
  z-index: 1000;
  display: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border-radius: 8px;
}

/* 팝업 오버레이 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 999;
  display: none;
}

/* 팝업 전용 슬라이더 */
.popup-swiper { 
  width: 100%; 
  height: 400px;
}

.popup-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.popup-swiper .img-area {
  width: 100%;
}

.popup-swiper .img-area img {
  width: 100%;
}

/* 하단 영역 */
.popup-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  font-size: 14px;
}

.popup-bottom label { 
  cursor: pointer; 
}

.popup-close {
  background: #333;
  color: #fff;
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.popup-close:hover {
  background: #555;
}
</style>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
  
  // 팝업 표시 및 Swiper 초기화
  function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById('popupOverlay');
    
    if (!getCookie(popupId) && popup) {
      popup.style.display = "block";
      overlay.style.display = "block";
      
      // Swiper 초기화
      new Swiper(popup.querySelector(".popup-swiper"), {
        loop: true, // 여러 슬라이드가 있으므로 loop 활성화
        pagination: { 
          el: popup.querySelector('.popup-swiper-pagination'), 
          clickable: true 
        },
        navigation: {
          nextEl: popup.querySelector('.popup-swiper-button-next'),
          prevEl: popup.querySelector('.popup-swiper-button-prev')
        },
        autoplay: {
          delay: 5000, // 5초마다 자동 슬라이드
          disableOnInteraction: false,
        }
      });
    }
  }

  // 팝업 닫기 함수
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById('popupOverlay');
    var dontShow = document.getElementById(popupId + "-dontshow");
    
    if (dontShow && dontShow.checked) {
      setCookie(popupId, "hidden", 1);
    }
    
    popup.style.display = "none";
    overlay.style.display = "none";
  }

  // 닫기 버튼 이벤트
  var closeButtons = document.getElementsByClassName("popup-close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      var popupId = this.getAttribute("data-popup");
      closePopup(popupId);
    });
  }

  // 오버레이 클릭시 팝업 닫기
  var overlay = document.getElementById('popupOverlay');
  if (overlay) {
    overlay.addEventListener('click', function() {
      closePopup('mainPopup');
    });
  }

  // 쿠키 헬퍼 함수들
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toUTCString();
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
  }

  // 페이지 로드 시 팝업 표시
  <c:if test="${not empty popupBanners}">
    showPopup("mainPopup");
  </c:if>

});
</script>