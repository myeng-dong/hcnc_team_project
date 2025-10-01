<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <h2>결제 성공</h2>
    <p id="paymentKey"></p>
    <p id="orderId"></p>
    <p id="amount"></p>


    <script>
	  // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
      // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
      const urlParams = new URLSearchParams(window.location.search);
      const paymentKey = urlParams.get("paymentKey");
      const orderId = urlParams.get("orderId");
      const amount = urlParams.get("amount");
      
      const orderData = JSON.parse(sessionStorage.getItem("orderData"));
      
      var data = {
		paymentKey: paymentKey,
		orderId: orderId,
		amount: amount,
		itemsJson: JSON.stringify(orderData.items),
		orderJson: JSON.stringify(orderData.order)
      };
      
      console.log(data);
      
     $(function(){
    	  $.ajax({
    		  url:"/orderDataSave.do"
    		  , type: "post"
    		  , data: data
    		  , dataType: "json"
    		  , success: function(res){
    			alert(res.result);

    			// 세션에 해당 주문 번호 결제 성공 표시해두기
    		  	sessionStorage.setItem("orderSuccess", JSON.stringify(orderData.order.orderNumber));  
    		  }
    		  , error: function(){}
    	  });
      });
    
      

    /*   
      async function confirm() {
    	const formData = new FormData();
    	formData.append('orderData', JSON.stringify(orderData));
        const requestData = {
         	orderData: orderData
        };

        const response = await fetch("/orderDataSave.do", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData)
        });

        const json = await response.json();

        if (!response.ok) {
          // 결제 실패 비즈니스 로직을 구현하세요.
          console.log(json);
          window.location.href = `/fail.do?message=${json.message}&code=${json.code}`;
        }

        // 결제 성공 비즈니스 로직을 구현하세요.

        console.log(json);
      }
      
      confirm(); */

      const paymentKeyElement = document.getElementById("paymentKey");
      const orderIdElement = document.getElementById("orderId");
      const amountElement = document.getElementById("amount");


      orderIdElement.textContent = "주문번호: " + orderId;
      amountElement.textContent = "결제 금액: " + amount;
      paymentKeyElement.textContent = "paymentKey: " + paymentKey;
    </script>
  </body>
</html>
