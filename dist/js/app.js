"use strict";$(document).ready(function(){switch($(window).scroll(function(){40<$(window).scrollTop()?$("#site-header").addClass("fixheader"):$("#site-header").removeClass("fixheader")}),$("#btnsearch").click(function(a){a.preventDefault(),$("#searchbox").slideToggle()}),$(".hasnav").hover(function(a){var e=$(this).attr("data-id");$("#"+e).fadeIn()},function(){var a=$(this).attr("data-id");$("#"+a).fadeOut()}),$(".nav-bg").hover(function(a){$(this).stop().fadeIn()},function(){$(this).stop().fadeOut()}),$(".menu-toggle").on("click",function(){$(this).toggleClass("on"),$("#overmenu").slideToggle()}),location.pathname){case"/":case"/index.html":$(".mainav li:nth-of-type(1) a").addClass("active");break;case"/platform.html":$(".mainav li:nth-of-type(4) a").addClass("active");break;case"/404.html":$(".mainmenu>li.ortherpage").addClass("nav-open"),$(".mainmenu>li.ortherpage .submenu li:nth-of-type(4) a").addClass("active");break;case"/news.html":case"/news_detail.html":$(".mainav li:nth-of-type(5) a").addClass("active");break;case"/team.html":case"/team_detail.html":$(".mainav li:nth-of-type(3) a").addClass("active");break;case"/research_overview.html":case"/research_detail.html":$(".mainav li:nth-of-type(2) a").addClass("active");break;case"/contact.html":$(".mainav li:nth-of-type(7) a").addClass("active");break;case"/cooperation.html":$(".mainav li:nth-of-type(6) a").addClass("active");break;case"/about.html":$(".mainav li:nth-of-type(1) a").addClass("active")}var a=$("#toTop");$(window).scroll(function(){300<$(window).scrollTop()?a.fadeIn():a.fadeOut()}),a.on("click",function(a){a.preventDefault(),$("html, body").animate({scrollTop:0},"300")})});