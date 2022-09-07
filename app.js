'use strict';


const circle=document.querySelector('.circle');

const elementContainer=document.querySelector('.rotate-container');

const rotate=document.querySelector('.btn-rotate');

const close=document.querySelector('.cancel-rotate');


console.log(circle,rotate,close);


rotate.addEventListener('click',()=>{
    circle.classList.add('circle-rotate');

    elementContainer.classList.add('circle-container-rotate');
});

close.addEventListener('click',()=>{
    circle.classList.remove('circle-rotate');
    elementContainer.classList.remove('circle-container-rotate');
})