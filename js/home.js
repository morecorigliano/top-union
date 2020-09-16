var search = document.getElementById("search");
var publicaciones = document.getElementById("publicaciones");
var filters = document.getElementById("filters");
var searchWrp = document.getElementById("search-wrp");
var searchForm = document.getElementById("search-form");
var home= document.getElementById("home");
var filterProfesion = document.getElementsByClassName("filter-profesion");
var profesion = document.getElementsByClassName("profesion");
var profesional = document.getElementsByClassName("profesional");
var profesionales = document.getElementById("profesionales");
var postularmeBtn = document.getElementsByClassName("postularme");

search.addEventListener('click', openSearchForm);

function openSearchForm(){
    searchForm.style.position = "relative";
    searchForm.style.transform = "translateX(0)";
    publicaciones.style.position = "absolute";
    publicaciones.style.transform = "translateX(-150vw)";
    profesionales.style.position = "absolute";
    profesionales.style.transform = "translateX(-150vw)";
    filters.style.display = "none";
    searchWrp.style.display = "none";
}

for (var y = 0; y < postularmeBtn.length; y++){
    postularmeBtn[y].addEventListener('click', function(){
        this.parentElement.parentElement.classList.add("postulado");
        this.innerHTML = "Postulado";
    })
};

for (var y = 0; y < filterProfesion.length; y++){
    filterProfesion[y].addEventListener('click', function(){
        for (var c = 0; c < profesional.length; c++){
            profesional[c].style.transform = "translateY(10rem)";
        };
        profesionales.style.position = "relative";
        profesionales.style.transform = "translateX(0)";
        setTimeout(function() {
            for (var c = 0; c < profesional.length; c++){
            profesional[c].style.transform = "translateY(0)";};
        }, 150);
        publicaciones.style.position = "absolute";
        publicaciones.style.transform = "translateX(-150vw)";
        var className = this.classList[1];
        for (var c = 0; c < profesion.length; c++){
            profesion[c].innerHTML = className;
        };
    })
};