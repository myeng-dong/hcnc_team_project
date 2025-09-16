<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<jsp:include page="../layout/headertop.jsp" />
<%-- <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/cart.css'/>" /> --%>
<jsp:include page="../layout/header.jsp" />
<jsp:include page="../layout/menu.jsp" />
  
 <script>
    	// 페이지 로드
    	$(function(){
    		selectCartList();
    	})
    
    	// 장바구니 리스트 조회
    	const selectCartList = () => {
    		var memberId = "user01";
    		var cartId = 1;
    		var param = {
    				memberId : memberId
    				, cartId : cartId
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
    				        html += '<td class="col-check"><input type="checkbox" id="'+ list[i].PRODUCT_ID +'-checkbox" onchange="updateChkBox(' + list[i].PRODUCT_ID + ')"></td>';
    				    } else {
    				        html += '<td class="col-check"><input type="checkbox" id="'+ list[i].PRODUCT_ID +'-checkbox" checked onchange="updateChkBox(' + list[i].PRODUCT_ID + ')"></td>';
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
    				
    				
    				if(res.cartTotalPrice != null){
    					$("#sum-products").text(res.cartTotalPrice.SUM_SUB);
    				} else {
    					$("#sum-products").text(0);
    				}
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
        const updateChkBox = (product_id) => {
        	
        	var cartId = 1;
        	var checkboxValue = $("#"+ product_id + "-checkbox").prop("checked");
   			
        	var is_checked = '';
        	
        	if(checkboxValue){
        		is_checked = 'Y';
        		   		
        	} else {
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
        		, success: function(res){
        			// 장바구니 전체 금액 조회 결과 //
        			if(res.cartTotalPrice != null){
        				$("#sum-products").text(res.cartTotalPrice.SUM_SUB);
        			} else {
        				$("#sum-products").text(0);
        			}
        			
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

        //합계금액


    </script>

  <div class="container cart">
  	<div class="inner">
  	<div class="cart-container">
	    <div class="breadcrumb">
	      <a href="/">홈</a>
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
	
		<div class="cart-footer">
			<div class="footer-btn">
			        <button class="cart-btn" id="btnContinue" onclick="window.location.href='/productDetailView.do'">계속 쇼핑하기</button>
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
		      <div class="sum-row"><span>주문금액</span><span id="sum-products" class="price"></span></div>
		      <div class="sum-row small"><span>일반배송비</span><span id="sum-ship-normal">0원</span></div>
		      <div class="sum-row small"><span>개별배송비</span><span id="sum-ship-indiv">0원</span></div>
		      <div class="sum-total"><span>결제금액</span><span id="sum-final" class="price">0원</span></div>
		      <button class="order-btn" id="btnOrder">주문하기</button>
		    </div>
	    </div>
	  </div>
  	</div>
  </div>
  
<jsp:include page="../layout/footer.jsp" />
