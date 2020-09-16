var navToggle = document.getElementById("profile-nav-toggle");
var navList = document.getElementById("profile-nav");
var navWrp = document.getElementById("profile-nav-wrp");
var navListItem = document.getElementsByClassName("option");
var linesWrp = document.getElementById("lines-wrp");
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");
var darken = document.getElementById("darken-bg");

var navToggleClicks = 1;

navToggle.addEventListener("click", OpenClose);
for (var i = 0; i < navListItem.length; i++) {
  navListItem[i].addEventListener('click',OpenClose);
}

function OpenClose(){
    navToggleClicks++
    if(navToggleClicks % 2 == 0){
        openNav();
    }else{
        closeNav();
    }
}

function openNav(){
    linesWrp.style.transform = "translateX(.5rem)";
    navList.style.transform = "translateX(0)";
    lineOne.style.transform = "rotate(45deg) scale(0.9)";
    lineTwo.style.opacity = "0";
    lineThree.style.transform = "rotate(-45deg) scale(0.9)";
    darken.style.display = "block";
    navWrp.style.zIndex = "150000";
}

function closeNav(){
    linesWrp.style.transform = "translateX(0)";
    navList.style.transform = "translateX(-150vw)";
    lineOne.style.transform = "rotate(0) scale(1)";
    lineTwo.style.opacity = "1";
    lineThree.style.transform = "rotate(0) scale(1) translate(0, 0)";
    darken.style.display = "none";
    navWrp.style.zIndex = "90000";
}