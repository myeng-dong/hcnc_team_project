<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>두디</title>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="/css/egovframework/import.css">
    <link rel="stylesheet" href="/css/egovframework/import-sub.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/xeicon/2.3.0/xeicon.min.css">
</head>
<body>
	<div id="container-wrap">

		<header class="header_area">
			<div class="header_event_area">
				<div class="inner">상단 이벤트 배너 영역</div>
			</div>
			<div class="header_top_area">
				<div class="inner">
					<ul class="header_menu_list flex">
						<li><a href="#"><i class="xi-user-o"></i>로그인</a></li>
						<li><a href="#">장바구니</a></li>
						<li><a href="#">주문/배송</a></li>
					</ul>
				</div>
			</div>
			<div class="header_main_area flex inner">
				<h1 class="logo"><a href="/">에잇플래닛</a></h1>
				<div class="header_search_area">
					<input type="text" placeholder="검색어를 입력하세요">
					<button class="btn btn_search">검색</button>
				</div>
			</div>
		</header>
