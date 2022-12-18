const body = document.querySelector('body');
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu');

menuTrigger.onclick = function () {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    // body.classList.toggle('lock-scroll')
}
