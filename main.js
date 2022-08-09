const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.icon_menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarIcon  = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarAside);

function toggleDesktopMenu() 
{
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
