const dark=document.querySelector(".dark");
var slide = document.querySelector("#slider");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");

if(localStorage.getItem("dark")==="dark-theme"){
    document.body.classList.add("dark-theme")
    dark.classList.remove("fa-sun")
    dark.classList.add("fa-moon")
}
else{
    document.body.classList.add("light-theme")
}

dark.addEventListener('click',()=>{
    if(dark.classList.contains("fa-sun")){
        localStorage.clear();
        localStorage.setItem("dark","dark-theme")
        dark.classList.remove("fa-sun")
        dark.classList.add("fa-moon")
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
    }
    else{
        localStorage.clear();
        localStorage.setItem("dark","light-theme")
        dark.classList.remove("fa-moon")
        dark.classList.add("fa-sun")
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
    }
})

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

