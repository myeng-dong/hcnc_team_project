<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장바구니</title>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/cart/cart.css'/>"/>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javaScript" language="javascript" defer="defer"></script>
    
    <script>
    
        $(function(){
        	selectCartListByUser();
        })

		function selectCartListByUser(){
        	var memberId = "kkk"; // TODO : 실제 로그인한 memberId가 와야 함.
        	
        	var param = {
        			memberId : memberId
        	};
        	
        	$.ajax({
        		url : "/selectCartListByUser.do"
        		, type : "post"
        		, data : param
        		, dataType : "json"
        		, success : function(res){
					console.log();
        		}
        		, error : function(err){
        			alert("통신에 실패했습니다.");
        		}
        	});
        }
    </script>
</head>
<body>
	<div class="container">
        <div class="breadcrumb">
            <a href="/main.do">홈</a>
            <span>›</span>
            <strong>장바구니</strong>
        </div>
        <h3 style="text-align: center;">[ C A R T ]</h3>
        <div class="hr"></div>
        
		<!-- 상단 선택 체크박스 -->
        <div class="top-check">
        	<label class="chk">
                <input type="checkbox" id="checkAll"><span>전체 선택</span>
            </label>
            <div>
                <button class="btn-outline" id="btnDelSelected">선택 삭제</button>
                <button class="btn-outline" id="btnWishSelected">선택 위시리스트</button>
            </div>
        </div>

        <!-- 장바구니 상품 테이블 -->
          <div class="cart-grid">
    <!-- 좌측: 리스트 -->
    <div>
      <table class="cart-table">
        <thead>
          <tr>
            <th class="col-check"><input type="checkbox" id="headCheck"></th>
            <th class="col-img">이미지</th>
            <th class="col-name">상품명</th>
            <th class="col-price">가격</th>
            <th class="col-qty">수량</th>
            <th class="col-total">총금액</th>
            <th class="col-point">적립금</th>
            <th class="col-actions">삭제/관심</th>
          </tr>
        </thead>
        <tbody id="cart-body">
         <!-- JS 렌더링 -->
        </tbody>
      </table>

      <!-- 하단 툴바 -->
      <div class="toolbar">
        <button class="btn" id="btnContinue">계속 쇼핑하기</button>
        <button class="btn-outline" id="btnClear">장바구니 비우기</button>
        <div style="flex:1"></div>
        <button class="btn-outline" id="btnOrderSelected">선택상품 주문하기</button>
      </div>
    </div>

    <!-- 우측: 합계 -->
    <aside class="summary">
      <h4>결제 예정 금액</h4>
      <div class="sum-row"><span>주문금액</span><span id="sum-products" class="price">0원</span></div>
      <div class="sum-row small"><span>일반배송비</span><span id="sum-ship-normal">0원</span></div>
      <div class="sum-row small"><span>개별배송비</span><span id="sum-ship-indiv">0원</span></div>
      <div class="sum-total"><span>결제금액</span><span id="sum-final" class="price">0원</span></div>
      <button class="order-btn" id="btnOrderAll">전체상품 주문하기</button>
    </aside>
  </div>
    </div>
</body>
</html>