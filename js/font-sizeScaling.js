fontsize = function () {
    var fontSize = $("#BOX").width() * 0.09; 
    $(".box span").css('font-size', fontSize);
};
$(window).resize(fontsize);
$(document).ready(fontsize);
