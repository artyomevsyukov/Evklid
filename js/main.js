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
        clickable: true,
        // dynamicBullets: true,
    },
    autoplay: {
        delay: 10000,
        pauseOnMouseEnter: true,
    },
});
