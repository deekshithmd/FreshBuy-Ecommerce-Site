var slide = document.querySelector("#slider");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");

btn1.onclick = function(){
    slide.style.transform = "translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}

btn2.onclick = function(){
    slide.style.transform = "translateX(-100%)";
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}

btn3.onclick = function(){
    slide.style.transform = "translateX(-200%)";
    btn3.classList.add("active");
    btn2.classList.remove("active");
    btn1.classList.remove("active");
    btn4.classList.remove("active");
}