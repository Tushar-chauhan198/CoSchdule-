document.querySelector("button").addEventListener("click", signin);
  var regdUser = JSON.parse(localStorage.getItem("userData"));
  function signin() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    for (var i = 0; i < regdUser.length; i++) {
      if (regdUser[i].emailAddress == email && regdUser[i].password == pass) {
        window.location.href = "marketing.html";
      }
    }
  }