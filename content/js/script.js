
let lis = $(".colors li")

$(".colors li").eq(0).css("background-color", "red")
$(".colors li").eq(1).css("background-color", "green")
$(".colors li").eq(2).css("background-color", "#09c")
$(".colors li").eq(3).css("background-color", "teal")
$(".colors li").eq(4).css("background-color", "tomato")
$(".colors li").eq(5).css('background-color', '#FFF');


$(".colors li").click(function () {
    let bgColor = $(this).css("background-color")
    $("body").css("background-color", bgColor)
})


