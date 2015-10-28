var tallestImgHeight = 373;
var tallestImgWidth = 150;
var headerH = 37;
var borders = 2;

var imagesList = [
    ["chance", 150], 
    ["forAllIntenets", 250], 
    ["hanging", 250], 
    ["balfron", 250], 
    ["bomb", 150],
    ["verne", 150],
    ["fullStop", 250],
    ["unionStockyards", 350], 
    ["lessonsFromPiranesi", 150], 
    ["workInProgress", 150], 
    ["USAFhangar", 150], 
    ["pianoTesting1", 250],
    ["tamper", 150],
    ["rochesterOutside1", 150],
    ["theo1", 150], 
    ["rochesterConst", 250], 
    ["frot", 250], 
    ["embryos", 250], 
    ["smote", 150], 
    ["studiesInInversion", 250],
    ["insertaeSedis", 250],
    ["needle", 150],
    ["skypode", 250], 
    ["sanghoon", 250], 
    ["steamInsulation", 350], 
    ["merDeGlace", 350], 
    ["error", 150], 
    ["hold", 150],
    ["enso", 250],
    ["rochester", 250],
    ["workInProgress2", 150], 
    ["errorL", 250], 
    ["pianoTrajectory", 350], 
    ["sayaka", 250],  //
    ["drawings", 250], 
    ["rochesterOutside2", 250],
    ["societyOfTheColosseum", 250],
    ["sketchpad", 350],
    ["wings", 150], 
    ["fusako", 150], 
    ["fokker", 250], 
    ["manAndComputer", 150], 
    ["concrete", 150],
    ["tablet", 150],
    ["whirligig", 250],
    ["uluo", 350], 
    ["steamRender", 250], 
    ["karl", 250], 
    ["trackAndField", 350], 
    ["preserve", 250], 
    ["theo2", 250],
    ["casting", 150],
    ["stampede", 150],
    ["steamroom", 350], 
    ["herPractice", 250], 
    ["pianoTesting2", 350], 
   
];

$(window).resize(function (e) {
    scaleCollage();
});
$(document).ready(function (e) {
    scaleCollage();
});
function scaleCollage() {

    var viewportHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    //set height for upper and lower images' container
    var upperImages = document.querySelectorAll(".upperImages");
    var lowerImages = document.querySelectorAll(".lowerImages");
    
    for (i = 0; i < upperImages.length; i++) {
        upperImages[i].style.height = (viewportHeight / 2 - headerH - borders).toString().concat("px");
        lowerImages[i].style.height = (viewportHeight / 2 - headerH - borders).toString().concat("px");
    }
    

    //set images' width propery as a percentage of their container - so that scaling will be proportional to the tallest image

    var tallestImgActualHeight = viewportHeight / 2 - headerH - borders;
    var tallestImgActualWidth = tallestImgWidth / tallestImgHeight * tallestImgActualHeight;


    for (i = 0; i < imagesList.length;  i++) {
        document.getElementById(imagesList[i][0]).style.width = (imagesList[i][1] / tallestImgWidth * tallestImgActualWidth).toString().concat("px");

    }
}
