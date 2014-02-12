$(document).ready(function() {
  $("#square-1").on("click", function(){
    if($(this).html() === ""){
      var toSend = 42
      $.ajax({
        type: "POST",
        url: "/sams_fun_route",
        data: {cool_thing: toSend},
        success: function(response) {
          console.log(response);
          $("#square-1").html(response);
          $("#square-1").css({width: "300", height: "300"});
        },
        dataType: "html"
      });
    } else {
      $("#square-1").html("");
      $("#square-1").css({width: "100", height: "100"});
    }
  });
});
