//step 1 : définir les variables dont on a besoin
const burgerButton = document.querySelector('.hamburger')
const mainNav = document.querySelector('header nav')
const overlay = document.querySelector('.overlay')
const closeMenuButton = document.querySelector('.closeMenuButton')

//step 2 : définir l'évenement au clic sur le burger menu
burgerButton.addEventListener('click',function(){
//step 3 : définir les actions a éxécute au clic
    console.log('ok')
    burgerButton.classList.add('is-active')
    mainNav.classList.add('isVisible')
    overlay.classList.add('isVisible')
})

closeMenuButton.addEventListener('click', function(){

    console.log('ok')
    burgerButton.classList.remove('is-active')
    mainNav.classList.remove('isVisible')
    overlay.classList.remove('isVisible')
})



overlay.addEventListener('click', function(){

    console.log('ok')
    burgerButton.classList.remove('is-active')
    mainNav.classList.remove('isVisible')
    overlay.classList.remove('isVisible')
})