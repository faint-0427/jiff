$(".program_tab button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    console.log(num);
    $(".program_list .program_each_list").eq(num).fadeIn().siblings().hide();
    $(".visual_section img").eq(num).fadeIn().siblings().hide();
});



/* $(".program .program_tab button").click(function () {
    $(this).toggleClass("big");
    $(this).siblings().toggleClass("small");
});
 */

$(".program .program_tab button").on('click', function () {
    $(this).siblings().removeClass("active big small");
    $(this).removeClass("big small");
    
    $(this).addClass("active big");
    $(this).siblings().addClass("small");
});

const livefir = new Swiper('.livefir',{})