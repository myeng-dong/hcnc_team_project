<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<div id="descriptionDiv">
	
</div>

<script>
	var urlParams = new URLSearchParams(window.location.search);
	
	var memberId = "user01";
	var productId = urlParams.get('productId');
	
	function loadProductDetail(){
		return $.ajax({
			url: "/selectProductDescription.do"
				, type: "post"
				, data: { productId : productId }
				, dataType: "json"
				, success: function(res){
					var description = res.description.DETAIL_DESCRIPTION
					
					if(description != null){
						setContent(description);
					}
				}
		        ,error: function(xhr, status, error) {
		            console.log('상품 상세 로드 실패:', error);
		        }
			});
	}
	
	// ckediter > selectPost.jsp 발췌
	function setContent(description) {
    	
		$("#descriptionDiv").html(description);
        
        
    }
</script>