$(document).ready(function(){
    $('.about-tour-slider').slick({
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
    });
    $('.program-slider').slick({
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
    });
    $('.students-slider').slick({
        autoplay: false,
        arrows: true,
        infinite: true,
        dotsClass: "students-slider-dots",
        dots: true,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
  });