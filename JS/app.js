const navSlide = function () {
    const burger = document.querySelector('#hbg-button-mobile');
    const nav = document.querySelector('.mobile-nav');
    const background = document.querySelector('.background');
    const exitNav = document.querySelector('.background');

    burger.onclick = function () {
        nav.classList.toggle('mobile-nav-active');
        background.classList.toggle('background-active');
    };

    exitNav.onclick = function () {
        nav.classList.toggle('mobile-nav-active');
        background.classList.toggle('background-active')
    }
}

navSlide();
