<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
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
            color: #667eea;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .breadcrumb a:hover {
            color: #764ba2;
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
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        /* 상세보기 영역 */
        .view-event-area {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(102, 126, 234, 0.1);
            margin-bottom: 30px;
        }

        /* 테이블 스타일 */
        .view-board-table {
            width: 100%;
            border-collapse: collapse;
        }

        .view-board-table thead tr:first-child th {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px 30px;
            font-size: 18px;
            font-weight: 600;
            text-align: left;
            border: none;
        }

        .view-board-table thead tr:nth-child(2) {
            background: #f8f9ff;
            border-bottom: 2px solid #e0e6ff;
        }

        .view-board-table thead tr:nth-child(2) th {
            padding: 15px 30px;
            font-size: 14px;
            font-weight: 500;
            color: #666;
            text-align: left;
        }

        .view-board-table thead tr:nth-child(2) th:first-child {
            border-right: 1px solid #e0e6ff;
        }

        .view-board-table tbody td {
            padding: 30px;
            font-size: 15px;
            line-height: 1.8;
            color: #333;
            border-bottom: 1px solid #f0f0f5;
        }

        /* 컨텐츠 영역 */
        .view-board-table tbody tr:first-child td {
            min-height: 400px;
            vertical-align: top;
        }

        /* 첨부파일 영역 */
        .view-board-table tbody tr td:first-child {
            background: #f8f9ff;
            font-weight: 600;
            color: #667eea;
            width: 150px;
            vertical-align: middle;
        }

        .view-board-table tbody tr:not(:first-child) td:last-child {
            padding: 20px 30px;
        }

        .view-board-table tbody tr:not(:first-child) td p {
            margin: 0;
        }

        .view-board-table tbody tr:not(:first-child) td a {
            color: #667eea;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .view-board-table tbody tr:not(:first-child) td a:hover {
            color: #764ba2;
            text-decoration: underline;
        }

        .view-board-table tbody tr:not(:first-child) td a::before {
            content: "📎";
            margin-right: 8px;
            font-size: 16px;
        }

        /* 목록 버튼 */
        .btn-list-wrap {
            text-align: center;
            margin: 30px 0;
        }

        .btn-list {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
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
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        /* 댓글 영역 */
        .comment-area {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(102, 126, 234, 0.1);
            margin-bottom: 30px;
        }

        .comment-title {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #667eea;
        }

        .comment-title span {
            color: #667eea;
        }

        /* 댓글 작성 폼 */
        .comment-write {
            background: #f8f9ff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
        }

        .comment-write textarea {
            width: 100%;
            min-height: 100px;
            padding: 15px;
            border: 2px solid #e0e6ff;
            border-radius: 8px;
            font-size: 14px;
            resize: vertical;
            font-family: inherit;
            transition: border-color 0.3s ease;
        }

        .comment-write textarea:focus {
            outline: none;
            border-color: #667eea;
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
            background: linear-gradient(135deg, #667eea, #764ba2);
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
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
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
            background: rgba(102, 126, 234, 0.02);
        }

        .comment-item:last-child {
            border-bottom: none;
        }

        .comment-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .comment-author {
            display: flex;
            align-items: center;
            gap: 10px;
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

        .comment-actions {
            display: flex;
            gap: 8px;
        }

        .btn-comment-edit,
        .btn-comment-delete {
            background: none;
            border: none;
            color: #667eea;
            font-size: 13px;
            cursor: pointer;
            transition: color 0.3s ease;
            padding: 4px 8px;
        }

        .btn-comment-edit:hover {
            color: #764ba2;
        }

        .btn-comment-delete {
            color: #ff4757;
        }

        .btn-comment-delete:hover {
            color: #ff3838;
        }

        .comment-content {
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            white-space: pre-wrap;
            word-break: break-word;
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
                border-bottom: 1px solid #e0e6ff;
            }

            .view-board-table thead tr:nth-child(2) th:last-child {
                border-bottom: none;
            }

            .view-board-table tbody td {
                padding: 20px;
                font-size: 14px;
            }

            .view-board-table tbody tr td:first-child {
                width: 100%;
                display: block;
                border-bottom: 1px solid #e0e6ff;
                padding: 15px 20px;
            }

            .view-board-table tbody tr:not(:first-child) td:last-child {
                display: block;
                width: 100%;
                padding: 15px 20px;
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

            .comment-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }

            .comment-actions {
                align-self: flex-end;
            }
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
                <strong>이벤트</strong>
                <span>›</span>
                <strong>상세보기</strong>
            </div>
            <div class="sub-area view-area">
                <div class="sub-title-area">
                    <h3>[ 공지사항 ]</h3>
                </div>
                <div class="sub-content-area">
                    <div class="view-event-area">
                        <table class="view-board-table">
                            <thead>
                                <tr>
                                    <th colspan="2">제목</th>
                                </tr>
                                <tr>
                                    <th>작성자 : {변수}</th>
                                    <th>작성일 : {변수}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="2">
                                        컨텐츠 영역 chkeditor불러오는 영역임
                                    </td>
                                </tr>
                                <!-- 시작:첨부파일을 사용자에서 출력하는 란이있다면 추가될 영역 -->
                                <tr>
                                    <td>
                                        첨부파일 #1
                                    </td>
                                    <td>
                                        <p><a href="">다운받는 링크 및 원본제목을 출력 시켜주는 영역 공지사항정도?</a></p>
                                    </td>
                                </tr>
                                <!-- 종료:첨부파일을 사용자에서 출력하는 란이있다면 추가될 영역 -->
                            </tbody>
                        </table>
                    </div>

                    <!-- 목록으로 돌아가기 버튼 -->
                    <div class="btn-list-wrap">
                        <a href="#" class="btn-list">목록으로</a>
                    </div>

                    <!-- 댓글 영역 -->
                    <div class="comment-area">
                        <h4 class="comment-title">댓글 <span>(0)</span></h4>

                        <!-- 댓글 작성 -->
                        <div class="comment-write">
                            <textarea placeholder="댓글을 입력하세요..."></textarea>
                            <div class="comment-write-footer">
                                <span class="comment-write-info">최대 500자까지 입력 가능합니다.</span>
                                <button type="button" class="btn-comment-submit">댓글 등록</button>
                            </div>
                        </div>

                        <!-- 댓글 목록 -->
                        <ul class="comment-list">
                            <!-- 댓글이 없을 때 -->
                            <li class="comment-empty">
                                <div class="icon">💬</div>
                                <div class="message">첫 번째 댓글을 작성해보세요!</div>
                            </li>

                            <!-- 댓글이 있을 때 (예시) -->
                            <!-- <li class="comment-item">
                                <div class="comment-header">
                                    <div class="comment-author">
                                        <span class="comment-author-name">홍길동</span>
                                        <span class="comment-date">2025.09.30 14:30</span>
                                    </div>
                                    <div class="comment-actions">
                                        <button type="button" class="btn-comment-edit">수정</button>
                                        <button type="button" class="btn-comment-delete">삭제</button>
                                    </div>
                                </div>
                                <div class="comment-content">
                                    댓글 내용이 여기에 표시됩니다.
                                </div>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page="../layout/footer.jsp" />
</div>
</body>
</html>