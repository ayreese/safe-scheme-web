
import {SwiperOptions} from "swiper/types";
import {A11y, Autoplay, Navigation, Pagination, Keyboard, EffectFade, EffectCoverflow} from "swiper/modules";

export const testimonialSwiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, EffectCoverflow, Keyboard],
    spaceBetween: 100,
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    // effect: "coverflow",
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    pagination: {clickable: true, type: "bullets"},
    on: {slideChange: ():void => console.log("slideChange")},
    breakpoints: {
        640: {slidesPerView: 2},
        1024: {slidesPerView: 3},
    },
}

export const logoSwiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Autoplay, EffectFade],
    spaceBetween: 10,
    autoHeight: true,
    slidesPerView: 1,
    loop: true,
    effect: "slide",
    noSwiping: true,
    speed: 2000,
    autoplay: {
        delay: 1000,
    },
    breakpoints: {
        640: {slidesPerView: 2},
        1024: {slidesPerView: 3},
    },
}