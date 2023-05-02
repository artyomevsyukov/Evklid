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

(function () {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#menu");
    const menuLink = document.querySelectorAll(".menu__link");
    burger.addEventListener("click", function () {
        burger.classList.toggle("open");
        menu.classList.toggle("open");
    });

    if (window.innerWidth <= 1024) {
        for (let i = 0; i < menuLink.length; i += 1) {
            menuLink[i].addEventListener("click", () => {
                menu.classList.remove("open");
            });
        }
    }
})();

// Scroll to anchors

(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector(".header").clientHeight;
        // для header fixed, так же удалить везде headerElHeight
        // const headerElHeight = document.querySelector(".header").clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition =
            target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(
                timeElapsed,
                startPosition,
                targetPosition,
                duration
            );
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll(".js-scroll");
        links.forEach((each) => {
            each.addEventListener("click", function () {
                const currentTarget = this.getAttribute("href");
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();
