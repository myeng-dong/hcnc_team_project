<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>장바구니</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javaScript" language="javascript" defer="defer">
    
    <script>
        $(function(){
        	selectCartListByUser();
        })

		function selectCartListByUser(){
        	// 카트리스트 조회인데 회원 타겟이 필요해. 지금은 회원이 없는상태.
        	var memberId = "kkk";
        	
        	var param = {
        			memberId : memberId
        	};
        	
        	$.ajax({
        		url : "/selectCartListByUser.do"
        		, type : "post"
        		, data : param
        		, dataType : "json"
        		, success : function(res){
					
        		}
        		, error : function(err){
        			
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
        <div>
            <h3 style="text-align: center;">[ C A R T ]</h3>
            <!-- <span>장바구니에 담긴 상품은 7일 동안 보관됩니다.</span> -->
            <hr>
        </div>
        
		<!-- 선택 체크박스 -->
        <div>
            <div>
                <label style="display:flex; align-items:center; gap:8px;">
                    <input type="checkbox" id="checkAll"><span>전체 선택</span>
                </label>
            </div>
            <div>
                <button>선택 삭제</button>
                <button>선택 위시리스트로</button>
            </div>
        </div>

        <!-- 장바구니 상품 테이블 -->
        <div class="product_table">
            <table style="width: 100%">
                <thead>
                    <tr>
                        <th style="width:10%;">이미지</th>
                        <th style="width:30%;">상품정보</th>
                        <th style="width:10%;">판매가</th>
                        <th style="width:10%;">수량</th>
                        <th style="width:10%;">배송구분</th>
                        <th style="width:15%;">배송비</th>
                        <th style="width:10%;">합계</th>
                        <th style="width:5%;">선택</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="sample.jpg" width="60"></td>
                        <td>
                          	  공부해서 서울대가자 연필심<br>
                            <span>[옵션 : 블랙]</span>
                        </td>
                        <td>₩3,500</td>
                        <td>
                            <input type="number" value="2">
                        </td>
                        <td>기본배송</td>
                        <td>
                            ₩2,900<br>
                            <small>조건</small>
                        </td>
                        <td>₩7,000</td>
                        <td>
                            <button>삭제</button>
                        </td>
                    </tr>

                    <!-- 합계 -->
                    <tr>
                        <td colspan="9" style="text-align:right;">
                      	      상품구매금액 7,000 + 배송비 2,900 = 합계 : ₩9,900
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 선택상품삭제버튼, 장바구니 비우기 버튼 -->
        <div>
            <button type="button">선택상품삭제</button>
            <button type="button">장바구니비우기</button>
        </div>
    </div>

        <!-- 결제 예정 금액 -->
        <!-- 합계 영역 -->
        <table class="price_table">
            <thead>
                <tr>
                    <th>총 상품금액</th>
                    <th>총 배송비</th>
                    <th>결제예정금액</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>₩7,000</td>
                    <td>+ ₩2,900</td>
                    <td>= ₩9,900</td>
                </tr>
            </tbody>
        </table>

        <!-- 버튼 영역 -->
        <div>
            <div class="left-btns">
                <button type="button">전체상품주문</button>
                <button type="button">선택상품주문</button>
            </div>
            <div>
                <button type="button">쇼핑계속하기</button>
            </div>
    </div>
</body>
</html>