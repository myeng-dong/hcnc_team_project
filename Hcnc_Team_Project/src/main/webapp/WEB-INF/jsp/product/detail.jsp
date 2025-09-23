<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>상품 상세페이지</title>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/global.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/layout.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/common.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/reset.css'/>"/>
	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
	<!-- j쿼리를 실행하기 위해 스크립트 선언을 해줘야한다. -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	
	<style>
		/* QnA모달 CSS */
		.qna-modal {
			position: fixed;
			z-index: 1000;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.5)
		}
		
		.qna-modal-content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: white;
			padding: 30px;
			border-radius: 8px;
			min-width: 500px;
			max-width: 800px;
			width: 90%;
			box-shadow: 0 4px 20px rgba(0,0,0,0.3);
		}
		
		.qna-close {
			position: absolute;
			top: 10px;
			right: 15px;
			font-size: 28px;
			cursor: pointer;
		}
		
		.form-group {
			margin-bottom: 15px;
		}
		
		.form-group input, .form-group textarea {
			width: 100%;
			padding: 10px;
			border: 1px solid #ddd;
			border-radius: 4px;
		}
		
		.form-group textarea {
			min-height: 300px;
			max-height: 300px;
		}
		
		.form-button {
			display: flex;
			justify-content: flex-end;
		}

		/* 상품 옵션 관련 스타일 */
		.product-info table {
			width: 100%;
			border-collapse: collapse;
			margin-bottom: 20px;
		}
		
		.product-info table td {
			padding: 12px 15px;
			border: 1px solid #ddd;
			vertical-align: top;
		}
		
		.product-info table td:first-child {
			background-color: #f8f9fa;
			font-weight: bold;
			width: 120px;
			color: #555;
		}
		
		.option-group {
			margin-bottom: 15px;
		}
		
		.option-label {
			display: block;
			margin-bottom: 8px;
			font-weight: bold;
			color: #555;
			font-size: 14px;
		}
		
		.option-select {
			width: 100%;
			padding: 10px;
			font-size: 14px;
			border: 1px solid #ddd;
			border-radius: 4px;
			background-color: white;
			cursor: pointer;
			transition: border-color 0.3s;
			margin-bottom: 10px;
		}
		
		.option-select:focus {
			outline: none;
			border-color: #3498db;
		}
		
		.option-select:hover {
			border-color: #bbb;
		}
		
		.option-combination {
			margin: 10px 0;
			padding: 15px;
			background-color: #f8f9fa;
			border-radius: 4px;
			border: 1px solid #ddd;
			font-size: 14px;
			line-height: 1.5;
		}
		
		.total-price-amount {
			font-size: 16px;
			font-weight: bold;
			color: #e74c3c;
		}
		
		.product-info button {
			padding: 8px 12px;
			margin: 0 5px;
			border: 1px solid #ddd;
			background-color: #f8f9fa;
			cursor: pointer;
			border-radius: 4px;
		}
		
		.product-info button:hover {
			background-color: #e9ecef;
		}
		
		.product-info input[type="number"] {
			width: 60px;
			padding: 8px;
			text-align: center;
			border: 1px solid #ddd;
			border-radius: 4px;
		}
	</style> 
	
	<script>
		// 부트스트랩 네비 메뉴 버튼
		const triggerTabList = document.querySelectorAll('#myTab button')
		triggerTabList.forEach(triggerEl => {
		  const tabTrigger = new bootstrap.Tab(triggerEl)
	
		  triggerEl.addEventListener('click', event => {
		    event.preventDefault();
		    tabTrigger.show();
		  })
		})
	</script>
	
<!-- 상품 옵션 처리  -->
	<c:if test="${not empty productDetail || not empty optionInfo}">
		<script>	
			// 서버에서 전달받은 상품 정보와 옵션 정보를 JavaScript 변수로 저장
			var productDetail = ${productDetailJson};
			var optionInfo = ${optionInfoJson};
			
			// 기본 가격 설정 (할인가가 있으면 할인가, 없으면 정가)
			var basePrice = productDetail[0].SAILED_PRICE ? productDetail[0].SAILED_PRICE : productDetail[0].PRODUCT_PRICE;
			
			console.log("상품 정보:", productDetail);
			console.log("옵션 정보:", optionInfo);
			
			$(document).ready(function() {
				// 1단계: 어떤 옵션명들이 있는지 찾기
				var options = [];
				for (var i = 0; i < optionInfo.length; i++) {
				    var optionName = optionInfo[i].OPTION_NAME;
				    
				    // 중복 체크해서 없으면 추가
				    var duplicate = false;
				    for (var j = 0; j < options.length; j++) {
				        if (options[j] == optionName) {
				            duplicate = true;
				            break;
				        }
				    }
				    if (!duplicate) {
				        options.push(optionName);
				    }
				}
	
				console.log("발견된 옵션명들:", options);
	
				// 2단계: HTML 생성
				var optionContainer = '';
				for(var i = 0; i < options.length; i++){
				    optionContainer += '<div>';
				    optionContainer += '<span>' + options[i] + ': </span>';
				    optionContainer += '<select id="'+ optionInfo[i].OPTION_ID +'_select" onchange="optionSelect(this)")>';
				    optionContainer += '<option value="non-select">옵션을 선택해주세요.</option>';
				    
				    // 해당 옵션명의 값들만 추가
				    for(var j = 0; j < optionInfo.length; j++){
				        if(options[i] == optionInfo[j].OPTION_NAME){
				        	var optionName = options[i];
				            var optionValue = optionInfo[j].OPTION_VALUE;
				            var additionalPrice = optionInfo[j].ADDITIONAL_PRICE;
				            var displayText = optionValue;
				            
				            if(additionalPrice > 0){
				                displayText += ' (+' + additionalPrice + '원)';
				            }
				            
				            optionContainer += '<option value="['+ optionName +'] ' + optionValue + '" data-price="' + additionalPrice + '">';
				            optionContainer += displayText + '</option>';
				        }
				    }
				    
				    optionContainer += '</select>';
				    optionContainer += '</div>';
				}
	
				// 3단계: HTML 삽입
				$("#options-td").html(optionContainer);
			});
			
			const optionSelect = (element) => {
			    // 선택된 옵션 요소 가져오기
			    var selectedOption = element.options[element.selectedIndex]; // selectElement → element
			    
			    // data-price 값 가져오기
			    var optionPrice = parseInt(selectedOption.getAttribute('data-price')) || 0; // 숫자 변환 추가
			    
			    var quantity = parseInt($('#quantity').val()) || 1;
			    
			    // 현재 가격 가져오기
			    var salaryPrice = getSalaryPrice();
			    var newPrice = salaryPrice + optionPrice // currentPrice → totalPrice, optoinPrice → optionPrice
			    
			    
			    $("#quantity").val(1);
			    updateTotalPrice(newPrice); // 화면 업데이트
			    
			    basePrice = newPrice;
			}

			// 판매 가격 가져오기
			function getSalaryPrice() {
			    return parseInt(document.getElementById("saled-price").getAttribute('data-price')) || 0;
			}
	
			// 총 가격 업데이트
			function updateTotalPrice(newPrice) {
			    var element = document.getElementById("totalPrice");
			    element.setAttribute('data-price', newPrice);
			    element.innerText = newPrice.toLocaleString() + "원";
			}
		</script>
	</c:if>
	
<!-- 상품 정보 파트 -->
	<script type="text/javascript" language="javascript" defer="defer">
		var urlParams = new URLSearchParams(window.location.search);
	
		var memberId = "user01";
		var cartId = 1;
		var productId = urlParams.get('productId');
	

		// 수량 버튼 (새로운 옵션 시스템과 통합)
		function countDown() {
			var quantity = parseInt($('#quantity').val()) || 1;
			if (quantity > 1) {
				$('#quantity').val(quantity - 1);
				
				updateCnt();
			}
		}

		function countUp() {
			var quantity = parseInt($('#quantity').val()) || 1;
			$('#quantity').val(quantity + 1);
			
			updateCnt();
		}

		function updateCnt() {
			var quantity = parseInt($('#quantity').val()) || 1;
			var newPrice = basePrice * quantity;
			
			if (quantity <= 1){
				$('#quantity').val(1);
			}
			
			updateTotalPrice(newPrice);
			
		}
    
		function selectOption() {
			var selected = $("#options-select").val();
			console.log(selected);
		}
    
		function pushCart() {
			var option = '';
			var price = parseInt(document.getElementById("saled-price").getAttribute('data-price')) || 0;
			var quantity = parseInt($('#quantity').val()) || 1;
			var subTotal = parseInt(document.getElementById("totalPrice").getAttribute('data-price')) || 0;
			  
		    // 모든 옵션 셀렉트박스 확인
		    var selectedOptions = [];
		    var hasOption = true;
		    for(var i = 0; i < optionInfo.length; i++){
		        var selectId = optionInfo[i].OPTION_ID + '_select';
		        var selectElement = document.getElementById(selectId);
		        
		        if(selectElement && selectElement.value !== '') {
		        	
		        	if(selectElement.value == 'non-select'){
		        		hasOption = false;
		        	}
		        	
		            var selectedOption = selectElement.options[selectElement.selectedIndex];
		            var optionData = {
		                optionId: optionInfo[i].OPTION_ID,
		                optionName: optionInfo[i].OPTION_NAME,
		                value: selectElement.value,
		                displayText: selectedOption.text,
		                price: selectedOption.getAttribute('data-price')
		            };
		            
		            selectedOptions.push(optionData);
		            console.log("옵션:", optionData.optionName + " = " + optionData.value + " (+" + optionData.price + "원)");
		            
		            option += optionData.value;
		        }
		    }
		    
		    if(hasOption){
		    
				var param = {
					memberId: memberId,
					cartId: cartId,
					productId: productId,
					option: option, 
					price: price,
					quantity: quantity,
					subTotal: subTotal
				};
				
				$.ajax({
					url: "/insertCartItem.do",
					type: "post",
					data: param,
					dataType: "json",
					success: function(res) {
						var result = res.insertResult;
						if (result == 1) {
							confirm("장바구니에 상품이 담겼습니다. 장바구니로 이동하겠습니까?") ? null : null;
						} else if (result == 2) {
							confirm("이미 장바구니에 담긴 상품입니다. 장바구니로 이동하겠습니까?") ? null : null;
						}
					},
					error: function() {
						alert("장바구니 담기 중 오류가 발생했습니다.");
					}
				});
		    } else {
		    	alert("모든 옵션을 선택해주세요.");
		    }
		}
	</script>
	
	<script>
		$(function(){
			loadAllData();
		});
		
		// 비동기 처리
		function loadAllData(){
			$.when(
			    loadProductDetail(), 
			    loadReviewList(1, byReview, byInputDT),
			    loadQnAList()
			).done(function(result1, result2, result3) {
			    console.log('모든 데이터 로드 완료');
/* 			    hideLoadingSpinner(); // 로딩 숨기기 */
			}).fail(function(error) {
			    console.log('데이터 로드 실패:', error);
/* 			    hideLoadingSpinner(); */
			    alert('페이지를 불러오는데 실패했습니다.');
			});
		}
	</script>
</head>

<body>
    <div class="container">
    	<div class="inner">
			<div class="product-container" style="display: flex; gap: 20px;">
				<div>
					<img id="product-image" src="https://placehold.co/400x400" alt="Product Image">
				</div>
				<div class="product-info">
					<div class="product-title">
						<h1 id="product-name">${productDetail[0].PRODUCT_NAME}</h1>
					</div>
					<table>
						<tbody>
							<tr>
								<td>소비자가</td>
								<td id="product-price"><fmt:formatNumber value="${productDetail[0].PRODUCT_PRICE}" pattern="#,###"/>원</td>
							</tr>
							<tr>
								<td>판매가</td>
								<c:if test="${productDetail[0].SAILED_PRICE != null}">
									<td id="saled-price" data-price="${productDetail[0].SAILED_PRICE}"><fmt:formatNumber value="${productDetail[0].SAILED_PRICE}" pattern="#,###"/>원</td>
								</c:if>
								<c:if test="${productDetail[0].SAILED_PRICE == null}">
									<td id="saled-price" data-price="${productDetail[0].PRODUCT_PRICE}"><fmt:formatNumber value="${productDetail[0].PRODUCT_PRICE}" pattern="#,###"/>원</td>
								</c:if>
							</tr>
							<tr>
								<td>상품코드</td>
								<td id="product-code">${productDetail[0].PRODUCT_CODE}</td>
							</tr>
							<tr>
								<td>상품설명</td>
								<td id="product-description">${productDetail[0].PRODUCT_CONTENT}</td>
							</tr>
							<tr>
								<td>무게</td>
								<td id="product-weight">${productDetail[0].PRODUCT_WEIGHT}</td>
							</tr>
							<c:if test="${optionInfo[0] != null}">
								<tr id="product-option">
									<td>옵션</td>
									<td id="options-td">
										<!-- 여기에 옵션 셀렉트 박스가 동적으로 생성됩니다 -->
									</td>
								</tr>
							</c:if>
							<tr id="selected-option-display" style="display: none;">
								<td>선택된 옵션</td>
								<td id="selectedCombination">옵션을 선택해주세요.</td>
							</tr>
							<tr>
								<td>총 가격</td>
								<c:if test="${productDetail[0].SAILED_PRICE != null}">
								    <td id="totalPrice" class="total-price-amount" data-price="${productDetail[0].SAILED_PRICE}"><fmt:formatNumber value="${productDetail[0].SAILED_PRICE}" pattern="#,###"/>원</td>
								</c:if>
								<c:if test="${productDetail[0].SAILED_PRICE == null}">
								    <td id="totalPrice" class="total-price-amount" data-price="${productDetail[0].PRODUCT_PRICE}"><fmt:formatNumber value="${productDetail[0].PRODUCT_PRICE}" pattern="#,###"/>원</td>
								</c:if>
							</tr>
							<tr>
								<td>수량</td>
								<td>
									<button onclick="countDown()">-</button>
									<input type="number" name="quantity" id="quantity" value="1" min="1" onchange="updateCnt()">
									<button onclick="countUp()">+</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div>
						<button id="add-to-cart" onclick="pushCart()">장바구니 담기</button>
						<button id="buy-now">바로구매</button>
					</div>
				</div>
			</div>
		</div>
    	<div class="inner">
    		<nav>
				<div class="nav nav-tabs" id="nav-tab" role="tablist">
					<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">상품상세정보</button>
					<button class="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">상품 리뷰<span id="productReviewCnt"></span></button>
					<button class="nav-link" id="nav-qna-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">상품 Q&A<span id="productQnACnt"></span></button>
				</div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
					<%@ include file="tabs/description.jsp" %>
				</div>
				<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
					<%@ include file="tabs/review.jsp" %>
				</div>
				<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
					<%@ include file="tabs/productQnA.jsp" %>
				</div>
			</div>
    	</div>
    </div>
</body>
</html>