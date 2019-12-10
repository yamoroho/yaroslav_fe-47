jq3 = jQuery.noConflict();
jq3( function ($) {
    'use strict';

    $('#featured_carousel').owlCarousel({
        items: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        smartSpeed: 700,
        dotsSpeed: 500,
        loop: true,
        nav: true,
        navText: ['', ''],
        dots: false,
        mouseDrag: true,
        margin: 40,
        stagePadding: 0,
        autoWidth: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
            },
            479:{
                items: 2,
            },
            767:{
                items: 2,
            },
            991:{
                items: 3,
            },
            1099:{
                items: 4,
            }
        }
    });
});