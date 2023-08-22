const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoICon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click' , toggleDesktopMenu);
menuHamIcon.addEventListener('click' , toggleMobileMenu);
menuCarritoICon.addEventListener('click',toogleMenuAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toogleMenuAside() {
    aside.classList.toggle('inactive');
}

// menuEmail.addEventListener('click' , () => {
//     desktopMenu.classList.toggle('inactive');
// });