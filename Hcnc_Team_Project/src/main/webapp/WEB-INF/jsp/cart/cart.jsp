<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>장바구니</title>
  <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/global.css'/>" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script type="text/javaScript" language="javascript" defer="defer"></script>
    <style>
	.cart-container {
/* 	  display: block;
	  justify-content: initial; */
	  width: 100%;
	  max-width: 1100px;
/* 	  margin: 40px auto; */
	  padding: 28px;
	  background: #fff;
	  border: 1px solid #ececec;
	  border-radius: 16px;
	  box-shadow: 0 6px 14px rgba(0,0,0,.08);
	}
	
	/* breadcrumb */
	.breadcrumb {
	  font-size: 13px;
	  color: #73777f;
	  margin-bottom: 16px;
	  text-align: right;
	}
	.breadcrumb a { color:#73777f; text-decoration:none; }
	.breadcrumb strong { color:#1f1f1f; }
	
	/* heading */
	h3 {
	  margin: 20px;
	  padding: 20px;
	  text-align: center;
	  color: #DC0630;
	  letter-spacing: 2px;
	}
	
	/* table */
	.cart-table {
	  width: 100%;
	  margin-top: 20px;
	  border-collapse: collapse;
	  table-layout: fixed; /* 컬럼 너비 고정 */
	}
	.cart-table th, .cart-table td {
	  border-bottom: 1px solid #ececec;
	  padding: 14px 10px;
	  text-align: center;
	  vertical-align: middle;
	  word-break: break-word;
	}
	.cart-table thead th {
	  background: #fff;
	  font-weight: 700;
	  color: #444;
	}
	.col-check { width: 44px; }
	.col-img .col-name { width: 90px; }
	.col-price, .col-total { text-align:right; }
	.col-actions { text-align:center; }
	
	/* 이미지 */
	.col-img img {
	  width: 64px;
	  height: 64px;
	  object-fit: cover;
	  border-radius: 8px;
	  box-shadow: 0 2px 6px rgba(0,0,0,.08);
	}
	
	/* checkbox */
	#headCheck, .col-check input[type="checkbox"] {
	  width: 18px; height: 18px;
	  accent-color: #DC0630;
	  cursor: pointer;
	}
	
	/* 수량 */
	.qty-box {
	  display: inline-flex;
	  align-items: center;
	  gap: 6px;
	  border: 1px solid #ececec;
	  border-radius: 8px;
	  padding: 4px 6px;
	}
	.quantity {
	  width: 48px;
	  text-align: center;
	  border: none;
	  font-weight: 700;
	}
	.btn-qty {
	  border: 1px solid #DC0630;
	  background: #fff;
	  color: #DC0630;
	  border-radius: 6px;
	  width: 28px; height: 28px;
	  cursor: pointer;
	  font-weight: 700;
	}
	.btn-qty:hover { background: rgba(220,6,48,0.08); }
	
	/* 버튼 */
	.btn, .btn-outline, .order-btn {
	  border-radius: 8px;
	  padding: 10px 16px;
	  font-weight: 800;
	  cursor: pointer;
	  transition: .15s;
	}
	.btn {
	  background: #DC0630; color: #fff; border: none;
	}
	.btn:hover { filter: brightness(.95); }
	.btn-outline {
	  background: #fff; color: #DC0630;
	  border: 1px solid #DC0630;
	}
	.btn-outline:hover { background: rgba(220,6,48,0.05); }
	.order-btn {
	  display:block;
	  width:100%;
	  background: #DC0630;
	  color:#fff;
	  font-size:16px;
	  margin-top:10px;
	}
	
	
	
	/* 합계 영역 */
	h4 { color:#1f1f1f; }
	.sum-row, .sum-total {
	  display:flex; justify-content:space-between; align-items:center;
	  padding: 8px 0;
	  border-bottom: 1px dashed #ececec;
	}
	.sum-row.small { font-size:14px; color:#73777f; }
	.sum-total {
	  border-bottom:none;
	  font-size:18px;
	  font-weight:900;
	  margin-top:10px;
	}
	.footer { display: flex; justify-content: space-between; width:100%;}
	.footer-btn { margin:40px 20px 20px 20px; }
	
	.footer-total { width:30%; margin:20px; }
	.orderInfo{ margin-top:60px; padding-left: 10px;}
	.orderInfo > .bi-exclamation-circle, span { font-weight: bold; font-size: 13px; color:#333333; }
	p { color:#888888; font-size:11px; line-height:0.7rem; }
	#sum-final { color:#DC0630; }
	
	.bi { font-size: 17px; }
	.bi-x-lg { margin-right:5px; cursor:pointer; }
	.bi-suit-heart { margin-left:5px; cursor:pointer; }
	
	/* 반응형 */
	@media (max-width:720px){
	  .container.cart-container { padding:16px }
	  .col-name { min-width:auto; }
	  .container.cart-container > div > div {
	    flex-direction: column; align-items: stretch; gap:8px;
	  }
	}
	    	
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
    					if(list[i].IS_CHECKED == 'N'){
    				        html += '<td class="col-check"><input type="checkbox" onchange="updateChkBox(' + list[i].PRODUCT_ID + ', \'' + list[i].IS_CHECKED + '\')"></td>';
    				    } else {
    				        html += '<td class="col-check"><input type="checkbox" checked onchange="updateChkBox(' + list[i].PRODUCT_ID + ', \'' + list[i].IS_CHECKED + '\')"></td>';
    				    }
    					html += '<td class="col-img"><img src="sample.jpg" width="50"></td>';
    					html += '<td class="col-name">' + list[i].PRODUCT_NAME + '</td>';
    					html += '<td class="col-price" id="'+ list[i].PRODUCT_ID +'-price">' + list[i].PRICE + '</td>';
    					html += '<td class="col-qty">';
    					html += '<div class="qty-box">';
    					html += '<button type="button" class="btn-qty" onclick="countDown('+ list[i].PRODUCT_ID +')">-</button>'; // <button type="button" class="btn-qty" onclick="countDown(변수자리)">
    					html += '<input class="quantity" id="'+ list[i].PRODUCT_ID +'-quantity" type="number" value="' + list[i].QUANTITY + '" min="1" onchange="updateCnt('+ list[i].PRODUCT_ID +')">';
    					html += '<button type="button" class="btn-qty" onclick="countUp('+ list[i].PRODUCT_ID +')">+</button>';
    					html += '</div>';
    					html += '</td>';
    					html += '<td class="col-total" id="'+ list[i].PRODUCT_ID +'-total">' + list[i].SUB_TOTAL + '</td>';
    					html += '<td class="col-actions"><i class="bi bi-x-lg" onclick="deleteProduct(' + list[i].PRODUCT_ID + ')"></i> <i class="bi bi-suit-heart"></i></td>';
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
        
        // 개별 체크박스 수정
        const updateChkBox = (product_id, current_checked) => {
        	
        	var cartId = 1;
   			
        	var is_checked = '';
        	
        	if(current_checked == 'N'){
        		is_checked = 'Y';
        	} else if(current_checked == 'Y'){
        		is_checked = 'N';
        	}
        	
        	var param = {
        		cartId : cartId
        		, productId : product_id
        		, isChecked : is_checked	
        	};
        	
        	$.ajax({
        		url: "/updateChkBox.do"
        		, type: "post"
        		, data: param
        		, dataType: "json"
        		, success: function(){
        			
        		}
        		, error: function(){
        			
        		}
        	});
        	
        }
        
        // 삭제
        const deleteProduct = (product_id) => {
        	
        	var cartId = 1;
        	
        	var param = {
        		productId : product_id
        		, cartId : cartId
        	};
        	
        	$.ajax({
        		url: "/deleteProduct.do"
        		, type: "post"
        		, data: param
        		, dataType: "json"
        		, success: function(){
        			alert("삭제 되었습니다.");
        			
        			window.location.reload();
        		}
        		, error: function(){
        			alert("삭제 통신 실패");
        		}
        	});
        }
    </script>
</head>

<body>
  <div class="container">
  	<div class="cart-container">
	    <div class="breadcrumb">
	      <a href="/main.do">홈</a>
	      <span>›</span>
	      <strong>장바구니</strong>
	    </div>
	    <div>
	    <h3>[ C A R T ]</h3>
			</div>
	
	    <!-- 장바구니 상품 테이블 -->
	    <div class="cart-grid">
	      <div>
	        <table class="cart-table">
	          <thead>
	            <tr>
	              <th class="col-check"><input type="checkbox" id="headCheck"></th>
	              <th class="col-img col-name" colspan="2">상품정보</th>
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
	
		<div class="footer">
			<div class="footer-btn">
		        <button class="btn" id="btnContinue">계속 쇼핑하기</button>
		        <button class="btn-outline" id="btnOrderSelected">
		        	<i class="bi bi-bag-check"></i>
		        	선택상품 주문하기</button>
		        <button class="btn-outline" id="btnDeleteSelected">
		        	<i class="bi bi-bag-x"></i>
		        	선택상품 삭제하기</button>
		        <button class="btn-outline" id="btnClear">
		        	<i class="bi bi-trash3"></i>
		        	장바구니 비우기</button>
		        <div class="orderInfo">
		        	<i class="bi bi-exclamation-circle"></i>
		        	<span>안내사항</span>
		        	<p>- 상품 쿠폰 및 적립금 사용은 [주문서 작성/결제]에서 적용됩니다.</p>
		        	<p>- 장바구니는 회원에 한해 직접 삭제할 때까지 보관됩니다. 더 오래 보관 하시려면 위시리스트에 담아주세요.</p>
		        </div>
			</div>
		
			<div class="footer-total">
		      <h4>결제 예정 금액</h4>
		      <div class="sum-row"><span>주문금액</span><span id="sum-products" class="price">0원</span></div>
		      <div class="sum-row small"><span>일반배송비</span><span id="sum-ship-normal">0원</span></div>
		      <div class="sum-row small"><span>개별배송비</span><span id="sum-ship-indiv">0원</span></div>
		      <div class="sum-total"><span>결제금액</span><span id="sum-final" class="price">0원</span></div>
		      <button class="order-btn" id="btnOrder">주문하기</button>
		    </div>
	    </div>
	  </div>
  </div>
</body>

</html>