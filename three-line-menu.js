$("#nav").addClass("js");
$("#nav").addClass("js").before('<div id="menu">☰</div>');
$("#menu").click(function () {
    $("#nav").toggle();
//    if ($("#menu").hasClass("active")) {
//        $("#menu").removeClass("active");
//    } else {
//        $("#menu").addClass("active");
//    }
});
$(window).resize(function () {
    if (window.innerWidth > 580) {
        $("#nav").removeAttr("style");
        $("#menu").removeClass("active");
    }
});