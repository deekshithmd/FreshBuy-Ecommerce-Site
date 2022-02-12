const qty = document.querySelector("#qty");
const inc=document.querySelector(".inc")
const dec= document.querySelector(".dec");

inc.addEventListener('click', ()=>{
    qty.value=parseInt(qty.value)+1;
})

dec.addEventListener('click', ()=>{
    if(qty.value<=0)
        qty.value=0;
    else
        qty.value=parseInt(qty.value)-1;
})