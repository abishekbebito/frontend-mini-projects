function passwordValidation() {
  var password = document.getElementById("pass").value;
  if (password == "") {
    document.getElementById("message").innerHTML = "password empty";
    return;
  }
  if (password.length < 8) {
    document.getElementById("message").innerHTML = "should not be less than 8";
    return;
  }
  if (password.length > 15) {
    document.getElementById("message").innerHTML =
      "should not be greater  than 15";
    return;
  }

  if (password == 123456789) {
    alert("password submitted");
    return;
  }
}
