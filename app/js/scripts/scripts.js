$(document).ready(function () {
    "use strict";

    // $(".inline").modaal();

    //select
    $(".chosen-select").chosen({disable_search_threshold: 10});

    //discount slider
    $(".slider-discount").slick({
        slide: "a",
        arrows: false,
        // autoplay:true,
        autoplaySpeed:1500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // menu scroll
    var tempScrollTop, currentScrollTop = 0;
    $(window).scroll(function(){
        currentScrollTop = $(window).scrollTop();

        if (tempScrollTop < currentScrollTop ) {
            $('.nav-bottom').addClass('hidden');

        } else if (tempScrollTop > currentScrollTop) {
            $('.nav-bottom').removeClass('hidden');
        }
        tempScrollTop = currentScrollTop;


        if ($(this).scrollTop() > 0) {
            $('.nav-index').removeClass('nav-transparent');
        }
        else {
            $('.nav-index').addClass('nav-transparent');
        }

    });

    //search link
    $(".link-search").click(function () {
       event.preventDefault();
       $(".search-input").toggleClass('visible');
       $(this).toggleClass('active');
    });

    //dropdown menu
    $('.icon-dropdown--link-list a').hover(function(){
       var a = $(this).attr('data-to');
       $('.icon-dropdown--link-list a').removeClass('active');
       $('.icon-dropdown-description').removeClass('active');
       $(this).toggleClass('active');
       $('.icon-dropdown-description[data-id=' + a + ']').addClass('active');
    });
    $('.icon-container').hover(function() {
        $('.icon-dropdown--link-list a').removeClass('active');
        $('.icon-dropdown-description').removeClass('active');
        $('.icon-dropdown--link-list li:first-child a').addClass('active');
        $('.icon-dropdown-description:first-child').addClass('active');
    });


    //menu trigger
    $(".nav-icon").click(function () {
        event.preventDefault();
        $(this).toggleClass("open");
        $("main").toggleClass("open");
        $("nav").toggleClass("open");
        $("html, body").toggleClass("open-nav");
    });

    $("main").click(function () {
        if ($(this).hasClass("open")) {
            $(this).toggleClass("open");
            $(".nav-icon").toggleClass("open");
            $("nav").toggleClass("open");
            $("html,body").toggleClass("open-nav");
        }
    });
    $(window).on("load resize",function(){
        if (window.matchMedia("(max-width: 767px)").matches) {
            $("#navicontacts").appendTo(".nav-bottom .container .row");
            $("#navitop").prependTo(".nav-bottom .container .row");
            $(".nav-bottom").prependTo("body");
        } else {
            $("#navitop").appendTo(".nav-border-bottom .row");
            $("#navicontacts").appendTo(".nav-border-bottom .row");
            $(".nav-bottom").prependTo("nav");
        }


        if (window.matchMedia("(max-width: 1023px)").matches) {
            $('#discount-row').appendTo('#product-col');
        } else {
            $('#discount-row').appendTo('#discount-col');
        }
    });


});


