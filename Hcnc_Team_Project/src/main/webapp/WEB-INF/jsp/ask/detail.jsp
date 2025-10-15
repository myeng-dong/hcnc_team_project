<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="../layout/headerlink.jsp" />
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>공지사항::상세보기</title>
    <jsp:include page="../layout/headertop.jsp" />
    <link rel="stylesheet" href="/css/content/substyle.css">
    <link rel="stylesheet" href="/css/content/board.css">
    <style>
    @charset "UTF-8";
	* {
	    margin: 0;
	    padding: 0;
	    box-sizing: border-box;
	}
	
	/* 기본 레이아웃 */
	.container {
	    max-width: 1200px;
	    margin: 0 auto;
	    padding: 20px;
	}
	
	/* 브레드크럼 */
	.breadcrumb {
	    margin-bottom: 30px;
	    font-size: 14px;
	    color: #666;
	}
	.breadcrumb a {
	    color: #e63946;
	    text-decoration: none;
	    transition: color 0.3s ease;
	}
	.breadcrumb a:hover {
	    color: #d62828;
	}
	.breadcrumb span {
	    margin: 0 8px;
	}
	.breadcrumb strong {
	    color: #333;
	    font-weight: 600;
	}
	
	/* 제목 영역 */
	.sub-title-area {
	    margin-bottom: 30px;
	    text-align: center;
	}
	.sub-title-area h3 {
	    font-size: 28px;
	    color: #333;
	    font-weight: 700;
	    position: relative;
	    display: inline-block;
	    padding-bottom: 15px;
	}
	.sub-title-area h3::after {
	    content: "";
	    position: absolute;
	    bottom: 0;
	    left: 50%;
	    transform: translateX(-50%);
	    width: 60px;
	    height: 3px;
	    background: linear-gradient(90deg, #e63946, #d62828);
	    border-radius: 2px;
	}
	
	/* 상세보기 영역 */
	.view-event-area {
	    background: white;
	    border-radius: 12px;
	    overflow: hidden;
	    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
	    border: 1px solid rgba(230, 57, 70, 0.1);
	    margin-bottom: 30px;
	}
	
	/* 테이블 스타일 */
	.view-board-table {
	    width: 100%;
	    border-collapse: collapse;
	}
	
	.view-board-table thead tr:first-child th {
	    background: linear-gradient(135deg, #e63946, #d62828);
	    color: white;
	    padding: 20px 30px;
	    font-size: 18px;
	    font-weight: 600;
	    text-align: left;
	    border: none;
	}
	
	.view-board-table thead tr:nth-child(2) {
	    background: #fff5f5;
	    border-bottom: 2px solid #ffe0e3;
	}
	
	.view-board-table thead tr:nth-child(2) th {
	    padding: 15px 30px;
	    font-size: 14px;
	    font-weight: 500;
	    color: #666;
	    text-align: left;
	}
	
	.view-board-table thead tr:nth-child(2) th:first-child {
	    border-right: 1px solid #ffe0e3;
	}
	
	.view-board-table tbody td {
	    padding: 30px;
	    font-size: 15px;
	    line-height: 1.8;
	    color: #333;
	}
	
	/* 컨텐츠 영역 */
	.view-board-table tbody tr:first-child td {
	    min-height: 400px;
	    vertical-align: top;
	}
	
	/* 목록 버튼 */
	.btn-list-wrap {
	    text-align: center;
	    margin: 30px 0;
	}
	
	.btn-list {
	    display: inline-block;
	    background: linear-gradient(135deg, #e63946, #d62828);
	    color: white;
	    padding: 12px 32px;
	    border-radius: 8px;
	    text-decoration: none;
	    font-weight: 600;
	    font-size: 15px;
	    transition: all 0.3s ease;
	    border: none;
	    cursor: pointer;
	}
	
	.btn-list:hover {
	    transform: translateY(-2px);
	    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
	}
	
	/* 댓글 영역 */
	.comment-area {
	    background: white;
	    border-radius: 12px;
	    padding: 30px;
	    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
	    border: 1px solid rgba(230, 57, 70, 0.1);
	    margin-bottom: 30px;
	}
	
	.comment-title {
	    font-size: 20px;
	    font-weight: 700;
	    color: #333;
	    margin-bottom: 20px;
	    padding-bottom: 15px;
	    border-bottom: 2px solid #e63946;
	}
	
	.comment-title span {
	    color: #e63946;
	}
	
	/* 댓글 작성 폼 */
	.comment-write {
	    background: #fff5f5;
	    padding: 20px;
	    border-radius: 8px;
	    margin-bottom: 30px;
	}
	
	.comment-write textarea {
	    width: 100%;
	    min-height: 100px;
	    padding: 15px;
	    border: 2px solid #ffe0e3;
	    border-radius: 8px;
	    font-size: 14px;
	    resize: vertical;
	    font-family: inherit;
	    transition: border-color 0.3s ease;
	}
	
	.comment-write textarea:focus {
	    outline: none;
	    border-color: #e63946;
	}
	
	.comment-write textarea::placeholder {
	    color: #999;
	}
	
	.comment-write-footer {
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    margin-top: 10px;
	}
	
	.comment-write-info {
	    font-size: 13px;
	    color: #666;
	}
	
	.btn-comment-submit {
	    background: linear-gradient(135deg, #e63946, #d62828);
	    color: white;
	    border: none;
	    padding: 10px 24px;
	    border-radius: 8px;
	    font-size: 14px;
	    font-weight: 600;
	    cursor: pointer;
	    transition: all 0.3s ease;
	}
	
	.btn-comment-submit:hover {
	    transform: translateY(-2px);
	    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
	}
	
	/* 댓글 목록 */
	.comment-list {
	    list-style: none;
	}
	
	.comment-item {
	    padding: 20px;
	    border-bottom: 1px solid #f0f0f5;
	    transition: background 0.3s ease; 
	}
	
	.comment-item:hover {
	    background: rgba(230, 57, 70, 0.02);
	}
	
	.comment-item:last-child {
	    border-bottom: none;
	}
	
	/* 댓글 헤더 - 한 줄 레이아웃 */
	.comment-header {
	    display: flex;
	    align-items: left;
	    gap: 15px;
	}
	
	.comment-author {
	    display: flex;
	    align-items: center;
	    gap: 10px;
	    flex-shrink: 0;
	}
	
	.comment-author-name {
	    font-weight: 600;
	    color: #333;
	    font-size: 15px;
	}
	
	.comment-date {
	    font-size: 13px;
	    color: #999;
	}
	
	.comment-content {
	    font-size: 14px;
	    line-height: 1.6;
	    color: #333;
	    white-space: pre-wrap;
	    word-break: break-word;
	    flex: 1;
	    align-self:flex-start;
	}
	
	.comment-actions {
	    display: flex;
	    gap: 8px;
	    flex-shrink: 0;
	    margin-left: auto;
	}
	
	.btn-comment-edit,
	.btn-comment-delete {
	    background: none;
	    border: none;
	    color: #e63946;
	    font-size: 13px;
	    cursor: pointer;
	    transition: color 0.3s ease;
	    padding: 4px 8px;
	}
	
	.btn-comment-edit:hover {
	    color: #d62828;
	}
	
	.btn-comment-delete {
	    color: #ff4757;
	}
	
	.btn-comment-delete:hover {
	    color: #d62828;
	}
	
	/* 댓글 없을 때 */
	.comment-empty {
	    text-align: center;
	    padding: 40px 20px;
	    color: #999;
	}
	
	.comment-empty .icon {
	    font-size: 36px;
	    margin-bottom: 10px;
	    opacity: 0.5;
	}
	
	.comment-empty .message {
	    font-size: 14px;
	}
	
	/* 버튼 영역 레이아웃 */
.btn-list-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
}

.btn-list {
    display: inline-block;
    background: linear-gradient(135deg, #e63946, #d62828);
    color: white;
    padding: 12px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
	}
	
	.btn-list:hover {
	    transform: translateY(-2px);
	    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
	}
	
	/* 게시글 수정/삭제 버튼 영역 */
	.post-actions {
	    display: flex;
	    gap: 10px;
	}
	
	.btn-post-edit,
	.btn-post-delete {
	    padding: 12px 24px;
	    border-radius: 8px;
	    font-weight: 600;
	    font-size: 15px;
	    transition: all 0.3s ease;
	    cursor: pointer;
	    border: none;
	}
	
	.btn-post-edit {
	    background: white;
	    color: #e63946;
	    border: 2px solid #e63946;
	}
	
	.btn-post-edit:hover {
	    background: linear-gradient(135deg, #e63946, #d62828);
	    color: white;
	    transform: translateY(-2px);
	    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
	}
	
	.btn-post-delete {
	    background: white;
	    color: #ff4757;
	    border: 2px solid #ff4757;
	}
	
	.btn-post-delete:hover {
	    background: linear-gradient(135deg, #ff4757, #d62828);
	    color: white;
	    transform: translateY(-2px);
	    box-shadow: 0 4px 12px rgba(255, 71, 87, 0.3);
	}
	
	/* 반응형 */
	@media (max-width: 768px) {
	    .btn-list-wrap {
	        flex-direction: column;
	        gap: 15px;
	    }
	    
	    .post-actions {
	        width: 100%;
	    }
	    
	    .btn-list,
	    .btn-post-edit,
	    .btn-post-delete {
	        width: 100%;
	    }
	}
	/* 반응형 */
	@media (max-width: 768px) {
	    .container {
	        padding: 15px;
	    }
	
	    .sub-title-area h3 {
	        font-size: 24px;
	    }
	
	    .view-board-table thead tr:first-child th {
	        padding: 15px 20px;
	        font-size: 16px;
	    }
	
	    .view-board-table thead tr:nth-child(2) th {
	        padding: 12px 20px;
	        font-size: 13px;
	        display: block;
	        border-right: none;
	        border-bottom: 1px solid #ffe0e3;
	    }
	
	    .view-board-table thead tr:nth-child(2) th:last-child {
	        border-bottom: none;
	    }
	
	    .view-board-table tbody td {
	        padding: 20px;
	        font-size: 14px;
	    }
	
	    .comment-area {
	        padding: 20px;
	    }
	
	    .comment-title {
	        font-size: 18px;
	    }
	
	    .comment-write {
	        padding: 15px;
	    }
	
	    .comment-write-footer {
	        flex-direction: column;
	        gap: 10px;
	        align-items: flex-end;
	    }
	
	    .btn-comment-submit {
	        width: 100%;
	    }
	
	    .comment-item {
	        padding: 15px;
	    }
	
	    /* 모바일에서는 댓글 내용 줄바꿈 */
	    .comment-header {
	        flex-wrap: wrap;
	    }
	
	    .comment-content {
	        width: 100%;
	        margin-top: 10px;
	    }
	
	    .comment-actions {
	        margin-left: 0;
	    }
	}
	.comment-edit-input {
    width: 100%;
    min-height: 80px;
    padding: 10px;
    border: 2px solid #e63946;
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
    font-family: inherit;
	}
	
	.btn-comment-save,
	.btn-comment-cancel {
	    background: none;
	    border: none;
	    font-size: 13px;
	    cursor: pointer;
	    transition: color 0.3s ease;
	    padding: 4px 8px;
	}
	
	.btn-comment-save {
	    color: #28a745;
	}
	
	.btn-comment-save:hover {
	    color: #218838;
	}
	
	.btn-comment-cancel {
	    color: #6c757d;
	}
	
	.btn-comment-cancel:hover {
	    color: #5a6268;
	}
	
	@media (max-width: 480px) {
	    .breadcrumb {
	        font-size: 12px;
	    }
	
	    .sub-title-area h3 {
	        font-size: 20px;
	    }
	}
	</style>
</head>
<body>
<div class="container-wrap">
    <jsp:include page="../layout/header.jsp" />
    <div class="inner">
        <div class="container noticedetail">
            <div class="breadcrumb">
                <a href="/">홈</a>
                <span>›</span>
                <a href="/one/home.do">1대1 문의</a>
                <span>›</span>
                <strong>상세보기</strong>
            </div>
            <div class="sub-area view-area">
                <div class="sub-title-area">
                    <h3>[ 1대1 문의 상세 ]</h3>
                </div>
                <div class="sub-content-area">
                    <div class="view-event-area">
                        <table class="view-board-table">
                            <thead>
                                <tr>
                                    <th colspan="2">${postDetail.POST_TITLE}</th>
                                </tr>
                                <tr>
                                    <th>문의자 : ${postDetail.MEMBER_ID}</th>
                                    <th>문의일 : ${postDetail.INPUT_DT}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="2">
                                        <div id="postContent">내용을 로드하는 중...</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 목록으로 돌아가기 버튼 -->
                    <div class="btn-list-wrap">
					    <a href="/board/home.do" class="btn-list">목록으로</a>
					    
					    <c:if test="${not empty user && user.MEMBER_ID == postDetail.MEMBER_ID}">
					        <div class="post-actions">
					            <button type="button" class="btn-post-edit" data-post-id="${postDetail.POST_ID}" onclick="location.href='/one/insert.do?postId=${postDetail.POST_ID}'">수정</button>
					            <button type="button" class="btn-post-delete" data-post-id="${postDetail.POST_ID}">삭제</button>
					        </div>
					    </c:if>
					</div>
                    

                    <!-- 댓글 영역 -->
                    <div class="comment-area">
                        <h4 class="comment-title">댓글 <span>(${not empty comment ? comment.size() : 0})</span></h4>

                        <!-- 댓글 목록 -->
                        <ul class="comment-list" id="comment-list">
						    <c:choose>
						        <c:when test="${empty comment}">
						            <!-- 댓글이 없을 때 -->
						            <li class="comment-empty">
						                <div class="icon">💬</div>
						                <div class="message">첫 번째 댓글을 작성해보세요!</div>
						            </li>
						        </c:when>
						        <c:otherwise>
						            <!-- 댓글이 있을 때 -->
						            <c:forEach var="item" items="${comment}">
									    <li class="comment-item">
									        <div class="comment-header">
									            <div class="comment-author">
									                <span class="comment-author-name">
									                    <c:out value="${item.MEMBER_ID}" default="익명"/>
									                </span>
									                <span class="comment-date">
									                    <c:out value="${item.INPUT_DT}"/>
									                </span>
									            </div>
									            
									            <!-- 댓글 내용을 헤더 안으로 이동 -->
									            <div class="comment-content" data-comment-id="${item.COMMENT_ID}">
												    <span class="comment-text"><c:out value="${item.COMMENT}"/></span>
												    <textarea class="comment-edit-input" style="display:none;"></textarea>
												</div>
												
												<c:if test="${not empty user && user.MEMBER_ID == item.MEMBER_ID}">
												    <div class="comment-actions">
												        <button type="button" class="btn-comment-edit" data-comment-id="${item.COMMENT_ID}">수정</button>
												        <button type="button" class="btn-comment-save" data-comment-id="${item.COMMENT_ID}" style="display:none;">저장</button>
												        <button type="button" class="btn-comment-cancel" data-comment-id="${item.COMMENT_ID}" style="display:none;">취소</button>
												        <button type="button" class="btn-comment-delete" data-comment-id="${item.COMMENT_ID}">삭제</button>
												    </div>
												</c:if>
									        </div>
									    </li>
									</c:forEach>
						        </c:otherwise>
						    </c:choose>
						</ul>
						
						  <!-- 댓글 작성 -->
                        <div class="comment-write">
                            <textarea placeholder="댓글을 입력하세요..."></textarea>
                            <div class="comment-write-footer">
                                <span class="comment-write-info">최대 500자까지 입력 가능합니다.</span>
                                <button type="button" class="btn-comment-submit" onclick=submitComment()>댓글 등록</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page="../layout/footer.jsp" />
    <script>
    var contextPath = '${pageContext.request.contextPath}';
    var postId = '${postDetail.POST_ID}';
    var userID = '${user.MEMBER_ID}'
    //페이지 온로드시 실행된다
    $(document).ready(function() {
        setContent('${postDetail.POST_CONTENT}');
        
        //댓글 삭제 버튼
        $(".btn-comment-delete").on('click', function(){
        	var commentId = $(this).data('comment-id');
        	deleteComment(commentId);
        });       
        
        //게시글 삭제 버튼
        $(".btn-post-delete").on('click',function(){
        	deletePost(postId);
        });
        
        //댓글 수정 버튼 누르면 텍스트 숨기고 인풋 등장
        $(".btn-comment-edit").on('click', function(){
            var commentId = $(this).data('comment-id');
            var $contentDiv = $('.comment-content[data-comment-id="' + commentId + '"]');
            var $text = $contentDiv.find('.comment-text');
            var $input = $contentDiv.find('.comment-edit-input');
            
            // 현재 텍스트를 textarea에 복사
            $input.val($text.text());
            
            // 텍스트 숨기고 input 보이기
            $text.hide();
            $input.show();
            
            // 버튼 변경
            $(this).hide();
            $(this).siblings('.btn-comment-save, .btn-comment-cancel').show();
            $(this).siblings('.btn-comment-delete').hide();
        });
        
        // 취소 버튼 클릭
        $(".btn-comment-cancel").on('click', function(){
            var commentId = $(this).data('comment-id');
            var $contentDiv = $('.comment-content[data-comment-id="' + commentId + '"]');
            
            // 원래대로 되돌리기
            $contentDiv.find('.comment-text').show();
            $contentDiv.find('.comment-edit-input').hide();
            
            // 버튼 원래대로
            $(this).hide();
            $(this).siblings('.btn-comment-save').hide();
            $(this).siblings('.btn-comment-edit').show();
            $(this).siblings('.btn-comment-delete').show();
        });
        
        $(".btn-comment-save").on('click', function(){
            var commentId = $(this).data('comment-id');
            var $contentDiv = $('.comment-content[data-comment-id="' + commentId + '"]');
            var newContent = $contentDiv.find('.comment-edit-input').val().trim();
           
            if(!newContent) {
                alert('댓글 내용을 입력해주세요.');
                return;
            }
            updateComment(commentId,newContent);
        });
    });
    
    
    // 댓글 등록
    function submitComment() {
        var content = $('.comment-write textarea').val();
        
        if(!postId){
        	alert('게시글이 선택 안댐.');
        }
        if (!content) {
            alert('댓글 내용을 입력해주세요.');
            return;
        }
        
        <c:if test="${empty user}">
            alert('로그인 후 댓글을 작성할 수 있습니다.');
            return;
        </c:if>
        
        $.ajax({
            url: contextPath + '/board/commentWrite.do',
            type: 'POST',
            data: {
            	postId : postId,
                content : content,
                userID : userID,
            },
            success: function(res) {
                alert('댓글이 등록되었습니다.');
                location.reload();
            },
            error: function() {
                alert('댓글 등록 중 오류가 발생했습니다.');
            }
        });
    }
    
    
    // 댓글 삭제
    function deleteComment(commentId) {
        if (!confirm('댓글을 삭제하시겠습니까?')) {
            return;
        }
        
        $.ajax({
            url: contextPath + '/board/commentDelete.do',
            type: 'POST',
            data: {
            	commentId: commentId
            },
            success: function(response) {
                alert('댓글이 삭제되었습니다.');
                location.reload();
            },
            error: function(xhr, status, error) {
            	 console.log('에러 상세:', xhr.responseText);
                 console.log('status:', status);
                 console.log('error:', error);
                alert('댓글 삭제 중 오류가 발생했습니다.');
            }
        });
    }
    
 // 댓글 수정
    function updateComment(commentId,newContent) {
        
        $.ajax({
            url: contextPath + '/board/commentUpdate.do',
            type: 'POST',
            data: {
            	commentId: commentId,
            	newContent: newContent
            },
            success: function(response) {
                alert('댓글이 수정되었습니다.');
                location.reload();
            },
            error: function(xhr, status, error) {
            	 console.log('에러 상세:', xhr.responseText);
                 console.log('status:', status);
                 console.log('error:', error);
                alert('댓글 수정 중 오류가 발생했습니다.');
            }
        });
    }
    
    //게시글 삭제
    function deletePost(postId){
    	 if (!confirm('게시글을 삭제하시겠습니까?')) {
             return;
         }
    	 $.ajax({
             url: contextPath + '/board/postDelete.do',
             type: 'POST',
             data: {
            	 postId: postId
             },
             success: function(response) {
                 alert('게시글이 삭제되었습니다.');
                 location.href = contextPath + '/one/home.do';
             },
             error: function(xhr, status, error) {
             	 console.log('에러 상세:', xhr.responseText);
                  console.log('status:', status);
                  console.log('error:', error);
                 alert('게시글 삭제 중 오류가 발생했습니다.');
             }
         });
    }
  	//html코드 불러오는 코드
    function setContent(htmlContent) { 
        document.getElementById('postContent').innerHTML = htmlContent || '내용이 없습니다.';
    }
    
    
    </script>
</div>
</body>
</html>