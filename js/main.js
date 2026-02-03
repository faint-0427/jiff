const visual_swiper = new Swiper(".visual .visual_swiper", {
    direction: 'vertical',
    loop: true,
    speed: 1000,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

const content_swiper = new Swiper(".visual  .content_swiper", {
    direction: 'vertical',
    slidesPerView: 2,

    breakpoints: {
        1500: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },

});

const coming = new Swiper(".coming .swiper", {
    direction: 'horizontal',
    slidesPerView: 1.1,
    breakpoints: {
        1500: {
            slidesPerView: 6.5,
        },
        1200: {
            slidesPerView: 3.5,
        },
        800: {
            slidesPerView: 2.5,
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: false,
    disableOnInteraction: true,

});

//partner_list
const partner_list = new Swiper(".partner_list", {
    slidesPerView: 3,
    spaceBetween: 70,

    loop: true,
    breakpoints: {
        1500: {
            slidesPerView: 8,
        },
        1200: {
            slidesPerView: 6,
        },
        800: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 6000,
    freeMode: true,
    cssMode: false,
});



