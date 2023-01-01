const MD_WIDTH = 770;
if (window.innerWidth < MD_WIDTH) {
    window.addEventListener('load', () => {
        const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
        const menuContainer = document.querySelector('#main-menu');

        menuTrigger.onclick = function () {
            menuContainer.classList.toggle('open');
            menuTrigger.classList.toggle('is-active')
            // body.classList.toggle('lock-scroll')
        }
    })
}

