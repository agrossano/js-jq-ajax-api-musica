$(document).ready(function () {


  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      var album = data.response;


      var source = $("#template").html();
      var template = Handlebars.compile(source);

      for (var i = 0; i < album.length; i++) {

        var context = album[i];
        var html = template(context);
        $(".albums").append(html);

      };

    },
    error: function (error) {
      alert("errore");
    },

  });



});