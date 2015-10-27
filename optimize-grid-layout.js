var side = 320;
var rightMargin = 20;




window.onresize = function (){
    var availableW = window.innerWidth - side - rightMargin-50;
    var availableH = window.innerHeight * 0.85;
    document.getElementById("grid").style.width = (availableW).toString().concat("px");
    
    
    var nrOfBoxes = document.querySelectorAll('#grid .box').length;
    var gridDimensions = [];
    
    for (i = 1; i <= nrOfBoxes; i++) {
        
        if ((gridDimensions.length === 0) || (Math.ceil(nrOfBoxes / i) < Math.ceil(nrOfBoxes / (i-1)))) {
            gridDimensions.push([i, Math.ceil(nrOfBoxes / i)]);
        } 
    }
    
    
  
    var bestFit = [];
    
     for (i = 0; i < gridDimensions.length; i++) {
        if (bestFit.length === 0 || 
            Math.min(availableW / gridDimensions[i][0], availableH / gridDimensions[i][1]) > Math.min(availableW / bestFit[0], availableH / bestFit[1])) {
            bestFit = [gridDimensions[i][0], gridDimensions[i][1]];
        } 
     }
    
     
    
    if (availableW / bestFit[0] <= availableH / bestFit[1]) {
        var viewportRatio = availableW / window.innerWidth / bestFit[0] * 75;
        var dimension = "vw";
    } else {
        var viewportRatio = availableH / window.innerHeight / bestFit[1] * 75;
        var dimension = "vh";
    }
    
    var boxes = document.querySelectorAll(".box");
   
   
    
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.width = (viewportRatio).toString().concat(dimension);
        boxes[i].style.height = (viewportRatio).toString().concat(dimension);
        boxes[i].style.margin = (viewportRatio / 7.5).toString().concat(dimension);
        
        if (i < bestFit[0]) {
            boxes[i].style.marginTop = '0';
        }
    }
    
    document.getElementById("grid").style.paddingRight = '50px';
};

window.onload = function (){
    
    var availableW = window.innerWidth - side - rightMargin;
    var availableH = window.innerHeight * 0.85;
    document.getElementById("grid").style.width = (availableW).toString().concat("px");
    
    
    var nrOfBoxes = document.querySelectorAll('#grid .box').length;
    var gridDimensions = [];
    
    for (i = 1; i <= nrOfBoxes; i++) {
        
        if ((gridDimensions.length === 0) || (Math.ceil(nrOfBoxes / i) < Math.ceil(nrOfBoxes / (i-1)))) {
            gridDimensions.push([i, Math.ceil(nrOfBoxes / i)]);
        } 
    }
    
    
  
    var bestFit = [];
    
     for (i = 0; i < gridDimensions.length; i++) {
        if (bestFit.length === 0 || 
            Math.min(availableW / (gridDimensions[i][0] + 0.5), availableH / gridDimensions[i][1]) > Math.min(availableW / (bestFit[0] + 0.5), availableH / bestFit[1])) {
            bestFit = [gridDimensions[i][0], gridDimensions[i][1]];
        } 
     }
    
     
    
    if (availableW / bestFit[0] <= availableH / bestFit[1]) {
        var viewportRatio = availableW / window.innerWidth / (bestFit[0] + 0.5) * 75;
        var dimension = "vw";
    } else {
        var viewportRatio = availableH / window.innerHeight / bestFit[1] * 75;
        var dimension = "vh";
    }
    
    var boxes = document.querySelectorAll(".box");
   
   
    
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.width = (viewportRatio).toString().concat(dimension);
        boxes[i].style.height = (viewportRatio).toString().concat(dimension);
        boxes[i].style.margin = (viewportRatio / 7.5).toString().concat(dimension);
        
        if (i < bestFit[0]) {
            boxes[i].style.marginTop = '0';
        }
    }
    
    document.getElementById("grid").style.paddingRight = (viewportRatio / 75 * 100).toString().concat(dimension);
};