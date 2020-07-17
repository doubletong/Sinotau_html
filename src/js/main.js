

$(document).ready(function() {
    $(window).scroll(function(){
        if (40 < $(window).scrollTop()) {
            $("#site-header").addClass("fixheader");  
        } else {
            $("#site-header").removeClass("fixheader");           
        }
    })
   

    $("#btnsearch").click(function(e){
        e.preventDefault();        
        $("#searchbox").slideToggle();
    })

    $(".hasnav").hover(function(e){     
        var i = $(this).attr('data-id');       
        $("#" + i).fadeIn();
    },function(){
        var i = $(this).attr('data-id'); 
        $("#" + i).fadeOut();
    })

    $('.nav-bg').hover(function(e){
        $(this).stop().fadeIn();
    },function(){
        $(this).stop().fadeOut();
    })

    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $("#overmenu").slideToggle();
    });

    // $(".mobilenav li.down>a").on("click", function(e) {
    //     "use strict";
    //     e.preventDefault();
    //     $(this).closest('li').toggleClass('open');
    //     $(this).next('.subnav').slideToggle();
        

    // });


    var url = location.pathname;
      
    switch(url){
        case "/":
        case "/index.html":     
            $(".mainav li:nth-of-type(1) a").addClass("active");
        break;
        case "/platform.html":   
            $(".mainav li:nth-of-type(4) a").addClass("active");
            break;
           
       
        case "/404.html":
            $(".mainmenu>li.ortherpage").addClass("nav-open");
            $(".mainmenu>li.ortherpage .submenu li:nth-of-type(4) a").addClass("active");
            break;
        case "/news.html":
        case "/news_detail.html":
            $(".mainav li:nth-of-type(5) a").addClass("active");
            break;
        case "/team.html":
        case "/team_detail.html":
            $(".mainav li:nth-of-type(3) a").addClass("active");
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
            $(".mainav li:nth-of-type(5) a").addClass("active");
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

    $(".btn-close").click(function(e){
        $(this).closest(".overly").fadeOut().removeClass("login-container").removeClass("register-container");
    });

    $("#btn-login-open").click(function(e){     
        $("#overly").fadeIn().addClass("login-container");
    });
    $("#btn-register-open").click(function(e){     
        $("#overly").fadeIn().addClass("register-container");
    });

    $("#btnLoginType").click(function(e){     
        var id = $(this).attr("data-type");

        $("#"+id).addClass("active");

        if(id === "accountlogin"){
            $("#mobilelogin").removeClass("active");
            $(this).attr("data-type","mobilelogin");
        }else{
            $("#accountlogin").removeClass("active");
            $(this).attr("data-type","accountlogin");
        }
        
    });
})