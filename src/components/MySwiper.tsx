// import { useEffect, useRef } from "react";
// import { register } from "swiper/element/bundle";
// register();
//
// const MySwiper = () => {
//     const swiperRef = useRef(null); // Using useRef to access the swiper container
//
//     useEffect(() => {
//         const swiperContainer = swiperRef.current;
//
//         // Configure Swiper parameters
//         const params = {
//             spaceBetween: 30,
//             slidesPerView: 1,
//             loop: true,
//             navigation: true,  // Enable navigation
//             pagination: true,  // Enable pagination
//             breakpoints: {
//                 640: {
//                     slidesPerView: 2,
//                 },
//                 1024: {
//                     slidesPerView: 3,
//                 },
//             },
//             injectStyles: [
//                 `
//                     .swiper-button-next,
//                     .swiper-button-prev {
//                         background-color: transparent;
//                         padding: 8px 16px;
//                         color: #7a4fff;
//                     }
//                     .swiper-pagination-bullet {
//                         width: 12px;
//                         height: 12px;
//                         background-color: #7a4fff;
//                     }
//                     .swiper-pagination-bullet-active {
//                         background-color: #5200cc;
//                     }
//                 `,
//             ],
//         };
//
//         // Apply the configuration to the swiper container
//         Object.assign(swiperContainer, params);
//         swiperContainer.initialize();
//     }, []);
//
//     return (
//         <swiper-container ref={swiperRef} init="false">
//             <swiper-slide className="blue-slide">Slide 1</swiper-slide>
//             <swiper-slide className="yellow-slide">Slide 2</swiper-slide>
//             <swiper-slide className="green-slide">Slide 3</swiper-slide>
//         </swiper-container>
//     );
// };
//
// export default MySwiper;
//
