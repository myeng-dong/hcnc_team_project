//리뷰 작성 모달 열기
function openReviewWriteModal(orderId, productId) {
  // TODO: orderId(또는 orderNumber) 와 productId 매개변수로 받아서 해당 상품 정보 조회하기.
  $.ajax({
    url: "/getProductInfoForReviewWrite.do",
    type: "post",
    data: { orderId: orderId, productId: productId },
    dataType: "json",
    success: function(res) {
      var product = res.productInfo;

      console.log(product);

      if(product != null) {
        document.getElementById('review-product-image').src = product.IMAGE_URL || 'https://placehold.co/80x80';
        document.getElementById('review-product-name').textContent = product.PRODUCT_NAME || '상품명 없음';
        document.getElementById('review-product-orderDT').textContent = "주문일자: " + product.ORDER_DT || '주문일자 없음';
        $("#review-product-data").data('orderId-value', product.ORDER_ID);
        $("#review-product-data").data('productId-value', product.PRODUCT_ID);
      } else {
        alert('상품 정보를 불러오지 못했습니다.');
      }
    },
    error: function(xhr, status, error) {
      console.error('상품 정보 조회 실패:', error);
      alert('상품 정보를 불러오는 중 오류가 발생했습니다.');
    }
  });
  
  
  setRating(1);
  
  document.getElementById('review-write-modal-overlay').classList.add('active');
  document.getElementById('review-write-modal').classList.add('active');
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

// 리뷰 작성 모달 닫기
function closeReviewWriteModal() {
  // 작성 중인 내용이 있으면 확인
  const title = document.getElementById('review-write-title').value;
  const content = document.getElementById('review-write-content').value;
  
  if (title || content || selectedFiles.length > 0) {
    if (!confirm('작성 중인 내용이 있습니다. 정말 닫으시겠습니까?')) {
      return;
    }
  }
  
  document.getElementById('review-write-modal-overlay').classList.remove('active');
  document.getElementById('review-write-modal').classList.remove('active');
  document.body.style.overflow = ''; // 배경 스크롤 복원
  
  // 입력 필드 초기화
  resetReviewWriteForm();
  
  // 리뷰 작성 폼 초기화
  function resetReviewWriteForm() {
    document.getElementById('review-write-title').value = '';
    document.getElementById('review-write-content').value = '';
    document.getElementById('review-write-preview-container').innerHTML = '';
    selectedFiles = [];
  }
}

var currentRating = 1; // 현재 선택된 별점
// 별점 설정
function setRating(rating) {
  currentRating = rating;
  document.getElementById('review-rating').value = rating + '.0';
  updateStars();
}

// 별 표시 업데이트
function updateStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < currentRating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}