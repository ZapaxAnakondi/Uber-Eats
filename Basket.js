let notification = document.querySelector('.Basket');
let notificationText = document.querySelector('.Basket > p');
let textItem = document.querySelector('.proto')
let backetTexts = document.querySelectorAll('.menu-card')


var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;
  };

  
for (backet of backetTexts) {
    let product = backet.querySelector('.proto');
    let btn = backet.querySelector('#burger');
    let basketMeni = document.querySelector('.basket-Item')
    let pictureBurger = backet.querySelector('img')

    btn.addEventListener('click', function(){
        notificationText.innerHTML = 'Добавили в корзину! '
        notificationText.innerHTML += product.textContent
        notification.classList.remove('hidden');   


        let test = makeElement('div','item')
        let picture = makeElement('img');
        let h3 = makeElement('h3')
        let text = makeElement('a','proto',product.textContent) 
      
        picture.src=pictureBurger.src
    
        h3.appendChild(text)
        test.appendChild(h3)
        test.appendChild(picture)
        basketMeni.appendChild(test)

        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);

    }  
    )    
}



