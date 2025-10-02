<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<jsp:include page="../layout/headertop.jsp" />
<%-- <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/cart.css'/>" /> --%>
<jsp:include page="../layout/header.jsp" />
<%-- <jsp:include page="../layout/menu.jsp" /> --%>

  
 <script>
    	// 페이지 로드
    	$(function(){
    		selectCartList();
    	})

    	const urlParams = new URLSearchParams(window.location.search);
    	
		const cartId = urlParams.get('cartId');
    
    	// 장바구니 리스트 조회
    	const selectCartList = () => {
    		
    		var param = {
    				cartId : cartId
    		};
    		
    		$.ajax({
    			url: "/selectCartListByUser.do"
    			, type: "post"
    			, data: param
    			, dataType: "json"
    			, success: function(res){
    				console.log(res.cartList);
    				
    				var list = res.cartList;
    				
    				// 장바구니가 비어있는 경우 처리
    	            if(!list || list.length === 0) {
    	                showEmptyCart();
    	                return;
    	            }
    	            
    	            // 기존 테이블 표시
    	            $(".cart-table").show();
    	            $(".cart-footer").show();
    	            $("#empty-cart").hide();
    				
    				var allCheck = true;
    				
    				var uniqueList = [];
    				var seenIds = [];
    				for(var i = 0; i < list.length; i++) {
    				    if(seenIds.indexOf(list[i].CART_ITEM_ID) === -1) {
    				        seenIds.push(list[i].CART_ITEM_ID);
    				        uniqueList.push(list[i]);
    				    }
    				}
    				
    				var html = '';
    				for(var i = 0; i < uniqueList.length; i++){
    				    if(uniqueList[i].IS_CHECKED == 'N'){
    				        allCheck = false;
    				    }

    				    html += '<tr>';
    				    if(uniqueList[i].IS_CHECKED == 'N'){
    				        html += '<td class="col-check"><input type="checkbox" class="check" id="'+ uniqueList[i].CART_ITEM_ID +'-checkbox" onchange="updateChkBox(' + uniqueList[i].CART_ITEM_ID + ')"></td>';
    				    } else {
    				        html += '<td class="col-check"><input type="checkbox" class="check" id="'+ uniqueList[i].CART_ITEM_ID +'-checkbox" checked onchange="updateChkBox(' + uniqueList[i].CART_ITEM_ID + ')"></td>';
    				    }
    				    html += '<td class="col-img"><img src="sample.jpg" width="50"></td>';
    				    html += '<td class="col-name"><span>' + uniqueList[i].PRODUCT_NAME + '</span></td>';
    				    if(uniqueList[i].PRODUCT_OPTION != null){
    				    	html += '<td class="col-option" id="option-cell-' + uniqueList[i].CART_ITEM_ID + '">';
    		                html += '<select class="option-select" id="'+ uniqueList[i].CART_ITEM_ID +'-option" onchange="updateOption(' + uniqueList[i].CART_ITEM_ID + ')">';
    		                html += '<option value="' + uniqueList[i].PRODUCT_OPTION + '" selected disabled>' + uniqueList[i].PRODUCT_OPTION + '</option>';
    		                html += '</select>';
    		                html += '</td>';
    				    } else {
    				        html += '<td class="col-option"><span> - </span> </td>';
    				    }
    				    html += '<td class="col-price"><span id="'+ uniqueList[i].CART_ITEM_ID +'-price">' + uniqueList[i].PRICE.toLocaleString() + '</span><span>원</span></td>';
    				    html += '<td class="col-qty">';
    				    html += '<div class="qty-box">';
    				    html += '<button type="button" class="btn-qty" onclick="countDown('+ uniqueList[i].CART_ITEM_ID +')">-</button>';
    				    html += '<input class="quantity" id="'+ uniqueList[i].CART_ITEM_ID +'-quantity" type="number" value="' + uniqueList[i].QUANTITY + '" min="1" onchange="updateCnt('+ uniqueList[i].CART_ITEM_ID +')">';
    				    html += '<button type="button" class="btn-qty" onclick="countUp('+ uniqueList[i].CART_ITEM_ID +')">+</button>';
    				    html += '</div>';
    				    html += '</td>';
    				    html += '<td class="col-total"><span id="'+ uniqueList[i].CART_ITEM_ID +'-total">' + uniqueList[i].SUB_TOTAL.toLocaleString() + '</span><span>원</span></td>';
    				    
    				    // 위시리스트 상태에 따른 하트 아이콘 설정
    				    var heartIcon = '';
    				    if(uniqueList[i].IS_WISHLIST == 'Y'){
    				        heartIcon = '<c:if test="${uesrInfo != null}"><i class="bi bi-suit-heart-fill wishlist-heart" style="color: red; cursor: pointer;" onclick="toggleWishlist(' + uniqueList[i].CART_ITEM_ID + ', ' + uniqueList[i].PRODUCT_ID + ')"></i></c:if>';
    				    } else {
    				        heartIcon = '<c:if test="${uesrInfo != null}"><i class="bi bi-suit-heart wishlist-heart" style="cursor: pointer;" onclick="toggleWishlist(' + uniqueList[i].CART_ITEM_ID + ', ' + uniqueList[i].PRODUCT_ID + ')"></i></c:if>';
    				    }
    				    
    				    html += '<td class="col-actions"><i class="bi bi-x-lg" style="cursor: pointer;" onclick="deleteProduct(' + uniqueList[i].CART_ITEM_ID + ')"></i> ' + heartIcon + '</td>';
    				    html += '</tr>';
    				}

    				$("#cart-body").html(html);
    				
    				// 각 상품별 옵션 조합 생성
    	            for(var i = 0; i < uniqueList.length; i++){
    	                generateProductOptions(uniqueList[i].CART_ITEM_ID, uniqueList[i].PRODUCT_ID, uniqueList[i].PRODUCT_OPTION, list);
    	            }
    				
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
    	
    	// 빈 장바구니 상태 표시 함수
    	const showEmptyCart = () => {
    	    // 기존 테이블과 푸터 숨기기
    	    $(".cart-table").hide();
    	    $(".cart-footer").hide();
    	    
    	 // 빈 상태 메시지 표시
    	    var emptyHtml = '<div id="empty-cart" class="empty-cart">' +
    	            '<div class="empty-cart-icon">' +
    	                '<i class="bi bi-cart-x"></i>' +
    	            '</div>' +
    	            '<div class="empty-cart-message">' +
    	                '<h3>장바구니가 비어 있습니다</h3>' +
    	                '<p>상품을 담고 주문해보세요!</p>' +
    	            '</div>' +
    	            '<div class="empty-cart-actions">' +
    	                '<button class="cart-btn shopping-btn" onclick="history.back()">' +
    	                    '<i class="bi bi-bag"></i>' +
    	                    '쇼핑 계속하기' +
    	                '</button>' +
    	            '</div>' +
    	        '</div>';
    	    
    	    // cart-grid 다음에 빈 상태 메시지 삽입
    	    if($("#empty-cart").length === 0) {
    	        $(".cart-grid").after(emptyHtml);
    	    } else {
    	        $("#empty-cart").show();
    	    }
    	}

    	// 쇼핑 계속하기 버튼 함수
    	const goToShopping = () => {
    	    window.location.href = "/"; // 메인 페이지로 이동 (또는 상품 목록 페이지)
    	}
    	
    	function generateProductOptions(cartItemId, productId, currentOption, fullList) {
    	    // 해당 상품의 모든 옵션 데이터 추출
    	    var productOptions = [];
    	    for(var i = 0; i < fullList.length; i++) {
    	        if(fullList[i].PRODUCT_ID === productId && fullList[i].CART_ITEM_ID === cartItemId) {
    	            productOptions.push({
    	                OPTION_NAME: fullList[i].OPTION_NAME,
    	                OPTION_VALUE: fullList[i].OPTION_VALUE,
    	                ADDITIONAL_PRICE: fullList[i].ADDITIONAL_PRICE || 0
    	            });
    	        }
    	    }
    	    
    	    if(productOptions.length === 0) return;
    	    
    	    // 1. optionData 객체 만들기 (OPTION_NAME별로 그룹화)
    	    var optionData = {};
    	    for(var i = 0; i < productOptions.length; i++) {
    	        var optionName = productOptions[i].OPTION_NAME;
    	        var optionValue = productOptions[i].OPTION_VALUE;
    	        var additionalPrice = productOptions[i].ADDITIONAL_PRICE;
    	        
    	        if(!optionData[optionName]) {
    	            optionData[optionName] = [];
    	        }
    	        
    	        // 중복 제거 (같은 옵션값이 있는지 확인)
    	        var exists = false;
    	        for(var j = 0; j < optionData[optionName].length; j++) {
    	            if(optionData[optionName][j].value === optionValue) {
    	                exists = true;
    	                break;
    	            }
    	        }
    	        
    	        if(!exists) {
    	            optionData[optionName].push({
    	                value: optionValue,
    	                additionalPrice: additionalPrice
    	            });
    	        }
    	    }
    	    
    	    // 2. 모든 조합 생성 (재귀) - 추가요금 포함
    	    var keys = Object.keys(optionData);
    	    var optionCombinations = [];
    	    
    	    function generateCombinations(index, currentOptions, totalAdditionalPrice) {
    	        if (index === keys.length) {
    	            // 옵션 텍스트 생성 (추가요금 포함)
    	            var optionTexts = [];
    	            var totalPrice = 0;
    	            
    	            for(var i = 0; i < currentOptions.length; i++) {
    	                var opt = currentOptions[i];
    	                var priceText = opt.additionalPrice === 0 ? "(+0원)" : "(+" + opt.additionalPrice.toLocaleString() + "원)";
    	                optionTexts.push("[" + opt.name + "] " + opt.value + " " + priceText);
    	                totalPrice += opt.additionalPrice;
    	            }
    	            
    	            var combinationText = optionTexts.join(" , ");
    	            
    	            optionCombinations.push({
    	                text: combinationText,
    	                value: optionTexts.map(function(text) {
    	                    return text.split(" (")[0]; // 추가요금 부분 제거한 순수 옵션값
    	                }).join(" , "),
    	                totalAdditionalPrice: totalPrice
    	            });
    	            return;
    	        }
    	        
    	        var key = keys[index];
    	        var values = optionData[key];
    	        for (var i = 0; i < values.length; i++) {
    	            var currentOpt = {
    	                name: key,
    	                value: values[i].value,
    	                additionalPrice: values[i].additionalPrice
    	            };
    	            generateCombinations(index + 1, currentOptions.concat([currentOpt]), totalAdditionalPrice + values[i].additionalPrice);
    	        }
    	    }
    	    
    	    generateCombinations(0, [], 0);
    	    
    	    // 3. 셀렉트박스에 옵션들 추가
    	    var selectElement = $("#" + cartItemId + "-option");
    	    selectElement.empty(); // 기존 옵션 제거
    	    
    	    // 현재 선택된 옵션 찾기 및 첫 번째로 추가
    	    var currentFound = false;
    	    for(var i = 0; i < optionCombinations.length; i++) {
    	        if(optionCombinations[i].value === currentOption) {
    	            selectElement.append('<option value="' + optionCombinations[i].value + '" data-additional-price="' + optionCombinations[i].totalAdditionalPrice + '" selected>' + optionCombinations[i].text + '</option>');
    	            currentFound = true;
    	            break;
    	        }
    	    }
    	    
    	    // 현재 옵션을 찾지 못한 경우 (기존 방식으로 추가)
    	    if(!currentFound) {
    	        selectElement.append('<option value="' + currentOption + '" data-additional-price="0" selected>' + currentOption + '</option>');
    	    }
    	    
    	    // 나머지 조합들 추가 (현재 선택된 옵션과 다른 것들만)
    	    for(var i = 0; i < optionCombinations.length; i++) {
    	        if(optionCombinations[i].value !== currentOption) {
    	            selectElement.append('<option value="' + optionCombinations[i].value + '" data-additional-price="' + optionCombinations[i].totalAdditionalPrice + '">' + optionCombinations[i].text + '</option>');
    	        }
    	    }
    	}
    
        // 수량 버튼
        const countDown = (cart_item_id) => {
            var quantity = Number( $("#" + cart_item_id + "-quantity").val() );

            $("#" + cart_item_id + "-quantity").val(quantity - 1);
			
            
            if (quantity > 1) {
                $("#" + cart_item_id + "-quantity").val(quantity - 1);
                updateCnt(cart_item_id);
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
        	var selectElement = $("#" + cart_item_id + "-option");
        	
            var quantity = Number( $("#" + cart_item_id + "-quantity").val() );
            var price = Number( $("#" + cart_item_id + "-price").text().replace(/[^\d.-]/g, '') );
            var additionalPrice = parseInt(selectElement.find('option:selected').data('additional-price')) || 0;
           	var subTotal = (price + additionalPrice) * quantity;
           	var option = selectElement.val();
			
            console.log(subTotal);
            
            if (quantity <= 0){
            	
                quantity = Number( $("#" + cart_item_id + "-quantity").val(1) );
                
            } else {

	            var param = {
	                quantity : quantity
	                , cartId : cartId
	                , cartItemId : cart_item_id
	                , option : option
	                , subTotal: subTotal
	            };
	
	            $.ajax({
					url: "/updateQuantity.do"
					, type: "post"
					, data: param
					, dataType: "json"
					, success: function(res){
						
						console.log(res);
						
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
        const updateChkBox = (cart_item_id) => {
        	
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
        	if(confirm("삭제하시겠습니까?")){
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
	                    // 페이지 새로고침 대신 장바구니 리스트 다시 조회
	                    selectCartList();
	     
	        		}
	        		, error: function(){
	        			alert("개별 삭제 통신 실패");
	        		}
	        	});
        	}
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
        
        // 선택 상품 삭제
		const deleteSelected = () => {
			var selectedItems = true;
			var param = {
				cartId : cartId
				, selectedItems : selectedItems
			};
			$.ajax({
				url: "/deleteProduct.do"
				, type: "post"
				, data: param
				, dataType: "json"
				, success: function(){
					alert("삭제 되었습니다.");
			        			
		            // 페이지 새로고침 대신 장바구니 리스트 다시 조회
		            selectCartList();
				}
				, error: function(){
        			alert("개별 삭제 통신 실패");
				}
			});
		}
		
		const deleteCart = () => {
			var param = {
				cartId : cartId
			};
			$.ajax({
				url: "/deleteProduct.do"
				, type: "post"
				, data: param
				, dataType: "json"
				, success: function(){
					alert("삭제 되었습니다.");
        			
		            // 페이지 새로고침 대신 장바구니 리스트 다시 조회
		            selectCartList();
				}
				, error: function(){
        			alert("전체 삭제 통신 실패");
				}
			});
		}

		// 옵션 변경 ajax (서버통신)
		const updateOption = (cart_item_id) => {
		    var selectElement = $("#" + cart_item_id + "-option");
		    var selectedOptionText = selectElement.val();
		    var price = Number( $("#" + cart_item_id + "-price").text().replace(/[^\d.-]/g, '') );
		    var quantity = Number( $("#" + cart_item_id + "-quantity").val() );
		    var additionalPrice = parseInt(selectElement.find('option:selected').data('additional-price')) || 0;
		    var originalOption = selectElement.find('option:first').val();
		    
		    var param = {
		        cartItemId: cart_item_id,
		        cartId: cartId,
		        option: selectedOptionText,
		        subTotal: (price + additionalPrice) * quantity
		    };
		    
		    $.ajax({
		        url: "/updateOption.do"
		        , type: "post"
		        , data: param
		        , dataType: "json"
		        , success: function(res){
		            if(res.success){
		                alert("옵션이 변경되었습니다.");
		                
		                window.location.reload();
		            } else {
		                if(res.errorCode === 'DUPLICATE') {
		                    alert("이미 동일한 옵션이 장바구니에 있습니다.");
		                } else {
		                    alert("옵션 변경에 실패했습니다: " + res.message);
		                }
		                selectElement.val(originalOption);
		            }
		        }
		        , error: function(err){
		            alert("옵션 변경 통신 실패");
		            selectElement.val(originalOption);
		        }
		    });
		}

        // 위시리스트 토글 기능
        const toggleWishlist = (cart_item_id, product_id) => {
            var isCurrentlyInWishlist = false;
            
            // 현재 하트 상태 확인
            $("#cart-body tr").each(function() {
                var $row = $(this);
                var $heart = $row.find('.wishlist-heart');
                
                // 해당 행인지 확인 (체크박스 id로 판단)
                if ($row.find('input[type="checkbox"]').attr('id') === cart_item_id + '-checkbox') {
                    isCurrentlyInWishlist = $heart.hasClass('bi-suit-heart-fill');
                    return false; // break
                }
            });
            
            // 확인 메시지 표시
            var message = isCurrentlyInWishlist ? 
                '이 상품의 모든 옵션이 위시리스트에서 제거됩니다. 계속하시겠습니까?' : 
                '이 상품의 모든 옵션이 위시리스트에 추가됩니다. 계속하시겠습니까?';
            
            if (!confirm(message)) {
                return;
            }
            
            var param = {
                productId: product_id,
                cartItemId: cart_item_id,
                action: isCurrentlyInWishlist ? 'remove' : 'add'
            };
            
            $.ajax({
                url: "/toggleWishlist.do",
                type: "post",
                data: param,
                dataType: "json",
                success: function(res) {
                    if (res.success) {
                        // 같은 상품의 모든 옵션 하트 아이콘 업데이트
                        $("#cart-body tr").each(function() {
                            var $row = $(this);
                            var $heart = $row.find('.wishlist-heart');
                            var rowProductId = null;
                            
                            // onclick 속성에서 product_id 추출
                            var onclickAttr = $heart.attr('onclick');
                            if (onclickAttr) {
                                var matches = onclickAttr.match(/toggleWishlist\(\d+,\s*(\d+)\)/);
                                if (matches) {
                                    rowProductId = parseInt(matches[1]);
                                }
                            }
                            
                            // 같은 상품 ID인 경우 하트 상태 업데이트
                            if (rowProductId === product_id) {
                                if (res.isInWishlist) {
                                    // 위시리스트에 추가됨 - 색칠된 하트로 변경
                                    $heart.removeClass('bi-suit-heart').addClass('bi-suit-heart-fill');
                                    $heart.css('color', 'red');
                                } else {
                                    // 위시리스트에서 제거됨 - 빈 하트로 변경
                                    $heart.removeClass('bi-suit-heart-fill').addClass('bi-suit-heart');
                                    $heart.css('color', '');
                                }
                            }
                        });
                        
                        var resultMessage = res.isInWishlist ? '위시리스트에 추가되었습니다.' : '위시리스트에서 제거되었습니다.';
                        alert(resultMessage);
                        
                    } else {
                        alert('위시리스트 처리에 실패했습니다: ' + res.message);
                    }
                },
                error: function(err) {
                    alert('위시리스트 처리 통신 실패');
                }
            });
        }
        

        
        // 주문 번호 생성
        var orderCounter = 0;
        
        function generateUniqueOrderNumber(){
        	orderCounter++;
        	var timestamp = new Date().getTime().toString().slice(-10); //뒤 10자리
        	var counter = ('0000' + orderCounter).slice(-4); //4자리 카운터
        	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        	var randomPart = '';
        	
        	// 남은 6자리를 랜덤으로 채움
        	for(var i = 0; i < 6; i++){
        		var randomIndex = Math.floor(Math.random() * chars.length);
        		randomPart += chars.charAt(randomIndex);
        	}
        	
        	return timestamp + counter + randomPart; //총 20자
        }
        
     	// 주문하기 버튼
        function orderRequest(){
        	var orderNumber = generateUniqueOrderNumber();
        	
        	window.location.href="orderView.do?cartId="+ cartId + "&orderNum=" + orderNumber;

        }
    </script>

  <div class="container cart">
  	<div class="inner">
  	<div class="cart-container">
	    <div class="breadcrumb">
	        <div class="container">
	            <div class="breadcrumb-content">
	                <a href="/">홈</a> >
	                <span class="breadcrumb-current">장바구니</span>
	            </div>
	        </div>
	    </div>
	    <div>
	    <h1>[ C A R T ]</h1>
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
	              <c:if test="${uesrInfo != null}">
	              	<th class="col-actions">삭제/관심</th>
	              </c:if>
	              <c:if test="${uesrInfo == null}">
	              	<th class="col-actions">삭제</th>
	              </c:if>
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
			        <button class="cart-btn" id="btnContinue" onclick="history.back()">계속 쇼핑하기</button>
			        <button class="btn-outline" id="btnDeleteSelected" onclick="deleteSelected()">
			        	<i class="bi bi-bag-x"></i>
			        	선택상품 삭제하기</button>
			        <button class="btn-outline" id="btnClear" onclick="deleteCart()">
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
		      <button class="order-btn" id="btnOrder" onclick="orderRequest()">주문하기</button>
		    </div>
	    </div>
	  </div>
  	</div>
  </div>
  
<jsp:include page="../layout/footer.jsp" />