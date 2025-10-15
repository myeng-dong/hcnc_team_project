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
	<jsp:include page="../layout/headertop.jsp" />

	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/global.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/layout.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/common.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/reset.css'/>"/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
	
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/productKEY/productDetail.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/productKEY/productTabNav.css'/>"/>
	<link type="text/css" rel="stylesheet" href="<c:url value='/css/productKEY/productQnAModal.css'/>"/>

	<!-- j쿼리를 실행하기 위해 스크립트 선언을 해줘야한다. -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

	<script type="text/javascript" src="<c:url value='/js/productKEY/productTabNav.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/js/productKEY/productInfo.js'/>"></script>
	<script type="text/javascript" src="<c:url value='/js/productKEY/productPageLoad.js'/>"></script>
	
	<script>
		$.ajaxSetup({
			xhrFields: {
				withCredentials: true
			}
		});
	</script>
	
<!-- 상품 옵션 처리  -->
	<c:if test="${not empty productDetail || not empty optionInfo}">
		<script>	
			// 서버에서 전달받은 상품 정보와 옵션 정보를 JavaScript 변수로 저장
			var productDetail = ${productDetailJson};
			var optionInfo = ${optionInfoJson};

			var productName = productDetail[0].PRODUCT_NAME;
			var productPrice = productDetail[0].PRODUCT_PRICE;
			if(productDetail[0].imgs.length > 0){
				var productImgPath = productDetail[0].imgs[0].IMAGE_URL;
			}

			// 기본 가격 설정 (할인가가 있으면 할인가, 없으면 정가)
			var basePrice = productDetail[0].SAILED_PRICE ? productDetail[0].SAILED_PRICE : productDetail[0].PRODUCT_PRICE;

			/* 			console.log("상품 정보:", productDetail);
			console.log("옵션 정보:", optionInfo); */

			// DOM 로드 후 실행
					$(document).ready(function() {
							// productId가 정의되어 있는지 확인
							if(typeof productId !== 'undefined' && productId) {
									addRecentProduct(productId, productName, productImgPath, productPrice);
							}
					});

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
</head>

<body>
		<jsp:include page="../layout/header.jsp" />
    <div class="container" style="display: flex; gap: 10px;">
    	<div>
	    	<div class="inner">
				<div class="product-container" style="display: flex; gap: 50px;">
					<div class="product-image-container">
						<c:if test="${not empty productDetail[0].imgs}">
						    <img id="product-image" src="${productDetail[0].imgs[0].IMAGE_URL}" alt="${productDetail[0].imgs[0].ALT_TEXT}">
						</c:if>
						<c:if test="${empty productDetail[0].imgs}">
						    <img id="product-image" src="https://placehold.co/400x400" alt="Product Image">
						</c:if>
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
											<input type="number" name="quantity" id="quantity" value="1" min="1" max="999999" onchange="updateCnt()">
											<button onclick="countUp()">+</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="product-actions">
							<div class="button-container">
								<button id="add-to-cart" onclick="pushCart()">장바구니 담기</button>
								<button id="buy-now" onclick="buyNow()">바로구매</button>
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
    	<!-- 최근 본 상품 컴포넌트 -->
		<jsp:include page="./recentProduct.jsp" />
    </div>
		<jsp:include page="../layout/footer.jsp" />
</body>
</html>