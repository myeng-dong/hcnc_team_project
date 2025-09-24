<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>


<div class="review-area" style="display: flex;">
	<div class="review-left-area" style="width:20%;">
		<div>
			<span id="avg-point-text"></span>
			<div id="avg-star">
				
			</div>
		</div>
		
	</div>
	<div class="review-right-area" style="width:70%;">
		<div class="review-filter" style="display: flex; justify-content: space-between">
			<div class="review-filter-left">
				<ul class="filter-menu" style="display: flex; gap: 10px; list-style: none; padding: 0; margin: 0;">
					<li>
						<span onclick="orderbyReview()" style="cursor: pointer;">리뷰순</span>
					</li>
					<li>
						<span onclick="orderbyInputDT()" style="cursor: pointer;">최신순</span>
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
				
			</ul>
		</div>
		<nav aria-label="Page navigation example">
			<ul class="pagination">
			  
			</ul>
		</nav>
	</div>
</div>

<script>
	var urlParams = new URLSearchParams(window.location.search);
	
	var memberId = "user01";
	var productId = urlParams.get('productId');
	
	var currentPage = 1;
	var maxPage = 0;
	
	var byReview = true;
	var byInputDT = true;
	
	function formatRating(rating) {
	    if (rating == null || isNaN(rating)) return '0.0';
	    return parseFloat(rating).toFixed(1);
	}
	
	function loadReviewList(page, byReview, byInputDT){
	    var pageSize = 10;
	    
	    var param = {
	    		productId : productId
	    		, page : page
	    		, pageSize : pageSize
	    		, byReview : byReview
	    		, byInputDT : byInputDT
	    };
		
		return $.ajax({
			url: "/selectReviewListPaged.do"
				, type: "post"
				, data: param
				, dataType: "json"
				, success: function(res){
					var reviews = res.reviews;
					var reviewCnt = res.reviewCnt.REVIEW_CNT;
					updateReviewList(reviews);
		            updateReviewCount(reviewCnt);
		            updateReviewAVG(reviews[0].AVG_STAR_POINT);
		            
		            currentPage = page;
				}
		        ,error: function(xhr, status, error) {
		            console.log('리뷰 리스트 로드 실패:', error);
				}
			});
	}
	
	function updateReviewList(reviews){
		
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
	
	function updateReviewAVG(starPoint){
		$("#avg-point-text").text(formatRating(starPoint) + '점');
	}
	
	function updateReviewCount(reviewCnt){
		
		$("#productReviewCnt").text('('+ reviewCnt + ')');
		
		var pageCnt = Math.ceil(reviewCnt / 10);
		maxPage = pageCnt;
		
		var pageList = 
			'<li class="page-item" onclick="prePage()">' +
				'<a class="page-link" href="#" aria-label="Previous">' +
					'<span aria-hidden="true">&lt;</span>' +
				'</a>' +
			'</li>';
		for(var i=0; i < pageCnt; i++){
			pageList += '<li class="page-item"><a class="page-link" href="#" onclick="loadReviewList('+ (i + 1) +', '+ byReview +', '+ byInputDT +')">' + (i + 1) + '</a></li>';
		}
		pageList += '<li class="page-item" onclick="nextPage()">';
		pageList += '<a class="page-link" href="#" aria-label="Next">';
		pageList += '<span aria-hidden="true">&gt;</span>';
		pageList += '</a></li>';
		
	  	$(".pagination").html(pageList);
		
	}
	
	function prePage(){
		currentPage > 1 ? loadReviewList(currentPage - 1, byReview, byInputDT) : null;
	}
	
	function nextPage(){
		currentPage < maxPage  ? loadReviewList(currentPage + 1, byReview, byInputDT) : null;
	}
	
	function orderbyReview(){
		byReview = !byReview;
		loadReviewList(currentPage, byReview, byInputDT);
	}
	
	function orderbyInputDT(){
		byInputDT = !byInputDT;
		loadReviewList(currentPage, byReview, byInputDT);
	}
</script>