<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> <%@
taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> <%@ taglib
prefix="form" uri="http://www.springframework.org/tags/form" %> <%@ taglib
prefix="ui" uri="http://egovframework.gov/ctl/ui"%> <%@ taglib prefix="spring"
uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<head>
  <jsp:include page="../layout/headertop.jsp" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DDD.D - 마이페이지</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    rel="stylesheet"
  />
</head>
<script language="javascript">
  $(() => {
    var orders = JSON.parse('<c:out value="${orders}" escapeXml="false"/>');
    shipCalculator(orders);
  });
  const shipCalculator = (orders) => {
    let payWait = 0;
    let shipReady = 0;
    let shipping = 0;
    let shipDone = 0;
    orders.map((res) => {
      if (res.PAYMENT_STATUS == "결제대기") {
        payWait += 1;
        return;
      }
      if (res.ORDER_COMMENT == "결제완료") {
        shipReady += 1;
        return;
      }
      if (res.ORDER_COMMENT == "배송중") {
        shipping += 1;
        return;
      }
      if (res.ORDER_COMMENT == "배송완료") {
        shipDone += 1;
        return;
      }
    });
    $("#payWait").text(payWait);
    $("#shipReady").text(shipReady);
    $("#shipping").text(shipping);
    $("#shipDone").text(shipDone);
  };
</script>
<style>
  .user-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .user-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff9a9e, #fecfef);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    font-weight: bold;
  }

  .user-name {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
  }

  /* 메인 콘텐츠 */
  .main-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
  }

  /* 사이드바 */
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .profile-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ffecd2, #fcb69f);
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: white;
    border: 4px solid rgba(255, 255, 255, 0.8);
  }

  .profile-name {
    font-size: 24px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 8px;
  }

  .profile-email {
    color: #718096;
    margin-bottom: 20px;
  }

  .edit-profile-btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .edit-profile-btn:hover {
    transform: translateY(-2px);
  }

  /* 퀵 메뉴 */
  .quick-menu {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .quick-menu h3 {
    font-size: 18px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #4a5568;
  }

  .menu-item:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateX(5px);
    color: #667eea;
  }

  .menu-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(45deg, #a8edea, #fed6e3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  /* 메인 패널 */
  .main-panel {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  /* 주문 현황 */
  .order-status {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-size: 20px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .status-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .status-item {
    text-align: center;
    padding: 20px;
    border-radius: 15px;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .status-item:hover {
    transform: translateY(-5px);
  }

  .status-item:nth-child(2) {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }

  .status-item:nth-child(3) {
    background: linear-gradient(135deg, #d299c2 0%, #fef9d3 100%);
  }

  .status-item:nth-child(4) {
    background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
  }

  .status-number {
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-bottom: 8px;
  }

  .status-label {
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }

  /* 최근 주문 */
  .recent-orders {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 15px;
    background: rgba(102, 126, 234, 0.05);
    border: 1px solid rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
  }

  .order-item:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }

  .order-info h4 {
    color: #2d3748;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .order-date {
    color: #718096;
    font-size: 14px;
  }

  .order-status-badge {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  .order-status-badge.delivered {
    background: linear-gradient(45deg, #48bb78, #38a169);
  }

  .order-status-badge.shipping {
    background: linear-gradient(45deg, #ed8936, #dd6b20);
  }

  /* 위시리스트 */
  .wishlist {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .wishlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .wishlist-item {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .wishlist-item:hover {
    transform: translateY(-5px);
  }

  .item-img {
    width: 100%;
    height: 120px;
    background: linear-gradient(45deg, #ffecd2, #fcb69f);
    border-radius: 10px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
  }

  .item-name {
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 8px;
  }

  .item-price {
    color: #667eea;
    font-weight: 700;
    font-size: 16px;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .main-content {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .header {
      padding: 20px;
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    .status-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .order-item {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    .wishlist-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    body {
      padding: 10px;
    }

    .status-grid {
      grid-template-columns: 1fr;
    }

    .wishlist-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<body>
  <jsp:include page="../layout/header.jsp" />
  <div style="height: 20px"></div>
  <div class="container">
    <!-- 메인 콘텐츠 -->
    <div class="inner">
      <div class="main-content">
        <!-- 사이드바 -->
        <div class="sidebar">
          <!-- 프로필 카드 -->
          <div class="profile-card">
            <div class="profile-img">✏️</div>
            <div class="profile-name">${user.USER_NAME}</div>
            <div class="profile-email">${user.EMAIL_ADDR}</div>
            <button
              class="edit-profile-btn"
              type="button"
              onclick="location.href='/mypage/update.do'"
            >
              프로필 수정
            </button>
          </div>

          <!-- 퀵 메뉴 -->
          <div class="quick-menu">
            <h3><i class="fas fa-bolt"></i> 빠른 메뉴</h3>
            <a href="#" class="menu-item">
              <div class="menu-icon">📦</div>
              <span>주문/배송 조회</span>
            </a>
            <a href="#" class="menu-item">
              <div class="menu-icon">❤️</div>
              <span>찜한 상품</span>
            </a>
            <a href="#" class="menu-item">
              <div class="menu-icon">💳</div>
              <span>적립금/쿠폰</span>
            </a>
            <a href="#" class="menu-item">
              <div class="menu-icon">📝</div>
              <span>상품 후기</span>
            </a>
            <a href="#" class="menu-item">
              <div class="menu-icon">💬</div>
              <span>1:1 문의</span>
            </a>
          </div>
        </div>

        <!-- 메인 패널 -->
        <div class="main-panel">
          <!-- 주문 현황 -->
          <div class="order-status">
            <h2 class="section-title">
              <i class="fas fa-shopping-cart"></i>
              나의 주문 현황
            </h2>
            <div class="status-grid">
              <div class="status-item">
                <div id="payWait" class="status-number">2</div>
                <div class="status-label">입금대기</div>
              </div>
              <div class="status-item">
                <div id="shipReady" class="status-number">1</div>
                <div class="status-label">배송준비</div>
              </div>
              <div class="status-item">
                <div id="shipping" class="status-number">3</div>
                <div class="status-label">배송중</div>
              </div>
              <div class="status-item">
                <div id="shipDone" class="status-number">15</div>
                <div class="status-label">배송완료</div>
              </div>
            </div>
          </div>

          <!-- 최근 주문 -->
          <div class="recent-orders">
            <h2 class="section-title">
              <i class="fas fa-clock"></i>
              최근 주문 내역
            </h2>
            <div class="order-item">
              <div class="order-info">
                <h4>모나미 153 볼펜 세트 (12색)</h4>
                <div class="order-date">2024-11-15</div>
              </div>
              <div class="order-status-badge delivered">배송완료</div>
            </div>
            <div class="order-item">
              <div class="order-info">
                <h4>코쿠요 캠퍼스 노트 A4</h4>
                <div class="order-date">2024-11-12</div>
              </div>
              <div class="order-status-badge shipping">배송중</div>
            </div>
            <div class="order-item">
              <div class="order-info">
                <h4>포스트잇 플래그 세트</h4>
                <div class="order-date">2024-11-10</div>
              </div>
              <div class="order-status-badge">결제완료</div>
            </div>
          </div>

          <!-- 위시리스트 -->
          <div class="wishlist">
            <h2 class="section-title">
              <i class="fas fa-heart"></i>
              찜한 상품
            </h2>
            <div class="wishlist-grid">
              <div class="wishlist-item">
                <div class="item-img">📐</div>
                <div class="item-name">프리미엄 제도용품 세트</div>
                <div class="item-price">₩35,000</div>
              </div>
              <div class="wishlist-item">
                <div class="item-img">🖊️</div>
                <div class="item-name">파일럿 만년필 한정판</div>
                <div class="item-price">₩89,000</div>
              </div>
              <div class="wishlist-item">
                <div class="item-img">📚</div>
                <div class="item-name">몰스킨 다이어리 2025</div>
                <div class="item-price">₹42,000</div>
              </div>
              <div class="wishlist-item">
                <div class="item-img">✂️</div>
                <div class="item-name">OLFA 프리미엄 커터</div>
                <div class="item-price">₩15,800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="height: 20px"></div>
  <jsp:include page="../layout/footer.jsp" />
</body>
