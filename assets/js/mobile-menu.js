const XL_WIDTH = 1300;
if (window.innerWidth < XL_WIDTH) {
    window.addEventListener('load', () => {
        const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
        const menuContainer = document.querySelector('#main-menu');

        menuTrigger.onclick = function () {
            menuContainer.classList.toggle('open');
            menuTrigger.classList.toggle('is-active')
        }
    })
}

