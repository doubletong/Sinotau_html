"use strict";$(document).ready(function(){var a=0;switch(window.addEventListener("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop;a<e?$("#site-header").hasClass("fixheader")&&($("#site-header").addClass("scroll-header"),$("#site-header").removeClass("fixheader")):0<e?$("#site-header").hasClass("fixheader")||$("#site-header").addClass("fixheader"):($("#site-header").hasClass("scroll-header")||$("#site-header").hasClass("fixheader"))&&$("#site-header").removeClass("scroll-header").removeClass("fixheader"),a=e<=0?0:e},!1),$(".mobilenav a").click(function(e){e.preventDefault();var a=$(this).attr("href");$(this).addClass("clickme"),setTimeout(function(e){location.href=a},600)}),$(".nav-bg").hover(function(e){$(this).stop().fadeIn()},function(){$(this).stop().fadeOut()}),$(".menu-toggle").on("click",function(){$(this).toggleClass("on"),$("#overmenu").toggleClass("showMenu")}),$(".mobilenav li.hasnav>a").on("click",function(e){e.preventDefault(),$(this).closest("li").toggleClass("open"),$(this).next(".subnav").slideToggle()}),location.pathname){case"/":case"/index.html":$(".mainav li:nth-of-type(1) a").addClass("active");break;case"/404.html":$(".mainmenu>li.ortherpage").addClass("nav-open"),$(".mainmenu>li.ortherpage .submenu li:nth-of-type(4) a").addClass("active");break;case"/research_overview.html":case"/research_detail.html":$(".mainav li:nth-of-type(2) a").addClass("active");break;case"/contact.html":$(".mainav li:nth-of-type(7) a").addClass("active");break;case"/cooperation.html":$(".mainav li:nth-of-type(6) a").addClass("active");break;case"/about.html":$(".mainav>li:nth-of-type(2)>a").addClass("active")}var e=$("#toTop");$(window).scroll(function(){300<$(window).scrollTop()?e.fadeIn():e.fadeOut()}),e.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"300")})}),document&&document.fonts?setTimeout(function(){document.fonts.load('16px "YouSheBiaoTiHei"').then(function(){document.documentElement.classList.add("font-loaded")})},0):document.documentElement.classList.add("font-loaded");