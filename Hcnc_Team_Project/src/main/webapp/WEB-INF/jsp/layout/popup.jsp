<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

<style>
/* 팝업 공통 */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 90%;
  background: #fff;
  border: 1px solid #ccc;
  z-index: 1000;
  display: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border-radius: 8px;
}

/* 팝업 전용 슬라이더 */
.popup-swiper { width: 100%; height: 500px; }
.popup-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
.popup-bottom label { cursor: pointer; }
.popup-close {
  background: #333;
  color: #fff;
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<!-- 팝업 반복 출력 -->
<c:forEach var="banner" items="${popupBanners}">
  <div class="popup" id="popup${banner.BANNER_ID}">
    <div class="popup-swiper swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <c:if test="${not empty banner.LINKED_URL}">
            <a href="${banner.LINKED_URL}" target="_blank">
          </c:if>
          <div class="img-area" style="background: url('${banner.IMG_PATH}') center center no-repeat; background-size: contain; width: 400px; height: 500px;"></div>
          <c:if test="${not empty banner.LINKED_URL}">
            </a>
          </c:if>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="popup-bottom">
      <label><input type="checkbox" id="popup${banner.BANNER_ID}-dontshow"> 오늘 하루 보지 않기</label>
      <button class="popup-close" data-popup="popup${banner.BANNER_ID}">닫기</button>
    </div>
  </div>
</c:forEach>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<script type="text/javascript">
// ES5: 팝업 표시 및 Swiper 초기화
function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  if (!getCookie(popupId)) {
    popup.style.display = "block";
    new Swiper(popup.querySelector(".popup-swiper"), {
      loop: true,
      pagination: { el: popup.querySelector('.swiper-pagination'), clickable: true },
      navigation: {
        nextEl: popup.querySelector('.swiper-button-next'),
        prevEl: popup.querySelector('.swiper-button-prev')
      }
    });
  }
}

// 닫기 버튼 클릭 이벤트
var closeButtons = document.getElementsByClassName("popup-close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    var popupId = this.getAttribute("data-popup");
    var popup = document.getElementById(popupId);
    var dontShow = document.getElementById(popupId + "-dontshow");
    if (dontShow && dontShow.checked) {
      setCookie(popupId, "hidden", 1);
    }
    popup.style.display = "none";
  };
}

// 쿠키 헬퍼
function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toUTCString();
}
function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

// 페이지 로드 시 모든 팝업 보여주기
window.onload = function() {
  <c:forEach var="banner" items="${popupBanners}">
    showPopup("popup${banner.BANNER_ID}");
  </c:forEach>
};
</script>
