'use strict';
var tallestImgHeight = 373,
    tallestImgWidth = 150,
    headerH = 37,
    borders = 2;

var lowerImages = [ 
        ["errorL", 250], 
        ["pianoTrajectory", 350], 
        ["qanat", 250],  //
        ["drawings", 250], 
        ["rochesterOutside2", 250],
        ["colosseum", 250],
        ["sketchpad", 350],
        ["wings", 150], 
        ["gap", 150], 
        ["fokker", 250], 
        ["manAndComputer", 150], 
        ["concrete", 150],
        ["tablet", 150],
        ["whirligig", 250],
        ["uluo", 350], 
        ["steamRender", 250], 
        ["hannibalpassage", 250], 
        ["trackAndField", 350], 
        ["preserve", 250], 
        ["ancientcity", 250],
        ["casting", 150],
        ["stampede", 150],
        ["steamroom", 350], 
        ["herPractice", 250], 
        ["pianoTesting2", 350]
     ],

    upperImages = [
        ["chance", 150], 
        ["forAllIntenets", 250], 
        ["hanging", 250], 
        ["balfron", 250], 
        ["release", 150],
        ["verne", 150],
        ["fullStop", 250],
        ["unionStockyards", 350], 
        ["piranesi", 150], 
        ["workInProgress", 150], 
        ["USAFhangar", 150], 
        ["pianoTesting1", 250],
        ["tamper", 150],
        ["rochesterOutside1", 150],
        ["smallrock", 150], 
        ["rochesterConst", 250], 
        ["frot", 250], 
        ["embryos", 250], 
        ["smote", 150], 
        ["inversion", 250],
        ["insertaeSedis", 250],
        ["needle", 150],
        ["skypode", 250], 
        ["futuresexchange", 250], 
        ["steamInsulation", 350], 
        ["merDeGlace", 350], 
        ["error", 150], 
        ["hold", 150],
        ["enso", 250],
        ["rochester", 250],
        ["workInProgress2", 150]
    ];





$(document).ready(function (e) {
    //get elements
    var upperImagesContainer = document.querySelectorAll(".upperImages");
    var lowerImagesContainer = document.querySelectorAll(".lowerImages");
    var indexPicturesGridContainer = document.getElementById("indexPicturesGridContainer");
    var side = 320,
        rightMargin = 20;
    var mainHeaderH = 37;
    var boxes = document.querySelectorAll(".mainProjectGridBlock");
    var mainProjectGridContainer = document.getElementById("mainProjectGridContainer");
    var subProjectContainer = document.getElementById("sub-project-container");
    

    //FUNCTIONS ONLY FOR THE MAIN INDEX PAGE
    if (document.getElementById("horizontalScroll")) {
        scrollHorizontally();

        if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
    }
    if (document.getElementById("indexPicturesGridContainer")) {
        scaleCollage(); 
    }

    //FUNCTIONS ONLY FOR THE MAIN PROJECT PAGE
    if (document.getElementById("mainProjectGridContainer")) {
        gridLayout();
    }

    //FUNCTIONS ONLY FOR THE CONTACT PAGE
    if (document.getElementById("map")) {
        initialize();
    }

 
    

    

    $(window).resize(function (e) {
        if (document.getElementById("mainProjectGridContainer")) {
            gridLayout() ;
        }
        if (document.getElementById("indexPicturesGridContainer")) {
            scaleCollage(); 
        }
    });


    //----------------------HAMBURGER MENU----------------------
    $("#hamburgerMenu").click(function () {
        $("#mainNav").toggle();
        if ($("#hamburgerMenu").hasClass("active")) {
            $("#hamburgerMenu").removeClass("active");
        } else {
            $("#hamburgerMenu").addClass("active");
        }
    });
    $(window).resize(function () {
        if (window.innerWidth > 580) {
            $("#mainNav").removeAttr("style");
            $("#hamburgerMenu").removeClass("active");
        }
    });

    //----------------------MAIN INDEX PAGE FUNCTIONS----------------------
    function scaleCollage() {
        var viewportHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        //set height for upper and lower images' container
        var imagesContainerLength = upperImagesContainer.length;
        var collageImgHeight = (viewportHeight / 2 - headerH - borders).toString().concat("px");
        $.each(upperImagesContainer, setCollageImgHeight);
        $.each(lowerImagesContainer, setCollageImgHeight);

        function setCollageImgHeight (index, value){
            value.style.height = collageImgHeight;
        }

        //set images' width propery as a percentage of their container - so that scaling will be proportional to the tallest image

        var tallestImgActualHeight = viewportHeight / 2 - headerH - borders,
        tallestImgActualWidth = tallestImgWidth / tallestImgHeight * tallestImgActualHeight,

        upperImagesTotalW =  16 * upperImages.length,
        lowerImagesTotalW =  16 * lowerImages.length;



        for (var i = 0; i < lowerImages.length;  i++) {
            document.getElementById(lowerImages[i][0]).style.width = (lowerImages[i][1] / tallestImgWidth * tallestImgActualWidth).toString().concat("px");
            lowerImagesTotalW += lowerImages[i][1] / tallestImgWidth * tallestImgActualWidth;
        }

        for (var i = 0; i < upperImages.length;  i++) {
            document.getElementById(upperImages[i][0]).style.width = (upperImages[i][1] / tallestImgWidth * tallestImgActualWidth).toString().concat("px");
            upperImagesTotalW += upperImages[i][1] / tallestImgWidth * tallestImgActualWidth;
        }

        //set indexPicturesGridContainer  width to fit all pictures intended to be on one line
        indexPicturesGridContainer.style.width = (Math.max(upperImagesTotalW, lowerImagesTotalW) + 100).toString().concat("px");
    }


    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
        document.body.scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }

    /*----------------------PROJECT PAGE FUNCTIONS----------------------*/
    /*main and sub project pages have a side bar that contains info about the project, this is the only section of the page that is allowed to scroll, we need a partial fix function for that*/
    $(window).scroll(function(){
        $('#projectHeader').css('top', $(window).scrollTop());
    });

    /*----------------------MAIN PROJECT PAGE FUNCTIONS----------------------*/

    /*main project pages have a grid as navigation to sub projects. the grid elements size needs to be maximised with the constraint that they have to fit into a certain area 
    the constraints for the grid*/
  
    function gridLayout() {
        
        //set grid width so that it occupies the total available area
        var availableW = window.innerWidth - side - rightMargin;
        var availableH = window.innerHeight - 2*mainHeaderH;
        mainProjectGridContainer.style.width = (availableW).toString().concat("px");
        
        
        var nrOfBoxes = boxes.length;

        //collect all possible column row arrangements based on the number of grid items (exlude those the are less efficient then the ones that are already considered)
        var gridDimensions = [];
        
        for (i = 1; i <= nrOfBoxes; i++) {
            
            if ((gridDimensions.length === 0) || (Math.ceil(nrOfBoxes / i) < Math.ceil(nrOfBoxes / (i-1)))) {
                gridDimensions.push([i, Math.ceil(nrOfBoxes / i)]);
            } 
        }
        
        
        //select the row-column combination that maximazis the grid element size
        var bestFit = [];
        
         for (i = 0; i < gridDimensions.length; i++) {
            if (bestFit.length === 0 || 
                Math.min(availableW / (gridDimensions[i][0] + 1), availableH / gridDimensions[i][1]) > Math.min(availableW / (bestFit[0] + 1), availableH / bestFit[1])) {
                bestFit = [gridDimensions[i][0], gridDimensions[i][1]];
            } 
         }
        
         
        //set the size of the grid elements
        if (availableW / (bestFit[0] + 1) <= availableH / bestFit[1]) {
            var viewportRatio = availableW / window.innerWidth / (bestFit[0] + 1) * 80;
            var dimension = "vw";
        } else {
            var viewportRatio = availableH / window.innerHeight / bestFit[1] * 80;
            var dimension = "vh";
        }
         
        for (i = 0; i < boxes.length; i++) {
            boxes[i].style.width = (viewportRatio).toString().concat(dimension);
            boxes[i].style.height = (viewportRatio).toString().concat(dimension);
            boxes[i].style.marginLeft = (viewportRatio / 8).toString().concat(dimension);
            boxes[i].style.marginRight = (viewportRatio / 8).toString().concat(dimension);
            boxes[i].style.marginBottom = (2 * viewportRatio / 8).toString().concat(dimension);  
        }
        
        //document.getElementById("grid").style.paddingRight = (viewportRatio / 80 * 100).toString().concat(dimension);
    }

    /*----------------------SUB PROJECT PAGE FUNCTIONS----------------------*/
    /*set subproject container to occupy the available space left*/

    window.onresize = function () {
        var viewportW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        subProjectContainer.style.width = (viewportW - side - rightMargin).toString().concat("px");
    };

    window.onload = function () {
        var viewportW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        subProjectContainer.style.width = (viewportW - side - rightMargin).toString().concat("px");
    };

    /*set image zoom on subproject images*/
    $("#zoom").elevateZoom({constrainType:"height", constrainSize:274, zoomType: "lens", containLensZoom: true,  cursor: "none", borderSize: 1}); 


    function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
    center: new google.maps.LatLng(51.529630, -0.061613),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var style = [
    {
        featureType: 'all',
        elementType: 'geometry.fill',
        stylers: [
            {color:'#ffffff'}
        ]
    },
    {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
            {visibility:'off'}
        ]
    },
    {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
            {visibility:'off'}
        ]
    },
    {
        featureType: 'water',
        elementType: 'all',
        stylers: [
            {color:'#777777'}
        ]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {color:'#292929'}, 
            {visibility:'on'}
        ]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.icon',
        stylers: [
            {saturation:'-80'}
        ]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
            {color:'#000000'}, 
            {visibility:'on'}
        ]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.stroke',
        stylers: [
            {color:'#000000'}, 
            {visibility:'on'}, 
            {weight:'1'}
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
            {color:'#aaaaaa'}
        ]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
            {weight:'1'},
            {color:'#cccccc'}
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {color:'#353535'}
        ]
    }
];
    map.set('styles', style);
    var marker = new google.maps.Marker({
    position:  new google.maps.LatLng(51.529630, -0.061613),
    map: map,
    title: 'Hughes Meyer Studio',
    icon: 'images/marker.png'
    });

}


});