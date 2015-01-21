$( document ).ready(function() {

  $("#achievements-nav-skills").click(function() {
    $("img").removeClass("active-nav");
    $(this).addClass("active-nav");
  	$("#achievements-academics").hide();
	  $("#achievements-skills").show();
	});	

	$("#achievements-nav-achievements").click(function() {
    $("img").removeClass("active-nav");
    $(this).addClass("active-nav");
		$("#achievements-skills").hide();
		$("#achievements-academics").show();
	});

  $("#cmpa").nivoLightbox();
  $(".fancybox").fancybox();

});