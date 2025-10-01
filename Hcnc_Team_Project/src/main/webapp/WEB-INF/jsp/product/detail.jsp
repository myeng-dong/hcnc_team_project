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
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
	<!-- j쿼리를 실행하기 위해 스크립트 선언을 해줘야한다. -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	
		<style>
		body {
			font-family: 'Noto Sans KR', Arial, sans-serif;
			line-height: 1.6;
			color: #333;
			background-color: #ffffff;
		}

		/* 상품 컨테이너 */
		.product-container {
			background: #ffffff;
			border-radius: 8px;
			box-shadow: 0 2px 8px rgba(220, 6, 48, 0.05);
			padding: 50px;
			margin-bottom: 40px;
			border: 1px solid rgba(220, 6, 48, 0.08);
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 50px;
			align-items: start;
		}

		/* 이미지 컨테이너 */
		.product-image-container {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
		}

		/* 상품 정보 컨테이너 */
		.product-info {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 500px;
		}

		/* 상품 정보 상단 영역 */
		.product-details {
			flex-grow: 1;
		}

		/* 버튼 영역 */
		.product-actions {
			margin-top: auto;
			padding-top: 20px;
		}

		/* 상품 이미지 */
		#product-image {
			width: 100%;
			height: 500px;
			object-fit: cover;
			border-radius: 8px;
			border: 1px solid rgba(220, 6, 48, 0.2);
			box-shadow: 0 2px 8px rgba(220, 6, 48, 0.1);
			transition: transform 0.3s ease;
		}

		#product-image:hover {
			/* transform: scale(1.01); */
			border-color: #DC0630;
		}

		/* 상품 제목 */
		.product-title h1 {
			color: #DC0630;
			font-size: 28px;
			font-weight: 600;
			margin-bottom: 20px;
			padding-bottom: 15px;
			border-bottom: 2px solid rgba(220, 6, 48, 0.3);
			line-height: 1.3;
		}

		/* QnA모달 CSS */
		.qna-modal {
			position: fixed;
			z-index: 1000;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}
		
		.qna-modal-content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #ffffff;
			padding: 30px;
			border-radius: 8px;
			min-width: 500px;
			max-width: 800px;
			width: 90%;
			box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
			border: 1px solid rgba(220, 6, 48, 0.2);
		}
		
		.qna-close {
			position: absolute;
			top: 15px;
			right: 20px;
			font-size: 24px;
			cursor: pointer;
			color: #DC0630;
			font-weight: 500;
		}

		.qna-close:hover {
			color: #a00428;
		}
		
		.form-group {
			margin-bottom: 20px;
		}
		
		.form-group input, .form-group textarea {
			width: 100%;
			padding: 12px 15px;
			border: 1px solid #e9ecef;
			border-radius: 4px;
			font-size: 14px;
			transition: all 0.3s ease;
			background-color: #ffffff;
		}

		.form-group input:focus, .form-group textarea:focus {
			outline: none;
			border-color: #DC0630;
			box-shadow: 0 0 0 2px rgba(220, 6, 48, 0.1);
		}
		
		.form-group textarea {
			min-height: 300px;
			max-height: 300px;
			resize: vertical;
		}
		
		.form-button {
			display: flex;
			justify-content: flex-end;
			gap: 10px;
		}

		/* 상품 옵션 관련 */
		.product-info table {
			width: 100%;
			border-collapse: collapse;
			margin-bottom: 20px;
			border-radius: 4px;
			overflow: hidden;
			box-shadow: 0 1px 3px rgba(0,0,0,0.05);
			background-color: #ffffff;
		}
		
		.product-info table td {
			padding: 15px 20px;
			border: 1px solid #f1f3f4;
			vertical-align: middle;
			font-size: 15px;
		}
		
		.product-info table td:first-child {
			background-color: #DC0630;
			color: white;
			font-weight: 500;
			width: 100px;
			text-align: center;
			font-size: 14px;
		}

		.product-info table td:last-child {
			background-color: #ffffff;
		}
		
		.option-group {
			margin-bottom: 15px;
		}
		
		.option-label {
			display: block;
			margin-bottom: 8px;
			font-weight: 600;
			color: #DC0630;
			font-size: 14px;
		}
		
		.option-select {
			width: 100%;
			padding: 10px 15px;
			font-size: 14px;
			border: 1px solid #e9ecef;
			border-radius: 4px;
			background-color: #ffffff;
			cursor: pointer;
			transition: all 0.3s ease;
			margin-bottom: 10px;
		}
		
		.option-select:focus {
			outline: none;
			border-color: #DC0630;
			box-shadow: 0 0 0 2px rgba(220, 6, 48, 0.1);
		}
		
		.option-select:hover {
			border-color: #DC0630;
		}
		
		.option-combination {
			margin: 15px 0;
			padding: 15px;
			background-color: #ffffff;
			border-radius: 4px;
			border: 1px solid rgba(220, 6, 48, 0.2);
			font-size: 14px;
			line-height: 1.6;
		}
		
		.total-price-amount {
			font-size: 22px;
			font-weight: 700;
			color: #DC0630;
		}
		
		/* 버튼 */
		.product-info button {
			padding: 10px 16px;
			margin: 0 4px;
			border: 1px solid #DC0630;
			background-color: #ffffff;
			color: #DC0630;
			cursor: pointer;
			border-radius: 4px;
			font-weight: 500;
			transition: all 0.3s ease;
			font-size: 14px;
		}
		
		.product-info button:hover {
			background-color: #DC0630;
			color: #ffffff;
		}

		.product-info button:active {
			transform: translateY(1px);
		}
		
		.product-info input[type="number"] {
			width: 90px;
			padding: 10px 12px;
			text-align: center;
			border: 1px solid #e9ecef;
			border-radius: 4px;
			font-weight: 500;
			color: #333;
			font-size: 14px;
		}

		.product-info input[type="number"]:focus {
			outline: none;
			border-color: #DC0630;
			box-shadow: 0 0 0 2px rgba(220, 6, 48, 0.1);
		}

		/* 메인 액션 버튼들 */
		#add-to-cart, #buy-now {
			width: 48%;
			padding: 15px 20px !important;
			font-size: 16px !important;
			font-weight: 600 !important;
			border-radius: 6px !important;
			margin: 0 !important;
			text-transform: none;
			letter-spacing: 0.3px;
			transition: all 0.3s ease;
			cursor: pointer;
		}

		#add-to-cart {
			background-color: #DC0630 !important;
			border: 1px solid #DC0630 !important;
			color: #ffffff !important;
		}

		#add-to-cart:hover {
			background-color: #b8052a !important;
			border-color: #b8052a !important;
			/* transform: translateY(-2px); */
			box-shadow: 0 4px 12px rgba(220, 6, 48, 0.3);
		}

		#buy-now {
			background-color: #ffffff !important;
			color: #DC0630 !important;
			border: 1px solid #DC0630 !important;
		}

		#buy-now:hover {
			background-color: #DC0630 !important;
			color: #ffffff !important;
			/* transform: translateY(-2px); */
			box-shadow: 0 4px 12px rgba(220, 6, 48, 0.3);
		}

		/* 버튼 컨테이너 */
		.button-container {
			display: flex;
			justify-content: space-between;
			gap: 4%;
			padding-top: 20px;
			border-top: 1px solid #f1f3f4;
		}
		
		.button-container button {
			height: 60px;
		}

		/* 탭 네비게이션 */
		.nav-tabs {
			border-bottom: 2px solid #f8f9fa;
		    margin-bottom: 0;
		    background-color: #ffffff;
		    padding: 0 20px;
		}

		.nav-tabs .nav-link {
	    	color: #666;
		    font-weight: 600;
		    padding: 16px 24px;
		    border: none; /* 기존 박스 테두리 제거 */
		    border-radius: 0;
		    margin-right: 8px;
		    transition: all 0.3s ease;
		    background-color: transparent;
		    position: relative;
		    font-size: 15px;
		    letter-spacing: 0.3px;
		}

		.nav-tabs .nav-link::after {
		    content: '';
		    position: absolute;
		    bottom: -2px;
		    left: 0;
		    width: 0;
		    height: 3px;
		    background: linear-gradient(135deg, #DC0630 0%, #b8052a 100%);
		    border-radius: 2px 2px 0 0;
		    transition: width 0.3s ease;
		}

		.nav-tabs .nav-link:hover {
			color: #DC0630;
		    background-color: rgba(220, 6, 48, 0.05);
		    border-color: transparent;
		    border-radius: 8px 8px 0 0;
		}

		.nav-tabs .nav-link.active {
			color: #DC0630 !important;
		    background-color: rgba(220, 6, 48, 0.08) !important;
		    border-color: transparent !important;
		    border-radius: 8px 8px 0 0;
		    font-weight: 700;
		}
		
		.nav-tabs .nav-link.active::after {
		    width: 100%;
		}
		
		.nav-tabs .nav-link:hover::after {
		    width: 100%;
		}

		/* 탭 네비게이션을 포함하는 섹션 */
		.tab-navigation-section {
			position: sticky;
		    top: 0;
		    z-index: 100;
		    background-color: #ffffff;
		    margin-bottom: 0;
		    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
		    border-bottom: 1px solid #f1f3f4;
		}

		/* 탭 콘텐츠 */
		.tab-content {
			background: #ffffff;
			padding: 30px;
			border-radius: 4px;
			box-shadow: 0 1px 3px rgba(0,0,0,0.05);
			border: 1px solid rgba(220, 6, 48, 0.1);
			margin-top: 0;
		}

		/* 카운트 뱃지 */
		#productReviewCnt, #productQnACnt {
			background: linear-gradient(135deg, #DC0630 0%, #b8052a 100%);
		    color: white;
		    padding: 3px 8px;
		    border-radius: 12px;
		    font-size: 11px;
		    margin-left: 8px;
		    font-weight: 600;
		    box-shadow: 0 2px 4px rgba(220, 6, 48, 0.3);
		}

		/* 반응형 */
		@media (max-width: 1024px) {
			.product-container {
				grid-template-columns: 1fr !important;
				gap: 25px !important;
				padding: 25px !important;
			}

			.product-image-container {
				justify-self: center;
			}

			#product-image {
				max-width: 450px;
				height: 450px;
			}

			.product-info {
				min-height: auto;
			}

			.tab-navigation-section {
				padding-top: 5px;
			}
		}

		@media (max-width: 768px) {
			.product-container {
				padding: 20px !important;
				gap: 20px !important;
			}

			#product-image {
				max-width: 100%;
				height: 350px;
			}

			.product-title h1 {
				font-size: 24px;
			}

			.product-info table td {
				padding: 12px 15px;
				font-size: 14px;
			}

			.product-info table td:first-child {
				width: 80px;
				font-size: 12px;
			}

			.button-container {
				flex-direction: column;
				gap: 10px;
			}

			#add-to-cart, #buy-now {
				width: 100% !important;
			}

			.nav-tabs .nav-link {
				padding: 10px 15px;
				font-size: 14px;
			}

			.tab-navigation-section {
				padding-top: 5px;
			}
		}

		.inner {
			background: #ffffff;
			border-radius: 4px;
			margin-bottom: 20px;
		}

		.form-group label {
			color: #DC0630;
			font-weight: 500;
			margin-bottom: 6px;
			display: block;
		}

		/* 제품 코드 */
		#product-code {
			font-family: 'Courier New', monospace;
			font-weight: 500;
			color: #DC0630;
			background: rgba(220, 6, 48, 0.03);
			padding: 6px 10px;
			border-radius: 4px;
			display: inline-block;
		}
	</style> 
	
	<script>
		// 부트스트랩 네비 메뉴 버튼 (즉시 상단 이동 - ㄻ 250925 14:13)
		const triggerTabList = document.querySelectorAll('#nav-tab button')
		triggerTabList.forEach(triggerEl => {
		  const tabTrigger = new bootstrap.Tab(triggerEl)
	
		  triggerEl.addEventListener('click', event => {
		    event.preventDefault();
		    tabTrigger.show();
		    
		    setTimeout(function() {
	            // 탭 네비게이션 섹션을 화면 맨 위로 스크롤
	            const tabNavigationSection = document.querySelector('.tab-navigation-section');
	            if (tabNavigationSection) {
	                // 탭이 화면 맨 위에 딱 붙도록 스크롤
	                tabNavigationSection.scrollIntoView({ 
	                    behavior: 'smooth', 
	                    block: 'start' 
	                });
	            }
	        }, 100);
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
			
			
			// 선택된 모든 옵션의 추가 요금을 저장할 객체
			var selectedOptions = {};
			
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
				    optionContainer += '<div class="option-group">';
				    optionContainer += '<span class="option-label">' + options[i] + ': </span>';
				    optionContainer += '<select class="option-select" id="'+ optionInfo[i].OPTION_ID +'_select" data-option-name="' + options[i] + '" onchange="optionSelect(this)")>';
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
			
			// 옵션 선택 함수
			const optionSelect = (element) => {
			    // 선택된 옵션 정보 가져오기
			    var selectedOption = element.options[element.selectedIndex];
			    var optionName = element.getAttribute('data-option-name'); // 어떤 옵션인지 구분
			    var optionPrice = parseInt(selectedOption.getAttribute('data-price')) || 0;
			    
			    // 해당 옵션의 추가 요금 저장
			    if(selectedOption.value === 'non-select') {
			        delete selectedOptions[optionName]; // 선택 해제 시 삭제
			    } else {
			        selectedOptions[optionName] = optionPrice;
			    }
			    
			    // 모든 옵션의 추가 요금 합산
			    var totalOptionPrice = 0;
			    for(var key in selectedOptions) {
			        totalOptionPrice += selectedOptions[key];
			    }
			    
			    // 기본 상품 가격 + 모든 옵션 추가 요금
			    var salaryPrice = getSalaryPrice();
			    var newPrice = salaryPrice + totalOptionPrice;
			    
			    // 수량 초기화
			    $("#quantity").val(1);
			    updateTotalPrice(newPrice);
			    
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
			var optionIds = [];
			var price = parseInt(document.getElementById("saled-price").getAttribute('data-price')) || 0;
			var quantity = parseInt($('#quantity').val()) || 1;
			var subTotal = parseInt(document.getElementById("totalPrice").getAttribute('data-price')) || 0;
			  
		    // 모든 옵션 셀렉트박스 확인
		    var selectedOptions = [];
		    var hasOption = true;
		    
		    // 옵션명별로 중복 제거를 위한 Set
		    var processedOptionNames = new Set();
		    
		    for(var i = 0; i < optionInfo.length; i++){
		        var selectId = optionInfo[i].OPTION_ID + '_select';
		        var selectElement = document.getElementById(selectId);
		        
		        if(selectElement && selectElement.value !== '') {
		        	
		        	if(selectElement.value == 'non-select'){
		        		hasOption = false;
		        		break; // 하나라도 미선택이면 중단
		        	}
		        	
		            var selectedOption = selectElement.options[selectElement.selectedIndex];
		            var optionName = optionInfo[i].OPTION_NAME;
		            
		            // 같은 옵션명은 한 번만 처리 (중복 방지)
		            if(!processedOptionNames.has(optionName)){
		            	processedOptionNames.add(optionName);
		            	
		            	var optionData = {
			                optionId: optionInfo[i].OPTION_ID,
			                optionName: optionInfo[i].OPTION_NAME,
			                value: selectElement.value,
			                displayText: selectedOption.text,
			                price: selectedOption.getAttribute('data-price')
			            };
			            
			            selectedOptions.push(optionData);
			            optionIds.push(optionInfo[i].OPTION_ID);
			            
			            console.log("옵션:", optionData.optionName + " = " + optionData.value + " (+" + optionData.price + "원)");
			            
			            option += optionData.value + ' \n';
		            }
		        }
		    }
		    
		    if(hasOption){
		    
				var param = {
					memberId: memberId,
					cartId: cartId,
					productId: productId,
					option: option,
					optionIds: optionIds,
					price: price,
					quantity: quantity,
					subTotal: subTotal
				};
				
				console.log("서버에 전송: ", param);
				
				$.ajax({
					url: "/insertCartItem.do",
					type: "post",
					data: param,
					traditional: true, // 배열 전송을 위해 필요.
					dataType: "json",
					success: function(res) {
						var result = res.insertResult;
						if (result == 1) {
							confirm("장바구니에 상품이 담겼습니다. 장바구니로 이동하겠습니까?") ? location.href = "/cartView.do?cartId=" + 1; : null;
						} else if (result == 2) {
							confirm("이미 장바구니에 담긴 상품입니다. 장바구니로 이동하겠습니까?") ? location.href = "/cartView.do?cartId=" + 1; : null;
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
			<div class="product-container" style="display: flex; gap: 50px;">
				<div class="product-image-container">
					<img id="product-image" src="https://placehold.co/400x400" alt="Product Image">
				</div>
				<div class="product-info">
					<div class="product-details">
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
					</div>
					<div class="product-actions">
						<div class="button-container">
							<button id="add-to-cart" onclick="pushCart()">장바구니 담기</button>
							<button id="buy-now">바로구매</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    	<div class="inner">
    		<div class="tab-navigation-section">
	    		<nav>
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<button class="nav-link active" hrer="goDetail" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">상품상세정보</button>
						<button class="nav-link" href="#nav-profile" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">상품 리뷰<span id="productReviewCnt"></span></button>
						<button class="nav-link" href="goQna" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">상품 Q&A<span id="productQnACnt"></span></button>
					</div>
				</nav>
			</div>
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