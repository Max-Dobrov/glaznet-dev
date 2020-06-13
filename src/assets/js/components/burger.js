var burger = document.querySelector('.header__burger'),
    burgerInner = document.querySelector('.header__inner');

burger.addEventListener('click', function(event) {
    burgerInner.classList.toggle('active');
});
