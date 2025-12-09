const movie_partner_list = new Swiper(".movie_partner_list", {
    slidesPerView: 8,
    spaceBetween: 10,

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
});

const movie_partner_list2 = new Swiper(".movie_partner_list2", {
    slidesPerView: 8,
    spaceBetween: 10,

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
        reverseDirection: true,
    },
    speed: 6000,
});

$(".space ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

});

$(".info_txt_list li button").click(function () {
    $(this).siblings('p').toggleClass('active');
    $(this).parent('li').siblings().find('p').removeClass('active');
})