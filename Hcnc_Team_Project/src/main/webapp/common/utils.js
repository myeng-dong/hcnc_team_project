const ajaxUtil = (param, url, successCallback, errorCallback) => {
  $.ajax({
    url: url,
    type: "POST",
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
