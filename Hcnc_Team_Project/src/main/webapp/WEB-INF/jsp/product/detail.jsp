<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

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
			border-readius: 4px;
		}
		
		.form-group textarea {
			min-height: 300px;
			max-height: 300px;
		}
		
		.form-button {
			display: flex;
			justify-content: flex-end;
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
	
	<script type="text/javaScript" language="javascript" defer="defer">
	
		const memberId = "user01";
		const cartId = 1;
		const productId = 1;
	
		$(function(){
			
			selectProduct();
			
			selectProductQnAList();
			
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
	     
	     // 모달 닫기 이베트들
	     $('.qna-close').click(function(){
	    	 $('#qnaModal').hide();
	     });
	     
	     $('.btn-cancel').click(function(){
	    	 $('#qnaModal').hide();
	     })

		});
		
		
		
		const selectProduct = () => {
			
			var param = {
					productId : productId
			};
			
			$.ajax({
			    url: "/selectProductByUser.do",
			    type: "post",
			    data: param,
			    dataType: "json",
			    success: function (res) {
			        console.log(res.product);
			        console.log(res.productOptions);

			        var product = res.product;               
			        var productOptions = res.productOptions; 

			        // 상품 정보 세팅
			        $("#product-name").text(product[0].PRODUCT_NAME);
			        $("#product-price").text(product[0].PRODUCT_PRICE);
			        $("#saled-price").text(product[0].SALED_PRICE);
			        $("#product-code").text(product[0].PRODUCT_CODE);
			        $("#product-description").text(product[0].PRODUCT_CONTENT);
			        $("#product-weight").text(product[0].PRODUCT_WEIGHT);

			        // 1. optionData 객체 만들기
			        var optionData = {};
			        var k = 0;
			        for (var i = 0; i < productOptions.length; i++) {
			            var key = product[k].OPTION_NAME;  // 예: 색상, 사이즈
			            optionData[key] = [];
			            for (var j = 0; j < productOptions[i].OPTION_COUNT; j++) {
			                optionData[key].push(product[k].OPTION_VALUE);
			                k++;
			            }
			        }

			        // 2. 모든 조합 생성 (재귀)
			        var keys = Object.keys(optionData);
			        var optionsHtml = '<td>옵션</td>';
			        optionsHtml += '<td>'
			        optionsHtml += '<select id="options-select" onchange="selectOption()">';
			        optionsHtml += '<option value="non-select" selected>--옵션 선택--</option>';

			        function generateCombinations(index, current) {
			            if (index === keys.length) {
			                var text = current.join(" , ");
			                optionsHtml += "<option value='" + text + "'>" + text + "</option>";
			                return;
			            }
			            var key = keys[index];
			            var values = optionData[key];
			            for (var i = 0; i < values.length; i++) {
			                generateCombinations(index + 1, current.concat("[" + key + "] " + values[i]));
			            }
			        }

			        generateCombinations(0, []);

			        optionsHtml += '</select>';
			        optionsHtml += '</td>'

			        $("#product-option").html(optionsHtml);
			    },
			    error: function () {
			        alert("상품 옵션을 불러오는 중 오류가 발생했습니다.");
			    }
			});
		}
		
		const selectProductQnAList = () => {
			
			var param = {
					productId : productId
			};
			
			$.ajax({
				url: "/selectProductQnAList.do"
				, type: "post"
				, data: param
				, dataType: "json"
				, success: function(res){
					console.log(res.qnaList);
					
					var list = res.qnaList;
					
					var qnaListHTML = '<td colspan="4" style="text-align: center;">상품 문의 목록이 없습니다.</td>'
					
					if(list.length != undefined && list.length > 0){
						for(var i=0; i < list.length; i++){
							qnaListHTML =
								'<tr>' +
									'<td>'+ (i + 1) +'</td>' +
									'<td id="'+ list[i].PRODUCT_QNA_ID +'-title"><p style="cursor: pointer;">'+ list[i].QNA_TITLE +'</p></td>' +
									'<td id="'+ list[i].PRODUCT_QNA_ID +'-writer">'+ list[i].MEMBER_ID +'</td>' +
									'<td id="'+ list[i].PRODUCT_QNA_ID +'-inputDt">'+ list[i].INPUT_DT +'</td>'
						}
					}
					$('#productQnAList').html(qnaListHTML);
				}
				, error: function(){
					
				}
			});
		}
		
		// 수량 버튼
    const countDown = () => {
        var quantity = $("#quantity").val();

        $("#quantity").val(quantity - 1);

        if (quantity <= 1){
            $("#quantity").val(1);
        }

        // document.getElementById("quantity").value = quantity - 1;
        
        updateCnt();
    }

    const countUp = () => {
        var quantity = Number( $("#quantity").val() );

        $("#quantity").val(quantity + 1);
        
        updateCnt();
    }
    const updateCnt = () => {
        var quantity = Number( $("#quantity").val() );
        
        if (quantity <= 1){
            $("#quantity").val(1);
        }
    }
    
    const selectOption = () => {
    	var selected = $("#options-select").val();
    	
    	console.log(selected);
    }
    
    const pushCart = () => {
    	
    	var option = $("#options-select").val();
    	
    	if( $("#saled-price").text() != null && $("#saled-price").text() != '' ){
    		var price =  Number( $("#saled-price").text() );
    	} else {
    		var price =  Number( $("#product-price").text() );
    	}
    	
    	var quantity = Number( $("#quantity").val() );
    	var subTotal = price * quantity;
    	
    	var param = {
    			memberId : memberId
    			, cartId: cartId
    			, productId : productId
    			, option : option
    			, price : price
    			, quantity : quantity
    			, subTotal : subTotal
    	};
    	
    	if(option == "non-select"){
    		alert("옵션을 선택해주세요.");
    	} else {
    		$.ajax({
    			url: "/insertCartItem.do"
    			, type: "post"
    			, data: param
    			, dataType: "json"
    			, success: function(res){
    				var result = res.insertResult;
    				if(result == 1){
    				confirm("장바구니에 상품이 담겼습니다. 장바구니로 이동하겠습니까?") ? null : null;
    				} else if(result == 2){
    					confirm("이미 장바구니에 담긴 상품입니다. 장바구니로 이동하겠습니까?") ? null : null;
    				}
    			}
    			, error: function(){
    				
    			}
    		});
    	}
    }
	</script>
		
	<script>
		const formModalShow = () => {
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
	            <h1 id="product-name"></h3>
	          </div>
	          <table>
	            <tbody>
	              <tr>
	                <td>소비자가</td>
	                <td id="product-price"></td>
	              </tr>
	              <tr>
	                <td>판매가</td>
	                <td id="saled-price"></td>
	              </tr>
	              <tr>
	                <td>상품코드</td>
	                <td id="product-code"></td>
	              </tr>
	              <tr rowspan="3">
	                <td>상품설명</td>
	                <td id="product-description"></td>
	              </tr>
	              <tr>
	              	<td>무게</td>
	              	<td id="product-weight"></td>
	              </tr>
	              <tr id="product-option">
	                
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
<!-- 샘플 리스트 start  -->
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
<!-- 샘플 리스트 end  -->
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
						    
						  </tbody>
						</table>
					</div>
				</div>
    	</div>
    </div>
</body>
</html>