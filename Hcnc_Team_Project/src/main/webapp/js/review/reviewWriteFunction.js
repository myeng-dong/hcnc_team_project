var selectedFiles = []; // 실제 업로드할 파일 배열
	
// 파일 변경
function fileChange(e) {
  const files = Array.from(e.target.files);
  const allowedExtensions = ['jpg', 'jpeg', 'png'];
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const MAX_FILES = 7;

  $("#review-write-photo-label").text('사진 첨부 (최대 ' + MAX_FILES + '장)');
  
  // 중복 체크를 위한 필터링
  const newFiles = [];
  const duplicateFiles = [];
  
  for (var file of files) {
    const isDuplicate = selectedFiles.some(existingFile => 
      existingFile.name === file.name && 
      existingFile.size === file.size &&
      existingFile.lastModified === file.lastModified
    );
    
    if (isDuplicate) {
      duplicateFiles.push(file.name);
    } else {
      newFiles.push(file);
    }
  }
  
  // 기존 파일 + 새 파일 합쳐서 체크
  const totalFiles = selectedFiles.concat(newFiles);
  
  // 파일 개수 체크
  if (totalFiles.length > MAX_FILES) {
    alert('사진은 최대 ' + MAX_FILES + '개까지만 업로드 가능합니다. (현재: ' + selectedFiles.length + '개)');
    e.target.value = '';
    return;
  }
  
  // 각 파일 검증
  for (var file of newFiles) {
    const fileName = file.name.toLowerCase();
    const fileExtension = fileName.split('.').pop();
    
    if (!allowedExtensions.includes(fileExtension)) {
      alert('JPG, JPEG, PNG 파일만 업로드 가능합니다.');
      e.target.value = '';
      return;
    }
    
    if (file.size > MAX_FILE_SIZE) {
      alert(file.name + '의 용량이 너무 큽니다. (최대 5MB)');
      e.target.value = '';
      return;
    }
  }
  
  // 검증 통과하면 배열에 추가
  selectedFiles = totalFiles;
  e.target.value = '';
  
  // 미리보기 생성
  showReviewWritePreview();
}

// 리뷰 작성 미리보기 표시
function showReviewWritePreview() {
  const previewContainer = document.getElementById('review-write-preview-container');
  previewContainer.innerHTML = '';
  
  selectedFiles.forEach((file, index) => {
    const reader = new FileReader();
    
    // 순서대로 div 먼저 생성
    const previewItem = document.createElement('div');
    previewItem.style.position = 'relative';
    previewItem.style.display = 'inline-block';
    previewContainer.appendChild(previewItem);
    
    reader.onload = function(e) {
      // 이미지
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '50px';
      img.style.height = '50px';
      img.style.objectFit = 'cover';
      img.style.border = '1px solid #ddd';
      img.style.borderRadius = '4px';
      
      // 삭제 버튼
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '×';
      deleteBtn.style.position = 'absolute';
      deleteBtn.style.top = '-5px';
      deleteBtn.style.right = '-5px';
      deleteBtn.style.width = '20px';
      deleteBtn.style.height = '20px';
      deleteBtn.style.borderRadius = '50%';
      deleteBtn.style.border = 'none';
      deleteBtn.style.backgroundColor = '#ff4444';
      deleteBtn.style.color = 'white';
      deleteBtn.style.cursor = 'pointer';
      deleteBtn.style.fontSize = '14px';
      deleteBtn.style.lineHeight = '1';
      
      deleteBtn.onclick = function() {
        selectedFiles.splice(index, 1);
        showReviewWritePreview();
      };
      
      previewItem.appendChild(img);
      previewItem.appendChild(deleteBtn);
    };
    
    reader.readAsDataURL(file);
  });
  
  console.log('현재 선택된 파일: ' + selectedFiles.length + '개');
}

// 리뷰 제출
function submitReview() {
  var orderId = $("#review-product-data").data('orderId-value');
  var productId = $("#review-product-data").data('productId-value');

  var title = document.getElementById('review-write-title').value.trim();
  var content = document.getElementById('review-write-content').value.trim();
  var rating = document.getElementById('review-rating').value;
  
  // 유효성 검사
  if (!title) {
    alert('리뷰 제목을 입력해주세요.');
    document.getElementById('review-write-title').focus();
    return;
  }
  
  if (!content) {
    alert('리뷰 내용을 입력해주세요.');
    document.getElementById('review-write-content').focus();
    return;
  }
  
  if (!rating || parseFloat(rating) < 1.0) {
    alert('별점을 선택해주세요.');
    return;
  }
  
  // FormData 생성
  const formData = new FormData();
  formData.append('orderId', orderId);
  formData.append('productId', productId);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('rating', rating);
  
  selectedFiles.forEach((file) => {
    formData.append('photos', file);
  });
  
  // 서버로 전송
  $.ajax({
    url: 'reviewCreate.do',
    type: 'POST',
    data: formData,
    processData: false,  // jQuery가 데이터를 처리하지 않도록
    contentType: false,  // jQuery가 contentType을 설정하지 않도록 (multipart/form-data 자동 설정)
    success: function(res) {
      var result = res.result;
      if(result < 1) {
      	alert('리뷰 등록에 실패했습니다. 다시 시도해주세요.');
      	return;
      }
      alert('리뷰가 등록되었습니다!');
      location.reload();
      resetReviewWriteForm();
    },
    error: function(error) {
      console.error('리뷰 등록 실패:', error);
      alert('리뷰 등록 중 오류가 발생했습니다.');
    }
  });
}