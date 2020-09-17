var filterProfesion = document.getElementsByClassName("filter-profesion");
var empresa = document.getElementById("empresa");
var profesional = document.getElementById("profesional");
var empresaLabel = document.getElementById("empresa-label");
var profesionaLabel = document.getElementById("profesional-label");
var form = document.getElementById("search-form");
var profesionWrp = document.getElementById("profesion-wrp");
var submit = document.getElementById("submit");

for (var y = 0; y < filterProfesion.length; y++){
    filterProfesion[y].addEventListener('click', function(){
        form.reset();
        submit.value = "Encontrar profesional";
        for (var y = 0; y < filterProfesion.length; y++){
            filterProfesion[y].classList.remove("current");
        }
        this.classList.add("current");
        if(this.classList.contains("canje")){
            empresaLabel.innerHTML = "Ofrezco canje";
            profesionaLabel.innerHTML = "Acepto canje";
            profesionWrp.style.display = "block";
        }else{
            profesionWrp.style.display = "none";
        }
        if(this.classList.contains("modelo")){
            empresaLabel.innerHTML = "Busco modelo";
            profesionaLabel.innerHTML = "Soy modelo";
        }
        if(this.classList.contains("influencer")){
            empresaLabel.innerHTML = "Busco influencer";
            profesionaLabel.innerHTML = "Soy influencer";
        }
        if(this.classList.contains("actor")){
            empresaLabel.innerHTML = "Busco actor/actriz";
            profesionaLabel.innerHTML = "Soy actor/actriz";
        }
        if(this.classList.contains("fotografo")){
            empresaLabel.innerHTML = "Busco fotógrafo/a";
            profesionaLabel.innerHTML = "Soy fotógrafo/a";
        }
        if(this.classList.contains("camarografo")){
            empresaLabel.innerHTML = "Busco camarógrafo/a";
            profesionaLabel.innerHTML = "Soy camarógrafo/a";
        }
        if(this.classList.contains("maquillador")){
            empresaLabel.innerHTML = "Busco maquillador/a";
            profesionaLabel.innerHTML = "Soy maquillador/a";
        }
        if(this.classList.contains("productor")){
            empresaLabel.innerHTML = "Busco productor/a";
            profesionaLabel.innerHTML = "Soy productor/a";
        }
        if(this.classList.contains("editor")){
            empresaLabel.innerHTML = "Busco editor/a";
            profesionaLabel.innerHTML = "Soy editor/a";
        }
        if(this.classList.contains("equipos")){
            empresaLabel.innerHTML = "Quiero alquilar equipos";
            profesionaLabel.innerHTML = "Alquilo equipos";
        }
        if(this.classList.contains("locaciones")){
            empresaLabel.innerHTML = "Quiero alquilar locaciones";
            profesionaLabel.innerHTML = "Alquilo locaciones";
        }
})
}

empresa.addEventListener('click', function(){
    submit.value = "Encontrar profesional";
});
profesional.addEventListener('click', function(){
    submit.value = "Encontrar trabajo";
});