const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click' , toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

// menuEmail.addEventListener('click' , () => {
//     desktopMenu.classList.toggle('inactive');
// });