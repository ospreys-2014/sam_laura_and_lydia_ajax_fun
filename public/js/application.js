$(document).ready(function() {
  $("#square-1").on("click", function(){
    var toSend = 42 // fill this out with something interesting
    $.ajax({
      type: "POST",
      url: "/sams_fun_route",
      data: {cool_thing: toSend},
      success: function(response) {
        $("#square-1").html(response);
        $("#square-1").css({width: "300", height: "300"})
      },
      dataType: "html"
    });
  });
});
