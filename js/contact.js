$(document).ready(function() {

  // Instagram
  $.ajax({
    url: "https://api.instagram.com/v1/users/325542439/media/recent?client_id=5ca0461ad262488f92b508f1eab66280&count=8",
    method: "GET",
    dataType: "jsonp",
    success: function(d) {

      // Empty Instagram div
      $(".instagram").empty();
      var igData = d.data;

      // Insert images
      for (var i = 0; i < igData.length; i++) {
        $(".instagram").append(
          "<div class=\"col-xs-3 gap30\">" + 
            "<img src=\"" + igData[i].images.standard_resolution.url + "\" data-action=\"zoom\">" + 
          "</div>"
        );
      }

      // Insert links
      $(".instagram").append("<p class=\"text-center\"><a href=\"https://instagram.com/aliciaclz_/\">Instagram @aliciaclz_</a></p>");

    },
    error: function(e) {
      console.log(e);
    }
  });

  // Form validation
  $('input[type="submit"]').click(function(e) {

    // Grab vars
    var name = $('input[type="text"]');
    var email = $('input[type="email"]');
    var message = $("textarea");

    // Required check
    if (name.val() == "" || email.val() == "" || message.val() == "") {
      e.preventDefault();
      alert("All fields are required, please try again.");
    }

  });

});
