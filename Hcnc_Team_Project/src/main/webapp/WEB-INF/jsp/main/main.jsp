<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> <%@
taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="../layout/headerlink.jsp" />
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>메인페이지</title>
    <jsp:include page="../layout/headertop.jsp" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="../../../css/egovframework/main.css" />
  </head>
  <body>
    <div class="container-wrap">
      <jsp:include page="../layout/header.jsp" />
      <div class="container main">
        <main class="main_area">
          <section class="main_banner_area">
            <div class="swiper mainBannerSwiper">
              <div class="swiper-wrapper">
                <c:choose>
                  <c:when test="${not empty mainBanners}">
                    <c:forEach var="banner" items="${mainBanners}">
                      <div class="swiper-slide">
                        <c:choose>
                          <c:when test="${not empty banner['LINKED_URL']}">
                            <script>
                              $("#bannerImage1").css(
                                "background",
                                `url('${banner["IMG_PATH"]}') center center no-repeat`
                              );
                              $("#bannerImage2").css(
                                "background",
                                `url('${banner["IMG_PATH"]}') center center cover no-repeat`
                              );
                            </script>
                            <a href="${banner['LINKED_URL']}" class="full-link">
                              <div id="bannerImage1" class="img-area"></div>
                            </a>
                          </c:when>
                          <c:otherwise>
                            <div id="bannerImage2" class="img-area"></div>
                          </c:otherwise>
                        </c:choose>
                      </div>
                    </c:forEach>
                  </c:when>
                  <c:otherwise>
                    <div class="swiper-slide">
                      <div class="img-area nodata"></div>
                    </div>
                  </c:otherwise>
                </c:choose>
              </div>
              <div class="main-swiper-pagination"></div>
            </div>
            <script>
              var swiper = new Swiper(".mainBannerSwiper", {
                autoplay: {
                  //자동슬라이드 (false-비활성화)
                  delay: 2500, // 시간 설정
                  disableOnInteraction: false, // false-스와이프 후 자동 재생
                },
                loopAdditionalSlides: 1,
                loop: true,
                pagination: {
                  el: ".main-swiper-pagination",
                },
              });
            </script>
          </section>

          <section class="main-quick">
            <div class="inner">
              <ul class="list flex">
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>필기구</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>노트/다이어리</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>파일/사무용품</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>디자인/데코</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>학용품/취미</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>화방/제도</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>md 두디픽</dd>
                  </dl>
                </li>
                <li>
                  <dl class="flex fd-column">
                    <dt class="icon-area"></dt>
                    <dd>신제품</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </section>

          <section class="new_area prd_area">
            <div class="inner">
              <p class="sub-comment">DOO.D 신상품</p>
              <ul class="new_list flex prdList f-wrap ju-between">
                <!-- 시작:상품리스트 변수 -->
                <!-- 조건 : 여긴 max8개까지 출력  -->
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- 종료:상품리스트 변수 -->
                <!-- 하단 7개 가상데이터 -->
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="prdItem">
                  <a href="링크" class="prdLink">
                    <div class="thumbnail">
                      <img src="상품이미지" alt="타이틀" />
                      <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                      <span class="soldout">SOLD OUT</span>
                    </div>

                    <div class="description">
                      <div class="reviews">
                        리뷰 {리뷰갯수변수} | <i class="xi-star"></i>{평점변수}
                      </div>

                      <p class="name">{상품명변수}</p>
                      <div class="priceArea">
                        <span class="salePercent">{할인퍼센트}%</span>
                        <span class="priceSale">{판매되는금액}원</span>
                        <span class="originPrice">{할인금액}원</span>
                      </div>
                      <div class="flex ju-between">
                        <div class="icons flex">
                          <img src="베스트" alt="" />
                          <img src="인기상품" alt="" />
                        </div>
                        <div>
                          <button type="button"><i class="xi-cart"></i></button>
                          <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                          <button type="button">
                            <i class="xi-heart"></i>
                          </button>
                          <button type="button">
                            <i class="xi-share-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="btn-view-more-wrap flex ju-center">
                <!-- 신상품리스트바로가기링크 -->
                <a href="#" class="btn-view-more"><span>신상품 더보기</span></a>
              </div>
            </div>
          </section>

          <section class="shortbanner_area">
            <div class="inner">
              <a href="#">
                <div>welcome to Doo.D 회원가입 즉시 적립금 2000원 지급</div>
              </a>
            </div>
          </section>

          <section class="best_area prd_area">
            <div class="inner">
              <p class="sub-comment">DOO.D 인기상품</p>
              <!-- 클릭수 기준이던가? 최고 8개+관리자설정 -->
              <div class="best_list prdlist swiper bestSwiper">
                <div class="swiper-wrapper">
                  <!-- 시작 : 스와이프반복영역 예시 -->
                  <div class="swiper-slide">
                    <div class="prdItem">
                      <a href="링크" class="prdLink">
                        <div class="thumbnail">
                          <img src="상품이미지" alt="타이틀" />
                          <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                          <span class="soldout">SOLD OUT</span>
                        </div>

                        <div class="description">
                          <div class="reviews">
                            리뷰 {리뷰갯수변수} |
                            <i class="xi-star"></i>{평점변수}
                          </div>

                          <p class="name">{상품명변수}</p>
                          <div class="priceArea">
                            <span class="salePercent">{할인퍼센트}%</span>
                            <span class="priceSale">{판매되는금액}원</span>
                            <span class="originPrice">{할인금액}원</span>
                          </div>
                          <div class="flex ju-between">
                            <div class="icons flex">
                              <img src="베스트" alt="" />
                              <img src="인기상품" alt="" />
                            </div>
                            <div>
                              <button type="button">
                                <i class="xi-cart"></i>
                              </button>
                              <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                              <button type="button">
                                <i class="xi-heart"></i>
                              </button>
                              <button type="button">
                                <i class="xi-share-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <!-- 종료 : 스와이프반봉영역 예시 -->
                  <div class="swiper-slide">
                    <div class="prdItem">
                      <a href="링크" class="prdLink">
                        <div class="thumbnail">
                          <img src="상품이미지" alt="타이틀" />
                          <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                          <span class="soldout">SOLD OUT</span>
                        </div>

                        <div class="description">
                          <div class="reviews">
                            리뷰 {리뷰갯수변수} |
                            <i class="xi-star"></i>{평점변수}
                          </div>

                          <p class="name">{상품명변수}</p>
                          <div class="priceArea">
                            <span class="salePercent">{할인퍼센트}%</span>
                            <span class="priceSale">{판매되는금액}원</span>
                            <span class="originPrice">{할인금액}원</span>
                          </div>
                          <div class="flex ju-between">
                            <div class="icons flex">
                              <img src="베스트" alt="" />
                              <img src="인기상품" alt="" />
                            </div>
                            <div>
                              <button type="button">
                                <i class="xi-cart"></i>
                              </button>
                              <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                              <button type="button">
                                <i class="xi-heart"></i>
                              </button>
                              <button type="button">
                                <i class="xi-share-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="prdItem">
                      <a href="링크" class="prdLink">
                        <div class="thumbnail">
                          <img src="상품이미지" alt="타이틀" />
                          <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                          <span class="soldout">SOLD OUT</span>
                        </div>

                        <div class="description">
                          <div class="reviews">
                            리뷰 {리뷰갯수변수} |
                            <i class="xi-star"></i>{평점변수}
                          </div>

                          <p class="name">{상품명변수}</p>
                          <div class="priceArea">
                            <span class="salePercent">{할인퍼센트}%</span>
                            <span class="priceSale">{판매되는금액}원</span>
                            <span class="originPrice">{할인금액}원</span>
                          </div>
                          <div class="flex ju-between">
                            <div class="icons flex">
                              <img src="베스트" alt="" />
                              <img src="인기상품" alt="" />
                            </div>
                            <div>
                              <button type="button">
                                <i class="xi-cart"></i>
                              </button>
                              <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                              <button type="button">
                                <i class="xi-heart"></i>
                              </button>
                              <button type="button">
                                <i class="xi-share-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="prdItem">
                      <a href="링크" class="prdLink">
                        <div class="thumbnail">
                          <img src="상품이미지" alt="타이틀" />
                          <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                          <span class="soldout">SOLD OUT</span>
                        </div>

                        <div class="description">
                          <div class="reviews">
                            리뷰 {리뷰갯수변수} |
                            <i class="xi-star"></i>{평점변수}
                          </div>

                          <p class="name">{상품명변수}</p>
                          <div class="priceArea">
                            <span class="salePercent">{할인퍼센트}%</span>
                            <span class="priceSale">{판매되는금액}원</span>
                            <span class="originPrice">{할인금액}원</span>
                          </div>
                          <div class="flex ju-between">
                            <div class="icons flex">
                              <img src="베스트" alt="" />
                              <img src="인기상품" alt="" />
                            </div>
                            <div>
                              <button type="button">
                                <i class="xi-cart"></i>
                              </button>
                              <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                              <button type="button">
                                <i class="xi-heart"></i>
                              </button>
                              <button type="button">
                                <i class="xi-share-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="prdItem">
                      <a href="링크" class="prdLink">
                        <div class="thumbnail">
                          <img src="상품이미지" alt="타이틀" />
                          <!-- 재고 0일때 thumbnail에 relative 걸어서 absolute 그전엔 visible -->
                          <span class="soldout">SOLD OUT</span>
                        </div>

                        <div class="description">
                          <div class="reviews">
                            리뷰 {리뷰갯수변수} |
                            <i class="xi-star"></i>{평점변수}
                          </div>

                          <p class="name">{상품명변수}</p>
                          <div class="priceArea">
                            <span class="salePercent">{할인퍼센트}%</span>
                            <span class="priceSale">{판매되는금액}원</span>
                            <span class="originPrice">{할인금액}원</span>
                          </div>
                          <div class="flex ju-between">
                            <div class="icons flex">
                              <img src="베스트" alt="" />
                              <img src="인기상품" alt="" />
                            </div>
                            <div>
                              <button type="button">
                                <i class="xi-cart"></i>
                              </button>
                              <!-- 변수처리 위시픽이면 채워진하트아이콘 -->
                              <button type="button">
                                <i class="xi-heart"></i>
                              </button>
                              <button type="button">
                                <i class="xi-share-alt"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-view-more-wrap flex ju-center">
                <!-- 추천리스트바로가기링크 -->
                <a href="#" class="btn-view-more"
                  ><span>추천상품 더보기</span></a
                >
              </div>
            </div>
            <script>
              var swiper = new Swiper(".bestSwiper", {
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 4,
                spaceBetween: 20, // 슬라이드 사이 여백(px)
                pagination: {
                  el: ".best-swiper-pagination",
                  clickable: true,
                },
              });
            </script>
          </section>

          <!-- 이벤트 영역 3개?이미지카드라서-->
          <section class="review_event_area">
            <div class="inner">
              <p class="sub-comment">두디 이벤트</p>
              <div class="review_event_list flex">
                <div class="event_card">
                  <p class="event_title">{이벤트게시판타이틀}</p>
                  <p class="event_desc">{이벤트게시판 디스크립션}</p>
                </div>
                <div class="event_card">
                  <p class="event_title">리뷰 작성 이벤트</p>
                  <p class="event_desc">리뷰 작성 시 포인트 500원 지급???</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <jsp:include page="../layout/popup.jsp" />
      <jsp:include page="../layout/footer.jsp" />
    </div>
  </body>
</html>
