$("#mainNav").before('<div id="menu">☰</div>'),$("#menu").click(function(){$("#mainNav").toggle(),$("#menu").hasClass("active")?$("#menu").removeClass("active"):$("#menu").addClass("active")}),$(window).resize(function(){window.innerWidth>580&&($("#mainNav").removeAttr("style"),$("#menu").removeClass("active"))});