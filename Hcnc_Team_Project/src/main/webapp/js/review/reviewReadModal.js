// ============================================
// 리뷰 조회 모달
// ============================================

var reviewReadData = null; // 현재 조회 중인 리뷰 데이터
var reviewReadFiles = []; // 수정 모드에서 업로드할 파일
var originalReviewImages = []; // 기존 리뷰 이미지 목록
var deletedImageIds = []; // 삭제할 이미지 ID 목록

/**
 * 리뷰 조회 모달 열기
 */
function openReviewReadModal(orderId, productId) {
  resetReviewReadModal();
  
  $.ajax({
    url: "/getReviewForRead.do",
    type: "POST",
    data: { orderId: orderId, productId: productId },
    dataType: "json",
    success: function(res) {
      if (res.reviewInfo) {
        reviewReadData = res.reviewInfo;
        renderReviewReadView();
        showReviewReadModal();
      } else {
        alert('리뷰 정보를 불러올 수 없습니다.');
      }
    },
    error: function(error) {
      console.error('리뷰 조회 실패:', error);
      alert('리뷰 정보를 불러오는 중 오류가 발생했습니다.');
    }
  });
}

/**
 * 리뷰 데이터를 화면에 렌더링 (읽기 모드)
 */
function renderReviewReadView() {
  const review = reviewReadData;
  
  // 상품 정보
  $('#review-product-image-read').attr('src', review.IMAGE_URL || 'https://placehold.co/80x80');
  $('#review-product-name-read').text(review.PRODUCT_NAME || '상품명 없음');
  $('#review-product-orderDT-read').text('주문일자: ' + (review.ORDER_DT || ''));
  
  // 리뷰 정보
  $('#review-read-title').val(review.REVIEW_TITLE || '');
  $('#review-read-content').val(review.REVIEW_CONTENT || '');
  $('#review-read-rating').val(review.STAR_POINT || 1);
  
  // 별점 표시 (읽기 전용)
  renderReadOnlyStars(review.STAR_POINT || 1);
  
  // 리뷰 이미지
  originalReviewImages = review.reviewImgs || [];
  renderReviewReadImages();
  
  // 읽기 모드로 설정
  setReadMode();
}

/**
 * 읽기 전용 별점 표시
 */
function renderReadOnlyStars(rating) {
  $('.star-readOnly').each(function(index) {
    if (index < rating) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}


/**
 * 리뷰 이미지 렌더링
 */
function renderReviewReadImages() {
  const container = $('#review-read-preview-container');
  container.empty();
  
  // 기존 이미지 표시
  originalReviewImages.forEach((img, index) => {
    // 삭제 표시된 이미지는 건너뛰기
    if (deletedImageIds.includes(img.REVIEW_IMG_ID)) {
      return;
    }
    
    const imageItem = createImagePreviewItem(img.IMG_PATH, 'original', img.REVIEW_IMG_ID);
    container.append(imageItem);
  });
  
  // 새로 추가된 파일 표시 (수정 모드일 때)
  reviewReadFiles.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageItem = createImagePreviewItem(e.target.result, 'new', index);
      container.append(imageItem);
    };
    reader.readAsDataURL(file);
  });
}

/**
 * 이미지 미리보기 아이템 생성
 */
function createImagePreviewItem(imageSrc, type, id) {
  const $item = $('<div>').css({
    position: 'relative',
    display: 'inline-block',
    marginRight: '10px'
  });
  
  const $img = $('<img>').attr('src', imageSrc).css({
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    border: '1px solid #ddd',
    borderRadius: '4px'
  });
  
  // 수정 모드일 때만 삭제 버튼 생성 및 표시
  const $deleteBtn = $('<button>').html('x')
    .addClass('review-img-delete-btn')
    .css({
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: '#ff4444',
      color: 'white',
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: '1',
      display: isEditMode() ? 'block' : 'none'
    })
    .on('click', function(e) {
      e.preventDefault(); // 기본 동작 방지
      e.stopPropagation(); // 이벤트 버블링 방지
      
      // 수정 모드일 때만 동작
      if (!isEditMode()) {
        return;
      }
      
      if (type === 'original') {
        // 기존 이미지 삭제 표시 - 해당 이미지만 삭제
        if (!deletedImageIds.includes(id)) {
          deletedImageIds.push(id);
          originalReviewImages = originalReviewImages.filter(img => img.REVIEW_IMG_ID !== id);
        }
      } else {
        // 새 파일 삭제 - 해당 파일만 배열에서 제거
        reviewReadFiles = reviewReadFiles.filter((file, index) => index !== id);
      }


      
      // 화면 다시 렌더링
      renderReviewReadImages();
    });
  
  $item.append($img);
  $item.append($deleteBtn);
  
  return $item;
}

/**
 * 리뷰 이미지 파일 선택 (수정 모드)
 */
function handleReviewReadFileChange(e) {
  const files = Array.from(e.target.files);
  const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const MAX_TOTAL_FILES = 7;
  
  // 현재 이미지 개수 계산 (기존 - 삭제 + 새로운)
  const currentCount = originalReviewImages.length - deletedImageIds.length + reviewReadFiles.length;
  
  if (currentCount + files.length > MAX_TOTAL_FILES) {
    alert('사진은 최대 ' + MAX_TOTAL_FILES + '개까지만 업로드 가능합니다.');
    e.target.value = '';
    return;
  }

  // 기존 파일명 목록 수집 (중복 체크용)
  const existingFileNames = [];
  
  // 서버에 있는 기존 이미지의 원본 파일명 수집
  originalReviewImages.forEach((img) => {
    // 삭제되지 않은 이미지만 체크
    if (!deletedImageIds.includes(String(img.REVIEW_IMG_ID))) {
      
      // 원본 파일명이 있으면 그것을 사용, 없으면 경로에서 추출한 파일명 사용
      const originalFileName = img.IMG_ORIGIN_NAME
      existingFileNames.push(originalFileName.toLowerCase());
    }
  });

  const validFiles = []; // 검증 통과한 파일만 담을 배열
  const duplicateFiles = []; // 중복된 파일명 목록
  
  // 파일 검증
  for (var file of files) {
    const fileName = file.name.toLowerCase();
    const fileExtension = fileName.split('.').pop();
    
    // 확장자 검증
    if (!allowedExtensions.includes(fileExtension)) {
      alert(file.name + ' JPG, JPEG, PNG 파일만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }
    
    // 파일 크기 검증
    if (file.size > MAX_FILE_SIZE) {
      alert(file.name + ' 파일 용량이 너무 큽니다. (최대 5MB)');
      e.target.value = '';
      return;
    }
    
    // 중복 파일명 체크
    if (existingFileNames.includes(fileName)) {
      duplicateFiles.push(file.name);
    } else {
      validFiles.push(file);
      // 다음 파일 검증을 위해 현재 파일명도 추가
      existingFileNames.push(fileName);
    }
  }
  
  if (duplicateFiles.length > 0) {
    alert("이미 업로드 된 파일입니다.");
  }

  // 배열의 맨 뒤에 추가
  if (validFiles.length > 0) {
    // concat으로 기존 배열 뒤에 새 파일 추가
    reviewReadFiles = reviewReadFiles.concat(validFiles);
  }
  
  // 파일 input 초기화 (같은 파일을 다시 선택할 수 있도록)
  e.target.value = '';
  
  renderReviewReadImages();
}

// 모달 열기/닫기
function showReviewReadModal() {
  $('#review-read-modal-overlay').addClass('active');
  $('#review-read-modal').addClass('active');
  $('body').css('overflow', 'hidden');
}

function closeReviewReadModal() {
  // 수정 모드일 때 확인
  if (isEditMode()) {
    if (!confirm('수정 중인 내용이 있습니다. 정말 닫으시겠습니까?')) {
      return;
    }
  }
  
  $('#review-read-modal-overlay').removeClass('active');
  $('#review-read-modal').removeClass('active');
  $('body').css('overflow', '');
  
  resetReviewReadModal();
}

function resetReviewReadModal() {
  reviewReadData = null;
  reviewReadFiles = [];
  originalReviewImages = [];
  deletedImageIds = [];
  
  $('#review-read-title').val('');
  $('#review-read-content').val('');
  $('#review-read-rating').val('1');
  $('#review-read-preview-container').empty();
  $('#review-read-photo-upload').val('');
  
  setReadMode();
}

// 읽기/수정 모드 전환
function setReadMode() {
  // 필드 비활성화
  $('#review-read-title').attr('readonly', true);
  $('#review-read-content').attr('readonly', true);
  
  // 별점 - 읽기 전용으로 표시
  $('#review-read-star-rating').show();
  $('#review-editable-star-rating').hide();
  
  // 이미지 업로드 버튼 숨김
  $('#review-read-photo-upload-label').hide();
  
  // 버튼 상태
  $('.review-read-btn-edit').show();
  $('.review-read-btn-submit').hide();
  $('.review-read-btn-delete').hide();
  $('.review-read-btn-cancel').hide();
  
  // 별점 편집 불가
  $('.star-read').removeClass('editable');
  
  // 이미지 삭제 버튼 숨김 - 추가
  $('.review-img-delete-btn').hide();
}

function setEditMode() {
  // 필드 활성화
  $('#review-read-title').removeAttr('readonly');
  $('#review-read-content').removeAttr('readonly');
  
  // 별점 - 수정 가능하도록 표시
  $('#review-read-star-rating').hide();
  $('#review-editable-star-rating').show();
  
  // 현재 별점 설정
  const currentRating = parseInt($('#review-read-rating').val());
  setReadRating(currentRating);
  
  // 이미지 업로드 버튼 표시
  $('#review-read-photo-upload-label').show();
  
  // 버튼 상태
  $('.review-read-btn-edit').hide();
  $('.review-read-btn-submit').show();
  $('.review-read-btn-delete').show();
  $('.review-read-btn-cancel').show();
  
  // 별점 편집 가능
  $('.star-read').addClass('editable');
  
  // 이미지 삭제 버튼 표시 - 추가
  $('.review-img-delete-btn').show();
}

function isEditMode() {
  return $('.review-read-btn-submit').is(':visible');
}

/**
 * 수정 모드 활성화
 */
function enableReviewEditing() {
  setEditMode();
}

/**
 * 수정 취소
 */
function cancelReviewEditing() {
  if (confirm('수정을 취소하시겠습니까? 변경사항이 저장되지 않습니다.')) {
    // 데이터 초기화
    reviewReadFiles = [];
    deletedImageIds = [];
    
    // 화면 다시 렌더링
    renderReviewReadView();
  }
}

// 별점 관리 (수정 모드)
var currentReadRating = 1;

function setReadRating(rating) {
  currentReadRating = rating;
  $('#review-read-rating').val(rating);
  updateReadStars();
}

function updateReadStars() {
  $('.star-read').each(function(index) {
    if (index < currentReadRating) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
}

// 리뷰 수정/삭제
function updateReview() {
  const title = $('#review-read-title').val().trim();
  const content = $('#review-read-content').val().trim();
  const rating = $('#review-read-rating').val();
  
  // 유효성 검사
  if (!title) {
    alert('리뷰 제목을 입력해주세요.');
    $('#review-read-title').focus();
    return;
  }
  
  if (!content) {
    alert('리뷰 내용을 입력해주세요.');
    $('#review-read-content').focus();
    return;
  }
  
  if (!rating || parseFloat(rating) < 1.0) {
    alert('별점을 선택해주세요.');
    return;
  }

  if (content.length > 500) {
    alert('리뷰 내용은 최대 500자까지 입력 가능합니다.');
    $('#review-read-content').focus();
    return;
  }
  
  // FormData 생성
  const formData = new FormData();
  formData.append('reviewId', reviewReadData.REVIEW_ID);
  formData.append('orderId', reviewReadData.ORDER_ID);
  formData.append('productId', reviewReadData.PRODUCT_ID);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);
  
  // 삭제할 이미지 ID 목록
  deletedImageIds.forEach(id => {
    formData.append('deletedImageIds', id);
  });
  
  // 새로 추가할 이미지 파일
  reviewReadFiles.forEach((file) => {
    formData.append('photos', file);
  });
  
  // 서버로 전송
  $.ajax({
    url: '/reviewUpdate.do',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    cache: false,     
    success: function(res) {
      if (res.result > 0) {
        alert('리뷰가 수정되었습니다!');
        location.reload();
      } else {
        alert('리뷰 수정에 실패했습니다. 다시 시도해주세요.');
      }
    },
    error: function(error) {
      console.error('리뷰 수정 실패:', error);
      alert('리뷰 수정 중 오류가 발생했습니다.');
    }
  });
}

/**
 * 리뷰 삭제
 */
function deleteReview() {
  if (!confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
    return;
  }
  
  $.ajax({
    url: '/reviewDelete.do',
    type: 'POST',
    data: {
      reviewId: reviewReadData.REVIEW_ID,
      orderId: reviewReadData.ORDER_ID,
      productId: reviewReadData.PRODUCT_ID
    },
    dataType: 'json',
    success: function(res) {
      if (res.result > 0) {
        alert('리뷰가 삭제되었습니다.');
        location.reload();
      } else {
        alert('리뷰 삭제에 실패했습니다.');
      }
    },
    error: function(error) {
      console.error('리뷰 삭제 실패:', error);
      alert('리뷰 삭제 중 오류가 발생했습니다.');
    }
  });
}