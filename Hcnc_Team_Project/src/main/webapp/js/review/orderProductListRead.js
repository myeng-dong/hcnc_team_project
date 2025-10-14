$(function(){
  $.ajax({
    url: "/orderProductListRead.do",
    type: "post",
    data: {},
    dataType: "json",
    success: function(res){
      var orderProductList = res.orderProductList;
      var userReviewList = res.userReviewList;

      var reviewedSet = new Set();
      if(userReviewList != null && userReviewList.length > 0){
        for(var i=0; i<userReviewList.length; i++) {
          reviewedSet.add(userReviewList[i].ORDER_ID + "_" + userReviewList[i].PRODUCT_ID);
        }
      }

      console.log(orderProductList);
      console.log(userReviewList);
      
      var orderProductHTML = "";
      var uniqueProductIds = {}; // 중복 제거를 위한 객체
      
      for(var i=0; i<orderProductList.length; i++){
        
        var totalAmount = orderProductList[i].TOTAL_AMOUNT;
          
        orderProductHTML += "<div class='order-product-card'>"
        orderProductHTML += "<div class='card-header'>";
        orderProductHTML += "<p>주문번호: "+orderProductList[i].ORDER_NUMBER+"</p>"
        orderProductHTML += "<span>"+orderProductList[i].ORDER_DT+"</span>"
        orderProductHTML += "<span>•</span>"
        orderProductHTML += "<span>"+totalAmount.toLocaleString()+"원</span>"
        orderProductHTML += "</div>";
        
        orderProductHTML += "<div class='order-product-list'>";
        for(var j=0; j<orderProductList[i].orderItems.length; j++) {
          var orderId = orderProductList[i].ORDER_ID;
          var productId = orderProductList[i].orderItems[j].PRODUCT_ID;
          var productPrice = orderProductList[i].orderItems[j].PRICE;

          var uniqueKey = orderId + "_" + productId;
          if(!uniqueProductIds[uniqueKey]) {
            uniqueProductIds[uniqueKey] = true;

            orderProductHTML += "<div class='order-product-item' id='order-product-"+productId+"'>";
            orderProductHTML += "<div class='order-product-img' id='order-product-img-"+productId+"'>";
            if( orderProductList[i].orderItems[j].IMAGE_URL == null || orderProductList[i].orderItems[j].IMAGE_URL == '' ) {
              orderProductList[i].orderItems[j].IMAGE_URL = 'https://placehold.co/50x50';
            }
            orderProductHTML += "<img src='"+orderProductList[i].orderItems[j].IMAGE_URL+"' alt='"+orderProductList[i].orderItems[j].ALT_TEXT+"'>";
            orderProductHTML += "</div>";
            orderProductHTML += "<div class='order-product-info' id='order-product-info-"+productId+"'>";
            orderProductHTML += "<p>"+orderProductList[i].orderItems[j].PRODUCT_NAME+"</p>";
            orderProductHTML += "<span>"+productPrice.toLocaleString()+"원</span>";
            orderProductHTML += "<span>"+orderProductList[i].ORDER_DT+"</span>";
            orderProductHTML += "</div>";
            orderProductHTML += "<div class='order-product-review' id='order-product-review-"+ productId +"'>";
            if(reviewedSet.has(uniqueKey)) {
              orderProductHTML += "<button type='button' onclick='openReviewReadModal("+ orderId +","+ productId +")'>리뷰 보기</button>";
            } else {
              // 리뷰 작성 모달 열기 버튼
              orderProductHTML += "<button type='button' onclick='openReviewWriteModal("+ orderId +","+ productId +")'>리뷰 작성</button>";
            }
            orderProductHTML += "</div>";
            orderProductHTML += "</div>";
            orderProductHTML += "</div>";
          }
        }
        orderProductHTML += "</div>";
      }
      $(".order-product-list").html(orderProductHTML);
    },
    error: function(err){
      console.log(err);
    }
  });
});