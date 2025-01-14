$("#btnColor").click(function () {
  $("#targetDiv").css({
    "background-color": "blue",
  });
});

$("#btnText").click(function () {
  $("#targetDiv").text("¡Hola Mundo!");
});

$("#btnToggle").click(function () {
  $("#targetDiv").toggleClass('caja');
});
