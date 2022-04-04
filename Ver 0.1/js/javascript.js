let menu = document.querySelector('.fa-bars')
let fecha = document.querySelector('.fa-times')
let nav = document.querySelector('.bar-navegacao')

menu.addEventListener('click', function(){
    nav.style.display = 'block'
    console.log('abrir')
}) 
fecha.addEventListener('click', function(){
    nav.style.display = 'none'
    console.log('fecha')
})


let abrir = document.querySelector('.btn-icon-1')
let fechar = document.querySelector('.fa-times-circle')
let noti1 = document.querySelector('.noti1')

abrir.addEventListener('click', function(){
    noti1.style.display = 'block'
    console.log('abrir')
}) 
fechar.addEventListener('click', function(){
    noti1.style.display = 'none'
    console.log('fecha')
});

let abra = document.querySelector('.btn-icon-2')
let noti2 = document.querySelector('.noti2')
let exit = document.querySelector('.exit')

abra.addEventListener('click', function(){
    noti2.style.display = 'block'
    console.log('abrasdsadair')
}) 
exit.addEventListener('click', function(){
    noti2.style.display = 'none'
    console.log('fecha')
}) 


