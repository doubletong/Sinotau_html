$(document).ready(function() {

    // var lastScrollTop = 0;
    // // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // window.addEventListener("scroll", function(){ 
    //    var st = window.pageYOffset || document.documentElement.scrollTop; 


    //    if (st > lastScrollTop){
    //       // downscroll code
    //         if($("#site-header").hasClass("fixheader")){
    //             $("#site-header").addClass("scroll-header");   
    //             $("#site-header").removeClass("fixheader");   
    //          //   $("#logo").attr("src","img/logo.png");    
    //         }

    //    } else {
    //       // upscroll code      

    //       if (st > 0){
    //         if(!$("#site-header").hasClass("fixheader")){
    //             $("#site-header").addClass("fixheader");  
    //            // $("#logo").attr("src","img/logo_color.png");  
    //         } 
    //        }else{
    //         if($("#site-header").hasClass("scroll-header") || $("#site-header").hasClass("fixheader")){
    //             $("#site-header").removeClass("scroll-header").removeClass("fixheader");  
    //           //  $("#logo").attr("src","img/logo.png");    
    //         } 

    //        }

    //    }
    //    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);

    $(window).scroll(function() {
        if (40 < $(window).scrollTop()) {
            $("#site-header").addClass("fixheader");
            // $("#logo").attr("src","img/logo_bot.png");
        } else {
            $("#site-header").removeClass("fixheader");
            // $("#logo").attr("src","img/logo.png");        
        }
    });



    // $('.mainav li.parent').hover(function(e){
    //     $('.site-header').addClass('fixheader dropdown');
       
    // },function(){
    //     $('.site-header').removeClass('fixheader dropdown');
    // });

    $('#overmenu .menu a').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $(this).addClass('clickme');
        setTimeout(function(e) {
            location.href = url;
        }, 600);
    });


    $('.nav-bg').hover(function(e) {
        $(this).stop().fadeIn();
    }, function() {
        $(this).stop().fadeOut();
    });

    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $("#overmenu").toggleClass("showMenu");
    });

    $("#overmenu li.parent>a").on("click", function(e) {
        "use strict";
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
        $(this).next('.sub-menu').slideToggle();
    });

    // $("#nav li.hasnav").click(function(e){         
    //     $(this).find('.subnav').slideToggle();
    // });





    var btn = $('#toTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });



    $('.menu-service .qr').click(function(e){
        $('#qrcode').closest('.overly').fadeIn();
    });

    $('.menu-service .nav').click(function(e){
        $('#menus').slideToggle();
        if( $('.menu-service .nav>i').hasClass('icon-close')){
            $('.menu-service .nav>i').removeClass('icon-close').addClass('icon-menu');
        }else{
            $('.menu-service .nav>i').addClass('icon-close').removeClass('icon-menu');
        }
        
    });

    $('.btn-close').click(function(e){
        e.preventDefault();
        $(this).closest('.overly').fadeOut();
    });



});
