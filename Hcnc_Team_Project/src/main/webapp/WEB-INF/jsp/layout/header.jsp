<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<header class="header header_area">
  <div class="header_event_area">
    <!-- 변수로 불러올 영역 -->
    <div class="inner">상단 이벤트 배너 영역</div>
  </div>
  <div class="header_top_area">
    <div class="inner">
      <div class="flex ju-end">
        <ul class="header_menu_list flex">
          <li><a href="/login.do?type=list">주문조회</a></li>
          <!-- 세션 없을때 : 로그인하면 로그아웃으로 -->
          <li><a href="/login.do">로그인</a></li>
          <li><a href="/sign.do">회원가입</a></li>
          <!-- 세션 없을때 : 로그인하면 로그아웃으로 -->
          <!-- 세션 있을때 : 로그아웃으로 -->
          <li><a href="#">로그아웃</a></li>
          <!-- 세션 있을때 : 로그아웃으로 -->
          <!-- 시작 : 관리자등급으로 체크된 계정이 들어오면 -->
          <li><a href="/admin">관리자페이지 바로가기</a></li>
          <!-- 종료 : 관리자등급으로 체크된 계정이 들어오면 -->
        </ul>
      </div>
    </div>
  </div>
  <div class="header_main_area">
    <div class="inner flex ai-center">
      <h1 class="logo"><a href="/"></a></h1>
      <!-- 모든서치 x: 편의상 상품의 이름정도의 검색 -->
      <div class="header_search_area" class="flex">
        <!-- 링크확인용이니  form과 onclick중 희망하는 작업 방식으로 진행-->
        <form action="/search/search.jsp" class="flex">
          <!-- 주석 : controller안만들었더니 이동을 안해서 해당위치에 있음을 알리는 -->
          <input type="text" placeholder="검색어를 입력하세요" />
          <button class="btn btn_search" type="submit">
            <i class="xi xi-search"></i>
          </button>
        </form>
      </div>
      <!-- 모든서치 x: 편의상 상품의 이름정도의 검색 -->
      <div></div>
    </div>
  </div>
  <jsp:include page="./menu.jsp" />
</header>
