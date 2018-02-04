$(function() {

    $('.header__hamburger').click(function (event) {
        $('.nav__group').addClass("nav__group--shown");
        $('.overlay').addClass("overlay__shown");
        $('body').addClass("fixed_overlay");
        }); 

    $(document).bind("click keydown", function (event) {
        closeModal = event.target;
        escapeClose = event.which;
        if ($(closeModal).hasClass("overlay") || escapeClose == 27) {
            $('.nav__group').removeClass("nav__group--shown");
            $('body').removeClass("fixed_overlay");
            $('.overlay').removeClass("overlay__shown");
        }

    });
        //navigation click======
        $('.nav__item a').click(function (e) {
            e.preventDefault();
            console.log($(this).attr('href'));
            var getHref = $(this).attr('href');
            var jump = $(getHref).offset().top;
            $('html, body').animate({
                scrollTop: jump
            }, 1000);
        });

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
   

    //button up
    $(document).click(function (event) {
        btnUp = event.target;
        if ($(btnUp.parentNode).hasClass('btn-up') ) {
            $('body, html').animate({ 'scrollTop': 0 }, 1000);
        }
    });
    $(document).scroll(function (e) { 
        e.preventDefault;
        if ($(document).scrollTop() > 200) {
            $('.btn-up').addClass('btn-up--shown');
        } else {
            $('.btn-up').removeClass('btn-up--shown')
       }
    }); 
    
    
}); 


