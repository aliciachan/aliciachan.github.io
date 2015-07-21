$(document).ready(function() {

  // Best photographs
  $.ajax({
    url: "/data/best.json",
    data: "json",
    method: "GET",
    success: function(data) {

      var bestList = $(".best-list");
      bestList.empty();

      for (var i = 0; i < data.length; i++) {
        bestList.append(
          "<div class=\"col-xs-12 col-md-4 gap30\">" + 
            "<img src=\"/images/best/" + data[i] + "\" data-action=\"zoom\">" + 
          "</div>"
        );
      }

    },
    error: function(e) {
      console.log(e);
    }
  })

});
