var hideToggle = document.getElementById("hide-toggle");
var password = document.getElementById("password-input");
var hidden = document.getElementById("hidden");
var ingresar = document.getElementById("ingresar");

ingresar.addEventListener("submit", function(e){
  e.preventDefault();
  window.location.href = "home.html";
});

hideToggle.addEventListener('click', showHidePassword);

function showHidePassword(){
    if (password.type === "password") {
        password.type = "text";
        hidden.style.display = "block";
      } else {
        password.type = "password";
        hidden.style.display = "none";
      }
}