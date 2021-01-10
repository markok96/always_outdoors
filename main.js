window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
        document.querySelector('.header').style.opacity = 0.7;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});