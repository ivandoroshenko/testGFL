$(function() {

    $('.header__hamburger').click(function (event) {
        $('.nav__group').addClass("nav__group--shown");
        $('.overlay').addClass("overlay__shown");
        $('body').addClass("fixed_overlay");
        }); 

    $(document).bind("click keydown", function (event) {
        target = event.target;
        escapeClose = event.which;
        if ($(target).hasClass("overlay") || escapeClose == 27) {
            $('.nav__group').removeClass("nav__group--shown");
            $('body').removeClass("fixed_overlay");
            $('.overlay').removeClass("overlay__shown");
        } 

    });

    $(document).on('click', '.subscribe__modal_close, #modal__btn', function () {
        $('.subscribe__modal').hide();
    })
      
    $('.intro__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed:1500,
        fade: true,
        cssEase: 'ease',
        adaptiveHeight: false,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
   
}); 


