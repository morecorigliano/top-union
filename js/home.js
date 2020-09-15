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

var saveBtn= document.getElementsByClassName("save-btn");

for (var x = 0; x < saveBtn.length; x++){
    saveBtn[x].addEventListener('click', function(){
        if(this.classList.contains("saved")){
            this.classList.remove("saved");
        }else{
            this.classList.add("saved");
        }
    })
};

var postularmeBtn = document.getElementsByClassName("postularme");

for (var y = 0; y < postularmeBtn.length; y++){
    postularmeBtn[y].addEventListener('click', function(){
        this.parentElement.parentElement.classList.add("postulado");
        this.innerHTML = "Postulado";
    })
};