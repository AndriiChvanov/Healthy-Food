import modal from "./module/modal";
import carousel from "./module/carousel";
import hover from "./module/hover";

modal();
carousel();
hover();


$(document).on("click", ".go_to_top", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
});
$(document).on("click", ".header-menu a", function(e) {
    e.preventDefault();
    const id  = $(this).attr('href');
    const top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
$(document).on("click", ".footer-container a", function(e) {
    e.preventDefault();
    const id  = $(this).attr('href');
    const top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollUp: top}, 800); // плавно переходим к блоку
});

$('.rev-slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    adaptiveHeight: true
});
