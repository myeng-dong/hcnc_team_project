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

const sendMailByUser = (param, successCallBack, failCallBack) => {
  if (param.to === "") {
    alert("이메일을 입력해주세요.");
    return;
  }
  if (containsSqlKeywords(param.to) || !emailRegex.test(param.to)) {
    alert("이메일 형식을 확인해주세요.");
    return;
  }
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

const mailCodeCheckByUser = (param, successCallBack, failCallBack) => {
  if (param.code == "") {
    alert("이메일 인증번호를 입력해주세요.");
    return;
  }
  if (param.code.length < 6) {
    alert("인증번호를 입력해주세요.");
    return;
  }
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
