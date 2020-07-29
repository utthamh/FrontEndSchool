﻿"use strict";function layoutsColors(){$(".sidebar").is("[data-background-color]")?$("html").addClass("sidebar-color"):$("html").removeClass("sidebar-color")}function legendClickCallback(s){for(var e=(s=s||window.event).target||s.srcElement;"LI"!==e.nodeName;)e=e.parentElement;var a=e.parentElement,o=parseInt(a.classList[0].split("-")[0],10),i=Chart.instances[o],n=Array.prototype.slice.call(a.children).indexOf(e);i.legend.options.onClick.call(i,s,i.legend.legendItems[n]),i.isDatasetVisible(n)?e.classList.remove("hidden"):e.classList.add("hidden")}function readURL(s){if(s.files&&s.files[0]){var e=new FileReader;e.onload=function(e){$(s).parent(".input-file-image").find(".img-upload-preview").attr("src",e.target.result)},e.readAsDataURL(s.files[0])}}function showPassword(s){var e=$(s).parent().find("input");"password"===e.attr("type")?e.attr("type","text"):e.attr("type","password")}function changeContainer(){1==showSignIn?containerSignIn.css("display","block"):containerSignIn.css("display","none"),1==showSignUp?containerSignUp.css("display","block"):containerSignUp.css("display","none")}$(".nav-search .input-group > input").focus(function(s){$(this).parent().addClass("focus")}).blur(function(s){$(this).parent().removeClass("focus")}),$(function(){$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),layoutsColors()}),$(document).ready(function(){$(".btn-refresh-card").on("click",function(){var s=$(this).parents(".card");s.length&&(s.addClass("is-loading"),setTimeout(function(){s.removeClass("is-loading")},3e3))});var s=$(".sidebar .scrollbar");s.length>0&&s.scrollbar();var e=$(".messages-scroll");e.length>0&&e.scrollbar();var a=$(".tasks-scroll");a.length>0&&a.scrollbar();var o=$(".quick-scroll");o.length>0&&o.scrollbar();var i=$(".message-notif-scroll");i.length>0&&i.scrollbar();var n=$(".notif-scroll");n.length>0&&n.scrollbar();var l=$(".dropdown-user-scroll");l.length>0&&l.scrollbar(),$(".scroll-bar").draggable(),$("#search-nav").on("shown.bs.collapse",function(){$(".nav-search .form-control").focus()});var t=!1,r=!1,c=!1,d=!1,g=0,h=0,m=0,p=0,u=0,v=0;if(!t){(f=$(".sidenav-toggler")).on("click",function(){1==g?($("html").removeClass("nav_open"),f.removeClass("toggled"),g=0):($("html").addClass("nav_open"),f.addClass("toggled"),g=1)}),t=!0}if(!h){var f=$(".quick-sidebar-toggler");f.on("click",function(){1==g?($("html").removeClass("quick_sidebar_open"),$(".quick-sidebar-overlay").remove(),f.removeClass("toggled"),h=0):($("html").addClass("quick_sidebar_open"),f.addClass("toggled"),$('<div class="quick-sidebar-overlay"></div>').insertAfter(".quick-sidebar"),h=1)}),$(".wrapper").mouseup(function(s){var e=$(".quick-sidebar");s.target.className==e.attr("class")||e.has(s.target).length||($("html").removeClass("quick_sidebar_open"),$(".quick-sidebar-toggler").removeClass("toggled"),$(".quick-sidebar-overlay").remove(),h=0)}),$(".close-quick-sidebar").on("click",function(){$("html").removeClass("quick_sidebar_open"),$(".quick-sidebar-toggler").removeClass("toggled"),$(".quick-sidebar-overlay").remove(),h=0}),h=!0}if(!r){var C=$(".topbar-toggler");C.on("click",function(){1==m?($("html").removeClass("topbar_open"),C.removeClass("toggled"),m=0):($("html").addClass("topbar_open"),C.addClass("toggled"),m=1)}),r=!0}if(!c){var b=$(".toggle-sidebar");$("html").hasClass("sidebar_minimize")&&(p=1,b.addClass("toggled"),b.html('<i class="icon-options-vertical"></i>')),b.on("click",function(){1==p?($("html").removeClass("sidebar_minimize"),b.removeClass("toggled"),b.html('<i class="icon-menu"></i>'),p=0):($("html").addClass("sidebar_minimize"),b.addClass("toggled"),b.html('<i class="icon-options-vertical"></i>'),p=1),$(window).resize()}),c=!0}if(!d){var k=$(".page-sidebar-toggler");k.on("click",function(){1==u?($("html").removeClass("pagesidebar_open"),k.removeClass("toggled"),u=0):($("html").addClass("pagesidebar_open"),k.addClass("toggled"),u=1)});$(".page-sidebar .back").on("click",function(){$("html").removeClass("pagesidebar_open"),k.removeClass("toggled"),u=0}),d=!0}var w=$(".sidenav-overlay-toggler");$(".wrapper").hasClass("is-show")&&(v=1,w.addClass("toggled"),w.html('<i class="icon-options-vertical"></i>')),w.on("click",function(){1==v?($(".wrapper").removeClass("is-show"),w.removeClass("toggled"),w.html('<i class="icon-menu"></i>'),v=0):($(".wrapper").addClass("is-show"),w.addClass("toggled"),w.html('<i class="icon-options-vertical"></i>'),v=1),$(window).resize()}),c=!0,$(".sidebar").hover(function(){$("html").hasClass("sidebar_minimize")&&$("html").addClass("sidebar_minimize_hover")},function(){$("html").hasClass("sidebar_minimize")&&$("html").removeClass("sidebar_minimize_hover")}),$(".nav-item a").on("click",function(){$(this).parent().find(".collapse").hasClass("show")?$(this).parent().removeClass("submenu"):$(this).parent().addClass("submenu")}),$(".messages-contact .user a").on("click",function(){$(".tab-chat").addClass("show-chat")}),$(".messages-wrapper .return").on("click",function(){$(".tab-chat").removeClass("show-chat")}),$('[data-select="checkbox"]').change(function(){var s=$(this).attr("data-target");$(s).prop("checked",$(this).prop("checked"))}),$(".form-group-default .form-control").focus(function(){$(this).parent().addClass("active")}).blur(function(){$(this).parent().removeClass("active")})}),$('.input-file-image input[type="file"').change(function(){readURL(this)}),$(".show-password").on("click",function(){showPassword(this)});var containerSignIn=$(".container-login"),containerSignUp=$(".container-signup"),showSignIn=!0,showSignUp=!1;$("#show-signup").on("click",function(){showSignUp=!0,showSignIn=!1,changeContainer()}),$("#show-signin").on("click",function(){showSignUp=!1,showSignIn=!0,changeContainer()}),changeContainer(),$(".form-floating-label .form-control").keyup(function(){""!==$(this).val()?$(this).addClass("filled"):$(this).removeClass("filled")});