// Swiper initialization
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable looping
    // autoplay: {
    //     delay: 3000, // Slide changes every 3 seconds
    //     disableOnInteraction: false, // Keep autoplay even after user interaction
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Pagination dots are clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
