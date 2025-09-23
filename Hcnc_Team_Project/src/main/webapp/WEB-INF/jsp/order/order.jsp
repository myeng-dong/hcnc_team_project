<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../layout/headertop.jsp" />
<jsp:include page="../layout/header.jsp" />
<jsp:include page="../layout/menu.jsp" />

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>주문/결제</title>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/order/order.css'/>" />
</head>
<body>
    <!-- Breadcrumb -->
    <div class="breadcrumb">
        <div class="container">
            <div class="breadcrumb-content">
                <a href="#">홈</a> > 
                <a href="#">장바구니</a> > 
                <span class="breadcrumb-current">주문/결제</span>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            <h1>[ O R D E R ]</h1>
            <p class="page-subtitle">주문 정보를 확인하고 결제를 진행해주세요</p>

            <div class="order-layout">
                <!-- Order Main Content -->
                <div class="order-main">
                    <!-- Order Items -->
                    <div class="section">
                        <h2 class="section-title">주문상품 (3개)</h2>
                        
                        <div class="order-item">
                            <div class="item-image">
                                <img src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/gift/pdt/1463/S1726816418034.jpg" alt="왕연필">
                            </div>
                            <div class="item-info">
                                <div class="item-name">대빵만한 왕연필</div>
                                <div class="item-options">색상: 블랙, 사이즈: KING</div>
                                <div class="item-price-info">
                                    <span class="item-quantity">수량: 1개</span>
                                    <span class="item-price">₩19,000</span>
                                </div>
                            </div>
                        </div>

                        <div class="order-item">
                            <div class="item-image">
                                <img src="https://designagit.com/web/product/medium/202108/4b00cc5311cfb2a778bab032c9d77c7e.jpg" alt="지우개">
                            </div>
                            <div class="item-info">
                                <div class="item-name">지우개는 이레이져rrr - 레인보우www</div>
                                <div class="item-options">색상: 랜덤</div>
                                <div class="item-price-info">
                                    <span class="item-quantity">수량: 1개</span>
                                    <span class="item-price">₩1,500</span>
                                </div>
                            </div>
                        </div>

                        <div class="order-item">
                            <div class="item-image">
                                <img src="https://godomall.speedycdn.net/466f5909717083e8e0beb73a4e209060/goods/1000010252/image/detail/register_detail_087.jpg" alt="노트">
                            </div>
                            <div class="item-info">
                                <div class="item-name">산리오 정품 노트 - 김구라</div>
                                <div class="item-options">매수: 50매</div>
                                <div class="item-price-info">
                                    <span class="item-quantity">수량: 2개</span>
                                    <span class="item-price">₩7,000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Shipping Information -->
                    <div class="section">
                        <h2 class="section-title">배송정보</h2>
                        
                        <div class="form-group">
                            <label class="form-label">받는 분 <span class="required">*</span></label>
                            <input type="text" class="form-input" placeholder="받는 분 성함을 입력하세요" value="김자바">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">휴대폰 번호 <span class="required">*</span></label>
                                <input type="tel" class="form-input" placeholder="010-2025-0919" value="010-2025-0919">
                            </div>
                            <div class="form-group">
                                <label class="form-label">일반전화</label>
                                <input type="tel" class="form-input" placeholder="02-123-4567">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">주소 <span class="required">*</span></label>
                            <div class="address-search">
                                <input type="text" class="form-input" placeholder="우편번호" value="12345" readonly>
                                <button class="btn-address" onclick="searchAddress()">주소찾기</button>
                            </div>
                            <input type="text" class="form-input" placeholder="기본주소" value="울산 중구 복산동" readonly style="margin-top: 10px;">
                            <input type="text" class="form-input" placeholder="상세주소를 입력하세요" style="margin-top: 10px;">
                        </div>

                        <div class="form-group">
                            <label class="form-label">배송 요청사항</label>
                            <select class="form-select">
                                <option value="">배송 요청사항을 선택하세요</option>
                                <option value="direct">문앞에 놓아주세요</option>
                                <option value="guard">경비실에 맡겨주세요</option>
                                <option value="call">배송 전 연락주세요</option>
                                <option value="safe">안전한 곳에 놓아주세요</option>
                                <option value="direct_input">직접입력</option>
                            </select>
                        </div>
                    </div>

                    <!-- Payment Method -->
                    <div class="section">
                        <h2 class="section-title">결제수단</h2>
                        
                        <div class="payment-methods">
                            <div class="payment-option">
                                <input type="radio" id="card" name="payment" value="card" checked>
                                <label for="card" class="payment-label">신용카드</label>
                            </div>
                            <div class="payment-option">
                                <input type="radio" id="bank" name="payment" value="bank">
                                <label for="bank" class="payment-label">무통장입금</label>
                            </div>
                            <div class="payment-option">
                                <input type="radio" id="virtual" name="payment" value="virtual">
                                <label for="virtual" class="payment-label">가상계좌</label>
                            </div>
                            <div class="payment-option">
                                <input type="radio" id="phone" name="payment" value="phone">
                                <label for="phone" class="payment-label">휴대폰결제</label>
                            </div>
                            <div class="payment-option">
                                <input type="radio" id="kakao" name="payment" value="kakao">
                                <label for="kakao" class="payment-label">카카오페이</label>
                            </div>
                            <div class="payment-option">
                                	현재코너 <br> 일단 보류 ~v~
                            </div>
                        </div>
                    </div>

                    <!-- Terms Agreement -->
                    <div class="section">
                        <h2 class="section-title">이용약관 동의</h2>
                        
                        <div class="checkbox-group">
                            <div class="checkbox-item">
                                <input type="checkbox" id="agree-all" onchange="toggleAllAgreements()">
                                <label for="agree-all" class="checkbox-label">전체 동의</label>
                            </div>
                            <hr style="margin: 15px 0; border: none; border-top: 1px solid #eee;">
                            <div class="checkbox-item">
                                <input type="checkbox" id="agree-terms" class="individual-agree" required>
                                <label for="agree-terms" class="checkbox-label">구매조건 확인 및 결제진행에 동의 <span class="required">(필수)</span></label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="agree-privacy" class="individual-agree" required>
                                <label for="agree-privacy" class="checkbox-label">개인정보 수집 및 이용에 동의 <span class="required">(필수)</span></label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="agree-provide" class="individual-agree" required>
                                <label for="agree-provide" class="checkbox-label">개인정보 제3자 제공에 동의 <span class="required">(필수)</span></label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="agree-marketing" class="individual-agree">
                                <label for="agree-marketing" class="checkbox-label">마케팅 정보 수신에 동의 (선택)</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order Sidebar -->
                <div class="order-sidebar">
                    <div class="order-summary">
                        <h3 class="summary-title">결제정보</h3>
                        
                        <!-- Coupon Section -->
                        <div class="coupon-section">
                            <label class="form-label">쿠폰 적용</label>
                            <div class="coupon-input">
                                <input type="text" class="form-input" placeholder="쿠폰 번호 입력">
                                <button class="btn-coupon" onclick="applyCoupon()">적용</button>
                            </div>
                        </div>

                        <!-- Points Section -->
                        <div class="points-section">
                            <label class="form-label">적립금 사용</label>
                            <div class="points-info">
                                <span>보유 적립금</span>
                                <span>15,000원</span>
                            </div>
                            <div class="points-input">
                                <input type="number" class="form-input" placeholder="사용할 적립금" min="0" max="15000">
                                <button class="btn-points" onclick="applyPoints()">전액사용</button>
                            </div>
                        </div>

                        <div class="summary-row">
                            <span class="summary-label">상품금액</span>
                            <span class="summary-value">₩27,500</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">배송비</span>
                            <span class="summary-value">₩5,000</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">쿠폰할인</span>
                            <span class="summary-value" style="color: #DC0630;">-₩0</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">적립금사용</span>
                            <span class="summary-value" style="color: #DC0630;">-₩0</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">최종결제금액</span>
                            <span class="summary-value" style="font-size: 20px;">₩32,500</span>
                        </div>

                        <button class="btn btn-primary btn-full" onclick="processPayment()">
                            ₩32,500 결제하기
                        </button>

                        <div class="btn-actions">
                            <button class="btn btn-outline" style="flex: 1;" onclick="goBack()">이전단계</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Success Message -->
    <div id="successMessage" class="success-message">
        결제가 완료되었습니다!
    </div>

    <script>
        // 전체 동의 체크박스
        function toggleAllAgreements() {
            const allAgree = document.getElementById('agree-all');
            const individualAgrees = document.querySelectorAll('.individual-agree');
            
            individualAgrees.forEach(checkbox => {
                checkbox.checked = allAgree.checked;
            });
        }

        // 개별 동의 체크박스 변경 시 전체 동의 상태 업데이트
        document.querySelectorAll('.individual-agree').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const allAgree = document.getElementById('agree-all');
                const individualAgrees = document.querySelectorAll('.individual-agree');
                const allChecked = Array.from(individualAgrees).every(cb => cb.checked);
                allAgree.checked = allChecked;
            });
        });

        // 주소 찾기
        function searchAddress() {
            alert('실제 구현 시 다음 우편번호 API 또는 카카오 주소 API를 사용합니다.');
            // 실제 구현 시 주소 API 연동
        }

        // 쿠폰 적용
        function applyCoupon() {
            const couponInput = document.querySelector('.coupon-input input');
            const couponCode = couponInput.value.trim();
            
            if (!couponCode) {
                alert('쿠폰 번호를 입력해주세요.');
                return;
            }

            // 로딩 상태
            const btn = event.target;
            btn.classList.add('loading');
            
            // API 호출 시뮬레이션
            setTimeout(() => {
                btn.classList.remove('loading');
                
                // 예시 쿠폰 적용
                if (couponCode === 'WELCOME10') {
                    applyCouponDiscount(10000);
                    showSuccessMessage('쿠폰이 적용되었습니다! 10,000원 할인');
                } else {
                    alert('유효하지 않은 쿠폰 번호입니다.');
                }
            }, 1000);
        }

        // 적립금 전액 사용
        function applyPoints() {
            const pointsInput = document.querySelector('.points-input input');
            pointsInput.value = '15000';
            applyPointsDiscount(15000);
            showSuccessMessage('적립금 15,000원이 적용되었습니다!');
        }

        // 쿠폰 할인 적용
        function applyCouponDiscount(amount) {
            const couponRow = document.querySelectorAll('.summary-row')[2];
            couponRow.querySelector('.summary-value').textContent = `-₩${amount.toLocaleString()}`;
            updateFinalAmount();
        }

        // 적립금 할인 적용
        function applyPointsDiscount(amount) {
            const pointsRow = document.querySelectorAll('.summary-row')[3];
            pointsRow.querySelector('.summary-value').textContent = `-₩${amount.toLocaleString()}`;
            updateFinalAmount();
        }

        // 최종 금액 업데이트
        function updateFinalAmount() {
            const productAmount = 338000;
            const shippingFee = 3000;
            
            const couponDiscount = parseInt(document.querySelectorAll('.summary-row')[2]
                .querySelector('.summary-value').textContent.replace(/[^\d]/g, '')) || 0;
            const pointsDiscount = parseInt(document.querySelectorAll('.summary-row')[3]
                .querySelector('.summary-value').textContent.replace(/[^\d]/g, '')) || 0;
            
            const finalAmount = productAmount + shippingFee - couponDiscount - pointsDiscount;
            
            const finalRow = document.querySelectorAll('.summary-row')[4];
            finalRow.querySelector('.summary-value').textContent = `₩${finalAmount.toLocaleString()}`;
            
            const paymentBtn = document.querySelector('.btn-primary.btn-full');
            paymentBtn.textContent = `₩${finalAmount.toLocaleString()} 결제하기`;
        }

        // 결제 처리
        function processPayment() {
            // 필수 동의 항목 확인
            const requiredAgreements = document.querySelectorAll('input[required]');
            let allAgreed = true;
            
            requiredAgreements.forEach(checkbox => {
                if (!checkbox.checked) {
                    allAgreed = false;
                }
            });
            
            if (!allAgreed) {
                alert('필수 이용약관에 동의해주세요.');
                return;
            }

            // 배송 정보 확인
            const receiverName = document.querySelector('input[placeholder="받는 분 성함을 입력하세요"]').value;
            const phoneNumber = document.querySelector('input[placeholder="010-1234-5678"]').value;
            const detailAddress = document.querySelector('input[placeholder="상세주소를 입력하세요"]').value;
            
            if (!receiverName || !phoneNumber || !detailAddress) {
                alert('배송 정보를 모두 입력해주세요.');
                return;
            }

            // 결제 방법 확인
            const selectedPayment = document.querySelector('input[name="payment"]:checked');
            if (!selectedPayment) {
                alert('결제 방법을 선택해주세요.');
                return;
            }

            // 로딩 상태
            const paymentBtn = document.querySelector('.btn-primary.btn-full');
            const originalText = paymentBtn.textContent;
            paymentBtn.classList.add('loading');
            paymentBtn.disabled = true;

            // 결제 처리 시뮬레이션
            setTimeout(() => {
                // 실제 구현 시 결제 API 호출
                // 예: PG사 결제 모듈 연동 (아임포트, 토스페이먼츠 등)
                
                paymentBtn.classList.remove('loading');
                paymentBtn.disabled = false;
                paymentBtn.textContent = originalText;
                
                // 성공 시 주문 완료 페이지로 이동
                showSuccessMessage('결제가 완료되었습니다!');
                
                setTimeout(() => {
                    // 주문 완료 페이지로 리다이렉트
                    // window.location.href = '/order/complete?orderNo=ORDER20241209001';
                    alert('주문이 완료되었습니다. 주문번호: ORDER20241209001');
                }, 2000);

                // 실제 구현 시 DB 업데이트 로직
                /*
                INSERT INTO ORDERS (ORDER_NO, MEMBER_ID, TOTAL_AMOUNT, ORDER_STATUS, INPUT_DT)
                VALUES (?, ?, ?, 'PAID', NOW());
                
                INSERT INTO ORDER_ITEMS (ORDER_ID, PRODUCT_ID, QUANTITY, PRICE, SUB_TOTAL)
                VALUES (?, ?, ?, ?, ?);
                
                UPDATE PRODUCTS SET STOCK_QUANTITY = STOCK_QUANTITY - ? WHERE PRODUCT_ID = ?;
                */
                
            }, 2000);
        }

        // 이전 단계로
        function goBack() {
            if (confirm('이전 단계로 돌아가시겠습니까? 입력한 정보가 저장되지 않을 수 있습니다.')) {
                window.history.back();
                // 또는 특정 URL로 리다이렉트
                // window.location.href = '/cart';
            }
        }

        // 성공 메시지 표시
        function showSuccessMessage(message) {
            const msgElement = document.getElementById('successMessage');
            msgElement.textContent = message;
            msgElement.classList.add('show');
            
            setTimeout(() => {
                msgElement.classList.remove('show');
            }, 3000);
        }

        // 배송 요청사항 직접입력 처리
        document.querySelector('select.form-select').addEventListener('change', function() {
            if (this.value === 'direct_input') {
                const customInput = document.createElement('input');
                customInput.type = 'text';
                customInput.className = 'form-input';
                customInput.placeholder = '배송 요청사항을 직접 입력하세요';
                customInput.style.marginTop = '10px';
                
                // 기존 직접입력 필드가 있으면 제거
                const existing = this.parentNode.querySelector('input[placeholder*="직접 입력"]');
                if (existing) {
                    existing.remove();
                }
                
                this.parentNode.appendChild(customInput);
            } else {
                // 직접입력 필드 제거
                const existing = this.parentNode.querySelector('input[placeholder*="직접 입력"]');
                if (existing) {
                    existing.remove();
                }
            }
        });

        // 결제 방법 변경 시 추가 입력 필드 표시
        document.querySelectorAll('input[name="payment"]').forEach(radio => {
            radio.addEventListener('change', function() {
                // 기존 추가 입력 필드 제거
                const existingFields = document.querySelectorAll('.payment-additional-fields');
                existingFields.forEach(field => field.remove());
                
                const paymentSection = document.querySelector('.section:has(.payment-methods)');
                
                if (this.value === 'bank') {
                    // 무통장입금 선택 시 은행 선택 필드 추가
                    const bankField = document.createElement('div');
                    bankField.className = 'payment-additional-fields';
                    bankField.style.marginTop = '20px';
                    bankField.innerHTML = `
                        <div class="form-group">
                            <label class="form-label">입금은행 선택 <span class="required">*</span></label>
                            <select class="form-select">
                                <option value="">은행을 선택하세요</option>
                                <option value="kb">KB국민은행</option>
                                <option value="shinhan">신한은행</option>
                                <option value="woori">우리은행</option>
                                <option value="hana">하나은행</option>
                                <option value="nh">농협은행</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">입금자명 <span class="required">*</span></label>
                            <input type="text" class="form-input" placeholder="입금자명을 입력하세요">
                        </div>
                    `;
                    paymentSection.appendChild(bankField);
                } else if (this.value === 'card') {
                    // 신용카드 선택 시 할부 선택 필드 추가
                    const cardField = document.createElement('div');
                    cardField.className = 'payment-additional-fields';
                    cardField.style.marginTop = '20px';
                    cardField.innerHTML = `
                        <div class="form-group">
                            <label class="form-label">할부 선택</label>
                            <select class="form-select">
                                <option value="0">일시불</option>
                                <option value="2">2개월</option>
                                <option value="3">3개월</option>
                                <option value="6">6개월</option>
                                <option value="12">12개월</option>
                            </select>
                        </div>
                    `;
                    paymentSection.appendChild(cardField);
                }
            });
        });

        // 페이지 로드 시 초기화
        document.addEventListener('DOMContentLoaded', function() {
            // 초기 상태 설정
            updateFinalAmount();
            
            // 폼 유효성 검사를 위한 실시간 확인
            const requiredInputs = document.querySelectorAll('input[required], select[required]');
            requiredInputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (!this.value.trim()) {
                        this.style.borderColor = '#DC0630';
                    } else {
                        this.style.borderColor = '#ddd';
                    }
                });
            });
        });

        // 휴대폰 번호 자동 포맷팅
        document.querySelector('input[type="tel"]').addEventListener('input', function() {
            let value = this.value.replace(/[^\d]/g, '');
            if (value.length >= 11) {
                value = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            } else if (value.length >= 7) {
                value = value.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
            } else if (value.length >= 4) {
                value = value.replace(/(\d{3})(\d+)/, '$1-$2');
            }
            this.value = value;
        });

        // 적립금 입력 시 보유 적립금 초과 방지
        document.querySelector('.points-input input').addEventListener('input', function() {
            const maxPoints = 15000;
            const value = parseInt(this.value) || 0;
            
            if (value > maxPoints) {
                this.value = maxPoints;
                alert('보유 적립금을 초과할 수 없습니다.');
            }
            
            if (value > 0) {
                applyPointsDiscount(value);
            } else {
                applyPointsDiscount(0);
            }
        });
    </script>
</body>
</html>

<jsp:include page="../layout/footer.jsp" />