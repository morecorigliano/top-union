var individualBtn = document.getElementById("individual-btn");
var equiposBtn = document.getElementById("equipos-btn");
var underline = document.getElementById("underline");
var individual = document.getElementById("individual");
var equipos = document.getElementById("equipos");

individualBtn.addEventListener('click', openIndividual);
equiposBtn.addEventListener('click', openEquipos);

function openIndividual(){
    underline.style.transform = "translateX(0)";
    individual.style.position = "relative";
    individual.style.transform = "translateX(0)";
    equipos.style.position = "absolute";
    equipos.style.transform = "translateX(150vw)";
}

function openEquipos(){
    underline.style.transform = "translateX(50vw)";
    equipos.style.position = "relative";
    equipos.style.transform = "translateX(0)";
    individual.style.position = "absolute";
    individual.style.transform = "translateX(150vw)";
}