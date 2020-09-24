var filterProfesion = document.getElementsByClassName("filter-profesion");
var form = document.getElementsByClassName("search-form");
var canje = document.getElementById("canje");
var modelo = document.getElementById("modelo");
var influencer = document.getElementById("influencer");
var alquiler = document.getElementById("alquiler");
var franja = document.getElementsByClassName("franja");
var fechaPuntual = document.getElementsByClassName("fecha-puntual");

for (var y = 0; y < filterProfesion.length; y++){
    filterProfesion[y].addEventListener('click', function(){
        for (var i = 0; i < form.length; i++) {
            form[i].reset();
        }
        for (var i = 0; i < franja.length; i++) {
            franja[i].style.display = "none";
        }
        for (var i = 0; i < fechaPuntual.length; i++) {
            fechaPuntual[i].style.display = "block";
        }
        for (var y = 0; y < filterProfesion.length; y++){
            filterProfesion[y].classList.remove("current");
        }
        this.classList.add("current");
        if(this.classList.contains("canje")){
            canje.style.position = "relative";
            canje.style.transform = "translateX(0)";
            modelo.style.position = "absolute";
            modelo.style.transform = "translateX(150vw)";
            influencer.style.position = "absolute";
            influencer.style.transform = "translateX(150vw)";
            alquiler.style.position = "absolute";
            alquiler.style.transform = "translateX(150vw)";
        }
        if(this.classList.contains("modelo")){
            modelo.style.position = "relative";
            modelo.style.transform = "translateX(0)";
            canje.style.position = "absolute";
            canje.style.transform = "translateX(-150vw)";
            influencer.style.position = "absolute";
            influencer.style.transform = "translateX(150vw)";
            alquiler.style.position = "absolute";
            alquiler.style.transform = "translateX(150vw)";
        }
        if(this.classList.contains("influencer")){
            influencer.style.position = "relative";
            influencer.style.transform = "translateX(0)";
            canje.style.position = "absolute";
            canje.style.transform = "translateX(-150vw)";
            modelo.style.position = "absolute";
            modelo.style.transform = "translateX(-150vw)";
            alquiler.style.position = "absolute";
            alquiler.style.transform = "translateX(150vw)";
        }
        if(this.classList.contains("alquiler")){
            alquiler.style.position = "relative";
            alquiler.style.transform = "translateX(0)";
            canje.style.position = "absolute";
            canje.style.transform = "translateX(-150vw)";
            modelo.style.position = "absolute";
            modelo.style.transform = "translateX(-150vw)";
            influencer.style.position = "absolute";
            influencer.style.transform = "translateX(-150vw)";
        }
    })
}
/////// cambiar formato de fecha ///////

var puntualOption = document.getElementsByClassName("puntual-option");

var franjaOption = document.getElementsByClassName("franja-option");

for (var i = 0; i < puntualOption.length; i++) {
    puntualOption[i].addEventListener('click', function(){
        for (var i = 0; i < fechaPuntual.length; i++) {
            fechaPuntual[i].style.display = "block";
        }
        for (var i = 0; i < franja.length; i++) {
            franja[i].style.display = "none";
        }
    });
}

for (var i = 0; i < franjaOption.length; i++) {
    franjaOption[i].addEventListener('click', function(){
        for (var i = 0; i < fechaPuntual.length; i++) {
            fechaPuntual[i].style.display = "none";
        }
        for (var i = 0; i < franja.length; i++) {
            franja[i].style.display = "block";
        }
    });
}

/////// canje ///////

var submitCanje = document.getElementById("submit-canje");
var ofrezcoCanje = document.getElementById("ofrezco-canje");
var buscoCanje = document.getElementById("busco-canje");
var profesionOfrezco = document.getElementById("profesion-ofrezco");
var profesionBusco = document.getElementById("profesion-busco");

ofrezcoCanje.addEventListener('click', function(){
    profesionOfrezco.style.display = "block";
    profesionBusco.style.display = "none";
    submitCanje.value = "Buscar profesional";
});

buscoCanje.addEventListener('click', function(){
    profesionOfrezco.style.display = "none";
    profesionBusco.style.display = "block";
    submitCanje.value = "Buscar canje";
});

/////// modelo ///////

var buscoModelo = document.getElementById("busco-modelo");
var soyModelo = document.getElementById("soy-modelo");
var submitModelo = document.getElementById("submit-modelo");

buscoModelo.addEventListener('click', function(){
    submitModelo.value = "Buscar modelo";
});

soyModelo.addEventListener('click', function(){
    submitModelo.value = "Buscar trabajo";
});

/////// influencer ///////

var buscoInfluencer = document.getElementById("busco-influencer");
var soyInfluencer = document.getElementById("soy-influencer");
var submitInfluencer = document.getElementById("submit-influencer");

buscoInfluencer.addEventListener('click', function(){
    submitInfluencer.value = "Buscar influencer";
});

soyInfluencer.addEventListener('click', function(){
    submitInfluencer.value = "Buscar trabajo";
});

/////// alquiler ///////

var buscoAlquilar = document.getElementById("busco-alquilar");
var alquilo = document.getElementById("alquilo");
var submitAlquiler = document.getElementById("submit-alquiler");

buscoAlquilar.addEventListener('click', function(){
    submitAlquiler.value = "Buscar alquileres";
});

alquilo.addEventListener('click', function(){
    submitAlquiler.value = "Publicar";
});