$(document).ready(function() {

  // Index scroll down button
  $(".fa-angle-down").click(function() {
    $("html, body").animate({
      scrollTop: $(".content").offset().top
    }, 600);
  });

});
