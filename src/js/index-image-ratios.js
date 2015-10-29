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
        ["pianoTesting2", 350], 
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
    var upperImagesContainer = document.querySelectorAll(".upperImages");
    var lowerImagesContainer = document.querySelectorAll(".lowerImages");
    
    for (i = 0; i < upperImagesContainer.length; i++) {
        upperImagesContainer[i].style.height = (viewportHeight / 2 - headerH - borders).toString().concat("px");
        lowerImagesContainer[i].style.height = (viewportHeight / 2 - headerH - borders).toString().concat("px");
    }
    

    //set images' width propery as a percentage of their container - so that scaling will be proportional to the tallest image

    var tallestImgActualHeight = viewportHeight / 2 - headerH - borders,
        tallestImgActualWidth = tallestImgWidth / tallestImgHeight * tallestImgActualHeight,

        upperImagesTotalW =  16 * upperImages.length,
        lowerImagesTotalW =  16 * lowerImages.length;



    for (i = 0; i < lowerImages.length;  i++) {
        document.getElementById(lowerImages[i][0]).style.width = (lowerImages[i][1] / tallestImgWidth * tallestImgActualWidth).toString().concat("px");
        lowerImagesTotalW += lowerImages[i][1] / tallestImgWidth * tallestImgActualWidth;
    }

    for (i = 0; i < upperImages.length;  i++) {
        document.getElementById(upperImages[i][0]).style.width = (upperImages[i][1] / tallestImgWidth * tallestImgActualWidth).toString().concat("px");
        upperImagesTotalW += upperImages[i][1] / tallestImgWidth * tallestImgActualWidth;
    }

    //set indexMainContainer  width to fit all pictures intended to be on one line
    document.getElementById("indexMainContainer").style.width = (Math.max(upperImagesTotalW, lowerImagesTotalW) + 100).toString().concat("px");

}
