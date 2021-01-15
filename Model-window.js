let headerButton = document.querySelector('.header-Button')
let Model = document.querySelector('.Log');
let exit = document.querySelector('.exit');

headerButton.addEventListener('click', function(){
    Model.classList.remove('hidden');
})
headerButton.addEventListener('dblclick', function(){
    Model.classList.add('hidden');
})
exit.addEventListener('click', function(){
    Model.classList.add('hidden');
})