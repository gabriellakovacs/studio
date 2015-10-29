$("#mainNav").before('<div id="menu">☰</div>');
$("#menu").click(function () {
    $("#mainNav").toggle();
    if ($("#menu").hasClass("active")) {
        $("#menu").removeClass("active");
    } else {
        $("#menu").addClass("active");
    }
});
$(window).resize(function () {
    if (window.innerWidth > 580) {
        $("#mainNav").removeAttr("style");
        $("#menu").removeClass("active");
    }
});