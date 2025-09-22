<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!-- QnA 리스트 -->
<div class="qna-section">
	<div style="margin: 50px 0px 20px 10px;">
		<p style="font-weight: bold;">상품 Q&A</p>
		<p>상품에 대한 문의사항을 남겨주세요.</p>
	</div>
	<div class="review-btn-area" style="display: flex; justify-content: right;">
		<button type="button" onclick="QnaTab.formModalShow()">상품 문의하기</button>
	</div>
	<table class="table">
		<thead>
			<tr>
				<th scope="col" width="10%">NO</th>
				<th scope="col" width="60%">TITLE</th>
				<th scope="col" width="15%">WRITER</th>
				<th scope="col" width="15%">DATE</th>
			</tr>
		</thead>
		<tbody id="productQnAList">
			<c:if test="${not empty productQnAList}">
				<c:forEach items="${productQnAList}" var="qna" varStatus="status">
					<tr>
						<td>${status.count}</td>
						<td onclick="QnaTab.qnaDetail(${qna.PRODUCT_QNA_ID})" style="cursor: pointer;">${qna.QNA_TITLE}</td>
						<td>${qna.MEMBER_ID}</td>
						<td>${qna.INPUT_DT}</td>
					</tr>
				</c:forEach>
			</c:if>
		</tbody>
	</table>
</div>

<!-- QnA 모달들 -->
<!-- 문의 작성 모달 -->
<div id="qnaModal" class="qna-modal" style="display: none;">
  <div class="qna-modal-content">
    <span class="qna-close">&times;</span>
    <h2>상품 문의하기</h2>
    <form id="qnaForm" action="/insertQnA.do" method="post">
      <div class="form-group">
        <input type="text" id="qnaProduct" name="productId" placeholder="상품" required hidden>
      </div>
      <div class="form-group">
        <input type="text" id="qnaTitle" name="qnaTitle" placeholder="제목" required>
      </div>
      <div class="form-group">
        <input type="text" id="memberId" name="memberId" placeholder="작성자" required hidden>
      </div>
      <div class="form-group">
        <textarea id="qnaContent" name="qnaContent" placeholder="내용" required></textarea>
      </div>
      <div class="form-button">
      	<button type="submit" id="qnaSubmitBtn">문의하기</button>
      </div>
    </form>
  </div>
</div>

<!-- 문의 상세/수정 모달 -->
<div id="qnaDetailModal" class="qna-modal" style="display: none;">
  <div class="qna-modal-content">
    <span class="qna-close">&times;</span>
    <h2>상품 문의 상세</h2>
    <div class="qna-detail-content">
      <div class="form-group">
        <label>제목 : </label>
        <input id="qnaDetailTitle" class="detail-text" readonly>
        <input id="qnaTitleInput" style="display: none">
      </div>
      <div class="form-group">
        <label>작성자 : </label>
        <div id="qnaDetailWriter" class="detail-text"></div>
      </div>
      <div class="form-group">
        <label>내용 : </label>
        <textarea id="qnaDetailContent" class="detail-content" readonly></textarea>
        <textarea id="qnaContentInput" class="detail-content" style="display: none;"></textarea>
      </div>
      <div class="form-group" id="qnaAnswerDiv">
      
      </div>
      <div class="form-button" id="qnaDetailButtons">
        <button type="button" id="qnaEditBtn" style="display: none;">수정</button>
        <button type="button" id="qnaUpdateBtn" style="display: none;">수정완료</button>
        <button type="button" id="qnaDeleteBtn" style="display: none;">삭제</button>
        <button type="button" id="qnaCancelBtn" style="display: none;">취소</button>
        <button type="button" class="btn-cancel" id="qnaDetailCloseBtn">닫기</button>
      </div>
    </div>
  </div>
</div>

<script>
	const QnaTab = {
			// 문의 작성 모달 열기			
			formModalShow: function(){
				$('#qnaModal').show();
			},
			
			// 상세 모달 열기 (수정/삭제용)
			qnaDetail: function(qnaId){
			    console.log("QNA 상세보기 클릭됨, ID:", qnaId);
			    
			    // AJAX로 QnA 상세 정보 가져오기
			    $.ajax({
			        url: '/selectQnADetail.do',
			        type: 'post',
			        data: { qnaId: qnaId },
			        dataType: "json",
			        success: function(res) {
			        	var qna = res.qnaDetail;
			            // 모달에 데이터 채우기
			            $('#qnaDetailTitle').val(qna.QNA_TITLE);
			            $('#qnaDetailWriter').text(qna.MEMBER_ID);
			            $('#qnaDetailContent').val(qna.QNA_CONTENT);
			            
			            $('#qnaTitleInput').val(qna.QNA_TITLE);
			            $('#qnaContentInput').val(qna.QNA_CONTENT);
			            
			            if(qna.ANSWER_CONTENT != null){
			            	var qnaAnswerHtml = 
			            		'<label>답변 내용 :</label>' +
			            		'<div id="qnaAnswerContent" class="answer-content">' + qna.ANSWER_CONTENT + '</div>'
			            	
			            	$("#qnaAnswerDiv").html(qnaAnswerHtml);
			            }
			            
			            // 현재 로그인한 사용자와 작성자가 같은지 확인
			            if (qna.MEMBER_ID === memberId) {
			                $('#qnaEditBtn').show();
			                $('#qnaDeleteBtn').show();
			                
			                // 수정/삭제 버튼에 이벤트 추가 (기존 이벤트 제거 후 새로 추가)
			                $('#qnaEditBtn').off('click').on('click', function() {
			                	updateTagChange("updateActive");
			                });
			                
			                //수정완료 버튼
							$('#qnaUpdateBtn').off('click').on('click', function() {
								updateProductQnA(qnaId);
			                });
			                
			                // 수정 취소 버튼
							$('#qnaCancelBtn').off('click').on('click', function() {
								updateTagChange("updateCancel");
			                });
			                
			                $('#qnaDeleteBtn').off('click').on('click', function() {
			                    deleteQnA(qnaId);
			                });
			            } else {
			                $('#qnaEditBtn').hide();
			                $('#qnaDeleteBtn').hide();
			            }
			            
			            // 모달 표시
			            $('#qnaDetailModal').show();
			        },
			        error: function() {
			            alert('QnA 상세 정보를 불러오는데 실패했습니다.');
			        }
			    });
			},
			
	}
	
	function updateProductQnA(qnaId) {
		var title = $("#qnaTitleInput").val();
       	var content = $("#qnaContentInput").val();
       	
       	var param = {
       			qnaId : qnaId
       			, title : title
       			, content : content
       	};
       	
       	$.ajax({
       		url: "/updateProductQnA.do"
       		, type: "post"
       		, data: param
       		, dataType: "json"
       		, success: function(){
       			alert("수정완료되었습니다.");
       		
       			$('#qnaDetailTitle').val(title);
       			$('#qnaDetailContent').val(content);
       		
       			
       			updateTagChange("updateComplete");
       		}
       		, error: function(){
       			alert("QnA수정중 오류가 발생했습니다.");
       		}
       	});
	}
	
	
	function deleteQnA(qnaId){
		if(confirm("상품 문의 내역을 삭제하시겠습니까?")){
			$.ajax({
				url: "/deleteProductQnA.do"
				, type: "post"
				, data: { qnaId : qnaId, productId : productId }
				, dataType: "json"
				, success: function(){
					alert("상품문의 삭제처리 되었습니다.");
					
					window.location.reload();
				}
				, error: function(){
					
				}
			});
		} 
	}
	
	 // 모달 닫기 이벤트들
    $('.qna-close').click(function(){
   	 $('#qnaModal').hide();
   	 $('#qnaDetailModal').hide();
   	 updateTagChange("");
    });
    
    $('.btn-cancel').click(function(){
   	 $('#qnaModal').hide();
   	 $('#qnaDetailModal').hide();
   	 updateTagChange("");
    })
    
    // 태그 동적 변경
    function updateTagChange(type) {
    	if(type != "updateActive"){
			$("#qnaDetailTitle").show();
        	$("#qnaTitleInput").hide();
        	
        	$('#qnaDetailContent').show();
        	$('#qnaContentInput').hide();
            
            $('#qnaEditBtn').show();
            $('#qnaUpdateBtn').hide();
            
            $('#qnaDeleteBtn').show();
            $('#qnaCancelBtn').hide();
    	} else {
        	$("#qnaDetailTitle").hide();
        	$("#qnaTitleInput").show();
        	
        	$('#qnaDetailContent').hide();
        	$('#qnaContentInput').show();
            
            $('#qnaEditBtn').hide();
            $('#qnaUpdateBtn').show();
            
            $('#qnaDeleteBtn').hide();
            $('#qnaCancelBtn').show();
    	}
    }
</script>

<!-- 상품 QnA 등록시 처리하기 위함 -->
<c:if test="${not empty message}">
	<script>
		$(document).ready(function(){
			
			if("${messageType}" === "insertSuccess"){
				alert("${message}");
			} else {
				alert("오류: ${message}");
			}
		});
	</script>
</c:if>

<!-- 상품 QnA -->	
<script>

	var urlParams = new URLSearchParams(window.location.search);
	
	var memberId = "user01";
	var cartId = 1;
	var productId = urlParams.get('productId');
	
	$(function(){
		$("#qnaProduct").val(productId);
		$("#memberId").val(memberId);
	});

	// QnA 문의하기 버튼 광클 금지
	var isSubmitting = false;
	
	$('#qnaForm').submit(function(e){
		if (isSubmitting) {
			e.preventDefault();
			return false;
		}
		
		isSubmitting = true;
		$('#qnaSubmitBtn').prop('disabled', true).text('상품 문의 등록중...');
		
		return true;
	});
	
</script>