let button = document.querySelector('.btn-fixed ');





window.onscroll = function(){
    button.classList.remove('hidden')
    if(window.pageYOffset > 500){
        button.classList.remove('hidden')
    }else{
        button.classList.add('hidden')
    }
}





