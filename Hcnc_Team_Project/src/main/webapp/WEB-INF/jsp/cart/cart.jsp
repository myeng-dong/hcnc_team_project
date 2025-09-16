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
    	
    	const memberId = "user01"
    	const cartId = 1;
    
    	// 장바구니 리스트 조회
    	const selectCartList = () => {
    		
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
    				
    				var allCheck = true;
    				var html = '';
    				for(var i = 0; i < list.length; i++){
    					if(list[i].IS_CHECKED == 'N'){
    						allCheck = false;
    					}
   
    					html += '<tr>';
    					if(list[i].IS_CHECKED == 'N'){
    				        html += '<td class="col-check"><input type="checkbox" class="check" id="'+ list[i].CART_ITEM_ID +'-checkbox" onchange="updateChkBox(' + list[i].CART_ITEM_ID + ',\'' + list[i].PRODUCT_OPTION +'\')"></td>';
    				    } else {
    				        html += '<td class="col-check"><input type="checkbox" class="check" id="'+ list[i].CART_ITEM_ID +'-checkbox" checked onchange="updateChkBox(' + list[i].CART_ITEM_ID + ',\'' + list[i].PRODUCT_OPTION +'\')"></td>';
    				    }
    					html += '<td class="col-img"><img src="sample.jpg" width="50"></td>';
    					html += '<td class="col-name">' + list[i].PRODUCT_NAME + '</td>';
    					if(list[i].PRODUCT_OPTION != null){
    						html += '<td class="col-option"><span id="'+ list[i].CART_ITEM_ID +'-option">' + list[i].PRODUCT_OPTION + '</span></td>';
    					} else {
    						html += '<td class="col-option"><span> - </span> </td>';
    					}
    					html += '<td class="col-price"><span id="'+ list[i].CART_ITEM_ID +'-price">' + list[i].PRICE.toLocaleString() + '</span><span>원</span></td>';
    					html += '<td class="col-qty">';
    					html += '<div class="qty-box">';
    					html += '<button type="button" class="btn-qty" onclick="countDown('+ list[i].CART_ITEM_ID +')">-</button>'; // <button type="button" class="btn-qty" onclick="countDown(변수자리)">
    					html += '<input class="quantity" id="'+ list[i].CART_ITEM_ID +'-quantity" type="number" value="' + list[i].QUANTITY + '" min="1" onchange="updateCnt('+ list[i].CART_ITEM_ID +')">';
    					html += '<button type="button" class="btn-qty" onclick="countUp('+ list[i].CART_ITEM_ID +')">+</button>';
    					html += '</div>';
    					html += '</td>';
    					html += '<td class="col-total"><span id="'+ list[i].CART_ITEM_ID +'-total">' + list[i].SUB_TOTAL.toLocaleString() + '</span><span>원</span></td>';
    					html += '<td class="col-actions"><i class="bi bi-x-lg" onclick="deleteProduct(' + list[i].CART_ITEM_ID + ')"></i> <i class="bi bi-suit-heart"></i></td>';
    					html += '</tr>';
    				}
    				
    				$("#cart-body").html(html);
    				
    				var checkData = '';
    				if(allCheck){
    					checkData = '<input type="checkbox" class="allCheck" id="headCheck" checked onchange="updateAllCheck()">'
    				} else {
    					checkData = '<input type="checkbox" class="allCheck" id="headCheck" onchange="updateAllCheck()">'
    				}
    				
    				$("#allCheck-box").html(checkData);
    				
    				if(res.cartTotalPrice != null){
    					$("#sum-products").text(res.cartTotalPrice.SUM_SUB.toLocaleString() + "원");
    				} else {
    					$("#sum-products").text("0원");
    				}
    			}
    			, error: function(err){
    				alert("장바구니 리스트 조회 통신 실패");
    			}
    		});
    	}
    
        // 수량 버튼
        const countDown = (cart_item_id) => {
            var quantity = Number( $("#" + cart_item_id + "-quantity").val() );

            $("#" + cart_item_id + "-quantity").val(quantity - 1);

            if (quantity <= 1){
                $("#quantity").val(1);
            }

            // document.getElementById("quantity").value = quantity - 1;
            
            updateCnt(cart_item_id);
        }

        const countUp = (cart_item_id) => {
            var quantity = Number( $("#" + cart_item_id + "-quantity").val() );

            $("#" + cart_item_id + "-quantity").val(quantity + 1);
            
            updateCnt(cart_item_id);
        }

        // 상품 수량 디비 저장
        const updateCnt = (cart_item_id) => {
            var quantity = Number( $("#" + cart_item_id + "-quantity").val() );
            var price = Number( $("#" + cart_item_id + "-price").text().replace(/[^\d.-]/g, '') );
           	var option = $("#" + cart_item_id +"-option").text();
			
            
            if (quantity <= 1){
            	
                quantity = Number( $("#" + cart_item_id + "-quantity").val(1) );
                
            } else {

	            var param = {
	                quantity : quantity
	                , price : price
	                , cartId : cartId
	                , cartItemId : cart_item_id
	                , option : option
	            };
	
	            $.ajax({
					url: "/updateQuantity.do"
					, type: "post"
					, data: param
					, dataType: "json"
					, success: function(res){
						var subTotal = price * quantity;
						
						$("#" + cart_item_id + "-total").text(subTotal.toLocaleString());
						
						$("#sum-products").text(res.cartTotalPrice.SUM_SUB.toLocaleString() + "원");
					}
					, error: function(err){
						alert("상품 수량 디비 저장 통신 실패");
					}
	            });
            }
        }
        
        // 개별 체크박스 수정
        const updateChkBox = (cart_item_id, option) => {
        	
        	var checkboxValue = $("#"+ cart_item_id + "-checkbox").prop("checked");
   			
        	console.log(checkboxValue);
        	
        	var is_checked = '';
        	
        	if(checkboxValue){
        		is_checked = 'Y';
        		   		
        	} else {
        		is_checked = 'N';
        		
        	}
        	
        	var param = {
        		cartId : cartId
        		, cartItemId : cart_item_id
        		, isChecked : is_checked	
        		, option : option
        	};
        	
        	$.ajax({
        		url: "/updateChkBox.do"
        		, type: "post"
        		, data: param
        		, dataType: "json"
        		, success: function(res){
        			// 장바구니 전체 금액 조회 결과 //
        			if(res.cartTotalPrice != null){
        				$("#sum-products").text(res.cartTotalPrice.SUM_SUB.toLocaleString() + "원");
        			} else {
        				$("#sum-products").text("0원");
        			}
        			
        		}
        		, error: function(){
        			
        		}
        	});
        	
        }
        
        // 삭제
        const deleteProduct = (cart_item_id) => {
        	
        	var param = {
        			cartItemId : cart_item_id
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

        // 전체 선택
        $(document).on("change", ".allCheck", function(){
        	const checked = $(this).prop("checked");
        	$(".check").prop("checked", checked)

        });
        
        $(document).on("change", ".check", function(){
        	const total = $(".check").length;
        	const checked = $(".check:checked").length;
        	
        	$(".allCheck").prop("checked", total > 0 && total === checked);
        });


        // 전체 선택 상품 디비 저장
        const updateAllCheck = () => {
        	
        	var isCheck = $("#headCheck").prop("checked");

        	
        	if(isCheck){
        		is_checked = 'Y';
        		   		
        	} else {
        		is_checked = 'N';
        		
        	}
        	
        	var param = {
        			cartId : cartId
        			, isChecked : is_checked
        	};
        	
        	$.ajax({
        		url: "/updateChkBox.do"
        		, type: "post"
        		, data: param
        		, dataType: "json"
        		, success: function(res){
        			if(res.cartTotalPrice != null){
        				$("#sum-products").text(res.cartTotalPrice.SUM_SUB.toLocaleString() + "원");
        			} else {
        				$("#sum-products").text("0원");
        			}
        		}
        		, error: function(){
        			
        		}
        	});
        }
        
        

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
	              <th class="col-check" id="allCheck-box"></th>
	              <th class="col-img col-name" colspan="2">상품정보</th>
	              <th class="col-option">옵션</th>
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
		        	<div>
			        	<i class="bi bi-exclamation-circle"></i>
			        	<span>안내사항</span>
		        	</div>
		        	<p>- 상품 쿠폰 및 적립금 사용은 [주문서 작성/결제]에서 적용됩니다.</p>
		        	<p>- 장바구니는 회원에 한해 직접 삭제할 때까지 보관됩니다. 더 오래 보관 하시려면 위시리스트에 담아주세요.</p>
		        </div>
			</div>
		
			<div class="footer-total">
		      <h4>결제 예정 금액</h4>
		      <div class="sum-row"><span>주문금액</span><span id="sum-products" class="price"></span></div>
		      <div class="sum-row small"><span>일반배송비</span><span id="sum-ship-normal">0원</span></div>
		      <div class="sum-total"><span>결제금액</span><span id="sum-final" class="price">0원</span></div>
		      <button class="order-btn" id="btnOrder">주문하기</button>
		    </div>
	    </div>
	  </div>
  	</div>
  </div>
  
<jsp:include page="../layout/footer.jsp" />
