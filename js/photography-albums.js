var DATA;

function showArrow() {
  $(".down-arrow").show(function() {

    // Fade arrow in
    $(this).css("opacity", 1);

    // On click, scroll to album detail div (downwards)
    $(this).click(function() {
      window.scrollTo(0, $(".album-detail").offset().top);
      $(this).hide();
    });

  });
}

function listAlbum(album) {

  // Grab album detail div and clear
  var albumDetail = $(".album-detail");
  albumDetail.empty();

  // Insert data
  for (var i = 0; i < DATA.length; i++) {
    if (DATA[i].name === album) {

      // Header
      albumDetail.append(
        "<div class=\"col-xs-12 text-center\">" + 
          "<h3>" + DATA[i].name.toUpperCase() + "</h3>" +
          "<p>" + DATA[i].date.toUpperCase() + "</p><hr>" + 
        "</div>" 
      );

      // Images
      for (var x = 0; x < DATA[i].items.length; x++) {
        albumDetail.append(
          "<div class=\"col-xs-12 gap30\">" + 
            "<img src=\"/images/albums/" + album + "/" + DATA[i].items[x] + "\" data-action=\"zoom\">" + 
          "</div>"
        );
      }

    }
  }

  // Up arrow
  albumDetail.append(
    "<div class=\"col-xs-12 text-center\">" + 
      "<i class=\"fa fa-chevron-up\"></i>" + 
    "</div>"
  );
  $(".fa-chevron-up").click(function() {
    window.scrollTo(0, 60);
  });

}

function bindAlbum() {
  $(".img-wrapper").click(function() {

    // List clicked album
    listAlbum($(this).attr("id"));

    // Show down arrow if window width is less than 976 (mobile/small screen)
    if ($(window).width() <= 976) {
      showArrow();
    }

  }); 
}

function getAlbums(cb) {
  $.ajax({
    url: "/data/albums.json",
    data: "json",
    method: "GET",
    success: function(data) {
      
      // Set global DATA to received data, empty album list
      DATA = data;
      var albumList = $(".album-list");
      albumList.empty();

      // Append to album list
      for (var i = 0; i < DATA.length; i++) {
        var album = DATA[i];
        albumList.append(
          "<div class=\"col-xs-12\">" + 
            "<div class=\"img-wrapper gap30\" id=\"" + album.name + "\">" + 
              "<img src=\"/images/albums/" + album.name + "/" + album.cover + "\">" + 
              "<div class=\"img-overlay\">" + 
                "<small>" + album.name.toUpperCase() + "</small>" +
              "</div>" + 
            "</div>" + 
          "</div>"
        );
      }

    },
    error: function(e) { console.log(e); },
    complete: function() { cb(); }
  });
}

$(document).ready(function() {

  // Get albums
  getAlbums(bindAlbum);

});

