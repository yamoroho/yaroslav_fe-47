jq3 = jQuery.noConflict();
jq3(function ($) {
    'use strict';

    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        loop: true,
        margin: 0,
        nav: false,
        items: 1
    });

});

