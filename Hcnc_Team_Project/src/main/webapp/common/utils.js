const ajaxUtil = (param, url, successCallback, errorCallback) => {
  $.ajax({
    url: url,
    type: "POST",
    data: param,
    success: (response) => {
      if (successCallback) successCallback(response);
    },
    error: (xhr, status, error) => {
      if (errorCallback) errorCallback(xhr, status, error);
      else alert("error: " + error + "status: " + status + "xhr: " + xhr);
    },
  });
};

const jsonAjaxUtil = (param, url, successCallback, errorCallback) => {
  $.ajax({
    url: url,
    type: "POST",
    //contentType: "application/x-nexacro",
    data: param,
    success: (response) => {
      if (successCallback) successCallback(response);
    },
    error: (xhr, status, error) => {
      if (errorCallback) errorCallback(error);
      else alert("error: " + error + "status: " + status + "xhr: " + xhr);
    },
  });
};

const containsSqlKeywords = (input) => {
  if (!input) return false;

  const sqlKeywords = [
    "SELECT",
    "INSERT",
    "UPDATE",
    "DELETE",
    "DROP",
    "ALTER",
    "TRUNCATE",
    "CREATE",
    "EXEC",
    "UNION",
    "MERGE",
    "GRANT",
  ];

  const upperInput = input.toUpperCase();

  return sqlKeywords.some((keyword) => upperInput.includes(keyword));
};

const sendMailByUser = (email, isDuplicate, successCallBack, failCallBack) => {
  if (email === "") {
    alert("이메일을 입력해주세요.");
    return;
  }
  if (containsSqlKeywords(email) || !emailRegex.test(email)) {
    alert("이메일 형식을 확인해주세요.");
    return;
  }
  var param = { to: email, isDuplicate: isDuplicate };
  ajaxUtil(
    param,
    "selectEmailCheckByUser.do",
    (response) => {
      if (successCallBack) successCallBack(response);
    },
    (error) => {
      if (failCallBack) failCallBack(error);
    }
  );
};

const mailCodeCheckByUser = (
  email,
  emailCode,
  checkOnly,
  successCallBack,
  failCallBack
) => {
  if (emailCode == "") {
    alert("이메일 인증번호를 입력해주세요.");
    return;
  }
  if (emailCode.length < 6) {
    alert("인증번호를 입력해주세요.");
    return;
  }
  var param = { to: email, code: emailCode, checkOnly: checkOnly };
  ajaxUtil(
    param,
    "selectVerifyAuthByUser.do",
    (response) => {
      if (successCallBack) successCallBack(response);
    },
    (error) => {
      if (failCallBack) failCallBack(error);
    }
  );
};
