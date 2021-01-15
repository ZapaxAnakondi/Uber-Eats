let basketNav = document.querySelector('.fa-shopping-basket')
let basketItem = document.querySelector('.basket-Item')


basketNav.addEventListener('click', function(){
    basketItem.classList.remove('hidden');
    setTimeout(() => {
        basketItem.classList.add('hidden');
    }, 7000);
})
basketNav.addEventListener('dblclick', function(){
    basketItem.classList.add('hidden');
})











// let basketMeni = document.querySelector('.basket-Item')

// var makeElement = function (tagName, className, text) {
//     var element = document.createElement(tagName);
//     element.classList.add(className);
//     if (text) {
//       element.textContent = text;
//     }
//     return element;
//   };

//   let test = makeElement('div','item')
//   let picture = makeElement('img');
//   let h3 = makeElement('h3')
//   let text = makeElement('a','proto','ДвижОК — Манежная')

//   h3.appendChild(text)
//   picture.src="images/Uber Eats (5)/Stores/1-1.png"



//   test.appendChild(h3)
//   test.appendChild(picture)
//   basketMeni.appendChild(test)
  