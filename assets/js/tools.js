/* Btn animation */

document.querySelector(".btn__telegram-hover").onmouseover = function() {
    document.querySelector(".telegram__tools").classList.add('animate__headShake');
};

document.querySelector(".btn__telegram-hover").onmouseout = function() {
    document.querySelector(".telegram__tools").classList.remove('animate__headShake');
};

new Splide( '#image-carousel', {
    type   : 'fade',
    arrows : false,

} ).mount();