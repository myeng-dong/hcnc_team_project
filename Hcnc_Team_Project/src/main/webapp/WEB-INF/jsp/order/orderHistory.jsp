<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>주문내역</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Malgun Gothic', sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
        }

        /* 컨테이너 */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* 페이지 헤더 */
        .page-header {
            background: white;
            padding: 40px;
            border-radius: 8px;
            margin-bottom: 30px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            border-top: 4px solid #DC0630;
        }

        .page-title {
            font-size: 32px;
            font-weight: 700;
            color: #DC0630;
            margin-bottom: 10px;
        }

        .page-subtitle {
            color: #666;
            font-size: 15px;
        }
        
        /* 메인 탭 */
        .main-tabs {
            display: flex;
            background: white;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .main-tab {
            flex: 1;
            padding: 20px;
            background: white;
            border: none;
            border-bottom: 3px solid #e0e0e0;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            color: #666;
            transition: all 0.3s;
        }

        .main-tab:hover {
            background: #f9f9f9;
        }

        .main-tab.active {
            color: #DC0630;
            border-bottom-color: #DC0630;
        }

        /* 탭 컨텐츠 */
        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        /* 필터 섹션 */
        .filter-section {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            margin-bottom: 25px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .filter-header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .date-filter {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .period-buttons {
            display: flex;
            gap: 5px;
        }

        .period-btn {
            padding: 8px 16px;
            border: 1px solid #ddd;
            background: white;
            border-radius: 4px;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.3s;
        }

        .period-btn:hover {
            background: #f5f5f5;
        }
        
        .period-btn.active {
            background: #DC0630;
            color: white;
            border-color: #DC0630;
        }

        .date-input {
            padding: 10px 14px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
        }

        .date-separator {
            color: #666;
            font-weight: 600;
        }

        .btn-search {
            padding: 10px 24px;
            background: #DC0630;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
        }

        .btn-search:hover {
            background: #B8051F;
        }

        .filter-notice {
            font-size: 13px;
            color: #888;
            line-height: 1.6;
        }
   		
        /* 섹션 제목 */
        .section-title {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;
            padding: 20px 0;
        }

        /* 주문 카드 */
        .order-card {
            background: white;
            border-radius: 8px;
            padding: 30px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .order-header {
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
            border-bottom: 2px solid #f5f5f5;
            margin-bottom: 20px;
        }

        .order-info {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .order-date {
            font-size: 15px;
            color: #333;
            font-weight: 600;
        }

        .order-number {
            font-size: 13px;
            color: #999;
            background: #f5f5f5;
            padding: 6px 12px;
            border-radius: 4px;
        }

        .order-body {
            display: flex;
            gap: 25px;
        }

        .product-image {
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid #f0f0f0;
        }

        .product-details {
            flex: 1;
        }

        .product-name {
            font-size: 18px;
            font-weight: 700;
            color: #333;
            margin-bottom: 10px;
        }

        .product-options {
            font-size: 14px;
            color: #888;
            margin-bottom: 6px;
        }

        .product-quantity {
            font-size: 14px;
            color: #888;
            margin-bottom: 15px;
        }

        .product-price {
            font-size: 24px;
            font-weight: 800;
            color: #DC0630;
            margin-top: 10px;
        }

        .order-actions {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 12px;
            min-width: 180px;
        }

        .status-badge {
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 700;
        }

        .status-delivered {
            background: #e8f5e9;
            color: #74BF04;
        }

        .status-shipping {
            background: #e3f2fd;
            color: #0A4DA6;
        }

        .status-preparing {
            background: #fff9e6;
            color: #F2CC0C;
        }
        
        .status-cancelled {
            background: #FFF0F2;
            color: #591A03;
        }

        .status-pending {
            background: #fff9e6;
            color: #F2CC0C;
        }

        .action-buttons {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
        }

        .btn {
            padding: 10px 20px;
            border: 2px solid #ddd;
            background: white;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
        }

        .btn:hover {
            background: #f5f5f5;
        }

        .btn-primary {
            background: #DC0630;
            color: white;
            border-color: #DC0630;
        }

        .btn-primary:hover {
            background: #B8051F;
        }

        /* 빈 상태 */
        .empty-state {
            text-align: center;
            padding: 80px 20px;
            background: white;
            border-radius: 8px;
        }

        .empty-icon {
            font-size: 80px;
            margin-bottom: 20px;
            opacity: 0.3;
        }

        .empty-title {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 10px;
        }

        .empty-text {
            color: #999;
            font-size: 15px;
        }

        /* 모달 */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: white;
            padding: 40px;
            border-radius: 12px;
            max-width: 550px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 3px solid #DC0630;
        }

        .modal-title {
            font-size: 26px;
            font-weight: 800;
            color: #DC0630;
        }

        .close-btn {
            background: #f5f5f5;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        .close-btn:hover {
            background: #e0e0e0;
            color: #333;
        }

        .alert {
            padding: 16px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
            border-left: 4px solid;
        }

        .alert-warning {
            background: #fff9e6;
            color: #591A03;
            border-color: #F2CC0C;
        }

        .refund-product {
            display: flex;
            gap: 18px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 25px;
        }

        .refund-product img {
            width: 90px;
            height: 90px;
            object-fit: cover;
            border-radius: 8px;
        }

        .refund-product-info {
            flex: 1;
        }

        .refund-product-name {
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 8px;
            color: #333;
        }

        .refund-product-price {
            color: #DC0630;
            font-weight: 800;
            font-size: 18px;
            margin-top: 8px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            margin-bottom: 10px;
            font-weight: 700;
            color: #333;
            font-size: 15px;
        }

        .form-select,
        .form-textarea {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 15px;
            font-family: inherit;
            transition: border-color 0.3s;
        }

        .form-textarea {
            min-height: 120px;
            resize: vertical;
        }

        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #DC0630;
        }

        .refund-info {
            background: #FFF0F2;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            border-left: 4px solid #DC0630;
        }

        .refund-info-title {
            font-weight: 700;
            margin-bottom: 15px;
            color: #DC0630;
            font-size: 16px;
        }

        .refund-info-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 15px;
            color: #333;
        }

        .refund-info-total {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #DC0630;
            font-weight: 800;
            font-size: 18px;
            color: #DC0630;
        }

        .modal-buttons {
            display: flex;
            gap: 12px;
            margin-top: 25px;
        }

        .modal-btn {
            flex: 1;
            padding: 16px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
        }

        .modal-btn-cancel {
            background: #f5f5f5;
            color: #666;
        }

        .modal-btn-cancel:hover {
            background: #e0e0e0;
        }

        .modal-btn-submit {
            background: #DC0630;
            color: white;
        }

        .modal-btn-submit:hover {
            background: #B8051F;
        }

        /* 주문상세 모달 스타일 */
        .detail-section {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 2px solid #f5f5f5;
        }

        .detail-section:last-child {
            border-bottom: none;
        }

        .detail-section-title {
            font-size: 18px;
            font-weight: 700;
            color: #DC0630;
            margin-bottom: 15px;
        }

        .detail-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 14px;
        }

        .detail-label {
            color: #666;
            font-weight: 600;
        }

        .detail-value {
            color: #333;
            font-weight: 700;
            text-align: right;
        }

        .detail-product {
            display: flex;
            gap: 15px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .detail-product img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 6px;
        }

        .detail-product-info {
            flex: 1;
        }

        .detail-product-name {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 5px;
            color: #333;
        }

        .detail-product-option {
            font-size: 13px;
            color: #888;
            margin-bottom: 3px;
        }

        .detail-product-price {
            font-weight: 700;
            color: #DC0630;
            margin-top: 8px;
        }

        .price-summary {
            background: #FFF0F2;
            padding: 20px;
            border-radius: 8px;
        }

        .price-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 15px;
        }

        .price-row.total {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #DC0630;
            font-size: 18px;
            font-weight: 800;
            color: #DC0630;
        }

        .delivery-step {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            padding: 12px;
            background: #f9f9f9;
            border-radius: 6px;
        }

        .delivery-step.active {
            background: #FFF0F2;
            border-left: 4px solid #DC0630;
        }

        .delivery-step-icon {
            font-size: 24px;
            margin-right: 12px;
        }

        .delivery-step-info {
            flex: 1;
        }

        .delivery-step-title {
            font-weight: 700;
            color: #333;
            margin-bottom: 3px;
        }

        .delivery-step-date {
            font-size: 13px;
            color: #888;
        }

        @media (max-width: 768px) {
        	.filter-header {
                flex-direction: column;
                align-items: flex-start;
            }
        
            .order-body {
                flex-direction: column;
            }

            .order-actions {
                flex-direction: row;
                justify-content: flex-start;
                width: 100%;
            }

            .action-buttons {
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- 페이지 헤더 -->
        <div class="page-header">
            <h1 class="page-title">주문내역</h1>
            <p class="page-subtitle">고객님의 주문 내역을 확인하실 수 있습니다</p>
        </div>
        
        <!-- 메인 탭 -->
        <div class="main-tabs">
            <button class="main-tab active" data-tab="orders">주문내역조회 (4)</button>
            <button class="main-tab" data-tab="cancelled">취소/환불 내역 (0)</button>
        </div>
        
		<!-- 주문내역조회 탭 -->
        <div class="tab-content active" id="orders-content">
            <div class="filter-section">
                <div class="filter-header">
                    <div class="date-filter">
                        <div class="period-buttons">
                            <button class="period-btn" onclick="setPeriod(0, this)">오늘</button>
                            <button class="period-btn" onclick="setPeriod(7, this)">1주일</button>
                            <button class="period-btn" onclick="setPeriod(30, this)">1개월</button>
                            <button class="period-btn" onclick="setPeriod(90, this)">3개월</button>
                            <button class="period-btn" onclick="setPeriod(180, this)">6개월</button>
                        </div>
                        <input type="date" class="date-input" id="startDate" value="2025-07-01">
                        <span class="date-separator">~</span>
                        <input type="date" class="date-input" id="endDate" value="2025-10-10">
                        <button class="btn-search" onclick="searchByDate()">조회</button>
                    </div>
                </div>
                <div class="filter-notice">
                    · 기간 버튼을 선택하거나 날짜를 직접 입력하여 주문내역을 조회할 수 있습니다.<br>
                    · 각 주문의 상세 정보는 주문상세 버튼을 통해 확인하실 수 있습니다.
                </div>
            </div>

            <div class="section-title">주문 상품 정보</div>
            <div id="orderList"></div>
        </div>

        <!-- 취소/환불 내역 탭 -->
        <div class="tab-content" id="cancelled-content">
            <div class="filter-section">
                <div class="filter-header">
                    <div class="date-filter">
                        <div class="period-buttons">
                            <button class="period-btn" onclick="setPeriod(0, this)">오늘</button>
                            <button class="period-btn" onclick="setPeriod(7, this)">1주일</button>
                            <button class="period-btn" onclick="setPeriod(30, this)">1개월</button>
                            <button class="period-btn" active" onclick="setPeriod(90, this)">3개월</button>
                            <button class="period-btn" onclick="setPeriod(180, this)">6개월</button>
                        </div>
                        <input type="date" class="date-input" value="2025-07-01">
                        <span class="date-separator">~</span>
                        <input type="date" class="date-input" value="2025-10-10">
                        <button class="btn-search">조회</button>
                    </div>
                </div>
                <div class="filter-notice">
                    · 기간 버튼을 선택하거나 날짜를 직접 입력하여 취소/환불 내역을 조회할 수 있습니다.<br>
                    · 취소 및 환불 처리 상태는 주문상세 버튼에서 확인하실 수 있습니다.
                </div>
            </div>

            <div class="section-title">취소/환불</div>
            <div id="cancelledList"></div>
            <div id="cancelledEmpty" class="empty-state">
                <div class="empty-icon">📋</div>
                <h3 class="empty-title">취소/환불 내역이 없습니다</h3>
                <p class="empty-text">취소하거나 환불한 상품이 없습니다</p>
            </div>
        </div>
    </div>
        
        <!-- 필터 섹션 -->
        <div class="filter-section">
            <div class="filter-tabs">
                <button class="filter-tab active" data-filter="all">전체</button>
                <button class="filter-tab" data-filter="preparing">상품준비중</button>
                <button class="filter-tab" data-filter="shipping">배송중</button>
                <button class="filter-tab" data-filter="delivered">배송완료</button>
                <button class="filter-tab" data-filter="cancelled">취소/환불</button>
            </div>
        </div>

        <!-- 주문 목록 -->
        <div id="orderList"></div>
    </div>

    <!-- 환불 모달 -->
    <div class="modal" id="refundModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">환불 신청</h2>
                <button class="close-btn" onclick="closeRefundModal()">&times;</button>
            </div>

            <div class="alert alert-warning">
                	환불 신청 후에는 취소가 불가능합니다. 신중하게 작성해주세요.
            </div>

            <div class="refund-product" id="refundProductInfo"></div>

            <form id="refundForm">
                <div class="form-group">
                    <label class="form-label">환불 사유</label>
                    <select class="form-select" id="refundReason" required>
                        <option value="">선택해주세요</option>
                        <option value="단순변심">단순 변심</option>
                        <option value="상품불량">상품 불량/파손</option>
                        <option value="오배송">오배송</option>
                        <option value="상품정보상이">상품 정보 상이</option>
                        <option value="배송지연">배송 지연</option>
                        <option value="기타">기타</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">상세 사유</label>
                    <textarea class="form-textarea" id="refundDetail" placeholder="환불 사유를 자세히 작성해주세요" required></textarea>
                </div>

                <div class="refund-info">
                    <div class="refund-info-title">환불 예상 금액</div>
                    <div class="refund-info-item">
                        <span>주문 금액</span>
                        <span id="refundOriginalPrice">0원</span>
                    </div>
                    <div class="refund-info-item">
                        <span>배송비 환불</span>
                        <span id="refundShippingFee">0원</span>
                    </div>
                    <div class="refund-info-total">
                        <span>총 환불 금액</span>
                        <span id="refundTotalAmount">0원</span>
                    </div>
                </div>

                <div class="modal-buttons">
                    <button type="button" class="modal-btn modal-btn-cancel" onclick="closeRefundModal()">취소</button>
                    <button type="submit" class="modal-btn modal-btn-submit">환불 신청하기</button>
                </div>
            </form>
        </div>
    </div>

    <!-- 주문상세 모달 -->
    <div class="modal" id="detailModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">주문 상세</h2>
                <button class="close-btn" onclick="closeDetailModal()">&times;</button>
            </div>

            <div id="detailContent">
                <!-- 주문 정보 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">주문 정보</h3>
                    <div class="detail-item">
                        <span class="detail-label">주문번호</span>
                        <span class="detail-value" id="detailOrderNumber"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">주문일시</span>
                        <span class="detail-value" id="detailOrderDate"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">주문상태</span>
                        <span class="detail-value" id="detailOrderStatus"></span>
                    </div>
                </div>

                <!-- 상품 정보 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">상품 정보</h3>
                    <div id="detailProductInfo"></div>
                </div>

                <!-- 배송 정보 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">배송 정보</h3>
                    <div class="detail-item">
                        <span class="detail-label">수령인</span>
                        <span class="detail-value" id="detailRecipient"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">연락처</span>
                        <span class="detail-value" id="detailPhone"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">배송지</span>
                        <span class="detail-value" id="detailAddress"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">배송 요청사항</span>
                        <span class="detail-value" id="detailRequest"></span>
                    </div>
                </div>

                <!-- 결제 정보 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">결제 정보</h3>
                    <div class="price-summary">
                        <div class="price-row">
                            <span>상품금액</span>
                            <span id="detailProductPrice"></span>
                        </div>
                        <div class="price-row">
                            <span>배송비</span>
                            <span id="detailShippingPrice"></span>
                        </div>
                        <div class="price-row total">
                            <span>총 결제금액</span>
                            <span id="detailTotalPrice"></span>
                        </div>
                        <div class="detail-item" style="margin-top: 15px;">
                            <span class="detail-label">결제방법</span>
                            <span class="detail-value" id="detailPaymentMethod"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-buttons">
                <button type="button" class="modal-btn modal-btn-cancel" onclick="closeDetailModal()">닫기</button>
            </div>
        </div>
    </div>

    <!-- 배송조회 모달 -->
    <div class="modal" id="trackingModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">배송 조회</h2>
                <button class="close-btn" onclick="closeTrackingModal()">&times;</button>
            </div>

            <div id="trackingContent">
                <!-- 상품 정보 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">상품 정보</h3>
                    <div id="trackingProductInfo"></div>
                </div>

                <!-- 배송 정보 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">배송 정보</h3>
                    <div class="detail-item">
                        <span class="detail-label">택배사</span>
                        <span class="detail-value" id="trackingCompany"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">운송장번호</span>
                        <span class="detail-value" id="trackingNumber"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">수령인</span>
                        <span class="detail-value" id="trackingRecipient"></span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">배송지</span>
                        <span class="detail-value" id="trackingAddress"></span>
                    </div>
                </div>

                <!-- 배송 추적 -->
                <div class="detail-section">
                    <h3 class="detail-section-title">배송 추적</h3>
                    <div id="trackingSteps"></div>
                </div>
            </div>

            <div class="modal-buttons">
                <button type="button" class="modal-btn modal-btn-cancel" onclick="closeTrackingModal()">닫기</button>
            </div>
        </div>
    </div>

    <script>
 // 기간 선택 함수
	    function setPeriod(days, button) {
	        // 같은 탭 내의 모든 기간 버튼 찾기
	        var parentFilter = button.closest('.filter-section');
	        var allButtons = parentFilter.querySelectorAll('.period-btn');
	        
	        // 모든 버튼의 active 클래스 제거
	        for (var i = 0; i < allButtons.length; i++) {
	            allButtons[i].classList.remove('active');
	        }
	        
	        // 클릭한 버튼에 active 클래스 추가
	        button.classList.add('active');
	        
	        // 날짜 계산
	        var endDate = new Date();
	        var startDate = new Date();
	        startDate.setDate(startDate.getDate() - days);
	        
	        // 날짜 형식 변환 (YYYY-MM-DD)
	        var endDateStr = endDate.toISOString().split('T')[0];
	        var startDateStr = startDate.toISOString().split('T')[0];
	        
	        // 현재 탭에 맞는 input 찾기
	        var startInput = parentFilter.querySelector('input[type="date"]');
	        var endInput = parentFilter.querySelectorAll('input[type="date"]')[1];
	        
	        // input 값 설정
	        if (startInput) startInput.value = startDateStr;
	        if (endInput) endInput.value = endDateStr;
	    }
	    
	    // 조회 버튼 클릭 함수
	    function searchByDate() {
	        var startDate = document.getElementById('startDate').value;
	        var endDate = document.getElementById('endDate').value;
	        
	        if (!startDate || !endDate) {
	            alert('날짜를 선택해주세요.');
	            return;
	        }
	        
	        console.log('조회 기간:', startDate, '~', endDate);
	        alert('조회 기간: ' + startDate + ' ~ ' + endDate);
	    }
    
	    var orders = [
	    	{
	            id: '20251008001',
	            date: '2025.10.08',
	            productName: '무선 블루투스 이어폰 프리미엄',
	            options: '색상: 화이트 / 케이스 포함',
	            quantity: 1,
	            price: 89000,
	            image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop',
	            status: 'shipping',
	            statusText: '배송중',
	            shippingFee: 3000,
	            recipient: '홍길동',
	            phone: '010-1234-5678',
	            address: '서울시 강남구 테헤란로 123',
	            request: '문 앞에 놓아주세요',
	            paymentMethod: '신용카드',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.08 14:30', active: false },
	                { step: '배송시작', date: '2025.10.09 09:15', active: false },
	                { step: '배송중', date: '2025.10.10 08:30', active: true },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },{
	            id: '20251008001',
	            date: '2025.09.20',
	            productName: '무선 블루투스 이어폰 프리미엄',
	            options: '색상: 화이트 / 케이스 포함',
	            quantity: 1,
	            price: 89000,
	            image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop',
	            status: 'delivered',
	            statusText: '배송완료',
	            shippingFee: 3000,
	            recipient: '홍길동',
	            phone: '010-1234-5678',
	            address: '서울시 강남구 테헤란로 123',
	            request: '문 앞에 놓아주세요',
	            paymentMethod: '신용카드',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.09.20 14:30', active: false },
	                { step: '배송시작', date: '2025.09.21 09:15', active: false },
	                { step: '배송중', date: '2025.09.22 08:30', active: false },
	                { step: '배송완료', date: '2025.09.22 16:45', active: true }
	            ]
	        },

	        // 2. 배송중 - 패션
	        {
	            id: '20251008002',
	            date: '2025.10.05',
	            productName: '나이키 에어맥스 97 트리플 화이트',
	            options: '사이즈: 270mm / 색상: 화이트',
	            quantity: 1,
	            price: 219000,
	            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
	            status: 'shipping',
	            statusText: '배송중',
	            shippingFee: 0,
	            recipient: '김영희',
	            phone: '010-2345-6789',
	            address: '서울시 송파구 올림픽로 300, 101동 1205호',
	            request: '배송 전 연락 부탁드립니다',
	            paymentMethod: '카카오페이',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.05 11:20', active: false },
	                { step: '배송시작', date: '2025.10.06 08:00', active: false },
	                { step: '배송중', date: '2025.10.08 13:25', active: true },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 3. 배송시작 - 뷰티
	        {
	            id: '20251008003',
	            date: '2025.10.07',
	            productName: '설화수 자음생 에센스 60ml',
	            options: '용량: 60ml / 정품',
	            quantity: 2,
	            price: 360000,
	            image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop',
	            status: 'preparing',
	            statusText: '배송시작',
	            shippingFee: 0,
	            recipient: '박민수',
	            phone: '010-3456-7890',
	            address: '부산시 해운대구 해운대해변로 264',
	            request: '부재 시 경비실에 맡겨주세요',
	            paymentMethod: '네이버페이',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.07 15:45', active: false },
	                { step: '배송시작', date: '2025.10.08 07:30', active: true },
	                { step: '배송중', date: '', active: false },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 4. 상품준비중 - 전자제품
	        {
	            id: '20251008004',
	            date: '2025.10.08',
	            productName: '애플 워치 시리즈 9 GPS 45mm',
	            options: '색상: 미드나잇 / GPS 모델',
	            quantity: 1,
	            price: 599000,
	            image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop',
	            status: 'pending',
	            statusText: '상품준비중',
	            shippingFee: 0,
	            recipient: '최지현',
	            phone: '010-4567-8901',
	            address: '인천시 연수구 컨벤시아대로 200, 205동 805호',
	            request: '빠른 배송 부탁드립니다',
	            paymentMethod: '신용카드',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.08 10:15', active: true },
	                { step: '배송시작', date: '', active: false },
	                { step: '배송중', date: '', active: false },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 5. 배송완료 - 식품
	        {
	            id: '20251008005',
	            date: '2025.09.25',
	            productName: '스타벅스 파이크 플레이스 홀빈 340g',
	            options: '원두 타입: 홀빈 / 용량: 340g x 3개',
	            quantity: 3,
	            price: 56700,
	            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
	            status: 'delivered',
	            statusText: '배송완료',
	            shippingFee: 3000,
	            recipient: '정수진',
	            phone: '010-5678-9012',
	            address: '대전시 유성구 대학로 99, 한빛아파트 102동 501호',
	            request: '직접 수령하겠습니다',
	            paymentMethod: '토스',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.09.25 13:00', active: false },
	                { step: '배송시작', date: '2025.09.26 06:30', active: false },
	                { step: '배송중', date: '2025.09.27 11:20', active: false },
	                { step: '배송완료', date: '2025.09.27 18:35', active: true }
	            ]
	        },

	        // 6. 배송중 - 생활용품
	        {
	            id: '20251008006',
	            date: '2025.10.06',
	            productName: '다이슨 V15 디텍트 무선청소기',
	            options: '색상: 옐로우 / 2년 무상 A/S',
	            quantity: 1,
	            price: 1149000,
	            image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&h=300&fit=crop',
	            status: 'shipping',
	            statusText: '배송중',
	            shippingFee: 0,
	            recipient: '강태현',
	            phone: '010-6789-0123',
	            address: '광주시 서구 상무대로 1141',
	            request: '택배함에 넣어주세요',
	            paymentMethod: '무통장입금',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.06 09:40', active: false },
	                { step: '배송시작', date: '2025.10.07 08:15', active: false },
	                { step: '배송중', date: '2025.10.08 14:50', active: true },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 7. 배송완료 - 패션
	        {
	            id: '20251008007',
	            date: '2025.09.18',
	            productName: '캔버스 크로스백 미니 숄더백',
	            options: '색상: 베이지 / 사이즈: Free',
	            quantity: 2,
	            price: 90000,
	            image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop',
	            status: 'delivered',
	            statusText: '배송완료',
	            shippingFee: 0,
	            recipient: '윤서아',
	            phone: '010-7890-1234',
	            address: '대구시 중구 동성로 55, 현대백화점 근처',
	            request: '부재 시 전화 주세요',
	            paymentMethod: '신용카드',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.09.18 16:20', active: false },
	                { step: '배송시작', date: '2025.09.19 07:45', active: false },
	                { step: '배송중', date: '2025.09.20 10:15', active: false },
	                { step: '배송완료', date: '2025.09.20 15:30', active: true }
	            ]
	        },

	        // 8. 상품준비중 - 뷰티
	        {
	            id: '20251008008',
	            date: '2025.10.08',
	            productName: '조말론 잉글리쉬 페어 프리지아 100ml',
	            options: '용량: 100ml / 정품 박스 포장',
	            quantity: 1,
	            price: 198000,
	            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
	            status: 'pending',
	            statusText: '상품준비중',
	            shippingFee: 0,
	            recipient: '임하늘',
	            phone: '010-8901-2345',
	            address: '울산시 남구 삼산로 300, 삼산타운 105동 1502호',
	            request: '선물용이니 포장 깔끔하게 부탁드립니다',
	            paymentMethod: '카카오페이',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.08 11:50', active: true },
	                { step: '배송시작', date: '', active: false },
	                { step: '배송중', date: '', active: false },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 9. 배송중 - 전자제품
	        {
	            id: '20251008009',
	            date: '2025.10.04',
	            productName: '맥북 에어 M3 13인치 스페이스 그레이',
	            options: '메모리: 16GB / 저장용량: 512GB',
	            quantity: 1,
	            price: 1690000,
	            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
	            status: 'shipping',
	            statusText: '배송중',
	            shippingFee: 0,
	            recipient: '한준영',
	            phone: '010-9012-3456',
	            address: '세종시 한누리대로 2130, 203동 1808호',
	            request: '도착 시간 확인 후 방문 부탁드립니다',
	            paymentMethod: '신용카드',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.04 14:10', active: false },
	                { step: '배송시작', date: '2025.10.05 08:20', active: false },
	                { step: '배송중', date: '2025.10.08 09:40', active: true },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 10. 배송완료 - 식품
	        {
	            id: '20251008010',
	            date: '2025.09.30',
	            productName: '페레로 로쉐 T30 다이아몬드 선물세트',
	            options: '수량: 30개입 / 선물 포장',
	            quantity: 1,
	            price: 32900,
	            image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=300&fit=crop',
	            status: 'delivered',
	            statusText: '배송완료',
	            shippingFee: 2500,
	            recipient: '송미래',
	            phone: '010-0123-4567',
	            address: '제주시 첨단로 242',
	            request: '문 앞에 놓아주세요',
	            paymentMethod: '네이버페이',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.09.30 10:30', active: false },
	                { step: '배송시작', date: '2025.10.01 07:00', active: false },
	                { step: '배송중', date: '2025.10.02 14:20', active: false },
	                { step: '배송완료', date: '2025.10.03 11:45', active: true }
	            ]
	        },

	        // 11. 배송시작 - 패션
	        {
	            id: '20251008011',
	            date: '2025.10.07',
	            productName: '리바이스 501 오리지널 핏 진',
	            options: '사이즈: 32 / 색상: 인디고',
	            quantity: 1,
	            price: 129000,
	            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
	            status: 'preparing',
	            statusText: '배송시작',
	            shippingFee: 0,
	            recipient: '오세훈',
	            phone: '010-1357-2468',
	            address: '수원시 영통구 광교중앙로 170, 광교푸르지오 108동 2304호',
	            request: '경비실 보관 부탁드립니다',
	            paymentMethod: '토스',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.07 13:25', active: false },
	                { step: '배송시작', date: '2025.10.08 06:40', active: true },
	                { step: '배송중', date: '', active: false },
	                { step: '배송완료', date: '', active: false }
	            ]
	        },

	        // 12. 배송중 - 뷰티
	        {
	            id: '20251008012',
	            date: '2025.10.05',
	            productName: '맥 립스틱 루비 우 컬렉션 세트',
	            options: '구성: 립스틱 5종 세트',
	            quantity: 1,
	            price: 85000,
	            image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
	            status: 'shipping',
	            statusText: '배송중',
	            shippingFee: 0,
	            recipient: '배슬기',
	            phone: '010-2468-1357',
	            address: '안양시 동안구 평촌대로 223번길 45',
	            request: '배송 완료 문자 부탁드립니다',
	            paymentMethod: '신용카드',
	            deliveryTracking: [
	                { step: '상품준비중', date: '2025.10.05 15:10', active: false },
	                { step: '배송시작', date: '2025.10.06 08:50', active: false },
	                { step: '배송중', date: '2025.10.08 12:15', active: true },
	                { step: '배송완료', date: '', active: false }
	            ]
	        }
	    ];

        var currentRefundOrder = null;

        function formatPrice(price) {
            return price.toLocaleString('ko-KR') + '원';
        }

        function renderOrders() {
            var orderList = document.getElementById('orderList');
            var html = '';
            
            for (var i = 0; i < orders.length; i++) {
                var order = orders[i];
                html += '<div class="order-card">';
                html += '<div class="order-header">';
                html += '<div class="order-info">';
                html += '<span class="order-date">📅 ' + order.date + '</span>';
                html += '<span class="order-number">주문번호: ' + order.id + '</span>';
                html += '</div></div>';
                html += '<div class="order-body">';
                html += '<img src="' + order.image + '" alt="' + order.productName + '" class="product-image">';
                html += '<div class="product-details">';
                html += '<h3 class="product-name">' + order.productName + '</h3>';
                html += '<p class="product-options">' + order.options + '</p>';
                html += '<p class="product-quantity">수량: ' + order.quantity + '개</p>';
                html += '<div class="product-price">' + formatPrice(order.price) + '</div>';
                html += '</div>';
                html += '<div class="order-actions">';
                html += '<span class="status-badge status-' + order.status + '">' + order.statusText + '</span>';
                html += '<div class="action-buttons">';
                
                if (order.status === 'delivered') {
                    html += '<button class="btn">⭐ 리뷰 작성</button>';
                    html += '<button class="btn" onclick="openRefundModal(\'' + order.id + '\')">💰 환불신청</button>';
                }
                if (order.status === 'shipping') {
                	html += '<button class="btn btn-primary" onclick="openTrackingModal(\'' + order.id + '\')">🚚 배송조회</button>';
                }
                if (order.status === 'preparing') {
                	html += '<button class="btn" onclick="cancelOrder(\'' + order.id + '\')">❌ 주문취소</button>';
                }
                
                html += '<button class="btn" onclick="openDetailModal(\'' + order.id + '\')">📋 주문상세</button>';
                html += '</div></div></div></div>';
            }
            
            orderList.innerHTML = html;
        }
        
     	// 메인 탭 전환
        var mainTabs = document.querySelectorAll('.main-tab');
        for (var i = 0; i < mainTabs.length; i++) {
            mainTabs[i].addEventListener('click', function() {
                var allMainTabs = document.querySelectorAll('.main-tab');
                for (var j = 0; j < allMainTabs.length; j++) {
                    allMainTabs[j].classList.remove('active');
                }
                
                var allContents = document.querySelectorAll('.tab-content');
                for (var k = 0; k < allContents.length; k++) {
                    allContents[k].classList.remove('active');
                }
                
                this.classList.add('active');
                var tabName = this.getAttribute('data-tab');
                document.getElementById(tabName + '-content').classList.add('active');
                
             	// 취소/환불 탭 클릭 시 렌더링
                if (tabName === 'cancelled') {
                    renderCancelledOrders();
                }
            });
        }

     	// 취소/환불 주문 렌더링
        function renderCancelledOrders() {
		    var cancelledList = document.getElementById('cancelledList');
		    var cancelledEmpty = document.getElementById('cancelledEmpty');
		    var cancelledOrders = orders.filter(function(order) { 
		        return order.status === 'cancelled'; 
		    });
		    
		    if (cancelledOrders.length === 0) {
		        cancelledList.innerHTML = '';
		        cancelledEmpty.style.display = 'block';
		        return;
		    }
		    
		    cancelledEmpty.style.display = 'none';
            
            var html = '';
            for (var i = 0; i < cancelledOrders.length; i++) {
                var order = cancelledOrders[i];
                html += '<div class="order-card">';
                html += '<div class="order-header">';
                html += '<div class="order-info">';
                html += '<span class="order-date">📅 ' + order.date + '</span>';
                html += '<span class="order-number">주문번호: ' + order.id + '</span>';
                html += '</div></div>';
                html += '<div class="order-body">';
                html += '<img src="' + order.image + '" alt="' + order.productName + '" class="product-image">';
                html += '<div class="product-details">';
                html += '<h3 class="product-name">' + order.productName + '</h3>';
                html += '<p class="product-options">' + order.options + '</p>';
                html += '<p class="product-quantity">수량: ' + order.quantity + '개</p>';
                html += '<div class="product-price">' + formatPrice(order.price) + '</div>';
                html += '</div>';
                html += '<div class="order-actions">';
                html += '<span class="status-badge status-cancelled">' + order.statusText + '</span>';
                html += '<div class="action-buttons">';
                html += '<button class="btn" onclick="openDetailModal(\'' + order.id + '\')">📋 주문상세</button>';
                html += '</div></div></div></div>';
            }
            
            cancelledList.innerHTML = html;
        }
        
        // 필터 탭 이벤트
        var tabs = document.querySelectorAll('.filter-tab');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function() {
                var allTabs = document.querySelectorAll('.filter-tab');
                for (var j = 0; j < allTabs.length; j++) {
                    allTabs[j].classList.remove('active');
                }
                this.classList.add('active');
                renderOrders(this.getAttribute('data-filter'));
            });
        }

        // 환불 모달 열기
        function openRefundModal(orderId) {
            currentRefundOrder = null;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].id === orderId) {
                    currentRefundOrder = orders[i];
                    break;
                }
            }
            
            if (!currentRefundOrder) return;

            var html = '<img src="' + currentRefundOrder.image + '" alt="' + currentRefundOrder.productName + '">';
            html += '<div class="refund-product-info">';
            html += '<div class="refund-product-name">' + currentRefundOrder.productName + '</div>';
            html += '<div class="product-options">' + currentRefundOrder.options + '</div>';
            html += '<div class="product-quantity">수량: ' + currentRefundOrder.quantity + '개</div>';
            html += '<div class="refund-product-price">' + formatPrice(currentRefundOrder.price) + '</div>';
            html += '</div>';
            
            document.getElementById('refundProductInfo').innerHTML = html;

            var shippingFeeRefund = currentRefundOrder.shippingFee;
            var totalRefund = currentRefundOrder.price + shippingFeeRefund;

            document.getElementById('refundOriginalPrice').textContent = formatPrice(currentRefundOrder.price);
            document.getElementById('refundShippingFee').textContent = formatPrice(shippingFeeRefund);
            document.getElementById('refundTotalAmount').textContent = formatPrice(totalRefund);

            document.getElementById('refundModal').classList.add('active');
        }

        // 환불 모달 닫기
        function closeRefundModal() {
            document.getElementById('refundModal').classList.remove('active');
            document.getElementById('refundForm').reset();
            currentRefundOrder = null;
        }

        // 환불 신청 처리
        document.getElementById('refundForm').addEventListener('submit', function(e) {
            e.preventDefault();

            var reason = document.getElementById('refundReason').value;
            var detail = document.getElementById('refundDetail').value;

            if (!reason || !detail) {
                alert('모든 항목을 입력해주세요.');
                return;
            }

            var refundData = {
                orderId: currentRefundOrder.id,
                productName: currentRefundOrder.productName,
                reason: reason,
                detail: detail,
                refundAmount: currentRefundOrder.price + currentRefundOrder.shippingFee,
                requestDate: new Date().toISOString()
            };

            console.log('환불 신청 데이터:', refundData);

            for (var i = 0; i < orders.length; i++) {
                if (orders[i].id === currentRefundOrder.id) {
                    orders[i].status = 'cancelled';
                    orders[i].statusText = '환불처리중';
                    break;
                }
            }

            alert('✅ 환불 신청이 완료되었습니다.\n처리 완료까지 3-5일 정도 소요됩니다.');
            closeRefundModal();
            renderOrders('all');
        });

        // 모달 외부 클릭시 닫기
        document.getElementById('refundModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeRefundModal();
            }
        });

        // 주문상세 모달 열기
        function openDetailModal(orderId) {
            var order = null;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].id === orderId) {
                    order = orders[i];
                    break;
                }
            }
            
            if (!order) return;

            // 주문 정보
            document.getElementById('detailOrderNumber').textContent = order.id;
            document.getElementById('detailOrderDate').textContent = order.date;
            document.getElementById('detailOrderStatus').textContent = order.statusText;

            // 상품 정보
            var productHtml = '<div class="detail-product">';
            productHtml += '<img src="' + order.image + '" alt="' + order.productName + '">';
            productHtml += '<div class="detail-product-info">';
            productHtml += '<div class="detail-product-name">' + order.productName + '</div>';
            productHtml += '<div class="detail-product-option">' + order.options + '</div>';
            productHtml += '<div class="detail-product-option">수량: ' + order.quantity + '개</div>';
            productHtml += '<div class="detail-product-price">' + formatPrice(order.price) + '</div>';
            productHtml += '</div></div>';
            document.getElementById('detailProductInfo').innerHTML = productHtml;

            // 배송 정보
            document.getElementById('detailRecipient').textContent = order.recipient;
            document.getElementById('detailPhone').textContent = order.phone;
            document.getElementById('detailAddress').textContent = order.address;
            document.getElementById('detailRequest').textContent = order.request;

            // 결제 정보
            var totalPrice = order.price + order.shippingFee;
            document.getElementById('detailProductPrice').textContent = formatPrice(order.price);
            document.getElementById('detailShippingPrice').textContent = formatPrice(order.shippingFee);
            document.getElementById('detailTotalPrice').textContent = formatPrice(totalPrice);
            document.getElementById('detailPaymentMethod').textContent = order.paymentMethod;

            document.getElementById('detailModal').classList.add('active');
        }

        // 주문상세 모달 닫기
        function closeDetailModal() {
            document.getElementById('detailModal').classList.remove('active');
        }

        // 주문상세 모달 외부 클릭시 닫기
        document.getElementById('detailModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDetailModal();
            }
        });

        // 주문 취소 기능
        function cancelOrder(orderId) {
            var order = null;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].id === orderId) {
                    order = orders[i];
                    break;
                }
            }
            
            if (!order) return;

            // 취소 확인
            var confirmMsg = '주문을 취소하시겠습니까?\n\n';
            confirmMsg += '주문번호: ' + order.id + '\n';
            confirmMsg += '상품명: ' + order.productName + '\n';
            confirmMsg += '결제금액: ' + formatPrice(order.price + order.shippingFee);
            
            if (!confirm(confirmMsg)) {
                return;
            }

            // 주문 취소 처리
            var cancelData = {
                orderId: order.id,
                productName: order.productName,
                cancelAmount: order.price + order.shippingFee,
                cancelDate: new Date().toISOString()
            };

            console.log('주문 취소 데이터:', cancelData);

            // 주문 상태 업데이트
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].id === orderId) {
                    orders[i].status = 'cancelled';
                    orders[i].statusText = '주문취소';
                    break;
                }
            }

            alert('✅ 주문이 취소되었습니다.\n환불 처리까지 3-5일 정도 소요됩니다.');
            renderOrders('all');
        }
        
        // 배송조회 모달 열기
        function openTrackingModal(orderId) {
            var order = null;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].id === orderId) {
                    order = orders[i];
                    break;
                }
            }
            
            if (!order) return;

            // 상품 정보
            var productHtml = '<div class="detail-product">';
            productHtml += '<img src="' + order.image + '" alt="' + order.productName + '">';
            productHtml += '<div class="detail-product-info">';
            productHtml += '<div class="detail-product-name">' + order.productName + '</div>';
            productHtml += '<div class="detail-product-option">' + order.options + '</div>';
            productHtml += '<div class="detail-product-option">수량: ' + order.quantity + '개</div>';
            productHtml += '</div></div>';
            document.getElementById('trackingProductInfo').innerHTML = productHtml;

            // 배송 정보
            document.getElementById('trackingCompany').textContent = order.trackingCompany || '정보 없음';
            document.getElementById('trackingNumber').textContent = order.trackingNumber || '정보 없음';
            document.getElementById('trackingRecipient').textContent = order.recipient;
            document.getElementById('trackingAddress').textContent = order.address;

            // 배송 추적
            var trackingHtml = '';
            for (var i = 0; i < order.deliveryTracking.length; i++) {
                var track = order.deliveryTracking[i];
                trackingHtml += '<div class="delivery-step' + (track.active ? ' active' : '') + '">';
                trackingHtml += '<div class="delivery-step-icon">' + (track.active ? '📍' : '✓') + '</div>';
                trackingHtml += '<div class="delivery-step-info">';
                trackingHtml += '<div class="delivery-step-title">' + track.step + '</div>';
                trackingHtml += '<div class="delivery-step-date">' + (track.date || '예정') + '</div>';
                trackingHtml += '</div></div>';
            }
            document.getElementById('trackingSteps').innerHTML = trackingHtml;

            document.getElementById('trackingModal').classList.add('active');
        }

        // 배송조회 모달 닫기
        function closeTrackingModal() {
            document.getElementById('trackingModal').classList.remove('active');
        }

        // 배송조회 모달 외부 클릭시 닫기
        document.getElementById('trackingModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeTrackingModal();
            }
        });

        // 초기 렌더링
        renderOrders('all');
    </script>
</body>
</html>