$(function(){
    var navbar = $('.nav_hinnerr');
    $(window).scroll(function(){
      if($(window).scrollTop() <=40){
        navbar.removeClass('navbar-scroll');
      }else{
        navbar.addClass('navbar-scroll');
      }
    });
  });