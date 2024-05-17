/* Slider s logy na uvodni strance webu */
document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '.slider1', {
        perPage: 6,
        gap: '10px',
        pagination: false,
        type: 'loop',
        autoplay: true,
        interval: 1000,
        speed: 900000,
        arrows: false
    });
    splide1.mount();

    var splide2 = new Splide('.slider2', {
        type: 'loop',
        width: '100%',
        perPage: 4,
        gap: '10px',
        autoplay: true,
        perMove: 1,
        interval: 3000,
        speed: 900,
        arrows: false
    });
    splide2.mount();

} );

/*Dropdown*/
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});

