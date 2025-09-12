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
	<!-- j쿼리를 실행하기 위해 스크립트 선언을 해줘야한다. -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	
	<script type="text/javaScript" language="javascript" defer="defer">
		$(function(){
			selectProduct();
		});
		
		const selectProduct = () => {
			
			var productId = 1;
			
			var param = {
					productId : productId
			};
			
			$.ajax({
				url : "/selectProductByUser.do"
				, type : "post"
				, data : param
				, dataType : "json"
				, success : function(res){
					console.log(res.product);
					
					var product = res.product;
					
					$("#product-name").html(product.PRODUCT_NAME);
					$("#product-price").html(product.PRODUCT_PRICE);
					$("#saled-price").html(product.SAILED_PRICE);
					$("#product-code").html(product.PRODUCT_CODE);
					$("#product-description").html(product.PRODUCT_CONTENT);
					$("#product-option").html();
				}
				, error : function(){
					
				}
			});		
		}
		
		const changeQuantity = (num) => {
			var quantity = $("#product-quantity").val();
			
			$("#product-quantity").val(quantity + num);
		}
	</script>
</head>

<body>
    <div class="container">
      <div class="product-container" style="display: flex; gap: 20px;">
        <div>
          <img id="product-image" src="https://placehold.co/400x400" alt="Product Image">
        </div>
        <div class="product-info">
          <div class="product-title">
            <h3 id="product-name"></h3>
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
                <td>옵션</td>
                <td id="product-option"></td>
              </tr>
              <tr>
                <td>수량</td>
                <td id="quantity">
                 
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button id="add-to-cart" onclick="aaaa">장바구니</button>
            <button id="buy-now">바로구매</button>
          </div>
        </div>
      </div>
    </div>
</body>
</html>