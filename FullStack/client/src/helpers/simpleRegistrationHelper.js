const getElemVal = (id) => document.getElementById(id).value;

export default function validateSimpleRegistration(
  idEmail,
  idPassword,
  idName,
  idBiz
) {
  let error = "";
  var data = {
    email: getElemVal(idEmail),
    password: getElemVal(idPassword),
    name: getElemVal(idName),
    biz: idBiz,
  };

  if (!data.password || data.password.length < 6) {
    error = "The password must be 6 letters at least ";
  }

  if (data.email) {
    var reges =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = reges.test(data.email);
    if (!res) {
      error += "Please enter a valid Email ";
    }
  } else {
    error += "Please enter a valid Email ";
  }
  if (!data.name || data.name.length < 2) {
    error += "The name must be 2 letters at least ";
  }

  return error || data;
}
