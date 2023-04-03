function passwordValidation() {
  var password = document.getElementById("pass").value;
  var email = document.getElementById("mailId").value;
  var validEmail = /^[a-z0-9]+@[a-z]+.[a-z]{2,3}$/;
  if (password == "" || email == "") {
    document.getElementById("message").innerHTML =
      "please fill the credentials";
    return false;
  }
  if (!validEmail.test(email)) {
    document.getElementById("message").innerHTML = "email incorrect format";
    return false;
  }
  if (password.length < 8) {
    document.getElementById("message").innerHTML = "should not be less than 8";
    return false;
  }
  if (password.length > 15) {
    document.getElementById("message").innerHTML =
      "should not be greater  than 15";
    return false;
  }

  if (password == 123456789 && email == "hello@gmail.com") {
    document.getElementById("message").innerHTML = "";
    alert("password submitted");

    return true;
  }
}
