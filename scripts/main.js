$(document).ready(function(){

    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll",function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll",(scrollFromTop > 350));
    });





//masonary


    $('.grid').masonry(function(){
      //options
      itemSelector: '.grid-item',
      columnWidth: 120,
      fitWidth: true


    });




});
