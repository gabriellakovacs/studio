var side = 320,
	rightMargin = 20;

window.onresize = function () {
    var viewportW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    document.getElementById("sub-project-container").style.width = (viewportW - side - rightMargin).toString().concat("px");
};

window.onload = function () {
    var viewportW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById("sub-project-container").style.width = (viewportW - side - rightMargin).toString().concat("px");
};
