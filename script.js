/*Slider*/
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
} );

document.addEventListener( 'DOMContentLoaded', function() {
    var splide2 = new Splide('.slider2', {
        type: 'loop',
        width: '100%',
        perPage: 4,
        gap: '10px',
        autoplay: true,
        perMove: 1,
        interval: 2000,
        speed: 900,
        arrows: false,
        pagination: true,
        breakpoints: {
            600: {
                perPage: 2,
                gap: '1rem',
            },
            480: {
                perPage: 1,
                gap: '1rem',
            },
        },
    });
    splide2.mount();
} );

document.addEventListener( 'DOMContentLoaded', function() {
    var splide3 = new Splide('.slider3', {
        perPage: 3,
        gap: '20px',
        pagination: false,
        type: 'slide',
        autoplay: false,
        speed: 600,
        arrows: false,
        autoWidth: true,
        breakpoints: {
            1200: {
                perPage: 2,
                gap: '1rem',
            },
            768: {
                perPage: 1,
                gap: '1rem',
            },
        },
    });
    splide3.mount();
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
        select.classList.toggle('is-active');
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
