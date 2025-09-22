<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <jsp:include page="../layout/headertop.jsp" />
    <title>Document</title>
  </head>
  <style>
    /* Modal 전체 부모 컨테이너 */
    .modal-overlay {
      position: fixed; /* 화면 전체를 덮기 위해 fixed */
      top: 0;
      left: 0;
      width: 100vw; /* 화면 너비 전체 */
      height: 100vh; /* 화면 높이 전체 */
      background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정 */
      display: flex; /* 중앙 정렬을 위해 flex 사용 */
      justify-content: center; /* 가로 중앙 */
      align-items: center; /* 세로 중앙 */
      z-index: 1000; /* 다른 요소 위에 표시 */
      visibility: hidden; /* 기본은 숨김 상태 */
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    /* Modal 활성화 상태 */
    .modal-overlay.active {
      visibility: visible;
      opacity: 1;
    }

    .modal-content {
      background: #fff;
      padding: 30px 40px; /* 안쪽 여백 늘림 */
      border-radius: 10px;
      width: 600px; /* 모달 너비 넓힘 */
      max-width: 80%; /* 화면 작은 경우 반응형 */
      min-height: 300px; /* 세로 공간도 확보 */
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* 살짝 그림자 */
      text-align: center;
    }
  </style>
  <script>
    const payment = () => {
      $("#myModal").addClass("active");
    };
    const cancel = () => {
      $("#myModal").removeClass("active");
    };
  </script>
  <body>
    <button
      style="width: 100px; height: 200px"
      type="button"
      onclick="payment()"
    >
      결제하기
    </button>

    <div class="modal-overlay" id="myModal">
      <div class="modal-content">
        <div style="background-color: #fff">
          <div style="margin-left: auto" onclick="cancel()">
            <i class="xi-close" style="font-size: 14px"></i>
          </div>
          <jsp:include page="../payment/checkout.jsp">
            <jsp:param name="paymentPrice" value="5000" />
            <jsp:param name="title" value="5000" />
          </jsp:include>
        </div>
      </div>
    </div>
  </body>
</html>
