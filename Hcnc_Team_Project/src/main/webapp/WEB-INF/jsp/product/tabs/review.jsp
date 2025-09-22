<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>


<div class="review-area" style="display: flex;">
	<div class="review-left-area" style="width:20%;">
		ddd
	</div>
	<div class="review-right-area" style="width:70%;">
		<div class="review-filter" style="display: flex; justify-content: space-between">
			<div class="review-filter-left">
				<ul class="filter-menu" style="display: flex; gap: 10px; list-style: none; padding: 0; margin: 0;">
					<li>
						<span>리뷰순</span>
					</li>
					<li>
						<span>최신순</span>
					</li>
					<li>
						<span>포토리뷰만 보기</span>
					</li>
				</ul>
			</div>
			<div class="review-filter-right">
				<div class="dropdown-center">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<span>별점전체보기</span>
						<span>(100)</span>
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Action two</a></li>
						<li><a class="dropdown-item" href="#">Action three</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="review-content-list">
			<ul class="reviews" style="padding: 0;">
				<li class="review" style="padding: 20px 0; border-top: 1px solid grey; border-bottom: 1px solid grey;">
					<div class="top-info">
						<span>별점표시 </span>
						<span> | 작성일자 </span>
						<span> | 작성자 </span>
					</div>
					<div class="body-info">
						<div class="review-title">
							<span style="font-weight: bold;">리뷰제목</span>
						</div>
						<div class="review-imgs" style="display: flex;">
							<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
							<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
							<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
							<img class="product-image" src="https://placehold.co/70x70" alt="Product Image">
						</div>
						<div class="review-content">
						
						</div>
						<div class="bottom-info">
							<span>펼쳐보기</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

<script>
	var urlParams = new URLSearchParams(window.location.search);
	
	var memberId = "user01";
	var productId = urlParams.get('productId');
	
	function loadReviewList(){
		return $.ajax({
			url: "/selectReviewList.do"
				, type: "post"
				, data: { productId : productId }
				, dataType: "json"
				, success: function(res){
					var reviews = res.reviews;
					updateReviewList(reviews);
		            updateReviewCount(reviews.length);
				}
		        ,error: function(xhr, status, error) {
		            console.log('리뷰 리스트 로드 실패:', error);
				}
			});
	}
	
	function updateReviewList(reviews){
		console.log(reviews);
		
		function formatRating(rating) {
		    if (rating == null || isNaN(rating)) return '0.0';
		    return parseFloat(rating).toFixed(1);
		}
		
		var list = '';
		if(reviews.length > 0){
			for(var i=0; i < reviews.length; i++){
				list += '<li class="review" id="'+ reviews[i].REVIEW_ID +'_list" style="padding: 20px 0; border-top: 1px solid grey; border-bottom: 1px solid grey;">';
				list +=	'<div class="top-info" id="'+ reviews[i].REVIEW_ID +'_topInfo">';
				list +=	'<div id="'+ reviews[i].REVIEW_ID +'_starPoint">';
				list += '<span id="'+ reviews[i].REVIEW_ID +'_star">' + formatRating(reviews[i].STAR_POINT) +'</span>';
				list += '<span id="'+ reviews[i].REVIEW_ID +'_starText">' + formatRating(reviews[i].STAR_POINT) +'점</span>';
				list += '</div>';
				list +=	'<span>' + reviews[i].MEMBER_ID + ' | <span>';
				list += '<span>' + reviews[i].INPUT_DT + '<span></div>';
				list +=	'<div class="body-info" id="'+ reviews[i].REVIEW_ID +'_bodyInfo">';
				list +=	'<div class="review-title"><span style="font-weight: bold;">'+ reviews[i].REVIEW_TITLE +'</span></div>';
				list +=	'<div class="review-imgs" id="'+ reviews[i].REVIEW_ID +'_imgs" style="display: flex;"></div>';
				list +=	'<div class="review-content">'+ reviews[i].REVIEW_CONTENT +'</div>';
				list +=	'<div class="bottom-info" id="'+ reviews[i].REVIEW_ID +'_bottomInfo">';
				list +=	'<span>펼쳐보기</span>';
				list += '</div>';
				list +=	'</div>';
				list += '</li>';
			} 
		} else {
			list = '<li class="review" style="padding: 20px 0; border-top: 1px solid grey; border-bottom: 1px solid grey;">해당 상품의 리뷰가 없습니다.</li>'
		}
		$(".reviews").html(list);
	}
	
	function updateReviewCount(reviewCnt){
		console.log(reviewCnt);
		$("#productReviewCnt").text('('+ reviewCnt + ')');
	}
</script>