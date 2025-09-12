<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>장바구니</title>
  <link type="text/css" rel="stylesheet" href="<c:url value='/css/cart/cart.css'/>" />
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script type="text/javaScript" language="javascript" defer="defer"></script>
    <style>
        /* 레이아웃 */
    .container{max-width:1200px;margin:0 auto;padding:16px;}
    .breadcrumb{display:flex;justify-content:flex-end;gap:6px;font-size:14px;margin-bottom:12px;}

    /* 상단 체크/버튼 줄 */
    .top-check{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:16px 0}

    /* 좌측 테이블 / 우측 합계 배치 */
    @media (min-width: 992px){
    .cart-grid{float:left;width:calc(100% - 360px);margin-right:24px;}
    .summary{float:right;width:336px}
    }

    /* 테이블 */
    .cart-table{width:100%;border-collapse:collapse;table-layout:fixed;}
    .cart-table thead th{background:#f8f9fa;font-weight:600;border-bottom:1px solid #e9ecef}
    .cart-table th,.cart-table td{padding:14px 10px;border-bottom:1px solid #f1f3f5;vertical-align:middle}

    /* 열 너비 & 정렬 */
    .col-check{width:48px;text-align:center}
    .col-img{width:96px;text-align:center}
    .col-name{text-align:left}
    .col-price{width:120px;text-align:right}
    .col-qty{width:160px;text-align:center}
    .col-total{width:140px;text-align:right}
    .col-point{width:120px;text-align:right}
    .col-actions{width:130px;text-align:center}

    /* 상품 이미지 */
    .col-img img{display:block;margin:0 auto;max-width:72px;max-height:72px;object-fit:cover;border-radius:6px}

    /* 수량 박스 */
    .qty-box{display:inline-flex;align-items:center;gap:8px}
    .btn-qty{width:32px;height:32px;border:1px solid #ced4da;background:#f8f9fa;border-radius:6px;font-weight:700;cursor:pointer}
    .btn-qty:hover{background:#eef1f4}

    /* number 입력 정렬 & 스피너 제거 */
    .col-qty input[type=number]{width:56px;height:32px;border:1px solid #ced4da;border-radius:6px;text-align:center}
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
    input[type=number]{-moz-appearance:textfield}

    /* 우측 합계 카드 */
    .summary{border:1px solid #e9ecef;border-radius:12px;padding:16px;background:#fafafa}
    .summary h4{margin:0 0 12px 0}
    .summary .sum-row,.summary .sum-total{display:flex;justify-content:space-between;align-items:center;padding:6px 0}
    .summary .sum-total{font-weight:700;border-top:1px dashed #e9ecef;margin-top:8px;padding-top:12px}
    .price{font-weight:700}

    /* 하단 툴바 */
    .toolbar{display:flex;align-items:center;gap:10px;margin-top:16px}

    </style>
    <script>
    	// 페이지 로드
    	$(function(){
    		selectCartList();
    	})
    
    	// 장바구니 리스트 조회
    	const selectCartList = () => {
    		var memberId = "kkk";
    		var param = {
    				memberId : memberId
    		};
    		
    		$.ajax({
    			url: "/selectCartListByUser.do"
    			, type: "post"
    			, data: param
    			, dataType: "json"
    			, success: function(res){
    				
    			}
    			, error: function(err){
    				alert("장바구니 리스트 조회 통신 실패");
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
        }

        const countUp = () => {
            var quantity = Number( $("#quantity").val() );

            $("#quantity").val(quantity + 1);
        }

        // 상품 수량 디비 저장
        const updateCnt = () => {
            var quantity = Number( $("#quantity").val() );

            if (quantity <= 1){
                $("#quantity").val(1);
            }

            var param = {
                quantity : quantity
            };

            $.ajax({
				url: "/updateQuantity.do"
				, type: "post"
				, data: param
				, dataType: "json"
				, success: function(res){
					
				}
				, error: function(err){
					alert("상품 수량 디비 저장 통신 실패");
				}
            });

        }
    </script>
</head>

<body>
  <div class="container">
    <div class="breadcrumb">
      <a href="/main.do">홈</a>
      <span>›</span>
      <strong>장바구니</strong>
    </div>
    <h3 style="text-align: center;">[ C A R T ]</h3>

    <!-- 상단 선택 체크박스 -->
    <div class="top-check">
      <label class="chk">
      </label>
      <div>
        <button class="btn-outline" id="btnDelSelected">선택 삭제</button>
        <button class="btn-outline" id="btnWishSelected">선택 위시리스트</button>
      </div>
    </div>

    <!-- 장바구니 상품 테이블 -->
    <div class="cart-grid">
      <div>
        <table class="cart-table">
          <thead>
            <tr>
              <th class="col-check"><input type="checkbox" id="headCheck"></th>
              <th class="col-img" colspan="2">상품명</th>
              <th class="col-price">가격</th>
              <th class="col-qty">수량</th>
              <th class="col-total">총금액</th>
              <th class="col-point">적립금</th>
              <th class="col-actions">삭제/관심</th>
            </tr>
          </thead>
          <tbody id="cart-body">
            <tr>
              <td class="col-check"><input type="checkbox"></td>
              <td class="col-img"><img src="sample.jpg" width="50"></td>
              <td class="col-name">샘플상품</td>
              <td class="col-price">10,000원</td>
              <td class="col-qty">
                <div class="qty-box">
                  <button type="button" class="btn-qty" onclick="countDown()">-</button>
                  <input id="quantity" type="number" value="1" min="1" onchange="updateCnt()">
                  <button type="button" class="btn-qty" onclick="countUp()">+</button>
                </div>
              </td>
              <td class="col-total">50,000원</td>
              <td class="col-point">500P</td>
              <td class="col-actions"><button>삭제</button> <button>관심</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="toolbar">
        <button class="btn" id="btnContinue">계속 쇼핑하기</button>
        <button class="btn-outline" id="btnClear">장바구니 비우기</button>
        <div style="flex:1"></div>
        <button class="btn-outline" id="btnOrderSelected">선택상품 주문하기</button>
      </div>
    </div>

    <aside class="summary">
      <h4>결제 예정 금액</h4>
      <div class="sum-row"><span>주문금액</span><span id="sum-products" class="price">0원</span></div>
      <div class="sum-row small"><span>일반배송비</span><span id="sum-ship-normal">0원</span></div>
      <div class="sum-row small"><span>개별배송비</span><span id="sum-ship-indiv">0원</span></div>
      <div class="sum-total"><span>결제금액</span><span id="sum-final" class="price">0원</span></div>
      <button class="order-btn" id="btnOrderAll">전체상품 주문하기</button>
    </aside>
  </div>
</body>

</html>