'use strict';


const circle=document.querySelector('.circle');

const rotate=document.querySelector('.btn-rotate');

const close=document.querySelector('.cancel-rotate');


console.log(circle,rotate,close);


rotate.addEventListener('click',()=>{
    circle.classList.add('circle-rotate');
});

close.addEventListener('click',()=>{
    circle.classList.remove('circle-rotate');
})