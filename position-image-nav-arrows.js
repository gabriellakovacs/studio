var viewportW = window.innerWidth;
var viewportH = window.innerHeight;
var side = 320;
var rightMargin = 20;

var img = document.getElementById('zoom'); 
var imgW = $('#zoom').width();
var previous_next_a_width = (viewportW - side - rightMargin - imgW)/2;

document.getElementById("previous").style.left = side.toString().concat("px");
document.getElementById("next").style.left = (side+imgW+previous_next_a_width + 20).toString().concat("px");
document.getElementById("previous").style.width = (previous_next_a_width-20).toString().concat("px");
document.getElementById("next").style.width = (previous_next_a_width-20).toString().concat("px");
document.getElementById("zoom").style.left = (side+previous_next_a_width).toString().concat("px");

//window.alert( $('#zoom').height());
