<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>장바구니</title>
  <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/global.css'/>" />
  <link type="text/css" rel="stylesheet" href="<c:url value='/css/cart/cart.css'/>" />
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script type="text/javaScript" language="javascript" defer="defer"></script>
    <style>
    	.breadcrumb { text-align: right;}
    </style>
    <script>
    	// 페이지 로드
    	$(function(){
    		selectCartList();
    	})
    
    	// 장바구니 리스트 조회
    	const selectCartList = () => {
    		var memberId = "user01";
    		var param = {
    				memberId : memberId
    		};
    		
    		$.ajax({
    			url: "/selectCartListByUser.do"
    			, type: "post"
    			, data: param
    			, dataType: "json"
    			, success: function(res){
    				console.log(res.cartList[0]);
    				
    				var list = res.cartList;
    				
    				var html = '';
    				for(var i = 0; i < list.length; i++){
    					html += '<tr>';
    					html += '<td class="col-check"><input type="checkbox" value="' + list[i].IS_CHECKED + '"></td>';
    					html += '<td class="col-img"><img src="sample.jpg" width="50"></td>';
    					html += '<td class="col-name">' + list[i].PRODUCT_NAME + '</td>';
    					html += '<td class="col-price" id="'+ list[i].PRODUCT_ID +'-price">' + list[i].PRICE + '</td>';
    					html += '<td class="col-qty">';
    					html += '<div class="qty-box">';
    					html += '<button type="button" class="btn-qty" onclick="countDown('+ list[i].PRODUCT_ID +')">-</button>';
    					html += '<input class="quantity" id="'+ list[i].PRODUCT_ID +'-quantity" type="number" value="' + list[i].QUANTITY + '" min="1" onchange="updateCnt('+ list[i].PRODUCT_ID +')">';
    					html += '<button type="button" class="btn-qty" onclick="countUp('+ list[i].PRODUCT_ID +')">+</button>';
    					html += '</div>';
    					html += '</td>';
    					html += '<td class="col-total" id="'+ list[i].PRODUCT_ID +'-total">' + list[i].SUB_TOTAL + '</td>';
    					html += '<td class="col-actions"><button>삭제</button> <button>관심</button></td>';
    					html += '</tr>';
    				}
    				
    				$("#cart-body").html(html);
    			}
    			, error: function(err){
    				alert("장바구니 리스트 조회 통신 실패");
    			}
    		});
    	}
    
        // 수량 버튼
        const countDown = (product_id) => {
            var quantity = Number( $("#" + product_id + "-quantity").val() );

            $("#" + product_id + "-quantity").val(quantity - 1);

            if (quantity <= 1){
                $("#quantity").val(1);
            }

            // document.getElementById("quantity").value = quantity - 1;
            
            updateCnt(product_id);
        }

        const countUp = (product_id) => {
            var quantity = Number( $("#" + product_id + "-quantity").val() );

            $("#" + product_id + "-quantity").val(quantity + 1);
            
            updateCnt(product_id);
        }

        // 상품 수량 디비 저장
        const updateCnt = (product_id) => {
            var quantity = Number( $("#" + product_id + "-quantity").val() );
            var price = Number( $("#" + product_id + "-price").text() );
			var cartId = 1;
            
            if (quantity <= 1){
            	
                quantity = Number( $("#" + product_id + "-quantity").val(1) );
                
            } else {

	            var param = {
	                quantity : quantity
	                , price : price
	                , cartId : cartId
	                , productId : product_id
	            };
	
	            $.ajax({
					url: "/updateQuantity.do"
					, type: "post"
					, data: param
					, dataType: "json"
					, success: function(res){
						var price = $("#" + product_id + "-price").text();
						var subTotal = price * quantity;
						
						$("#" + product_id + "-total").text(subTotal);
					}
					, error: function(err){
						alert("상품 수량 디비 저장 통신 실패");
					}
	            });
            }
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
    <div>
    <h3 style="text-align: center;">[ C A R T ]</h3>
		</div>

    <!-- 장바구니 상품 테이블 -->
    <div class="cart-grid">
      <div>
        <table class="cart-table">
          <thead>
            <tr>
              <th class="col-check"><input type="checkbox" id="headCheck"></th>
              <th class="col-img" colspan="2">상품명</th>
              <th class="col-price">가격</th>
              <th class="col-qty">수량</th>
              <th class="col-total">총금액</th>
              <th class="col-actions">삭제/관심</th>
            </tr>
          </thead>
          <tbody id="cart-body">
          	<!-- JS 렌더링 -->
          </tbody>
        </table>
      </div>

    </div>

	<div>
		<div>
	        <button class="btn" id="btnContinue">계속 쇼핑하기</button>
	        <button class="btn-outline" id="btnClear">장바구니 비우기</button>
	        <div style="flex:1"></div>
	        <button class="btn-outline" id="btnOrderSelected">선택상품 주문하기</button>
		</div>
	
		<div>
	      <h4>결제 예정 금액</h4>
	      <div class="sum-row"><span>주문금액</span><span id="sum-products" class="price">0원</span></div>
	      <div class="sum-row small"><span>일반배송비</span><span id="sum-ship-normal">0원</span></div>
	      <div class="sum-row small"><span>개별배송비</span><span id="sum-ship-indiv">0원</span></div>
	      <div class="sum-total"><span>결제금액</span><span id="sum-final" class="price">0원</span></div>
	      <button class="order-btn" id="btnOrderAll">전체상품 주문하기</button>
	    </div>
    </div>
  </div>
</body>

</html>