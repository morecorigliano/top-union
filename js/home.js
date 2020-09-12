var search = document.getElementById("search");
var publicaciones = document.getElementById("publicaciones");
var filters = document.getElementById("filters");
var searchWrp = document.getElementById("search-wrp");
var searchForm = document.getElementById("search-form");
var home= document.getElementById("home");

search.addEventListener('click', openSearchForm);

function openSearchForm(){
    searchForm.style.position = "relative";
    searchForm.style.transform = "translateX(0)";
    publicaciones.style.position = "absolute";
    publicaciones.style.transform = "translateX(-150vw)";
    filters.style.display = "none";
    searchWrp.style.display = "none";
}