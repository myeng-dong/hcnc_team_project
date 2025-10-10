<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>게시글 작성</title>
    <jsp:include page="../layout/headertop.jsp" />
    <style>
       @charset "UTF-8";
		* {
		    margin: 0;
		    padding: 0;
		    box-sizing: border-box;
		}
		
		.container {
		    max-width: 1200px;
		    margin: 0 auto;
		    padding: 20px;
		}
		
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
		
		.write-area {
		    background: white;
		    border-radius: 12px;
		    padding: 30px;
		    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
		    border: 1px solid rgba(230, 57, 70, 0.1);
		    margin-bottom: 30px;
		}
		
		.form-group {
		    margin-bottom: 20px;
		    width: 100%;
		    overflow: visible;
		}
		
		.form-group label {
		    display: block;
		    font-weight: 600;
		    color: #333;
		    margin-bottom: 8px;
		    font-size: 14px;
		}
		
		.form-select, .form-input {
		    width: 100%;
		    padding: 12px 15px;
		    border: 2px solid #ffe0e3;
		    border-radius: 8px;
		    font-size: 14px;
		    color: #333;
		    transition: border-color 0.3s ease;
		}
		
		.form-select:focus, .form-input:focus {
		    outline: none;
		    border-color: #e63946;
		}
		
		.form-input::placeholder {
		    color: #999;
		}
		
		/* iframe 에디터 영역 */
		.editor-frame {
		    width: 100%;
		    height: 500px;
		    border: 2px solid #ffe0e3;
		    border-radius: 8px;
		    display: block;
		}
		
		.editor-frame::-webkit-scrollbar {
		    display: none;
		}
		
		.btn-wrap {
		    display: flex;
		    justify-content: center;
		    gap: 10px;
		    margin-top: 30px;
		}
		
		.btn {
		    padding: 12px 32px;
		    border-radius: 8px;
		    font-weight: 600;
		    font-size: 15px;
		    transition: all 0.3s ease;
		    border: none;
		    cursor: pointer;
		    text-decoration: none;
		}
		
		.btn-submit {
		    background: linear-gradient(135deg, #e63946, #d62828);
		    color: white;
		}
		
		.btn-submit:hover {
		    transform: translateY(-2px);
		    box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
		}
		
		.btn-cancel {
		    background: #f0f0f5;
		    color: #666;
		}
		
		.btn-cancel:hover {
		    background: #e0e0e5;
		}
		
		@media (max-width: 768px) {
		    .container {
		        padding: 15px;
		    }
		    .write-area {
		        padding: 20px;
		    }
		}
    </style>
</head>
<body>
<div class="container-wrap">
    <jsp:include page="../layout/header.jsp" />
    <div class="inner">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">홈</a>
                <span>›</span>
                <a href="/board/home.do">게시판</a>
                <span>›</span>
                <strong>글쓰기</strong>
            </div>

            <div class="sub-title-area">
			    <h3>${isEdit ? '게시글 수정' : '게시글 작성'}</h3>
			</div>
			
			<div class="write-area">
			    <form id="writeForm">
			        <input type="hidden" id="postId" value="${postDetail.POST_ID}">
			        
			        <div class="form-group">
			            <label for="postType">타입</label>
			            <select class="form-select" id="postType" name="postType" required>
			                <option value="">타입을 선택하세요</option>
			                <c:forEach var="item" items="${postType}">
			                    <option value="${item.POST_TYPE}" 
			                        ${postDetail.POST_TYPE == item.POST_TYPE ? 'selected' : ''}>
			                        ${item.POST_TYPE}
			                    </option>
			                </c:forEach>
			            </select>
			        </div>
			
			        <div class="form-group">
			            <label for="postTitle">제목</label>
			            <input type="text" class="form-input" id="postTitle" name="postTitle" 
			                   placeholder="제목을 입력하세요" maxlength="200" 
			                   value="${postDetail.POST_TITLE}" required>
			        </div>
			
			        <div class="form-group">
			            <label>내용</label>
			            <iframe id="editorFrame" class="editor-frame" 
			                    src="${pageContext.request.contextPath}/ckedit.do">
			            </iframe>
			        </div>
			
			        <div class="btn-wrap">
			            <button type="button" class="btn btn-submit" onclick="submitPost()">
			                ${isEdit ? '수정완료' : '작성완료'}
			            </button>
			            <a href="javascript:history.back();" class="btn btn-cancel">취소</a>
			        </div>
			    </form>
			</div>
        </div>
    </div>
    <jsp:include page="../layout/footer.jsp" />
</div>

<script type="text/javascript">
    var contextPath = '${pageContext.request.contextPath}';
    var editorFrame = document.getElementById('editorFrame');
    var isEdit = ${isEdit} //에디트모드인지 파악	
    
    editorFrame.onload = function() {
        if(isEdit) {
            // 수정 모드일 때 기존 내용 설정
            setTimeout(function() {
                var postContent = `${postDetail.POST_CONTENT}`;
                setEditorContent(postContent);
            }, 500); // iframe 완전히 로드될 때까지 대기
        }
    };
    
    
    // iframe에서 에디터 내용 가져오기
    function getEditorContent() {
        try {
            return editorFrame.contentWindow.getEditorContent('');
        } catch (e) {
            console.error('에디터 내용 가져오기 실패:', e);
            return '';
        }
    }
    
    // iframe에 에디터 내용 설정하기
    function setEditorContent(content) {
        try {
            editorFrame.contentWindow.setEditorContent(content);
        } catch (e) {
            console.error('에디터 내용 설정 실패:', e);
        }
    }
    
    // 에디터 준비 상태 확인
    function isEditorReady() {
        try {
            return editorFrame.contentWindow.isEditorReady('');
        } catch (e) {
            return false;
        }
    }
    
    function submitPost() {
        var postType = $('#postType').val();
        var postTitle = $('#postTitle').val().trim();
        var postContent = getEditorContent();
        var memberId = '${user.MEMBER_ID}'; 
        var postId = $('#postId').val();
        
        if(!memberId){
            alert('로그인해주세요');
            return;
        }
        
        if (!postType) {
            alert('게시글타입을 선택해주세요.');
            return;
        }
        
        if (!postTitle) {
            alert('제목을 입력해주세요.');
            return;
        }
        
        if (!postContent.trim()) {
            alert('내용을 입력해주세요.');
            return;
        }
        
        var requestData = {
                memberId : memberId,
                postType: postType,
                postTitle: postTitle,
                postContent: postContent
            }
        
        if(postId) {
            requestData.postId = postId;
        }
        
        $.ajax({
            url: contextPath + '/board/write.do',
            type: 'POST',
            data: requestData,
            success: function(response) {
                alert('게시글이 등록되었습니다.');
                location.href = contextPath + '/board/home.do';
            },
            error: function() {
                alert('게시글 등록 중 오류가 발생했습니다.');
            }
        });
    }
</script>
</body>
</html>