'use strict'

window.addEventListener('load',()=>{
    var share = document.querySelector('#share');
    var menuS= document.querySelector('.menu__share');
    var btnShare = document.querySelector('.share');
    share.addEventListener('click',()=>{
        if(menuS.classList.contains('show')){
            menuS.classList.remove('show');
            menuS.classList.add('hide');
            btnShare.classList.remove('active');
        }else{
            menuS.classList.add('show');
            menuS.classList.remove('hide');
            btnShare.classList.add('active');
            // share.style.color="white";
            // btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";

        }
    });

});