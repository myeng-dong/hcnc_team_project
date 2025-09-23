<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>공지사항</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css" />
  </head>
  <style>
    @charset "UTF-8";
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* 기본 레이아웃 */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .flex {
      display: flex;
    }
    .f-wrap {
      flex-wrap: wrap;
    }
    .f-nowrap {
      flex-wrap: nowrap;
    }
    .fd-column {
      flex-direction: column;
    }

    /* 브레드크럼 */
    .breadcrumb {
      margin-bottom: 30px;
      font-size: 14px;
      color: #666;
    }
    .breadcrumb a {
      color: #667eea;
      text-decoration: none;
    }
    .breadcrumb span {
      margin: 0 8px;
    }
    .breadcrumb strong {
      color: #333;
      font-weight: 600;
    }

    /* 제목 영역 */
    .sub-title-area {
      margin-bottom: 30px;
      text-align: center;
    }
    .sub-title-area h3 {
      font-size: 28px;
      color: #333;
      font-weight: 700;
      position: relative;
      display: inline-block;
      padding-bottom: 15px;
    }
    .sub-title-area h3::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    /* 카테고리 필터 영역 */
    .sub-category-area {
      background: #f8f9ff;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
      border: 1px solid rgba(102, 126, 234, 0.1);
    }
    .sub-category-area ul {
      justify-content: center;
      gap: 15px;
      list-style: none;
    }
    .sub-category-area button {
      background: white;
      border: 2px solid #e0e0e0;
      color: #666;
      padding: 12px 24px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 80px;
    }
    .sub-category-area button:hover {
      border-color: #667eea;
      color: #667eea;
    }
    .sub-category-area button.active {
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-color: #667eea;
      color: white;
    }

    /* 공지사항 영역 */
    .notice-area {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(102, 126, 234, 0.1);
    }

    /* 테이블 헤더 */
    .notice-top {
      background: linear-gradient(135deg, #667eea, #764ba2);
      padding: 20px 0;
      border-bottom: none;
    }
    .notice-top ul {
      list-style: none;
      margin: 0;
      padding: 0 30px;
    }
    .notice-top li {
      color: white;
      font-weight: 600;
      font-size: 15px;
    }
    .notice-top li:first-child {
      flex: 0 0 80px;
      text-align: center;
    }
    .notice-top li:nth-child(2) {
      flex: 1;
      text-align: left;
      padding-left: 20px;
    }
    .notice-top li:nth-child(3) {
      flex: 0 0 120px;
      text-align: center;
    }
    .notice-top li:nth-child(4) {
      flex: 0 0 140px;
      text-align: center;
    }

    /* 공지사항 아이템 */
    .noticeItem {
      border-bottom: 1px solid #f0f0f5;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .noticeItem::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(102, 126, 234, 0.08),
        transparent
      );
      transition: width 0.3s ease;
    }

    .noticeItem:hover::before {
      width: 100%;
    }

    .noticeItem:hover {
      background: rgba(102, 126, 234, 0.02);
    }

    .noticeItem:last-child {
      border-bottom: none;
    }

    .noticeItem a {
      display: block;
      text-decoration: none;
      color: inherit;
      position: relative;
      z-index: 1;
    }

    .noticeItem ul {
      display: flex;
      align-items: center;
      padding: 18px 30px;
      margin: 0;
      list-style: none;
    }

    .noticeItem li {
      font-size: 14px;
      color: #333;
    }

    .noticeItem li:first-child {
      flex: 0 0 80px;
      text-align: center;
      font-weight: 600;
      color: #667eea;
      font-size: 15px;
    }

    .noticeItem li:nth-child(2) {
      flex: 1;
      text-align: left;
      padding-left: 20px;
      font-weight: 500;
      color: #333;
      font-size: 15px;
    }

    .noticeItem li:nth-child(3) {
      flex: 0 0 120px;
      text-align: center;
      color: #666;
    }

    .noticeItem li:nth-child(4) {
      flex: 0 0 140px;
      text-align: center;
      color: #999;
      font-size: 13px;
    }

    /* 공지사항 배지 */
    .notice-badge {
      display: inline-block;
      background: linear-gradient(45deg, #ff6b6b, #ff8e53);
      color: white;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      margin-right: 8px;
    }

    .notice-badge.important {
      background: linear-gradient(45deg, #ff4757, #ff3838);
    }

    /* 페이지네이션 */
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 40px 0;
      font-family: Arial, sans-serif;
    }

    .pagination a {
      color: #667eea;
      padding: 12px 16px;
      text-decoration: none;
      border: 2px solid #e0e6ff;
      border-radius: 8px;
      transition: all 0.3s ease;
      font-weight: 500;
      min-width: 44px;
      text-align: center;
    }

    .pagination a.active {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
      border-color: #667eea;
    }

    .pagination a:hover:not(.active) {
      background: #f0f4ff;
      border-color: #667eea;
    }

    .pagination a.prev,
    .pagination a.next {
      font-weight: bold;
      font-size: 16px;
    }

    /* 빈 상태 */
    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #999;
    }
    .empty-state .icon {
      font-size: 48px;
      margin-bottom: 20px;
      opacity: 0.5;
    }
    .empty-state .message {
      font-size: 16px;
      color: #666;
    }

    /* 반응형 */
    @media (max-width: 768px) {
      .container {
        padding: 15px;
      }
      .sub-category-area ul {
        justify-content: flex-start;
        gap: 8px;
        flex-wrap: wrap;
      }
      .sub-category-area button {
        padding: 8px 16px;
        font-size: 13px;
        min-width: 60px;
      }
      .notice-top li:nth-child(3),
      .notice-top li:nth-child(4),
      .noticeItem li:nth-child(3),
      .noticeItem li:nth-child(4) {
        display: none;
      }
      .noticeItem ul {
        padding: 15px 20px;
      }
      .pagination a {
        padding: 8px 12px;
        font-size: 14px;
      }
    }
  </style>
  <body>
    <div class="container-wrap">
      <jsp:include page="../layout/header.jsp" />
      <div class="inner">
        <div class="container noticelist">
          <!-- 브레드크럼 네비게이션 -->
          <div class="breadcrumb">
            <a href="/">홈</a>
            <span>›</span>
            <strong>전체</strong>
          </div>

          <!-- 메인 콘텐츠 영역 -->
          <div class="sub-area">
            <!-- 페이지 제목 -->
            <div class="sub-title-area">
              <h3>[ 전체 ]</h3>
            </div>

            <!-- 콘텐츠 영역 -->
            <div class="sub-content-area">
              <!-- 카테고리 필터 영역 -->
              <div class="sub-category-area">
                <ul class="flex f-wrap">
                  <li>
                    <button type="button" class="active" data-category="all">
                      전체
                    </button>
                  </li>
                  <li>
                    <button type="button" data-category="progress">
                      진행중
                    </button>
                  </li>
                  <li>
                    <button type="button" data-category="ended">종료</button>
                  </li>
                  <li>
                    <button type="button" data-category="important">
                      중요
                    </button>
                  </li>
                  <li>
                    <button type="button" data-category="event">이벤트</button>
                  </li>
                </ul>
              </div>

              <!-- 공지사항 목록 영역 -->
              <div class="notice-area">
                <div class="flex noticeList fd-column">
                  <!-- 테이블 헤더 -->
                  <div class="notice-top">
                    <ul class="flex f-nowrap">
                      <li>NO</li>
                      <li>제목</li>
                      <li>작성자</li>
                      <li>작성일</li>
                    </ul>
                  </div>

                  <!-- 공지사항 목록 -->
                  <div class="notice-info">
                    <!-- 공지사항 아이템 1 - 중요공지 -->
                    <div class="noticeItem" data-category="important">
                      <a href="/notice/detail/1">
                        <ul>
                          <li>1</li>
                          <li>
                            2025년 설날 배송 안내 및 고객센터 운영시간 변경
                          </li>
                          <li>관리자</li>
                          <li>2025-01-15</li>
                        </ul>
                      </a>
                    </div>

                    <!-- 공지사항 아이템 2 - 진행중 -->
                    <div class="noticeItem" data-category="progress">
                      <a href="/notice/detail/2">
                        <ul>
                          <li>2</li>
                          <li>신제품 런칭 기념 특가 할인 이벤트</li>
                          <li>이벤트팀</li>
                          <li>2025-01-10</li>
                        </ul>
                      </a>
                    </div>

                    <!-- 공지사항 아이템 3 - 일반 -->
                    <div class="noticeItem" data-category="general">
                      <a href="/notice/detail/3">
                        <ul>
                          <li>3</li>
                          <li>개인정보처리방침 개정 안내</li>
                          <li>법무팀</li>
                          <li>2025-01-08</li>
                        </ul>
                      </a>
                    </div>

                    <!-- 공지사항 아이템 4 - 종료 -->
                    <div class="noticeItem" data-category="ended">
                      <a href="/notice/detail/4">
                        <ul>
                          <li>4</li>
                          <li>추석 연휴 배송 지연 안내</li>
                          <li>배송팀</li>
                          <li>2024-12-15</li>
                        </ul>
                      </a>
                    </div>

                    <!-- 공지사항 아이템 5 - 이벤트 -->
                    <div class="noticeItem" data-category="event">
                      <a href="/notice/detail/5">
                        <ul>
                          <li>5</li>
                          <li>신규회원 가입시 10% 할인쿠폰 증정</li>
                          <li>마케팅팀</li>
                          <li>2024-12-20</li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 페이지네이션 -->
              <div class="pagination">
                <a href="#" class="prev" data-page="prev">«</a>
                <a href="#" class="active" data-page="1">1</a>
                <a href="#" data-page="2">2</a>
                <a href="#" data-page="3">3</a>
                <a href="#" data-page="4">4</a>
                <a href="#" data-page="5">5</a>
                <a href="#" class="next" data-page="next">»</a>
              </div>
            </div>
          </div>
        </div>

        <script>
          // 카테고리 필터 기능
          document.addEventListener("DOMContentLoaded", function () {
            const categoryButtons = document.querySelectorAll(
              ".sub-category-area button"
            );
            const noticeItems = document.querySelectorAll(".noticeItem");
            const noticeInfo = document.querySelector(".notice-info");

            // 카테고리 버튼 클릭 이벤트
            categoryButtons.forEach((button) => {
              button.addEventListener("click", function () {
                const selectedCategory = this.dataset.category;

                // 활성 버튼 변경
                categoryButtons.forEach((btn) =>
                  btn.classList.remove("active")
                );
                this.classList.add("active");

                // 필터링
                filterNotices(selectedCategory);
              });
            });

            // 공지사항 필터링 함수
            function filterNotices(category) {
              let visibleCount = 0;

              noticeItems.forEach((item) => {
                if (category === "all" || item.dataset.category === category) {
                  item.style.display = "block";
                  visibleCount++;
                } else {
                  item.style.display = "none";
                }
              });

              // 검색 결과가 없을 때
              if (visibleCount === 0) {
                showEmptyState();
              } else {
                hideEmptyState();
              }
            }

            // 빈 상태 표시
            function showEmptyState() {
              const existingEmpty = noticeInfo.querySelector(".empty-state");
              if (!existingEmpty) {
                const emptyDiv = document.createElement("div");
                emptyDiv.className = "empty-state";
                emptyDiv.innerHTML = `
                        <div class="icon">📋</div>
                        <div class="message">해당 카테고리에 공지사항이 없습니다.</div>
                    `;
                noticeInfo.appendChild(emptyDiv);
              }
            }

            // 빈 상태 숨기기
            function hideEmptyState() {
              const emptyState = noticeInfo.querySelector(".empty-state");
              if (emptyState) {
                emptyState.remove();
              }
            }

            // 페이지네이션 클릭 이벤트
            const paginationLinks = document.querySelectorAll(".pagination a");
            paginationLinks.forEach((link) => {
              link.addEventListener("click", function (e) {
                e.preventDefault();

                // 활성 페이지 변경
                if (
                  !this.classList.contains("prev") &&
                  !this.classList.contains("next")
                ) {
                  paginationLinks.forEach((l) => l.classList.remove("active"));
                  this.classList.add("active");
                }

                // 여기서 AJAX 호출 또는 페이지 이동 로직 추가
                console.log("페이지 변경:", this.dataset.page);
              });
            });
          });
        </script>
      </div>
      <jsp:include page="../layout/footer.jsp" />
    </div>
  </body>
</html>
