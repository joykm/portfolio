$(function () {
    $(document).scroll(function(){
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 10);
    });
});

$('.carousel').carousel({
  interval: false,
});