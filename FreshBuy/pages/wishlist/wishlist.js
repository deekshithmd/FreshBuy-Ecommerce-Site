const wishlist = document.querySelector(".wishlisted")

wishlist.addEventListener('click',function(){
    if(wishlist.classList.contains('far')){
        wishlist.classList.remove('far');
        wishlist.classList.add('fas');
        wishlist.style.color='red';
    }
    else{
        wishlist.classList.remove('fas');
        wishlist.classList.add('far');
        wishlist.style.color='black';
    }
})