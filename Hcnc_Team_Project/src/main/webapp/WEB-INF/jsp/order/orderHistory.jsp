<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
    <style>
        /* 레드+화이트 테마: #DC0630 + 화이트 */
        :root {
            --main: #DC0630;
            --bg: #fff;
            --muted: #666;
            --card-radius: 12px;
            --container-width: 1000px;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', 'Apple SD Gothic Neo', '맑은 고딕', sans-serif;
            background: linear-gradient(135deg, #fff 0%, #fff8f9 100%);
            margin: 0;
            padding: 40px;
            display: flex;
            justify-content: center;
            color: #222;
        }
        
        .container {
            width: 100%;
            max-width: var(--container-width);
            background: var(--bg);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 8px 30px rgba(220, 6, 48, 0.08);
        }
        
        header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 18px;
        }
        
        .avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--main);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
        }
        
        h1 {
            font-size: 20px;
            margin: 0;
        }
        
        .sub {
            color: var(--muted);
            font-size: 13px;
        }
        
        /* controls */
        .controls {
            display: flex;
            gap: 12px;
            align-items: center;
            margin: 16px 0 20px;
            flex-wrap: wrap;
        }
        
        .controls input[type=text],
        .controls select,
        .controls input[type=date] {
            padding: 8px 10px;
            border: 1px solid #eee;
            border-radius: 8px;
        }
        
        .controls input[type=text] {
            flex: 1;
            min-width: 200px;
        }
        
        .btn {
            background: var(--main);
            color: white;
            border: none;
            padding: 9px 12px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
        }
        
        .btn:hover {
            background: #b50527;
        }
        
        /* orders list */
        .orders {
            display: grid;
            gap: 12px;
        }
        
        .order-card {
            border: 1px solid #f3d5d9;
            padding: 14px;
            border-radius: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: box-shadow 0.2s;
        }
        
        .order-card:hover {
            box-shadow: 0 4px 12px rgba(220, 6, 48, 0.1);
        }
        
        .order-info {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        
        .order-meta {
            font-size: 13px;
            color: var(--muted);
        }
        
        .order-items {
            font-size: 14px;
            font-weight: 600;
        }
        
        .price {
            font-weight: 700;
            font-size: 16px;
        }
        
        .status {
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            color: white;
            display: inline-block;
        }
        
        .status-ORDER {
            background: #2e7d32;
        }
        
        .status-SHIPPING {
            background: #ff9800;
        }
        
        .status-COMPLETE {
            background: #0A4DA6;
        }
        
        .status-CANCEL {
            background: #757575;
        }
        
        /* modal */
        .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.35);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        
        .modal-backdrop.active {
            display: flex;
        }
        
        .modal {
            background: white;
            padding: 24px;
            border-radius: 12px;
            width: min(720px, 95%);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .modal h3 {
            margin-top: 0;
            color: var(--main);
            font-size: 20px;
            margin-bottom: 20px;
        }
        
        .modal-close {
            float: right;
            background: #eee;
            border: none;
            padding: 6px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
        }
        
        .modal-close:hover {
            background: #ddd;
        }
        
        .detail-row {
            padding: 12px 0;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            gap: 12px;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: 600;
            min-width: 100px;
            color: #333;
        }
        
        .detail-value {
            flex: 1;
            color: #666;
        }
        
        .item-list {
            background: #f8f9fa;
            padding: 12px;
            border-radius: 8px;
            margin: 12px 0;
        }
        
        .item-row {
            padding: 8px 0;
            display: flex;
            justify-content: space-between;
        }
        
        .total-row {
            font-weight: 700;
            font-size: 16px;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 2px solid var(--main);
            color: var(--main);
        }
        
        /* pagination */
        .pagination {
            display: flex;
            gap: 8px;
            justify-content: center;
            margin-top: 20px;
        }
        
        .page-btn {
            padding: 6px 12px;
            border-radius: 8px;
            border: 1px solid #eee;
            cursor: pointer;
            background: white;
            font-size: 14px;
        }
        
        .page-btn:hover {
            background: #f8f9fa;
        }
        
        .page-btn.active {
            background: var(--main);
            color: white;
            border-color: var(--main);
        }
        
        /* empty state */
        .empty-state {
            padding: 60px 24px;
            color: var(--muted);
            text-align: center;
            font-size: 15px;
        }
        
        /* responsive */
        @media (max-width: 640px) {
            body {
                padding: 20px;
            }
            
            header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .order-card {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }
            
            .controls {
                flex-direction: column;
                align-items: stretch;
            }
            
            .controls input[type=text],
            .controls select,
            .controls input[type=date] {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="avatar">👤</div>
            <div>
                <h1>마이페이지 — 주문내역</h1>
                <div class="sub">최근 주문 내역을 확인하고 상태를 조회할 수 있어요.</div>
            </div>
        </header>
        
        <section class="controls">
            <form action="/order/list.do" method="get" style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; width: 100%;">
                <input type="text" name="searchKeyword" placeholder="상품명 또는 주문번호 검색" value="${searchKeyword}" />
                <select name="orderStatus">
                    <option value="">전체 상태</option>
                    <option value="ORDER" ${orderStatus == 'ORDER' ? 'selected' : ''}>주문완료</option>
                    <option value="SHIPPING" ${orderStatus == 'SHIPPING' ? 'selected' : ''}>배송중</option>
                    <option value="COMPLETE" ${orderStatus == 'COMPLETE' ? 'selected' : ''}>배송완료</option>
                    <option value="CANCEL" ${orderStatus == 'CANCEL' ? 'selected' : ''}>취소</option>
                </select>
                <input type="date" name="dateFrom" value="${dateFrom}" />
                <input type="date" name="dateTo" value="${dateTo}" />
                <button type="submit" class="btn">검색</button>
            </form>
        </section>
        
        <section class="orders">
            <c:choose>
                <c:when test="${empty orderList}">
                    <div class="empty-state">
                        주문 내역이 없습니다. 📦
                    </div>
                </c:when>
                <c:otherwise>
                    <c:forEach var="order" items="${orderList}" varStatus="status">
                        <div class="order-card">
                            <div class="order-info">
                                <div style="min-width: 90px;">
                                    <div style="font-weight: 700;">${order.orderNo}</div>
                                    <div class="order-meta">
                                        <fmt:formatDate value="${order.orderDate}" pattern="yyyy-MM-dd" />
                                    </div>
                                </div>
                                <div>
                                    <div class="order-items">${order.productName}</div>
                                    <div class="order-meta">
                                        수량: ${order.quantity}
                                        <c:if test="${not empty order.deliveryAddress}">
                                            · 배송지: ${order.deliveryAddress}
                                        </c:if>
                                    </div>
                                </div>
                            </div>
                            <div style="text-align: right; min-width: 160px;">
                                <div class="price">
                                    ₩<fmt:formatNumber value="${order.totalAmount}" pattern="#,###" />
                                </div>
                                <div style="margin-top: 8px;">
                                    <span class="status status-${order.orderStatus}">
                                        <c:choose>
                                            <c:when test="${order.orderStatus == 'ORDER'}">주문완료</c:when>
                                            <c:when test="${order.orderStatus == 'SHIPPING'}">배송중</c:when>
                                            <c:when test="${order.orderStatus == 'COMPLETE'}">배송완료</c:when>
                                            <c:when test="${order.orderStatus == 'CANCEL'}">취소</c:when>
                                        </c:choose>
                                    </span>
                                </div>
                                <div style="margin-top: 8px;">
                                    <button class="btn" onclick="openDetailModal('${order.orderNo}')">상세보기</button>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                </c:otherwise>
            </c:choose>
        </section>
        
        <!-- Pagination -->
        <c:if test="${not empty orderList && totalPages > 1}">
            <div class="pagination">
                <c:forEach begin="1" end="${totalPages}" var="i">
                    <button class="page-btn ${i == currentPage ? 'active' : ''}" 
                            onclick="location.href='/order/list.do?page=${i}&searchKeyword=${searchKeyword}&orderStatus=${orderStatus}&dateFrom=${dateFrom}&dateTo=${dateTo}'">
                        ${i}
                    </button>
                </c:forEach>
            </div>
        </c:if>
    </div>
    
    <!-- Modal -->
    <div class="modal-backdrop" id="modalBackdrop">
        <div class="modal">
            <button class="modal-close" onclick="closeDetailModal()">닫기</button>
            <h3>주문 상세</h3>
            <div id="detailContent">
                <div class="detail-row">
                    <div class="detail-label">주문번호:</div>
                    <div class="detail-value" id="modalOrderNo">-</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">주문일:</div>
                    <div class="detail-value" id="modalOrderDate">-</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">수령인:</div>
                    <div class="detail-value" id="modalReceiverName">-</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">연락처:</div>
                    <div class="detail-value" id="modalReceiverPhone">-</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">주소:</div>
                    <div class="detail-value" id="modalDeliveryAddress">-</div>
                </div>
                
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                
                <div class="item-list" id="modalItems">
                    <!-- 상품 목록이 여기에 동적으로 추가됩니다 -->
                </div>
                
                <div class="detail-row total-row">
                    <div class="detail-label">합계:</div>
                    <div class="detail-value" id="modalTotalAmount">-</div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">주문상태:</div>
                    <div class="detail-value">
                        <span class="status" id="modalStatus">-</span>
                    </div>
                </div>
                
                <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: flex-end;">
                    <button class="btn" onclick="trackDelivery()" style="background: #0A4DA6;">배송조회</button>
                    <button class="btn" onclick="cancelOrder()" id="cancelBtn" style="background: #757575;">주문취소</button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        var currentOrderNo = '';
        var orderData = {}; // 주문 상세 데이터 저장
        
        function openDetailModal(orderNo) {
            currentOrderNo = orderNo;
            
            // Ajax로 주문 상세 정보 가져오기
            // 실제로는 서버에서 데이터를 받아와야 합니다
            fetch('/order/detail.do?orderNo=' + orderNo)
                .then(function(response) { return response.json(); })
                .then(function(data) {
                    orderData = data;
                    updateModalContent(data);
                    document.getElementById('modalBackdrop').classList.add('active');
                })
                .catch(function(error) {
                    // 에러 발생 시 샘플 데이터로 표시 (개발용)
                    var sampleData = {
                        orderNo: orderNo,
                        orderDate: '2023-10-15',
                        receiverName: '홍길동',
                        receiverPhone: '010-1234-5678',
                        deliveryAddress: '서울시 강남구 테헤란로 123',
                        items: [
                            { name: '샘플상품 1', quantity: 2, price: 50000 },
                            { name: '샘플상품 2', quantity: 1, price: 30000 }
                        ],
                        totalAmount: 130000,
                        orderStatus: 'ORDER',
                        trackingNo: 'CJ-123456789'
                    };
                    orderData = sampleData;
                    updateModalContent(sampleData);
                    document.getElementById('modalBackdrop').classList.add('active');
                });
        }
        
        function updateModalContent(data) {
            document.getElementById('modalOrderNo').textContent = data.orderNo;
            document.getElementById('modalOrderDate').textContent = data.orderDate;
            document.getElementById('modalReceiverName').textContent = data.receiverName;
            document.getElementById('modalReceiverPhone').textContent = data.receiverPhone || '-';
            document.getElementById('modalDeliveryAddress').textContent = data.deliveryAddress;
            
            // 상품 목록
            var itemsHtml = '';
            if (data.items && data.items.length > 0) {
                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    itemsHtml += '<div class="item-row">';
                    itemsHtml += '<div>' + item.name + ' × ' + item.quantity + '</div>';
                    itemsHtml += '<div>₩' + numberWithCommas(item.price) + '</div>';
                    itemsHtml += '</div>';
                }
            } else {
                itemsHtml = '<div style="color: #999;">상품 정보 없음</div>';
            }
            document.getElementById('modalItems').innerHTML = itemsHtml;
            
            // 총액
            document.getElementById('modalTotalAmount').textContent = '₩' + numberWithCommas(data.totalAmount);
            
            // 상태
            var statusText = '';
            var statusClass = '';
            switch(data.orderStatus) {
                case 'ORDER': statusText = '주문완료'; statusClass = 'status-ORDER'; break;
                case 'SHIPPING': statusText = '배송중'; statusClass = 'status-SHIPPING'; break;
                case 'COMPLETE': statusText = '배송완료'; statusClass = 'status-COMPLETE'; break;
                case 'CANCEL': statusText = '취소'; statusClass = 'status-CANCEL'; break;
                default: statusText = data.orderStatus; statusClass = 'status-ORDER';
            }
            var statusEl = document.getElementById('modalStatus');
            statusEl.textContent = statusText;
            statusEl.className = 'status ' + statusClass;
            
            // 취소 버튼 표시 여부
            var cancelBtn = document.getElementById('cancelBtn');
            if (data.orderStatus === 'ORDER') {
                cancelBtn.style.display = 'inline-block';
            } else {
                cancelBtn.style.display = 'none';
            }
        }
        
        function closeDetailModal() {
            document.getElementById('modalBackdrop').classList.remove('active');
        }
        
        function trackDelivery() {
            if (!orderData.trackingNo || orderData.trackingNo === '준비중') {
                alert('운송장 번호가 아직 등록되지 않았습니다.');
                return;
            }
            window.open('/order/tracking.do?trackingNo=' + orderData.trackingNo, '_blank');
        }
        
        function cancelOrder() {
            if (confirm('주문을 취소하시겠습니까?')) {
                location.href = '/order/cancel.do?orderNo=' + currentOrderNo;
            }
        }
        
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        // 모달 배경 클릭 시 닫기
        document.getElementById('modalBackdrop').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDetailModal();
            }
        });
    </script>
</body>
</html>