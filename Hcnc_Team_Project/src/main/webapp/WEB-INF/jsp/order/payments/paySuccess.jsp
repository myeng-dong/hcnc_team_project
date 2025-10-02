<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
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
    			var resultNum = res.result;
    			
    			if(resultNum === 1){
    				sessionStorage.removeItem("orderData");
    				window.location.href="/orderSuccess.do?orderNum=" + orderData.order.orderNumber;
    			} else {
    				window.location.href="/fail.do";
    			}
    		  }
    		  , error: function(){}
    	  });
      });
    </script>
    
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
        }
        
        .loading-container {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .dots span {
            animation: blink 1.4s infinite;
            font-size: 24px;
            color: #3498db;
        }
        
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        .dots span:nth-child(4) { animation-delay: 0.6s; }
        
        @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
        
        h2 {
            color: #333;
            margin: 10px 0;
        }
        
        p {
            color: #666;
            margin: 10px 0;
        }
    </style>
  </head>
  <body>
    <div class="loading-container">
        <div class="spinner"></div>
        <h2>결제 처리 중입니다</h2>
        <p>잠시만 기다려 주세요...</p>
        <div class="dots">
            <span>.</span><span>.</span><span>.</span><span>.</span>
        </div>
    </div>
   
    
  </body>
</html>
