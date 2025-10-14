$(function(){
  loadAllData();
  
});

// 비동기 처리
function loadAllData(){
  $.when(
      loadProductDetail(), 
      loadReviewList(1, byReview, byInputDT),
      loadQnAList()
  ).done(function(result1, result2, result3) {
      console.log('모든 데이터 로드 완료');
  }).fail(function(error) {
      console.log('데이터 로드 실패:', error);
      alert('페이지를 불러오는데 실패했습니다.');
  });
}

// 상품 조회 시 로컬스토리지에 저장 (최근 본 상품 표시를 위함)
function addRecentProduct(productId, productName, productImage, price) {
    var recentProducts = JSON.parse(localStorage.getItem('recentProducts')) || [];
    
    // 중복 제거 (같은 상품이면 맨 앞으로)
    recentProducts = recentProducts.filter(item => item.productId !== productId);
    
    // 맨 앞에 추가
    recentProducts.unshift({
        productId: productId,
        productName: productName,
        productImage: productImage,
        price: price,
        viewedAt: new Date().toISOString()
    });
    
    // 최대 10개만 유지
    if(recentProducts.length > 10) {
        recentProducts = recentProducts.slice(0, 10);
    }
    
    localStorage.setItem('recentProducts', JSON.stringify(recentProducts));
}