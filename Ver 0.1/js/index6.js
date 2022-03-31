

let show0= document.querySelector('.show0')
let show1= document.querySelector('.show1')
let show2= document.querySelector('.show2')
let show3= document.querySelector('.show3')
let show4= document.querySelector('.show4')

let ativo1 = document.querySelectorAll('.ativo1')
let ativo2 = document.querySelectorAll('.ativo2')
let ativo3 = document.querySelectorAll('.ativo3')
let ativo4 = document.querySelectorAll('.ativo4')

ativo2.addEventListener('click', function(){
    show0.classList.add('show0')
    show2.classList.remove('show2')
    console.log('teste')
})

