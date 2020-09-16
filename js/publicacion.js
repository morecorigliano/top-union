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

var optionsBtn= document.getElementsByClassName("options-btn");
var opciones= document.getElementById("publicacion-opciones");
var darkenBg= document.getElementById("darken-bg");

for (var x = 0; x < optionsBtn.length; x++){
    optionsBtn[x].addEventListener('click', function(){
        opciones.style.display = "block";
        darkenBg.style.display = "block";
        setTimeout(function() {
            opciones.style.transform = "translate(-50%, -50%) scale(1)";
        }, 50);
        darkenBg.addEventListener('click', function(){
            opciones.style.display = "none";
            darkenBg.style.display = "none";
            opciones.style.transform = "translate(-50%, -50%) scale(.8)";
        });
    });
};