var connect = document.getElementsByClassName("connect");
var btns = document.getElementById("btns");
var registroCuenta = document.getElementById("registro-cuenta");
var back = document.getElementById("back");
var title = document.getElementById("title");
var backNumber = 1;

for (var i = 0; i < connect.length; i++) {
    connect[i].addEventListener("click", function(){
        btns.style.transform = "translate(-150vw, -50%)";
        registroCuenta.style.transform = "translateX(0)";
    });
}

var formInputs = document.getElementsByClassName("form");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].children[0].addEventListener("input", function(){
        if(this.value.length == 0){
            this.parentElement.children[1].classList.remove("filled"); 
        }else{
        this.parentElement.children[1].classList.add("filled");
        }
    });
}

registroCuenta.addEventListener("submit", function(e){
    e.preventDefault();
    slideToPerfiles();
});

function slideToPerfiles(){
    registroCuenta.style.position = "absolute";
    registroCuenta.style.transform = "translateX(-150vw)";
    perfiles.style.transform = "translateX(0)";
    title.innerHTML = "2. Define tu perfil"
}