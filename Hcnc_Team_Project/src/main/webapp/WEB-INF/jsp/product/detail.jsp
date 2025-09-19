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
		    event.preventDefault()
		    tabTrigger.show()
		  })
		})
	</script>
	
	<!-- 상품 QnA 등록시 처리하기 위함 -->
	<c:if test="${not empty message}">
		<script>
			$(document).ready(function(){
				
				if("${messageType}" === "success"){
					alert("${message}");
				} else {
					alert("오류: ${message}");
				}
				
				
				// QnA 문의하기 버튼 광클 금지
				var isSubmitting = false;
				
				$('#qnaForm').submit(function(e){
					if (isSubmitting) {
						e.preventDefault();
						return false;
					}
					
					isSubmitting = true;
					$('#qnaSubmitBtn').prop('disabled', true).text('상품 문의 등록중...');
					
					return true;
				});
				
			});
		</script>
	</c:if>
	
	<c:if test="${not empty productDetail && not empty optionInfo}">
		<script>
			var productDetail = ${productDetailJson};
			var optionInfo = ${optionInfoJson};
			
			console.log(productDetail);
			console.log(optionInfo);
		</script>
	</c:if>
	
	<script type="text/javascript" language="javascript" defer="defer">
		var urlParams = new URLSearchParams(window.location.search);
	
		var memberId = "user01";
		var cartId = 1;
		var productId = urlParams.get('productId');
	
		$(function(){
			
			// 페이지 로드시 모달html 정의.
			var modalHTML =
				'<div id="qnaModal" class="qna-modal" style="display: none;">' +
	            '<div class="qna-modal-content">' +
	              '<span class="qna-close">&times;</span>' +
	              '<h2>상품 문의하기</h2>' +
	              '<form id="qnaForm" action="/insertQnA.do" method="post">' +
	                '<div class="form-group">' +
	                  '<input type="text" id="qnaProdut_'+ productId +'" name="productId" value="'+ productId +'" placeholder="상품" required hidden>' +
	                '</div>' +
	                '<div class="form-group">' +
	                  '<input type="text" id="qnaTitle" name="qnaTitle" placeholder="제목" required>' +
	                '</div>' +
	                '<div class="form-group">' +
	                  '<input type="text" id="'+ memberId +'" name="memberId" value="'+ memberId +'" placeholder="작성자" required hidden>' +
	                '</div>' +
	                '<div class="form-group">' +
	                  '<textarea id="qnaContent" name="qnaContent" placeholder="내용" required></textarea>' +
	                '</div>' +
	                '<div class="form-button">' +
	                	'<button type="submit" id="qnaSubmitBtn">문의하기</button>' +
	                '</div>'
	              '</form>' +
	            '</div>' +  
	          '</div>'; 
	     $('body').append(modalHTML);
	     
	     // 모달 닫기 이벤트들
	     $('.qna-close').click(function(){
	    	 $('#qnaModal').hide();
	     });
	     
	     $('.btn-cancel').click(function(){
	    	 $('#qnaModal').hide();
	     })

		});
		
		// 수량 버튼 (새로운 옵션 시스템과 통합)
		function countDown() {
			var $quantityInput = $('#quantity');
			var currentValue = parseInt($quantityInput.val());
			if (currentValue > 1) {
				$quantityInput.val(currentValue - 1);
				updateCnt();
			}
		}

		function countUp() {
			var $quantityInput = $('#quantity');
			var currentValue = parseInt($quantityInput.val());
			$quantityInput.val(currentValue + 1);
			updateCnt();
		}

		function updateCnt() {
			var quantity = parseInt($('#quantity').val()) || 1;
			
			if (quantity <= 1){
				$('#quantity').val(1);
			}
			
			// 새로운 옵션 시스템이 있으면 그것을 사용, 없으면 기존 방식
			if (typeof updateSelectedCombination === 'function') {
				updateSelectedCombination();
			}
		}
    
		function selectOption() {
			var selected = $("#options-select").val();
			console.log(selected);
		}
    
		function pushCart() {
			// 새로운 옵션 시스템에서 선택된 옵션 가져오기
			var $selects = $('.option-select');
			var selectedOptions = [];
			var hasAllOptions = true;
			
			$selects.each(function() {
				var $select = $(this);
				if ($select.val()) {
					var optionData = JSON.parse($select.val());
					selectedOptions.push(optionData);
				} else {
					hasAllOptions = false;
				}
			});
			
			// 모든 옵션이 선택되었는지 확인
			if (!hasAllOptions || selectedOptions.length === 0) {
				alert("옵션을 선택해주세요.");
				return;
			}
			
			// 옵션을 문단별로 나누어 문자열로 변환
			var optionLines = [];
			for (var i = 0; i < selectedOptions.length; i++) {
				var option = selectedOptions[i];
				var text = '[' + option.OPTION_NAME + '] ' + option.OPTION_VALUE;
				if (option.ADDITIONAL_PRICE > 0) {
					text += ' (+' + option.ADDITIONAL_PRICE.toLocaleString() + '원)';
				} else if (option.ADDITIONAL_PRICE < 0) {
					text += ' (' + option.ADDITIONAL_PRICE.toLocaleString() + '원)';
				}
				optionLines.push(text);
			}
			var optionString = optionLines.join('\n'); // 줄바꿈으로 구분
			
			// 가격 계산
			var totalAdditionalPrice = 0;
			for (var i = 0; i < selectedOptions.length; i++) {
				totalAdditionalPrice += selectedOptions[i].ADDITIONAL_PRICE;
			}
			
			var basePrice;
			if ($("#saled-price").text() != null && $("#saled-price").text() != '') {
				basePrice = Number($("#saled-price").text().replace(/[^0-9]/g, ''));
			} else {
				basePrice = Number($("#product-price").text().replace(/[^0-9]/g, ''));
			}
			
			var unitPrice = basePrice + totalAdditionalPrice;
			var quantity = Number($("#quantity").val());
			var subTotal = unitPrice * quantity;
			
			var param = {
				memberId: memberId,
				cartId: cartId,
				productId: productId,
				option: optionString, // 문단 나누어진 옵션 문자열
				price: unitPrice,
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
		}

		function formModalShow() {
			$('#qnaModal').show();
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
									<td id="saled-price"><fmt:formatNumber value="${productDetail[0].SAILED_PRICE}" pattern="#,###"/>원</td>
								</c:if>
								<c:if test="${productDetail[0].SAILED_PRICE == null}">
									<td id="saled-price"><fmt:formatNumber value="${productDetail[0].PRODUCT_PRICE}" pattern="#,###"/>원</td>
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
							<c:if test="${productDetail[0].OPTION_NAME != null}">
								<tr id="product-option">
									<td>옵션</td>
									<td>
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
								    <td id="totalPrice" class="total-price-amount"><fmt:formatNumber value="${productDetail[0].SAILED_PRICE}" pattern="#,###"/>원</td>
								</c:if>
								<c:if test="${productDetail[0].SAILED_PRICE == null}">
								    <td id="totalPrice" class="total-price-amount"><fmt:formatNumber value="${productDetail[0].PRODUCT_PRICE}" pattern="#,###"/>원</td>
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
					<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">상품 리뷰<span>5</span></button>
					<button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">상품 Q&A<span>2</span></button>
				</div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
				<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
					<div class="review-area" style="display: flex;">
						<div class="review-left-area" style="width:20%;">
							ddd
						</div>
						<div class="review-right-area" style="width:70%;">
							<div class="review-filter" style="display: flex; justify-content: space-between">
								<div class="review-filter-left">
									<ul class="filter-menu" style="display: flex; gap: 10px; list-style: none; padding: 0; margin: 0;">
										<li>
											<span>리뷰순</span>
										</li>
										<li>
											<span>최신순</span>
										</li>
										<li>
											<span>포토리뷰만 보기</span>
										</li>
									</ul>
								</div>
								<div class="review-filter-right">
									<div class="dropdown-center">
										<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<span>별점전체보기</span>
											<span>(100)</span>
										</button>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="#">Action</a></li>
											<li><a class="dropdown-item" href="#">Action two</a></li>
											<li><a class="dropdown-item" href="#">Action three</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="review-content-list">
								<ul class="reviews" style="padding: 0;">
									<li class="review" style="padding: 20px 0; border-top: 1px solid grey; border-bottom: 1px solid grey;">
										<div class="top-info">
											<span>별점표시 </span>
											<span> | 작성일자 </span>
											<span> | 작성자 </span>
										</div>
										<div class="body-info">
											<div class="review-title">
												<span style="font-weight: bold;">리뷰제목</span>
											</div>
											<div class="review-imgs" style="display: flex;">
												<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
												<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
												<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
												<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
											</div>
											<div class="review-content">
												<p>리뷰내용</p>
											</div>
											<div class="bottom-info">
												<span>펼쳐보기</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>	
				</div>
				<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
					<div style="margin: 50px 0px 20px 10px;">
						<p style="font-weight: bold;">상품 Q&A</p>
						<p>상품에 대한 문의사항을 남겨주세요.</p>
					</div>
					<div class="review-btn-area" style="display: flex; justify-content: right;">
						<button type="button" onclick="formModalShow()">상품 문의하기</button>
					</div>
					<table class="table">
						<thead>
							<tr>
								<th scope="col" width="10%">NO</th>
								<th scope="col" width="60%">TITLE</th>
								<th scope="col" width="15%">WRITER</th>
								<th scope="col" width="15%">DATE</th>
							</tr>
						</thead>
						<tbody id="productQnAList">
							<c:if test="${not empty productQnAList}">
								<c:forEach items="${productQnAList}" var="qna" varStatus="status">
									<tr>
										<td>${status.count}</td>
										<td>${qna.QNA_TITLE}</td>
										<td>${qna.MEMBER_ID}</td>
										<td>${qna.INPUT_DT}</td>
									</tr>
								</c:forEach>
							</c:if>
						</tbody>
					</table>
				</div>
			</div>
    	</div>
    </div>
</body>
</html>