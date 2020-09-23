

$(document).ready(function() {

    var lastScrollTop = 0;
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function(){ 
       var st = window.pageYOffset || document.documentElement.scrollTop; 
      
       
       if (st > lastScrollTop){
          // downscroll code
            if($("#site-header").hasClass("fixheader")){
                $("#site-header").addClass("scroll-header");   
                $("#site-header").removeClass("fixheader");   
             //   $("#logo").attr("src","img/logo.png");    
            }
       
       } else {
          // upscroll code      

          if (st > 0){
            if(!$("#site-header").hasClass("fixheader")){
                $("#site-header").addClass("fixheader");  
               // $("#logo").attr("src","img/logo_color.png");  
            } 
           }else{
            if($("#site-header").hasClass("scroll-header") || $("#site-header").hasClass("fixheader")){
                $("#site-header").removeClass("scroll-header").removeClass("fixheader");  
              //  $("#logo").attr("src","img/logo.png");    
            } 
          
           }
         
       }
       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    // $(window).scroll(function(){
    //     if (40 < $(window).scrollTop()) {
    //         $("#site-header").addClass("fixheader");  
    //         // $("#logo").attr("src","img/logo_bot.png");
    //     } else {
    //         $("#site-header").removeClass("fixheader");   
    //         // $("#logo").attr("src","img/logo.png");        
    //     }
    // })
   

    // $("#btnsearch").click(function(e){
    //     e.preventDefault();        
    //     $("#searchbox").slideToggle();
    // })

    // $(".hasnav").hover(function(e){     
    //     var i = $(this).attr('data-id');       
    //     $("#" + i).fadeIn();
    // },function(){
    //     var i = $(this).attr('data-id'); 
    //     $("#" + i).fadeOut();
    // })
    $('.mobilenav a').click(function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $(this).addClass('clickme');
        setTimeout(function(e){
            location.href = url;
        },600)
    })
    

    $('.nav-bg').hover(function(e){
        $(this).stop().fadeIn();
    },function(){
        $(this).stop().fadeOut();
    })

    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $("#overmenu").toggleClass("showMenu");
    });

    $(".mobilenav li.hasnav>a").on("click", function(e) {
        "use strict";
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
        $(this).next('.subnav').slideToggle();   
    });

    // $("#nav li.hasnav").click(function(e){         
    //     $(this).find('.subnav').slideToggle();
    // });


    var url = location.pathname;
      
    switch(url){
        case "/":
        case "/index.html":     
            $(".mainav li:nth-of-type(1) a").addClass("active");
        break; 
        case "/404.html":
            $(".mainmenu>li.ortherpage").addClass("nav-open");
            $(".mainmenu>li.ortherpage .submenu li:nth-of-type(4) a").addClass("active");
            break;    
        case "/research_overview.html":
        case "/research_detail.html":
            $(".mainav li:nth-of-type(2) a").addClass("active");
            break;
        case "/contact.html":            
            $(".mainav li:nth-of-type(7) a").addClass("active");
            break;
        case "/cooperation.html":            
            $(".mainav li:nth-of-type(6) a").addClass("active");
            break;
        case "/about.html":            
            $(".mainav>li:nth-of-type(2)>a").addClass("active");
        }


   

    var btn = $('#toTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.fadeIn();
        } else {
        btn.fadeOut();
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

});

// Check if API exists
if (document && document.fonts) {    
    // Do not block page loading
    setTimeout(function () {           
      document.fonts.load('16px "YouSheBiaoTiHei"').then(() => {
        // Make font using elements visible
        document.documentElement.classList.add('font-loaded') ;
      })
    }, 0)
  } else {
    // Fallback if API does not exist 
    document.documentElement.classList.add('font-loaded') ;
  }