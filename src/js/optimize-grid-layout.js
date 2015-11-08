//main project pages have a grid as navigation to sub projects. the grid elements size needs to be maximised with the constraint that they have to fit into a certain area 
//the constraints for the grid
var side = 320,
    rightMargin = 80;
var mainHeaderH = 37;



$(window).resize(function (e) {
    gridLayout() ;
});
$(document).ready(function (e) {
    gridLayout() ;
});
function gridLayout() {
    
    //set grid width so that it occupies the total available area
    var availableW = window.innerWidth - side - rightMargin;
    var availableH = window.innerHeight - 2*mainHeaderH;
    document.getElementById("grid").style.width = (availableW).toString().concat("px");
    
    
    var nrOfBoxes = document.querySelectorAll("#grid .box").length;

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
    
    var boxes = document.querySelectorAll(".box");
   
   
    
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.width = (viewportRatio).toString().concat(dimension);
        boxes[i].style.height = (viewportRatio).toString().concat(dimension);
        boxes[i].style.marginLeft = (viewportRatio / 8).toString().concat(dimension);
        boxes[i].style.marginRight = (viewportRatio / 8).toString().concat(dimension);
        boxes[i].style.marginBottom = (2 * viewportRatio / 8).toString().concat(dimension);
        
    }
    
    //document.getElementById("grid").style.paddingRight = (viewportRatio / 80 * 100).toString().concat(dimension);
}