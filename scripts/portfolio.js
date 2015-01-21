$( document ).ready(function() {

  $("#portfolio-nav-photo").click(function() {
    $("img").removeClass("active-nav");
    $(this).addClass("active-nav");
    $("#portfolio-photo").show();
    $("#portfolio-writings").hide();
    $("#portfolio-prod").hide();
  }); 

  $("#portfolio-nav-writings").click(function() {
    $("img").removeClass("active-nav");
    $(this).addClass("active-nav");
    $("#portfolio-photo").hide();
    $("#portfolio-writings").show();
    $("#portfolio-prod").hide();
  });

  $("#portfolio-nav-prod").click(function() {
    $("img").removeClass("active-nav");
    $(this).addClass("active-nav");
    $("#portfolio-photo").hide();
    $("#portfolio-writings").hide();
    $("#portfolio-prod").show();
	});	

  $("#portfolio-photo a").nivoLightbox();
  $("#portfolio-prod a").nivoLightbox();
  $(".fancybox").fancybox();

});