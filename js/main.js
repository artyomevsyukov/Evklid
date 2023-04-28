$(function () {
    $("#tabs").tabs();
});
$(function () {
    $("#accordion").accordion({
        heightStyle: "content",
    });
});

// ui-accordion-header-active

// Swiper

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 5000,
    },
});
