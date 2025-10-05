<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/global.css'/>"/>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/layout.css'/>"/>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/common.css'/>"/>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/reset.css'/>"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

<!-- j쿼리를 실행하기 위해 스크립트 선언을 해줘야한다. -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- 리뷰모달 -->
<style>
	/* 상품 정보 영역 */
	.review-product-info {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 15px 20px;
		background-color: #f8f9fa;
		border-bottom: 1px solid #eee;
	}
	
	.review-product-info img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 8px;
		border: 1px solid #ddd;
	}
	
	.review-product-details {
		flex: 1;
	}
	
	.review-product-name {
		font-size: 16px;
		font-weight: 600;
		color: #333;
		display: block;
	}
	
	/* 별점 영역 */
	.review-star-rating {
		padding: 15px 20px;
		border-bottom: 1px solid #eee;
	}
	
	.review-star-rating > label {
		display: block;
		/* margin-bottom: 10px; */
		font-weight: 600;
		color: #333;
		font-size: 14px;
	}
	
	.star-rating-container {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	
	.star {
		font-size: 32px;
		color: #ddd;
		cursor: pointer;
		transition: color 0.2s, transform 0.1s;
		user-select: none;
	}
	
	.star:hover {
		transform: scale(1.1);
	}
	
	.star.active {
		color: #FFD700;
	}
	
	.star.hover {
		color: #FFC400;
	}
	
	.rating-text {
		margin-left: 10px;
		font-size: 14px;
		color: #666;
		font-weight: 500;
	}
	
	/* 기존 스타일은 그대로 유지 */
/* 	.review-write-modal-overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}
	
	.review-write-modal-overlay.active {
		display: block;
	} */
	
	.review-write-modal {
		display: none;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		max-height: 90vh;
		background-color: white;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
		z-index: 1000;
		overflow: hidden;
	}
	
	.review-write-modal.active {
		display: block;
	}
	
	.review-write-modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}
	
	.review-write-modal-header h3 {
		margin: 0;
		font-size: 20px;
		font-weight: bold;
	}
	
	.review-write-modal-close-btn {
		background: none;
		border: none;
		font-size: 28px;
		cursor: pointer;
		color: #999;
		line-height: 1;
		padding: 0;
		width: 30px;
		height: 30px;
	}
	
	.review-write-modal-close-btn:hover {
		color: #333;
	}
	
	.review-write-modal-body {
		padding: 20px;
		max-height: calc(90vh - 340px);
		overflow-y: auto;
	}
	
	.review-write-title-area {
		margin-bottom: 20px;
	}
	
	.review-write-title-area label {
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
		color: #333;
	}
	
	.review-write-title-area input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 14px;
	}
	
	.review-write-title-area input:focus {
		outline: none;
		border-color: #4CAF50;
	}
	
	.review-write-img-area {
		margin-bottom: 20px;
	}
	
	.review-write-img-area > label {
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
		color: #333;
	}
	
	.review-write-upload-button {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 10px 15px;
		background-color: #f8f9fa;
		border: 1px dashed #ddd;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
		color: #666;
		white-space: nowrap;
	}
	
	.review-write-upload-button:hover {
		background-color: #e9ecef;
		border-color: #4CAF50;
		color: #4CAF50;
	}
	
	.review-write-content-area {
		margin-bottom: 20px;
	}
	
	.review-write-content-area label {
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
		color: #333;
	}
	
	.review-write-content-area textarea {
		width: 100%;
		max-height: 300px;
		min-height: 300px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 14px;
		resize: vertical;
		font-family: inherit;
	}
	
	.review-write-content-area textarea:focus {
		outline: none;
		border-color: #4CAF50;
	}
	
	.review-write-button-area {
		display: flex;
		gap: 10px;
		justify-content: flex-end;
		padding: 15px 20px;
		border-top: 1px solid #eee;
		background-color: #f8f9fa;
	}
	
	.review-write-button-area button {
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		font-size: 14px;
		cursor: pointer;
		transition: all 0.2s;
	}
	
	.review-write-btn-submit {
		background-color: #4CAF50;
		color: white;
	}
	
	.review-write-btn-submit:hover {
		background-color: #45a049;
	}
	
	.review-write-btn-cancel {
		background-color: #f1f1f1;
		color: #333;
	}
	
	.review-write-btn-cancel:hover {
		background-color: #e0e0e0;
	}
	
	@media (max-width: 768px) {
		.review-write-modal {
			width: 95%;
			max-height: 95vh;
		}
	}
</style>

<!-- 리뷰 모달 js -->
<script>
	//리뷰 작성 모달 열기
	function openReviewWriteModal() {
		// TODO: orderId(또는 orderNumber) 와 productId 매개변수로 받아서 해당 상품 정보 조회하기.
		
		
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

</script>

<script>
	var selectedFiles = []; // 실제 업로드할 파일 배열
	
	// 파일 변경
	function fileChange(e) {
		const files = Array.from(e.target.files);
		const allowedExtensions = ['jpg', 'jpeg', 'png'];
		const MAX_FILE_SIZE = 5 * 1024 * 1024;
		const MAX_FILES = 10;
		
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
			success: function(data) {
				alert('리뷰가 등록되었습니다!');
				closeReviewWriteModal();
				resetReviewWriteForm();
				location.reload();
			},
			error: function(xhr, status, error) {
				console.error('리뷰 등록 실패:', error);
				alert('리뷰 등록 중 오류가 발생했습니다.');
			}
		});
	}
</script>


</head>
<body>
	<!-- 모달 열기 버튼 -->
	<button type="button" onclick="openReviewWriteModal()">리뷰 작성</button>
	
	<!-- 모달 배경 (오버레이) -->
	<div id="review-write-modal-overlay" class="review-write-modal-overlay" onclick="closeReviewWriteModal()"></div>
	
	<!-- 모달 -->
	<div id="review-write-modal" class="review-write-modal">
		<div class="review-write-modal-header">
			<h3>리뷰 작성</h3>
			<button type="button" class="review-write-modal-close-btn" onclick="closeReviewWriteModal()">&times;</button>
		</div>
		
		<!-- 상품 정보 -->
		<div class="review-product-info">
			<img id="review-product-image" alt="상품 이미지" src="">
			<div class="review-product-details">
				<span id="review-product-name" class="review-product-name">상품명A</span>
			</div>
		</div>
		
		<!-- 별점 선택 -->
		<div class="review-star-rating">
			<label>별점 평가</label>
			<div class="star-rating-container">
				<span class="star" data-rating="1" onclick="setRating(1)">★</span>
				<span class="star" data-rating="2" onclick="setRating(2)">★</span>
				<span class="star" data-rating="3" onclick="setRating(3)">★</span>
				<span class="star" data-rating="4" onclick="setRating(4)">★</span>
				<span class="star" data-rating="5" onclick="setRating(5)">★</span>
			</div>
			<input type="hidden" id="review-rating" value="1.0">
		</div>
		
		<div class="review-write-modal-body">
			<div class="review-write-title-area">
				<label for="review-write-title">리뷰 제목</label>
				<input type="text" id="review-write-title" maxlength="50" placeholder="리뷰 제목을 입력하세요">
			</div>
			
			<!-- 미리보기 영역 -->
			<div class="review-write-img-area">
				<label>사진 첨부 (최대 10장)</label>
				<div style="display: flex; align-items: flex-start; gap: 10px;">
					<div id="review-write-preview-container" style="display: flex; flex-wrap: wrap; gap: 10px; flex: 1;"></div>
					<label for="review-write-photo-upload" class="review-write-upload-button">
					  <i class="bi bi-camera"></i> 사진 추가
					</label>
					<input type="file" multiple accept=".jpg,.jpeg,.png" id="review-write-photo-upload" onchange="fileChange(event)" style="display: none;">
				</div>
			</div>
			
			<div class="review-write-content-area">
				<label for="review-write-content">리뷰 내용</label>
				<textarea id="review-write-content" placeholder="상품에 대한 솔직한 리뷰를 작성해주세요"></textarea>
			</div>
		</div>
		
		<div class="review-write-button-area">
			<button type="button" class="review-write-btn-submit" onclick="submitReview()">리뷰 등록</button>
			<button type="button" class="review-write-btn-cancel" onclick="closeReviewWriteModal()">취소</button>
		</div>
	</div>
</body>
</html>