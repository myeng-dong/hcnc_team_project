<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<jsp:include page="../layout/headertop.jsp" />
<link type="text/css" rel="stylesheet" href="<c:url value='/css/wish/wish.css'/>" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
<style>
	.wishlist-grid.list-view {
	    display: block !important;
	    grid-template-columns: none !important;
	}
	
	.wishlist-grid.list-view .wishlist-item {
	    display: flex !important;
	    align-items: center !important;
	    height: 80px !important;
	    padding: 16px 20px !important;
	    margin-bottom: 1px !important;
	    border-radius: 0 !important;
	    border-bottom: 1px solid #f0f0f0 !important;
	    background: white !important;
	}
	
	.wishlist-grid.list-view .wishlist-item:hover {
	    background: #f8f9fa !important;
	    transform: none !important;
	    box-shadow: none !important;
	}
	
	.wishlist-grid.list-view .item-image {
	    width: 60px !important;
	    height: 60px !important;
	    flex-shrink: 0 !important;
	    margin-right: 16px !important;
	    border-radius: 6px !important;
	}
	
	.wishlist-grid.list-view .wish-remove {
	    position: static !important;
	    width: 28px !important;
	    height: 28px !important;
	    margin-left: 20px !important;
	    opacity: 0.6 !important;
	    font-size: 14px !important;
	    order: 10 !important;
	    background: rgba(220, 6, 48, 0.1) !important;
	    color: #DC0630 !important;
	    border-radius: 50% !important;
	    display: flex !important;
	    align-items: center !important;
	    justify-content: center !important;
	    transition: all 0.3s ease !important;
	}
	
	.wishlist-grid.list-view .item-info {
	    display: flex !important;
	    align-items: center !important;
	    flex: 1 !important;
	    padding: 0 !important;
	    gap: 20px !important;
	    flex-direction: row !important;
	}
	
	.wishlist-grid.list-view .item-details {
	    flex: 1 !important;
	    min-width: 200px !important;
	}
	
	.wishlist-grid.list-view .item-name {
	    font-size: 15px !important;
	    font-weight: 600 !important;
	    margin: 0 0 4px 0 !important;
	    height: auto !important;
	    color: #333 !important;
	}
	
	.wishlist-grid.list-view .item-category {
	    font-size: 11px !important;
	    color: #888 !important;
	    margin: 0 !important;
	    text-transform: uppercase !important;
	}

	.wishlist-grid.list-view .item-price {
	    min-width: 140px !important;
	    margin: 0 !important;
	    text-align: right !important;
	    display: flex !important;
	    flex-direction: column !important;
	    align-items: flex-end !important;
	    justify-content: center !important;
	    gap: 4px !important;
	    line-height: 1.2 !important;
	}
	
	.wishlist-grid.list-view .current-price {
	    font-size: 15px !important;
	    font-weight: 700 !important;
	    color: #DC0630 !important;
	    display: block !important;
	}
	
	.wishlist-grid.list-view .discount {
	    background: #DC0630 !important;
	    color: white !important;
	    padding: 1px 4px !important;
	    font-size: 9px !important;
	    font-weight: 700 !important;
	    border-radius: 2px !important;
	    white-space: nowrap !important;
	}
	
	.wishlist-grid.list-view .price-detail {
	    display: flex !important;
	    align-items: center !important;
	    gap: 6px !important;
	    justify-content: flex-end !important;
	}
	
	.wishlist-grid.list-view .original-price {
		margin-right: 3px !important;
	    font-size: 11px !important;
	    color: #999 !important;
	    text-decoration: line-through !important;
	}
	
	.wishlist-grid.list-view .item-status {
	    min-width: 80px !important;
	    text-align: center !important;
	    color: #666 !important;
	    font-size: 12px !important;
	}
	
	.wishlist-grid.list-view .item-actions {
	    min-width: 200px !important;
	    gap: 8px !important;
	    margin: 0 !important;
	    display: flex !important;
	}
	
	.wishlist-grid.list-view .btn-cart,
	.wishlist-grid.list-view .btn-detail {
	    padding: 6px 12px !important;
	    font-size: 12px !important;
	    font-weight: 500 !important;
	}
</style>
<jsp:include page="../layout/header.jsp" />
<jsp:include page="../layout/menu.jsp" />

<script>
    var memberId = "user01";
    var categories = []; // 카테고리 데이터를 저장할 전역 변수

    // 페이지 로드
    $(function(){
        loadCategories(); // 카테고리 먼저 로드
    });
  
    var currentCategory = '';
    
    // 카테고리 로드 함수 (추가)
    var loadCategories = function() {
        $.ajax({
            url: "/getCategories.do",
            type: "post",
            dataType: "json",
            success: function(res){
                if(res.success && res.categories) {
                    categories = res.categories;
                    renderCategoryTabs();
                    // 카테고리 로드 완료 후 위시리스트와 카운트 조회
                    selectWishlist();
                    updateCategoryCount();
                } else {
                    console.log("카테고리 조회 실패:", res.message);
                    // 기본 카테고리로 대체하고 계속 진행
                    categories = [
                        {MAIN_CATE_ID: '1', MAIN_CATE_NM: '문구류', ICON: '📝'},
                        {MAIN_CATE_ID: '2', MAIN_CATE_NM: '사무용품', ICON: '📄'}
                    ];
                    renderCategoryTabs();
                    selectWishlist();
                    updateCategoryCount();
                }
            },
            error: function(err){
                console.log("카테고리 조회 통신 실패:", err);
                // 기본 카테고리로 대체하고 계속 진행
                categories = [
                    {MAIN_CATE_ID: '1', MAIN_CATE_NM: '문구류', ICON: '📝'},
                    {MAIN_CATE_ID: '2', MAIN_CATE_NM: '사무용품', ICON: '📄'}
                ];
                renderCategoryTabs();
                selectWishlist();
                updateCategoryCount();
            }
        });
    };
    
    // 카테고리 탭 렌더링 함수 (추가)
    var renderCategoryTabs = function() {
        var html = '';
        
        // 전체 탭
        html += '<button class="tab-btn active" onclick="filterByCategory(\'\')" data-category="">';
        html += '🌟 전체 <span class="tab-count">0</span>';
        html += '</button>';
        
        // 카테고리 탭들
        for(var i = 0; i < categories.length; i++) {
            var category = categories[i];
            var icon = category.ICON || '📦'; // 기본 아이콘
            var categoryId = category.MAIN_CATE_ID;
            var categoryName = category.MAIN_CATE_NM;
            
            html += '<button class="tab-btn" onclick="filterByCategory(\'' + categoryId + '\')" data-category="' + categoryId + '">';
            html += icon + ' ' + categoryName + ' <span class="tab-count">0</span>';
            html += '</button>';
        }
        
        $('.tab-list').html(html);
    };
    
    // 카테고리 ID로 카테고리 이름 찾기
    var getCategoryName = function(categoryId) {
        for(var i = 0; i < categories.length; i++) {
            if(categories[i].MAIN_CATE_ID == categoryId) {
                return categories[i].MAIN_CATE_NM;
            }
        }
        return '기타';
    };
    
    // 하트 토글 함수
    var toggleWishlist = function(productId, heartElement) {
        var param = {
            productId: productId,
            memberId: memberId
        };
        
        // 하트 로딩 상태
        var originalHtml = $(heartElement).html();
        $(heartElement).html('<span class="heart-loading">⏳</span>');
        $(heartElement).prop('disabled', true);
        
        $.ajax({
            url: "/toggleWishlist.do",
            type: "post",
            data: param,
            dataType: "json",
            success: function(res){
                $(heartElement).prop('disabled', false);
                
                if(res.success) {
                    // 하트 상태 업데이트
                    updateHeartDisplay(heartElement, res.isWished);
                    
                    // 토스트 메시지 표시
                    showToast(res.message, "success");
                    
                    // 위시리스트 페이지라면 새로고침
                    if (typeof selectWishlist === 'function') {
                        selectWishlist();
                        updateCategoryCount();
                    }
                } else {
                    $(heartElement).html(originalHtml);
                    showToast("처리 중 오류가 발생했습니다.", "error");
                }
            },
            error: function(err){
                $(heartElement).html(originalHtml);
                $(heartElement).prop('disabled', false);
                showToast("네트워크 오류가 발생했습니다.", "error");
            }
        });
    };
    
    // 하트 표시 업데이트
    var updateHeartDisplay = function(heartElement, isWished) {
        var heartIcon = isWished ? '❤️' : '🤍';
        var heartClass = isWished ? 'heart-filled' : 'heart-empty';
        
        $(heartElement).removeClass('heart-filled heart-empty').addClass(heartClass);
        $(heartElement).find('.heart-icon').text(heartIcon);
        $(heartElement).attr('data-wished', isWished);
    };
    
    // 상품 목록에서 여러 하트 상태 확인
    var checkMultipleWishStatus = function(productIds) {
        var param = {
            productIds: productIds.join(','),
            memberId: memberId
        };
        
        $.ajax({
            url: "/checkMultipleWishStatus.do",
            type: "post",
            data: param,
            dataType: "json",
            success: function(res){
                if(res.success && res.wishStatus) {
                    // 각 상품의 하트 상태 업데이트
                    for(var productId in res.wishStatus) {
                        var isWished = res.wishStatus[productId];
                        var heartElement = $('.wish-heart[data-product-id="' + productId + '"]');
                        updateHeartDisplay(heartElement, isWished);
                    }
                }
            },
            error: function(err){
                console.log("위시리스트 상태 확인 실패:", err);
            }
        });
    };
    
    // 위시리스트 렌더링 (카테고리 이름 동적 표시로 수정)
    var renderWishlist = function(wishlist) {
        var html = '';
        
        if(!wishlist || wishlist.length === 0) {
            html = '<div class="empty-wishlist-filter">';
            html += '<div class="empty-icon">💔</div>';
            html += '<div class="empty-title">위시리스트가 비어있습니다</div>';
            html += '<div class="empty-subtitle">마음에 드는 상품의 하트를 눌러보세요</div>';
            html += '</div>';
        } else {
            for(var i = 0; i < wishlist.length; i++){
                var item = wishlist[i];
                html += '<div class="wishlist-item" data-category="' + item.MAIN_CATE_ID + '">';
                
                // 이미지와 하트 버튼
                html += '<div class="item-image">';
                var imageUrl = item.IMAGE_URL || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
                html += '<img src="' + imageUrl + '" alt="' + item.PRODUCT_NAME + '" style="width:100%; height:100%; object-fit:cover;">';
                html += '<button class="wish-heart heart-filled" data-product-id="' + item.PRODUCT_ID + '" onclick="toggleWishlist(' + item.PRODUCT_ID + ', this)">';
                html += '<span class="heart-icon">❤️</span>';
                html += '</button>';
                html += '</div>';
                
                html += '<div class="item-info">';
                html += '<div class="item-details">';
                html += '<div class="item-name">' + item.PRODUCT_NAME + '</div>';
                
                // 카테고리 이름을 동적으로 가져오기 (수정된 부분)
                var categoryName = item.MAIN_CATE_NM || getCategoryName(item.MAIN_CATE_ID);
                html += '<div class="item-category">' + categoryName + '</div>';
                html += '</div>';
                
                html += '<div class="item-price">';
                if(item.SALED_PRICE && item.SALED_PRICE > 0 && item.SALED_PRICE < item.PRODUCT_PRICE) {
                    html += '<span class="current-price">₩' + item.SALED_PRICE.toLocaleString() + '</span>';
                    html += '<div class="price-detail">';
                    html += '<span class="original-price">₩' + item.PRODUCT_PRICE.toLocaleString() + '</span>';
                    var discount = Math.round(((item.PRODUCT_PRICE - item.SALED_PRICE) / item.PRODUCT_PRICE) * 100);
                    html += '<span class="discount">-' + discount + '%</span>';
                    html += '</div>';
                } else {
                    html += '<span class="current-price">₩' + item.PRODUCT_PRICE.toLocaleString() + '</span>';
                }
                html += '</div>';
                
                html += '<div class="item-status">';
                if(item.IS_VISIBLE === 'Y') {
                    html += '판매중';
                } else {
                    html += '품절';
                }
                html += '</div>';
                
                html += '<div class="item-actions">';
                html += '<button class="btn-cart" onclick="addToCart(' + item.PRODUCT_ID + ')">장바구니</button>';
                html += '<button class="btn-detail" onclick="viewDetail(' + item.PRODUCT_ID + ')">상세보기</button>';
                html += '</div>';
                
                html += '</div>'; // item-info 끝
                html += '</div>'; // wishlist-item 끝
            }
        }
        
        $("#wishlistGrid").html(html);
    };
    
    // 상품 카드 렌더링 함수 (상품 목록 페이지용)
    var renderProductCard = function(product) {
        var html = '';
        html += '<div class="product-card" data-product-id="' + product.PRODUCT_ID + '">';
        
        // 이미지와 하트
        html += '<div class="product-image">';
        html += '<img src="' + (product.IMAGE_URL || '/images/no-image.jpg') + '" alt="' + product.PRODUCT_NAME + '">';
        html += '<button class="wish-heart heart-empty" data-product-id="' + product.PRODUCT_ID + '" onclick="toggleWishlist(' + product.PRODUCT_ID + ', this)">';
        html += '<span class="heart-icon">🤍</span>';
        html += '</button>';
        html += '</div>';
        
        // 상품 정보
        html += '<div class="product-info">';
        html += '<div class="product-name">' + product.PRODUCT_NAME + '</div>';
        html += '<div class="product-price">₩' + product.PRODUCT_PRICE.toLocaleString() + '</div>';
        html += '</div>';
        
        html += '</div>';
        return html;
    };
    
    // 위시리스트 조회
    var selectWishlist = function() {
        var param = {
            memberId: memberId,
            category: currentCategory,
            sortType: $("#sortFilter").val() || 'newest',
            priceRange: $("#priceRangeFilter").val() || '',
            status: $("#statusFilter").val() || ''
        };
        
        // 로딩 표시
        $("#wishlistGrid").html('<div class="empty-wishlist-filter">' +
            '<div class="empty-icon">⏳</div>' +
            '<div class="empty-title">로딩 중...</div>' +
            '<div class="empty-subtitle">위시리스트를 불러오고 있습니다</div>' +
            '</div>');
        
        $.ajax({
            url: "/selectWishlistByUser.do",
            type: "post",
            data: param,
            dataType: "json",
            success: function(res){
                if(res.success) {
                    // 클라이언트에서 추가 필터링 적용
                    var filteredList = applyClientFilters(res.wishlist, param);
                    renderWishlist(filteredList);
                } else {
                    showToast(res.message || "위시리스트 조회 실패", "error");
                    renderWishlist([]);
                }
            },
            error: function(err){
                showToast("위시리스트 조회 통신 실패", "error");
                renderWishlist([]);
            }
        });
    };
    
    // 클라이언트 필터링 함수
    var applyClientFilters = function(wishlist, filters) {
        if (!wishlist || wishlist.length === 0) {
            return [];
        }
        
        var filtered = wishlist.slice(); // 배열 복사
        
        // 카테고리 필터링
        if (filters.category && filters.category !== '') {
            filtered = filtered.filter(function(item) {
                return item.MAIN_CATE_ID == filters.category;
            });
        }
        
        // 가격대 필터링
        if (filters.priceRange && filters.priceRange !== '') {
            filtered = filtered.filter(function(item) {
                var price = item.SALED_PRICE && item.SALED_PRICE > 0 ? item.SALED_PRICE : item.PRODUCT_PRICE;
                var result = applyPriceFilter(price, filters.priceRange);
                return result;
            });
        }
        
        // 상태 필터링
        if (filters.status && filters.status !== '') {
            filtered = filtered.filter(function(item) {
                return applyStatusFilter(item, filters.status);
            });
        }
        
        // 정렬 적용
        filtered = applySorting(filtered, filters.sortType);
        
        return filtered;
    };

    // 가격 필터 적용
    var applyPriceFilter = function(price, range) {
        switch(range) {
            case '0-1000':
                return price <= 1000;
            case '1000-3000':
                return price >= 1000 && price <= 3000;
            case '3000-5000':
                return price >= 3000 && price <= 5000;
            case '5000-':
                return price > 5000;
            default:
                return true;
        }
    };

    // 상태 필터 적용
    var applyStatusFilter = function(item, status) {
        switch(status) {
            case 'sale':
                return item.SALED_PRICE && item.SALED_PRICE > 0 && item.SALED_PRICE < item.PRODUCT_PRICE;
            case 'soldout':
                return item.IS_VISIBLE === 'N';
            case 'new':
                return true;
            default:
                return true;
        }
    };

    // 정렬 적용
    var applySorting = function(list, sortType) {
        switch(sortType) {
            case 'newest':
                return list.sort(function(a, b) {
                    return b.PRODUCT_ID - a.PRODUCT_ID;
                });
            case 'price-low':
                return list.sort(function(a, b) {
                    var priceA = a.SALED_PRICE && a.SALED_PRICE > 0 ? a.SALED_PRICE : a.PRODUCT_PRICE;
                    var priceB = b.SALED_PRICE && b.SALED_PRICE > 0 ? b.SALED_PRICE : b.PRODUCT_PRICE;
                    return priceA - priceB;
                });
            case 'price-high':
                return list.sort(function(a, b) {
                    var priceA = a.SALED_PRICE && a.SALED_PRICE > 0 ? a.SALED_PRICE : a.PRODUCT_PRICE;
                    var priceB = b.SALED_PRICE && b.SALED_PRICE > 0 ? b.SALED_PRICE : b.PRODUCT_PRICE;
                    return priceB - priceA;
                });
            case 'discount':
                return list.sort(function(a, b) {
                    var discountA = getDiscountRate(a);
                    var discountB = getDiscountRate(b);
                    return discountB - discountA;
                });
            default:
                return list;
        }
    };

    // 할인율 계산
    var getDiscountRate = function(item) {
        if (item.SALED_PRICE && item.SALED_PRICE > 0 && item.SALED_PRICE < item.PRODUCT_PRICE) {
            return Math.round(((item.PRODUCT_PRICE - item.SALED_PRICE) / item.PRODUCT_PRICE) * 100);
        }
        return 0;
    };
    
    var filterByCategory = function(category) {
        currentCategory = category;
        $(".tab-btn").removeClass("active");
        $('[data-category="' + category + '"]').addClass("active");
        selectWishlist();
    };
    
    var addToCart = function(productId) {
        var param = {
            productId: productId,
            memberId: memberId,
            quantity: 1
        };
        
        var button = event.target;
        var originalText = button.textContent;
        button.innerHTML = '<span class="loading"></span>';
        button.disabled = true;
        
        $.ajax({
            url: "/addToCart.do",
            type: "post",
            data: param,
            dataType: "json",
            success: function(res){
                button.textContent = originalText;
                button.disabled = false;
                
                if(res.success) {
                    showToast("상품이 장바구니에 추가되었습니다!", "success");
                } else {
                    showToast("장바구니 추가에 실패했습니다.", "error");
                }
            },
            error: function(err){
                button.textContent = originalText;
                button.disabled = false;
                showToast("장바구니 추가 통신 실패", "error");
            }
        });
    };
    
    var viewDetail = function(productId) {
        window.open('/productDetailView.do?productId=' + productId, '_blank');
    };
    
    var sortWishlist = function() {
        selectWishlist();
    };
    
    var filterByPrice = function() {
        selectWishlist();
    };
    
    var filterByStatus = function() {
        selectWishlist();
    };
    
    var changeView = function(viewType) {
        $(".view-btn").removeClass("active");
        $(event.target).addClass("active");
        
        var grid = $("#wishlistGrid");
        
        if(viewType === 'list') {
            grid.addClass('list-view');
        } else {
            grid.removeClass('list-view');
        }
    };
    
    var updateCategoryCount = function() {
        $.ajax({
            url: "/getCategoryCount.do",
            type: "post",
            data: { memberId: memberId },
            dataType: "json",
            success: function(res){
                if(res.success && res.categoryCount) {
                    var totalCount = 0;
                    
                    // 각 카테고리별 개수 업데이트
                    for(var category in res.categoryCount) {
                        var count = res.categoryCount[category];
                        $('[data-category="' + category + '"] .tab-count').text(count);
                        totalCount += count;
                    }
                    
                    // 전체 카테고리 개수 업데이트
                    $('[data-category=""] .tab-count').text(totalCount);
                }
            },
            error: function(err){
                console.log("카테고리 개수 조회 실패");
            }
        });
    };
    
    var showToast = function(message, type) {
        var toastClass = 'toast-' + (type || 'info');
        var toastHtml = '<div class="success-message ' + toastClass + '">' + message + '</div>';
        
        $('body').append(toastHtml);
        var toast = $('.success-message').last();
        
        setTimeout(function() {
            toast.addClass('show');
        }, 100);
        
        setTimeout(function() {
            toast.removeClass('show');
            setTimeout(function() {
                toast.remove();
            }, 300);
        }, 3000);
    };
</script>

<div class="container">
    <div class="wish-container">
        <div class="main-content">
            <!-- Page Header -->
            <div class="page-header">
                <div class="page-info">
                    <h1 class="page-title">나의 위시리스트</h1>
                    <p class="page-subtitle">마음에 든 상품들을 모아보세요</p>
                </div>
            </div>

            <!-- Category Tabs -->
            <div class="category-tabs">
                <div class="tab-list">
                    <!-- JavaScript로 동적 렌더링 -->
                </div>
            </div>

            <!-- Controls -->
            <div class="controls">
                <div class="filter-group">
                    <select class="filter-select" id="priceRangeFilter" onchange="filterByPrice()">
                        <option value="">전체 가격대</option>
                        <option value="0-1000">1천원 이하</option>
                        <option value="1000-3000">1천원-3천원</option>
                        <option value="3000-5000">3천원-5천원</option>
                        <option value="5000-">5천원 이상</option>
                    </select>
                    <select class="filter-select" id="sortFilter" onchange="sortWishlist()">
                        <option value="newest">최신 등록순</option>
                        <option value="price-low">가격 낮은순</option>
                        <option value="price-high">가격 높은순</option>
                        <option value="discount">할인율 높은순</option>
                        <option value="popular">인기순</option>
                    </select>
                    <select class="filter-select" id="statusFilter" onchange="filterByStatus()">
                        <option value="">전체 상품</option>
                        <option value="sale">할인 중</option>
                        <option value="soldout">품절</option>
                        <option value="new">신상품</option>
                    </select>
                </div>
                <div class="view-toggle">
                    <button class="view-btn active" onclick="changeView('grid')">그리드</button>
                    <button class="view-btn" onclick="changeView('list')">리스트</button>
                </div>
            </div>

            <!-- Wishlist Grid -->
            <div class="wishlist-grid" id="wishlistGrid">
                <!-- JavaScript로 동적 렌더링 -->
                <div class="empty-wishlist-filter">
                    <div class="empty-icon">⏳</div>
                    <div class="empty-title">로딩 중...</div>
                    <div class="empty-subtitle">위시리스트를 불러오고 있습니다</div>
                </div>
            </div>
        </div>
    </div>
</div>

<jsp:include page="../layout/footer.jsp" />