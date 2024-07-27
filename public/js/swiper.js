const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        1024: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});