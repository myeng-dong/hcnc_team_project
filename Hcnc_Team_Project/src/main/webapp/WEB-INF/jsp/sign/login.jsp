<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <%@
taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <%@ taglib
prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> <%@ taglib prefix="form"
uri="http://www.springframework.org/tags/form" %> <%@ taglib prefix="ui"
uri="http://egovframework.gov/ctl/ui"%> <%@ taglib prefix="spring"
uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>DDD.D 로그인</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="../../../css/egovframework/import.css" />
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.6/kakao.min.js"
      integrity="sha384-WAtVcQYcmTO/N+C1N+1m6Gp8qxh+3NlnP7X1U7qP6P5dQY/MsRBNTh+e1ahJrkEm"
      crossorigin="anonymous"
    ></script>
    <script src="../../../common/utils.js"></script>
    <script src="../../../common/regex.js"></script>
  </head>
  <script type="text/javascript">
    Kakao.init("58d56fb6efcae0f41fd505c8bd4300c9");
    const loginWithKakao = () => {
      Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080/kakaoLogin.do",
        prompt: "login",
      });
    };
    // 서버 이전 예정
  </script>
  <script type="text/javascript">
    $(() => {
      $(".login-unknown").hide();
      const saveId = getCookie("loginId");
      if (saveId) {
        $("#id").val(saveId);
        $("#saveId").prop("checked", true);
      }
    });
    const enterkey = () => {
      if (window.event.keyCode == 13) {
        selectLoginByUser();
      }
    };
    const getCookie = (name) => {
      const nameEQ = name + "=";
      const ca = document.cookie.split(";"); // 모든 쿠키를 ;로 나눔
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim(); // 앞뒤 공백 제거
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
      }
      return null;
    };
    const selectLoginTab = () => {
      $(".tab-login").removeClass("active");
      $(".tab-unknown").removeClass("active");
      $(".login-main").show();
      $(".login-unknown").hide();
    };
    const selectUnknownTab = () => {
      $(".tab-login").addClass("active");
      $(".tab-unknown").addClass("active");
      $(".login-main").hide();
      $(".login-unknown").show();
    };

    const selectLoginByUser = () => {
      const id = $("#id").val().trim();
      const password = $("#password").val().trim();
      if (id == "") {
        alert("아이디를 입력해주세요.");
        return;
      }
      if (password == "") {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      const param = { id: id, password: password };

      ajaxUtil(param, "selectLoginByUser.do", (response) => {
        console.log(JSON.stringify(response));
        if (response.status === 200) {
          if ($("input[name='saveId']").is(":checked")) {
            document.cookie =
              "loginId=" +
              encodeURIComponent($("#id").val()) +
              "; path=/; max-age=" +
              7 * 24 * 60 * 60;
          } else {
            document.cookie =
              "loginId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }
          location.href = "/";
        }
        if (response.status === 404) {
          alert("회원정보를 찾을수없습니다.");
        }
        if (response.status === 500) {
          alert("회원정보를 찾을수없습니다.");
        }
      });
    };
  </script>

  <style>
    input[type="password"],
    input[type="number"],
    input[type="text"] {
      width: 100%;
      height: 40px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      font-size: 18px;
      padding-left: 10px;
      box-sizing: border-box;
    }

    .loginbox {
      margin: 0 auto;
      width: 628px;
      background-color: #fff;
      border-radius: 16px;
      box-shadow: 0px 0px 30px #ccc;
      padding: 55px 40px 55px 40px;
      min-width: 628px;
      max-width: 628px;
    }
    .login-header {
      display: flex;
      font-weight: bold;
      font-size: 28px;
      padding-bottom: 19px;
      border-bottom: 1px solid #d9d9d9;
      margin-bottom: 34px;
    }
    .login-body {
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      margin-bottom: 42px;
    }
    .tab-login,
    .tab-unknown {
      display: flex;
      flex: 1;
      justify-content: center;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      padding-top: 15px;
      padding-bottom: 15px;
      cursor: pointer;
    }
    .tab-login {
    }
    .tab-unknown {
      background-color: #f7f7f7;
      border-left: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
      border-top-right-radius: 5px;
    }
    .tab-login.active {
      background-color: #f7f7f7;
      border-right: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
      border-top-left-radius: 5px;
    }
    .tab-unknown.active {
      background-color: #fff;
      border-left: 0px solid #d9d9d9;
      border-bottom: 0px solid #d9d9d9;
      border-top-right-radius: 5px;
    }
    .login-input-container {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding-top: 26px;
      padding-left: 40px;
      padding-right: 40px;
    }
    .login-btn {
      margin-left: 40px;
      margin-right: 40px;
      display: flex;
      flex: 1;
      background-color: #ea0e25;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 4px;
      cursor: pointer;
    }
    .sign-btn {
      margin-left: 40px;
      margin-right: 40px;
      display: flex;
      flex: 1;
      background-color: #fff;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 15px;
      border-radius: 4px;
      border: 1px solid #ea0e25;
      cursor: pointer;
    }
    .find-info {
      font-size: 12px;
      font-weight: 400;
      color: #777;
      cursor: pointer;
    }
  </style>
  <body>
    <jsp:include page="../layout/headertop.jsp" />
    <div
      class="container login"
      style="background-color: #f7f7f7; padding-top: 20px; padding-bottom: 20px"
    >
      <div class="inner">
        <div class="loginbox">
          <div class="login-header">로그인</div>
          <div class="login-body">
            <div
              class="login-tab"
              style="display: flex; flex-direction: row; flex: 1"
            >
              <div class="tab-login" onclick="selectLoginTab()">회원로그인</div>
              <div class="tab-unknown" onclick="selectUnknownTab()">
                비회원 주문확인
              </div>
            </div>
            <div class="login-main">
              <div class="login-input-container">
                <input id="id" name="id" type="text" placeholder="아이디" />
                <div style="height: 6px"></div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  onkeyup="enterkey()"
                />
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  padding-left: 40px;
                  padding-top: 6px;
                "
              >
                <input
                  type="checkbox"
                  name="saveId"
                  id="saveId"
                  style="width: 15px; height: 15px"
                />
                <div
                  style="
                    font-size: 12px;
                    font-weight: 400;
                    color: #777;
                    padding-left: 5px;
                    line-height: 10px;
                  "
                >
                  아이디 저장
                </div>
              </div>
              <div style="height: 23px"></div>
              <div class="login-btn" onclick="selectLoginByUser()">
                <div style="font-size: 18px; font-weight: 700; color: #fff">
                  로그인
                </div>
              </div>
              <div style="height: 6px"></div>
              <div class="sign-btn" onclick="location.href='/sign.do'">
                <div style="font-size: 18px; font-weight: 700; color: #ea0e25">
                  회원가입
                </div>
              </div>
              <div style="height: 14px"></div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                "
              >
                <div class="find-info" onclick="location.href='findId.do'">
                  아이디 찾기
                </div>
                <div
                  class="find-info"
                  style="padding-left: 15px; padding-right: 15px"
                >
                  |
                </div>
                <div class="find-info" onclick="location.href='findPw.do'">
                  비밀번호 찾기
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  padding-left: 40px;
                  padding-right: 40px;
                  padding-top: 31px;
                  padding-bottom: 18px;
                "
              >
                <div
                  style="
                    display: flex;
                    flex: 1;
                    border-bottom: 1px solid #d9d9d9;
                  "
                ></div>
                <div style="font-size: 12; font-weight: 400; color: #777">
                  또는 간편하게 로그인
                </div>
                <div
                  style="
                    display: flex;
                    flex: 1;
                    border-bottom: 1px solid #d9d9d9;
                  "
                ></div>
              </div>

              <div
                onclick="loginWithKakao()"
                style="
                  display: flex;
                  background-color: #fee500;
                  margin-left: 40px;
                  margin-right: 40px;
                  border-radius: 4px;
                  justify-content: space-between;
                  align-items: center;
                  padding: 7px 10px 7px 10px;
                  cursor: pointer;
                "
              >
                <img
                  style="width: 40px; height: 40px"
                  src="../../../images/egovframework/example/kakao_icon.png"
                />
                <div style="font-size: 18px">카카오 로그인</div>
                <div style="width: 40px"></div>
              </div>
              <div style="height: 42px"></div>
            </div>
            <div class="login-unknown">
              <div style="height: 60px"></div>
              <div class="unknown-input" style="padding: 0 40px 0 40px">
                <input
                  id="orderId"
                  name="orderId"
                  type="text"
                  placeholder="주문번호"
                />
                <div style="height: 10px"></div>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  inputmode="numeric"
                  placeholder="전화번호"
                  pattern="[0-9]*"
                />
              </div>
              <div style="height: 35px"></div>
              <div class="login-btn">
                <div style="font-size: 18px; font-weight: 700; color: #fff">
                  조회하기
                </div>
              </div>
              <div style="height: 42px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
