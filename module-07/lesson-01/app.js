'use strict';

// =================================================
// querySelector
// Поиск первого DOM элемента по селектору
// =================================================
const button = document.querySelector('.my-button');

// найденный элемент передается по ссылке,
// поэтому все изменения тут же видно на странице
button.textContent = 'Press me';
button.style.backgroundColor = 'red';
button.style.color = 'white';
button.style.width = '200px';
button.style.height = '50px';
button.style.fontSize = '25px';
button.style.borderRadius = '10px';

// =================================================
// querySelector
// Поиск всех DOM элементов по селектору
// =================================================
const lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.style.color = 'green';
  li.style.fontFamily = 'Arial';
});

// =================================================
// addEventListener
// =================================================
const image = document.querySelector('img');

button.addEventListener('click', () => {
  if (image.src.includes('pic1.jpg')) {
    image.src = 'pic2.jpg';
  } else {
    image.src = 'pic1.jpg';
  }
});

// =================================================
// custom attributes
// так делать не правильно
// =================================================
image.setAttribute('my-attribute', '123');
console.log('my-attribute:', image.getAttribute('my-attribute'));

// =================================================
// custom attributes "data-..."
// так правильно
// =================================================
image.setAttribute('data-my-attribute', '456');
console.log('before:', image.dataset);

image.dataset.myAttribute = 789;
image.dataset.action = 'fight';
console.log('after:', image.dataset);

// =================================================
// поиск элемента по аттрибуту
// =================================================
const myElement = document.querySelector('li[data-name="second item"]');
console.log(myElement);
