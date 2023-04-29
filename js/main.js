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

// burger
// (function () {
//     const burger = document.querySelector("#burger");
//     burger.addEventListener("click", () => {
//         burger.classList.toggle("open");
//     });
// })();

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
});
