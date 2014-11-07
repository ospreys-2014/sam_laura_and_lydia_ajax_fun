$(document).ready(function() {
  bindSquareOneListener();
  bindSquareTwoListener();
  bindSquareThreeListener();
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

function bindSquareTwoListener() {
  $("#square-2").on("click", function(){
    if ($(this).html() === "") {
      squareTwoFirstClick();
      $("img").css("visibility", "visible");
    } else {
      squareTwoSecondClick();
    }
  });

}
function bindSquareThreeListener() {
  $("#square-3").on("click", function(){
    if ($(this).html() === "") {
      squareThreeFirstClick();
      $("img").css("visibility", "visible");
    } else {
      squareThreeSecondClick();
    }
  });

}
function squareOneFirstClick() {
  var toSend = 42
  console.log(toSend)
  $.ajax({
    type: "POST",
    url: "/sams_fun_route",
    data: {cool_thing: toSend},
    dataType: "html"
  }).done(function(response) {
      console.log("Hi Corey!")
        $("img").css("visibility", "hidden");
        $("#square-1").html(response);
        $("#square-1").css({width: "300", height: "300"});

    });
}

function squareOneSecondClick() {
  $("#square-1").html("");
  $("#square-1").css({width: "100", height: "100"});
}

function squareTwoFirstClick() {
  var michaels = "http://lamergallery.freehostia.com/tux/fullsize/600px-Baby.tux.jpg"
  $.ajax({
    type: "POST",
    url: "/michaels_fun_route",
    data: {michaels_thing: michaels},
    dataType: "html"
  }).done(function(response) {
        $("img").css("visibility", "hidden");
        $("#square-2").css('background-image', 'url(' + response + ')')
        $("#square-2").css({width: "600", height: "600"});

    });
}


function squareThreeFirstClick() {
  var edwards = "http://a1232.phobos.apple.com/us/r1000/007/Music6/v4/3a/57/13/3a5713ce-1b89-7a4d-b728-9fe6ab16df86/mzaf_4348037343071115970.plus.aac.p.m4a"
  $.ajax({
    type: "POST",
    url: "/edwards_midnight_train",
    data: {edwards_thing: edwards},
    dataType: "html"
  }).done(function(response) {
        $("img").css("visibility", "hidden");
        $("#square-3").append(response)
        $("#square-3").css({width: "600", height: "600"});

    });
}
