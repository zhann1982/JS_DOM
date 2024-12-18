//  Задание 1  ----------------------------------------------------

// Находим элемент через его "Id"
let message = document.getElementById("message")
// Меняем его содержимое 
message.textContent = "Добро пожаловать в JavaScript!"


//  Задание 2  ----------------------------------------------------

// Находим все элементы с классом "box"
let boxes = document.getElementsByClassName('box')

// Перебираем каждый элемент и меняем фон для каждого элемента на зеленый
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green";
}

 
//  Задание 3  ----------------------------------------------------

// Находим элемент через его "Id"
let text1 = document.querySelector("#text")
// Меняем его содержимое 
text1.textContent = "Данный текст был изменен с помощью JavaScript"

// Находим все элементы с классом "box"
let boxes2 = document.querySelectorAll('.box')
// Меняем стиль этих элементов
boxes2.forEach(element => {
    element.style.color = "white"
    element.style.font = "1.2rem"
})


//  Задание 4  ----------------------------------------------------

// Находим все элементы с классом "highlight"
let highlighted = document.querySelectorAll('.highlight')
// Перебираем каждый элемент и меняем его стиль
for (let i = 0; i < highlighted.length; i++) {
    highlighted[i].style.color = "white";
    highlighted[i].style.borderRadius = "10px";
    highlighted[i].style.backgroundColor = "#f79967";
    highlighted[i].style.marginInline = "auto";
}
