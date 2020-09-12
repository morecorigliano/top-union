var perfil = document.getElementsByClassName("perfil");
var connect = document.getElementsByClassName("connect");
var option = document.getElementsByClassName("option");
var btns = document.getElementById("btns");
var register = document.getElementById("register");
var profesionalRegistro = document.getElementById("profesional-registro");
var registroCuenta = document.getElementById("registro-cuenta");
var btns = document.getElementById("btns");
var perfiles = document.getElementById("perfiles");
var back = document.getElementById("back");
var title = document.getElementById("title");
var personalizar = document.getElementById("personalizar");

for (var i = 0; i < connect.length; i++) {
    connect[i].addEventListener("click", showForm);
};

for (var x = 0; x < option.length; x++) {
    option[x].addEventListener("click", showConnect);
};

back.addEventListener("click", backHome);

function backHome(){
    window.location.href = "../index.html";
}

function showRegister(){
    register.style.transform = "translate(0, -50%)";
    btns.style.transform = "translate(150vw, -50%)";
    back.removeEventListener("click", showConnect);
    back.removeEventListener("click", showForm);
    back.removeEventListener("click", showPerfiles);
    back.removeEventListener("click", showRegister);
    back.addEventListener("click", backHome);
    registroCuenta.style.position = "absolute";
    perfiles.style.position = "absolute";
    personalizar.style.position = "absolute";
    profesionalRegistro.style.height = "100vh";
}

function showConnect(){
    btns.style.transform = "translate(0, -50%)";
    register.style.transform = "translate(-150vw, -50%)";
    registroCuenta.style.transform = "translateX(150vw)";
    back.removeEventListener("click", backHome);
    back.removeEventListener("click", showConnect);
    back.removeEventListener("click", showForm);
    back.removeEventListener("click", showPerfiles);
    back.addEventListener("click", showRegister);
    registroCuenta.style.position = "absolute";
    perfiles.style.position = "absolute";
    personalizar.style.position = "absolute";
    profesionalRegistro.style.height = "100vh";
}

function showForm(){
    title.innerHTML = "1. Crea tu cuenta";
    registroCuenta.style.position = "relative";
    perfiles.style.position = "absolute";
    personalizar.style.position = "absolute";
    perfiles.style.transform = "translateX(150vw)";
    btns.style.transform = "translate(-150vw, -50%)";
    registroCuenta.style.transform = "translateX(0)";
    back.removeEventListener("click", showRegister);
    back.removeEventListener("click", backHome);
    back.removeEventListener("click", showForm);
    back.removeEventListener("click", showPerfiles);
    back.addEventListener("click", showConnect);
    profesionalRegistro.style.height = "auto";
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
    showPerfiles();
});

function showPerfiles(){
    perfiles.style.position = "relative";
    registroCuenta.style.position = "absolute";
    personalizar.style.position = "absolute";
    registroCuenta.style.transform = "translateX(-150vw)";
    personalizar.style.transform = "translateX(150vw)";
    perfiles.style.transform = "translateX(0)";
    title.innerHTML = "2. Define tu perfil";
    back.removeEventListener("click", showRegister);
    back.removeEventListener("click", backHome)
    back.removeEventListener("click", showConnect);
    back.removeEventListener("click", showPerfiles);
    back.addEventListener("click", showForm);
    profesionalRegistro.style.height = "auto";
}

for (var i = 0; i < perfil.length; i++) {
    perfil[i].addEventListener("click", showPersonalizar);
}

function showPersonalizar(){
    perfiles.style.position = "absolute";
    registroCuenta.style.position = "absolute";
    personalizar.style.position = "relative";
    perfiles.style.transform = "translateX(-150vw)";
    personalizar.style.transform = "translateX(0)";
    title.innerHTML = "3. Peronsaliza tu perfil";
    back.removeEventListener("click", showRegister);
    back.removeEventListener("click", backHome)
    back.removeEventListener("click", showConnect);
    back.removeEventListener("click", showForm);
    back.addEventListener("click", showPerfiles);
    profesionalRegistro.style.height = "auto";
}

personalizar.addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "../registro/bienvenida.html"
});