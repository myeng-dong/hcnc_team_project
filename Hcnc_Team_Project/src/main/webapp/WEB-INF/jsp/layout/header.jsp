<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <%@
taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script>
  const confirmLogout = () => {
    if (confirm("정말 로그아웃 하시겠습니까?")) {
      return true; // true 반환 → a 태그 href 실행 (로그아웃 컨트롤러 이동)
    } else {
      return false; // false 반환 → a 태그 이동 취소
    }
  };
</script>
<header class="header header_area">
  <div class="header_event_area">
    <div class="inner">상단 이벤트 배너 영역</div>
  </div>

  <div class="header_top_area">
    <div class="inner">
      <div class="flex ju-end">
        <ul class="header_menu_list flex">
          <!-- 로그인 안 되어 있을 때 -->
          <c:if test="${userInfo == null}">
            <li><a href="/login.do?type=list">비회원 주문조회</a></li>
            <li><a href="/login.do">로그인</a></li>
            <li><a href="/sign.do">회원가입</a></li>
          </c:if>

          <!-- 로그인 되어 있을 때 -->
          <c:if test="${userInfo != null}">
            <li>
              <a href="/mypage/home.do">마이페이지</a>
              <a href="/logoutByUser.do" onclick="confirmLogout()">로그아웃</a>
            </li>

            <!-- 관리자 체크 -->
            <c:if test="${userInfo.LOGIN_TYPE == 'ADMIN'}">
              <li><a href="/admin">관리자페이지 바로가기</a></li>
            </c:if>
          </c:if>
        </ul>
      </div>
    </div>
  </div>

  <div class="header_main_area">
    <div class="inner flex ai-center">
      <h1 class="logo"><a href="/"></a></h1>

      <div class="header_search_area flex">
        <form action="/search/search.jsp" class="flex">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button class="btn btn_search" type="submit">
            <i class="xi xi-search"></i>
          </button>
        </form>
      </div>
      <div></div>
    </div>
  </div>

  <jsp:include page="./menu.jsp" />
</header>
