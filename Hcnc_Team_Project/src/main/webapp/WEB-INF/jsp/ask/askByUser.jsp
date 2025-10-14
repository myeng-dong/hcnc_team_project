<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="../layout/headerlink.jsp" />

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>1대1 문의</title>
    <jsp:include page="../layout/headertop.jsp" /> <!-- 헤더부분 인클루드 -->
    <script src="../../../common/utils.js"></script> <!-- 자바스크립트 공통유틸 -->
    <link rel="stylesheet" href="/css/content/substyle.css" /> 
  </head>
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
	.flex {
	  display: flex;
	}
	.f-wrap {
	  flex-wrap: wrap;
	}
	.f-nowrap {
	  flex-wrap: nowrap;
	}
	.fd-column {
	  flex-direction: column;
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
	  position:relative;
	 
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
	
	/* 카테고리 필터 영역 */
	.sub-category-area {
	  background: #fff5f5;
	  padding: 20px;
	  border-radius: 12px;
	  margin-bottom: 30px;
	  border: 1px solid rgba(230, 57, 70, 0.1);
	}
	.sub-category-area ul {
	  justify-content: center;
	  gap: 15px;
	  list-style: none;
	}
	.sub-category-area button {
	  background: white;
	  border: 2px solid #e0e0e0;
	  color: #666;
	  padding: 12px 24px;
	  border-radius: 25px;
	  font-size: 14px;
	  font-weight: 500;
	  cursor: pointer;
	  transition: all 0.3s ease;
	  min-width: 80px;
	}
	.sub-category-area button:hover {
	  border-color: #e63946;
	  color: #e63946;
	}
	.sub-category-area button.active {
	  background: linear-gradient(135deg, #e63946, #d62828);
	  border-color: #e63946;
	  color: white;
	}
	
	/* 공지사항 영역 */
	.notice-area {
	  background: white;
	  border-radius: 12px;
	  overflow: hidden;
	  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
	  border: 1px solid rgba(230, 57, 70, 0.1);
	}
	
	/* 테이블 헤더 */
	.notice-top {
	  background: linear-gradient(135deg, #e63946, #d62828);
	  padding: 20px 0;
	  border-bottom: none;
	}
	.notice-top ul {
	  list-style: none;
	  margin: 0;
	  padding: 0 30px;
	}
	.notice-top li {
	  color: white;
	  font-weight: 600;
	  font-size: 15px;
	}
	.notice-top li:first-child {
	  flex: 0 0 80px;
	  text-align: center;
	}
	.notice-top li:nth-child(2) {
	  flex: 1;
	  text-align: left;
	  padding-left: 20px;
	}
	.notice-top li:nth-child(3) {
	  flex: 0 0 120px;
	  text-align: center;
	}
	.notice-top li:nth-child(4) {
	  flex: 0 0 140px;
	  text-align: center;
	}
	
	/* 공지사항 아이템 */
	.noticeItem {
	  border-bottom: 1px solid #f0f0f5;
	  transition: all 0.3s ease;
	  position: relative;
	  overflow: hidden;
	}
	
	.noticeItem::before {
	  content: "";
	  position: absolute;
	  left: 0;
	  top: 0;
	  width: 0;
	  height: 100%;
	  background: linear-gradient(
	    90deg,
	    rgba(230, 57, 70, 0.08),
	    transparent
	  );
	  transition: width 0.3s ease;
	}
	
	.noticeItem:hover::before {
	  width: 100%;
	}
	
	.noticeItem:hover {
	  background: rgba(230, 57, 70, 0.02);
	}
	
	.noticeItem:last-child {
	  border-bottom: none;
	}
	
	.noticeItem a {
	  display: block;
	  text-decoration: none;
	  color: inherit;
	  position: relative;
	  z-index: 1;
	}
	
	.noticeItem ul {
	  display: flex;
	  align-items: center;
	  padding: 18px 30px;
	  margin: 0;
	  list-style: none;
	}
	
	.noticeItem li {
	  font-size: 14px;
	  color: #333;
	}
	
	.noticeItem li:first-child {
	  flex: 0 0 80px;
	  text-align: center;
	  font-weight: 600;
	  color: #e63946;
	  font-size: 15px;
	}
	
	.noticeItem li:nth-child(2) {
	  flex: 1;
	  text-align: left;
	  padding-left: 20px;
	  font-weight: 500;
	  color: #333;
	  font-size: 15px;
	}
	
	.noticeItem li:nth-child(3) {
	  flex: 0 0 120px;
	  text-align: center;
	  color: #666;
	}
	
	.noticeItem li:nth-child(4) {
	  flex: 0 0 140px;
	  text-align: center;
	  color: #999;
	  font-size: 13px;
	}
	
	/* 공지사항 배지 */
	.notice-badge {
	  display: inline-block;
	  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
	  color: white;
	  padding: 3px 8px;
	  border-radius: 12px;
	  font-size: 11px;
	  font-weight: 600;
	  margin-right: 8px;
	}
	
	.notice-badge.important {
	  background: linear-gradient(45deg, #ff4757, #ff3838);
	}
	
	/* 페이지네이션 */
	.pagination {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  gap: 8px;
	  margin: 40px 0;
	  font-family: Arial, sans-serif;
	}
	
	.pagination a {
	  color: #e63946;
	  padding: 12px 16px;
	  text-decoration: none;
	  border: 2px solid #ffe0e3;
	  border-radius: 8px;
	  transition: all 0.3s ease;
	  font-weight: 500;
	  min-width: 44px;
	  text-align: center;
	}
	
	.pagination a.active {
	  background: linear-gradient(135deg, #e63946, #d62828);
	  color: #fff;
	  border-color: #e63946;
	}
	
	.pagination a:hover:not(.active) {
	  background: #fff5f5;
	  border-color: #e63946;
	}
	
	.pagination a.prev,
	.pagination a.next {
	  font-weight: bold;
	  font-size: 16px;
	}
	
	/* 빈 상태 */
	.empty-state {
	  text-align: center;
	  padding: 60px 20px;
	  color: #999;
	}
	.empty-state .icon {
	  font-size: 48px;
	  margin-bottom: 20px;
	  opacity: 0.5;
	}
	.empty-state .message {
	  font-size: 16px;
	  color: #666;
	}
	
	/* 검색 및 글쓰기 영역 */
	.search-write-area {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  gap: 20px;
	  margin-bottom: 30px;
	  padding: 20px;
	  background: #fff5f5;
	  border-radius: 12px;
	  border: 1px solid rgba(230, 57, 70, 0.1);
	}
	
	/* 검색 박스 */
	.search-box {
	  display: flex;
	  gap: 10px;
	  flex: 1;
	  max-width: 600px;
	}
	
	/* 검색 타입 선택 */
	.search-type {
	  padding: 12px 16px;
	  border: 2px solid #e0e0e0;
	  border-radius: 8px;
	  font-size: 14px;
	  font-weight: 500;
	  color: #666;
	  background: white;
	  cursor: pointer;
	  transition: all 0.3s ease;
	  min-width: 100px;
	}
	
	.search-type:hover {
	  border-color: #e63946;
	}
	
	.search-type:focus {
	  outline: none;
	  border-color: #e63946;
	  box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
	}
	
	/* 검색 입력창 */
	.search-input {
	  flex: 1;
	  padding: 12px 16px;
	  border: 2px solid #e0e0e0;
	  border-radius: 8px;
	  font-size: 14px;
	  color: #333;
	  transition: all 0.3s ease;
	}
	
	.search-input::placeholder {
	  color: #999;
	}
	
	.search-input:hover {
	  border-color: #e63946;
	}
	
	.search-input:focus {
	  outline: none;
	  border-color: #e63946;
	  box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.1);
	}
	
	/* 검색 버튼 */
	.search-btn {
	  padding: 12px 24px;
	  background: linear-gradient(135deg, #e63946, #d62828);
	  color: white;
	  border: none;
	  border-radius: 8px;
	  font-size: 14px;
	  font-weight: 600;
	  cursor: pointer;
	  transition: all 0.3s ease;
	  min-width: 80px;
	}
	
	.search-btn:hover {
	  transform: translateY(-2px);
	  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
	}
	
	.search-btn:active {
	  transform: translateY(0);
	}
	
	/* 글쓰기 버튼 */
	.write-btn {
	  padding: 12px 24px;
	  background: white;
	  color: #e63946;
	  border: 2px solid #e63946;
	  border-radius: 8px;
	  font-size: 14px;
	  font-weight: 600;
	  cursor: pointer;
	  transition: all 0.3s ease;
	  min-width: 100px;
	  white-space: nowrap;
	}
	
	.write-btn:hover {
	  background: linear-gradient(135deg, #e63946, #d62828);
	  color: white;
	  border-color: #e63946;
	  transform: translateY(-2px);
	  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
	}
	
	.write-btn:active {
	  transform: translateY(0);
	}
	
	.write-btn-title {
		margin-top: 10px;
		padding: 10px 20px;
		background: linear-gradient(135deg, #e63946, #d62828);
		color: white;
		border: none;
		border-radius: 8px;
		font-size:14px;
		font-weight:600;
		cursor:pointer;
		transition: all 0.3s ease;
		white-space: nowrap;
		box-shadow: 0 2px 8px rgba(230, 57, 70, 0.3);
		
		position: absolute;
	  	right: 0;
	}
	.write-btn-title:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
	}
	.write-btn-title:active {
	  transform: translateY(0);
	}
		
	
	/* 반응형 */
	@media (max-width: 768px) {
	.sub-title-area {
	    flex-direction: column;
	    gap: 15px;
	  }
	  
	  .write-btn-title {
	    width: 100%;
	    max-width: 200px;
	  }
	  .container {
	    padding: 15px;
	  }
	  .sub-category-area ul {
	    justify-content: flex-start;
	    gap: 8px;
	    flex-wrap: wrap;
	  }
	  .sub-category-area button {
	    padding: 8px 16px;
	    font-size: 13px;
	    min-width: 60px;
	  }
	  .notice-top li:nth-child(3),
	  .notice-top li:nth-child(4),
	  .noticeItem li:nth-child(3),
	  .noticeItem li:nth-child(4) {
	    display: none;
	  }
	  .noticeItem ul {
	    padding: 15px 20px;
	  }
	  .pagination a {
	    padding: 8px 12px;
	    font-size: 14px;
	  }
	  .search-write-area {
	    flex-direction: column;
	    align-items: stretch;
	    gap: 15px;
	    padding: 15px;
	  }
	  .search-box {
	    max-width: 100%;
	    flex-wrap: wrap;
	  }
	  .search-type {
	    min-width: 80px;
	    padding: 10px 12px;
	    font-size: 13px;
	  }
	  .search-input {
	    flex: 1 1 100%;
	    min-width: 0;
	  }
	  .search-btn,
	  .write-btn {
	    padding: 10px 20px;
	    font-size: 13px;
	  }
	  .write-btn {
	    width: 100%;
	  }
	  
	}
	
	
	@media (max-width: 480px) {
	  .search-box {
	    flex-direction: column;
	    gap: 8px;
	  }
	  .search-type,
	  .search-input,
	  .search-btn {
	    width: 100%;
	  }
	}
   
    
  </style>
  <body>
    <div class="container-wrap">
      <jsp:include page="../layout/header.jsp" />
      <div class="inner">
        <div class="container noticelist">
          <!-- 브레드크럼 네비게이션 -->
          <div class="breadcrumb">
            <a href="/">홈</a>
            <span>›</span>
            <a href="/mypage/home.do">마이페이지</a>
            <span>›</span>
            <strong>1대1 문의</strong>
          </div>

          <!-- 메인 콘텐츠 영역 -->
          <div class="sub-area">
            <!-- 페이지 제목 -->
            <div class="sub-title-area">
              <h3>[ 1대1 문의 ]</h3>
              <button class="write-btn-title" onclick="location.href='/one/insert.do'">
              	✏️ 문의하기
              </button>
            </div>
           
            <!-- 콘텐츠 영역 -->
            <div class="sub-content-area">
              			
              <!-- 공지사항 목록 영역 -->
              <div class="notice-area">
                <div class="flex noticeList fd-column">
                  <!-- 테이블 헤더 -->
                  <div class="notice-top">
                    <ul class="flex f-nowrap">
                      <li>NO</li>
                      <li>제목</li>
                      <li>답변상태</li>
                      <li>작성일</li>
                    </ul>
                  </div>

                  <!-- 공지사항 목록 (AJAX로 동적 로딩) -->
                  <div class="notice-info">
                    <!-- 여기에 데이터가 동적으로 로딩됩니다 -->
                  </div>
                </div>
              </div>

              <!-- 페이지네이션 -->
              <div class="pagination" id="pagination">
                <!-- 페이지네이션이 동적으로 생성됩니다 -->
              </div>
            </div>
          </div>
        </div>

        <script type="text/javascript">
          <c:if test="${not empty alertMessage}">
	         alert('${alertMessage}');
	      </c:if>
	      
          var currentPage = 1;
          var currentCategory = '';
          var contextPath = '${pageContext.request.contextPath}';
          
          $(document).ready(function() {
            console.log('페이지 로드 시작');
            console.log('Context Path:', contextPath);
            
            // 초기 데이터 로드
            loadNoticeList(1, '', '', '');
            
            // 글작성 버튼 실행시 /one/insert.do로 이동
            $('.write-btn').on('click', function() {
            	  window.location.href = '/one/insert.do';
            })
            
            $('.search-btn').on('click', function() {
            	searchBoard();
            })
            
            // 카테고리 버튼 클릭 이벤트
            $('.category-btn').on('click', function() {
              var category = $(this).data('category');
              console.log('카테고리 클릭:', category);
              
              // 활성 버튼 변경
              $('.category-btn').removeClass('active');
              $(this).addClass('active');
              
              // 데이터 로드
              currentCategory = category;
              loadNoticeList(1, category,'','');
            });
            
            // 서치타입과 서치키워드 저장
            const searchBoard =()=>{
            	var searchType = $('.search-type').val();
            	var searchKeyword = $('.search-input').val();
            	
            	
            	console.log("searchType는 : " + searchType);
            	console.log("searchKeyword는 : " + searchKeyword);
            	loadNoticeList(1, currentCategory,searchType,searchKeyword);
            	
            }
          });
          
          function loadNoticeList(pageIndex, category,searchType, searchKeyword) {
            var url = contextPath + '/one/noticeListData.do';
            console.log('AJAX 요청 URL:', url);
            console.log('페이지:', pageIndex, '카테고리:', category);
            
            $.ajax({
              url: url,
              type: 'GET',
              data: {
                pageIndex: pageIndex || 1,
                pageSize: 5,
                category: category || '5',
                searchType : searchType,
                searchKeyword: searchKeyword,
              },
              dataType: 'json',
              success: function(response) {
                console.log('응답 성공:', response);
                if (response.success) {
                  currentPage = pageIndex;
                  renderNoticeList(response.resultList);
                  renderPagination(response.pageIndex, response.totalPages);
                } else {
                  alert(response.message || '데이터를 불러오는데 실패했습니다.');
                }
              },
              error: function(xhr, status, error) {
                console.error('AJAX 에러');
                console.error('상태:', status);
                console.error('에러:', error);
                console.error('응답 상태코드:', xhr.status);
                console.error('응답 텍스트:', xhr.responseText);
                
                if (xhr.status === 404) {
                  alert('요청한 페이지를 찾을 수 없습니다. URL을 확인해주세요.');
                } else {
                  alert('데이터를 불러오는 중 오류가 발생했습니다.');
                }
              }
            });
          }

          function renderNoticeList(data) {
            var noticeInfo = $('.notice-info');
            noticeInfo.empty();
            //데이터가 없을 때
            if (!data || data.length === 0) {
            	noticeInfo.append(
       	                '<div class="empty-state">' +
       	                '<div class="icon">📋</div>' +
       	                '<div class="message">조회된 게시글이 없습니다.</div>' +
       	                '</div>'
       	              );
              return;
            }
            
            $.each(data, function(index, item) {
              var categoryClass = getCategoryClass(item.BOARD_ID);
              var detailUrl = contextPath + '/one/detail.do?postId=' + item.POST_ID;
              
              var title = item.POST_TITLE || '';
              var displayTitle = title.length > 20 ? title.substring(0,20) + "..." : title;
              
              var html = '<div class="noticeItem" data-category="' + categoryClass + '">' +
                         '<a href="' + detailUrl + '"  title="' + title + '">' +
                         '<ul>' +
                         '<li>' + item.POST_ID + '</li>' +
                         '<li>' + displayTitle + '</li>' +
                         '<li>' + (item.POST_STATUS || '처리전') + '</li>' +
                         '<li>' + (item.INPUT_DT || '') + '</li>' +
                         '</ul>' +
                         '</a>' +
                         '</div>';
              
              noticeInfo.append(html);
            });
          }
         
          
          function getCategoryClass(boardId) {
        	    if (!boardId) return 'general';
        	    
        	    var categoryMap = {
        	        '5': 'oneonone'
        	    };
        	    
        	    return categoryMap[String(boardId)] || 'general';
        	}
          
          //페이지네이션
          function renderPagination(currentPage, totalPages) {
            var pagination = $('#pagination');
            pagination.empty();
            
            if (totalPages <= 0) return;
            
            var html = '';
            
            // 이전 버튼
            if (currentPage > 1) {
              html += '<a href="#" class="prev" data-page="' + (currentPage - 1) + '">«</a>';
            }
            
            // 페이지 번호 (최대 5개 표시)
            var startPage = Math.max(1, currentPage - 2);
            var endPage = Math.min(totalPages, startPage + 4);
            
            if (endPage - startPage < 4) {
              startPage = Math.max(1, endPage - 4);
            }
            
            for (var i = startPage; i <= endPage; i++) {
              if (i === currentPage) {
                html += '<a href="#" class="active" data-page="' + i + '">' + i + '</a>';
              } else {
                html += '<a href="#" data-page="' + i + '">' + i + '</a>';
              }
            }
            
            // 다음 버튼
            if (currentPage < totalPages) {
              html += '<a href="#" class="next" data-page="' + (currentPage + 1) + '">»</a>';
            }
            
            pagination.html(html);
            
            // 페이지 클릭 이벤트
            pagination.find('a').on('click', function(e) {
              e.preventDefault();
              var page = parseInt($(this).data('page'));
              if (page && page !== currentPage) {
                loadNoticeList(page, currentCategory);
              }
            });
          }
        </script>
      </div>
      <jsp:include page="../layout/footer.jsp" />
    </div>
  </body>
</html>