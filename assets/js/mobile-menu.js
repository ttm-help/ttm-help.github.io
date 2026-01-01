window.addEventListener('load', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('main-nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });
})

