var next = document.getElementById("next");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

next.addEventListener("click", showTwo);

function showTwo(){
    one.style.transform = "translate(-150vw, -50%)";
    two.style.transform = "translate(0, -50%)";
    next.removeEventListener("click", showTwo);
    next.addEventListener("click", showThird);
    first.classList.remove("current");
    second.classList.add("current");
}

function showThird(){
    two.style.transform = "translate(-150vw, -50%)";
    three.style.transform = "translate(0, -50%)";
    next.removeEventListener("click", showThird);
    next.addEventListener("click", function(){
        window.location.href = "../home.html"
    });
    second.classList.remove("current");
    third.classList.add("current");
    next.innerHTML = "Comenzar";
}