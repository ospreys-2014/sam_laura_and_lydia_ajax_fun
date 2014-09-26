$(document).ready(function() {
  bindSquareOneListener();
  // create a function to bind a listener for square two here...
  // it doesn't have to be a click event listener... you could play with ".mouseover"; what else?

  // and square three... etc etc

});

function bindSquareOneListener() {
  $("#square-1").on("click", function(){
    if ($(this).html() === "") {
      squareOneFirstClick();
      $("img").css("visibility", "visible");
    } else {
      squareOneSecondClick();
    }
  });
}

function squareOneFirstClick() {
  var toSend = 42
  var request = $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response) {
        $("img").css("visibility", "hidden");
        $("#square-1").html(response);
        $("#square-1").css({width: "300", height: "300"});
    });
}

function squareOneSecondClick() {
  $("#square-1").html("");
  $("#square-1").css({width: "100", height: "100"});
}
