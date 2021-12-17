document.querySelector("button").addEventListener("click", signup);
var userArr = JSON.parse(localStorage.getItem("userData")) || [];
function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var comp = document.getElementById("Re").value;
  var url = document.getElementById("Re").value;

  var userCredentials = {
    username: name,
    emailAddress: email,
    password: pass,
    Company: comp,
    Website: url,
  };

  userArr.push(userCredentials);
  localStorage.setItem("userData", JSON.stringify(userArr));
  window.location.href = "sign-in.html";
}