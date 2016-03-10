
/*
 *	jQuery elevateZoom 3.0.3
 *	Demo's and documentation:
 *	www.elevateweb.co.uk/image-zoom
 *
 *	Copyright (c) 2012 Andrew Eades
 *	www.elevateweb.co.uk
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


 if ( typeof Object.create !== 'function' ) {
 	Object.create = function( obj ) {
 		function F() {};
 		F.prototype = obj;
 		return new F();
 	};
 }

 (function( $, window, document, undefined ) {
 	var ElevateZoom = {
 		init: function( options, elem ) {
 			var self = this;

 			self.elem = elem;
 			self.$elem = $( elem );

 			self.imageSrc = self.$elem.data("zoom-image") || self.$elem.attr("src");

 			self.options = $.extend( {}, $.fn.elevateZoom.options, options );

			self.$elem.parent().removeAttr('title').removeAttr('alt');//Remove alt on hover

			self.zoomImage = self.imageSrc;

			self.refresh( 1 );

		},

		refresh: function( length ) {
			var self = this;

			setTimeout(function() {
				self.fetch(self.imageSrc);

			}, length || self.options.refresh );
		},

		fetch: function(imgsrc) {
			//get the image
			var self = this;
			var newImg = new Image();
			newImg.onload = function() {
			//set the large image dimensions - used to calculte ratio's
			self.largeWidth = newImg.width;
			self.largeHeight = newImg.height;
			//once image is loaded start the calls
			self.startZoom();
			self.currentImage = self.imageSrc;
			//let caller know image has been loaded
			self.options.onZoomedImageLoaded(self.$elem);
			}
			newImg.src = imgsrc; // this must be done AFTER setting onload

			return;
		},

		startZoom: function( ) {

			var self = this;
			//get dimensions of the non zoomed image
			self.nzWidth = self.$elem.width();
			self.nzHeight = self.$elem.height();

			//activated elements
			self.isLensActive = false;
			self.overWindow = false;    

			self.zoomLock = 1;
			self.scrollingLock = false;
			self.changeBgSize = false;
			self.currentZoomLevel = self.options.zoomLevel;


			//get offset of the non zoomed image
			self.nzOffset = self.$elem.offset();
			//calculate the width ratio of the large/small image
			self.widthRatio = (self.largeWidth/self.currentZoomLevel) / self.nzWidth;
			self.heightRatio = (self.largeHeight/self.currentZoomLevel) / self.nzHeight; 


			self.zoomContainer = $(".zoomContainer");

			self.zoomContainer.css("left", self.nzOffset.left+'px');
			self.zoomContainer.css("top", self.nzOffset.top+'px');
			self.zoomContainer.css("height", self.nzHeight+'px');
			self.zoomContainer.css("width", self.nzWidth+'px');
			
			self.zoomLens = $(".zoomLens");
			self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 
			
			self.zoomWindow = $('.zoomWindow');
			self.zoomWindow.css("left", self.windowOffsetLeft + 'px');
			self.zoomWindow.css("top", self.windowOffsetTop + 'px');

			


			/*-------------------END THE ZOOM WINDOW AND LENS----------------------------------*/
			//touch events
			self.$elem.bind('touchmove', function(e){    
				e.preventDefault();
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  
				self.setPosition(touch);

			});  
			self.zoomContainer.bind('touchmove', function(e){ 
				if(self.options.zoomType == "inner") {
					self.showHideWindow("show");

				}
				e.preventDefault();
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  
				self.setPosition(touch); 

			});  	
			self.zoomContainer.bind('touchend', function(e){ 
				self.showHideWindow("hide");
				if(self.options.showLens) {self.showHideLens("hide");}

			});  	

			self.$elem.bind('touchend', function(e){ 
				self.showHideWindow("hide");
				if(self.options.showLens) {self.showHideLens("hide");}
			});  	
			if(self.options.showLens) {
				self.zoomLens.bind('touchmove', function(e){ 

					e.preventDefault();
					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  
					self.setPosition(touch); 
				});    


				self.zoomLens.bind('touchend', function(e){ 
					self.showHideWindow("hide");
					if(self.options.showLens) {self.showHideLens("hide");}
				});  
			}
			//Needed to work in IE
			self.$elem.bind('mousemove', function(e){   
				if(self.overWindow == false){self.setElements("show");}
			//make sure on orientation change the setposition is not fired
			if(self.lastX !== e.clientX || self.lastY !== e.clientY){
				self.setPosition(e);
				self.currentLoc = e;
			}   
			self.lastX = e.clientX;
			self.lastY = e.clientY;    

			});  	

			self.zoomContainer.bind('mousemove', function(e){ 

				if(self.overWindow == false){self.setElements("show");} 

			//make sure on orientation change the setposition is not fired 
			if(self.lastX !== e.clientX || self.lastY !== e.clientY){
				self.setPosition(e);
				self.currentLoc = e;
			}   
			self.lastX = e.clientX;
			self.lastY = e.clientY;    
			});  	

			self.zoomContainer.add(self.$elem).mouseenter(function(){

				if(self.overWindow == false){self.setElements("show");} 


			}).mouseleave(function(){
				if(!self.scrollLock){
					self.setElements("hide");
					self.options.onDestroy(self.$elem);
				}
			});
			//end ove image

		},
		setElements: function(type) {
			var self = this;
			if(!self.options.zoomEnabled){return false;}
			if(type=="show"){
				if(self.isWindowSet){
					if(self.options.zoomType == "inner") {self.showHideWindow("show");}
					if(self.options.zoomType == "window") {self.showHideWindow("show");}
					if(self.options.showLens) {self.showHideLens("show");}
					if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("show");
				}
			}
		}

			if(type=="hide"){
				if(self.options.zoomType == "window") {self.showHideWindow("hide");}
				if(!self.options.tint) {self.showHideWindow("hide");}
				if(self.options.showLens) {self.showHideLens("hide");}
				if(self.options.tint) {	self.showHideTint("hide");}
			}   
		},
		setPosition: function(e) {

			var self = this;

			if(!self.options.zoomEnabled){return false;}

			//recaclc offset each time in case the image moves
			//this can be caused by other on page elements
			self.nzHeight = self.$elem.height();
			self.nzWidth = self.$elem.width();
			self.nzOffset = self.$elem.offset();


			//set responsive       

			if(self.options.responsive && !self.options.scrollZoom){
				if(self.options.showLens){ 
					if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
						lensHeight = self.nzHeight;              
					}
					else{
						lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
					}
					if(self.largeWidth < self.options.zoomWindowWidth){
						lensWidth = self.nzWidth;
					}       
					else{
						lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
					}
					self.widthRatio = self.largeWidth / self.nzWidth;
					self.heightRatio = self.largeHeight / self.nzHeight;        
					if(self.options.zoomType != "lens") {


			//possibly dont need to keep recalcalculating
			//if the lens is heigher than the image, then set lens size to image size
			if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
				lensHeight = self.nzHeight;  

			}
			else{
				lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
			}

			if(self.nzWidth < self.options.zoomWindowHeight/self.heightRatio){
				lensWidth = self.nzWidth;
			}       
			else{
				lensWidth =  String((self.options.zoomWindowWidth/self.widthRatio));
			}            

			self.zoomLens.css('width', lensWidth);    
			self.zoomLens.css('height', lensHeight); 

			if(self.options.tint){    
				self.zoomTintImage.css('width', self.nzWidth);    
				self.zoomTintImage.css('height', self.nzHeight); 
			}

			}                     
			self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' })      
			//end responsive image change
			}
			}

			//container fix
			self.zoomContainer.css({ top: self.nzOffset.top});
			self.zoomContainer.css({ left: self.nzOffset.left});
			self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);
			self.mouseTop = parseInt(e.pageY - self.nzOffset.top);
			//calculate the Location of the Lens


			// if the mouse position of the slider is one of the outerbounds, then hide  window and lens
			if (self.mouseLeft < 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight ) {				          
				self.setElements("hide");
				return;
			}
			//else continue with operations
			else {


			//lens options
			if(self.options.showLens) {
			//		self.showHideLens("show");
			//set background position of lens
			self.lensLeftPos = String(Math.floor(self.mouseLeft - self.zoomLens.width() / 2));
			self.lensTopPos = String(Math.floor(self.mouseTop - self.zoomLens.height() / 2));


			}
			//adjust the background position if the mouse is in one of the outer regions 

			//Top region
			if(self.Etoppos){
				self.lensTopPos = 0;
			}
			//Left Region
			if(self.Eloppos){
				self.windowLeftPos = 0;
				self.lensLeftPos = 0;
				self.tintpos=0;
			}     

			//if lens zoom
			if(self.options.zoomType == "lens") {  
				self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));   
				self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));

				self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

				if(self.changeBgSize){  

					if(self.nzHeight>self.nzWidth){  
						if(self.options.zoomType == "lens"){       
							self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
						}   

						self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
					}
					else{     
						if(self.options.zoomType == "lens"){       
							self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
						}   
						self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            
					}
					self.changeBgSize = false;
				}    

				self.setWindowPostition(e);  
			}

			if(self.options.showLens) {

				if(self.fullwidth && self.options.zoomType != "lens"){
					self.lensLeftPos = 0;

				}
				self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' })  
			}

			} //end else

		},

		showHideWindow: function(change) {
		},

		showHideLens: function(change) {
			var self = this;              
			if(change == "show"){      
				if(!self.isLensActive){
					if(self.options.lensFadeIn){
						self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
					}
					else{self.zoomLens.show();}
					self.isLensActive = true;
				}            
			}
			if(change == "hide"){
				if(self.isLensActive){
					if(self.options.lensFadeOut){
						self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
					}
					else{self.zoomLens.hide();}
					self.isLensActive = false;        
				}      
			}
		},

		setLensPostition: function( e ) {
		},

		setWindowPostition: function( e ) {
			//return obj.slice( 0, count );
			var self = this;


			self.windowOffsetTop = (self.options.zoomWindowOffety);
			self.windowOffsetLeft =(+self.nzWidth);

			self.isWindowSet = true;
			self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;
			self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;

			self.zoomWindow.css({ top: self.windowOffsetTop});
			self.zoomWindow.css({ left: self.windowOffsetLeft});

			self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));   
			self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
			if(self.Etoppos){self.windowTopPos = 0;}
			if(self.Eloppos){self.windowLeftPos = 0;}     
			if(self.Eboppos){self.windowTopPos = (self.largeHeight/self.currentZoomLevel-self.zoomWindow.height())*(-1);  } 
			if(self.Eroppos){self.windowLeftPos = ((self.largeWidth/self.currentZoomLevel-self.zoomWindow.width())*(-1));}    

			//stops micro movements
			if(self.fullheight){
				self.windowTopPos = 0;

			}
			if(self.fullwidth){
				self.windowLeftPos = 0;

			}
			//set the css background position 
			self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });       

		},

		swaptheimage: function(smallimage, largeimage){
			var self = this;
			var newImg = new Image(); 

			if(self.options.loadingIcon){
				self.spinner = $('<div style="background: url(\''+self.options.loadingIcon+'\') no-repeat center;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>');
				self.$elem.after(self.spinner);
			}

			self.options.onImageSwap(self.$elem);

			newImg.onload = function() {
				self.largeWidth = newImg.width;
				self.largeHeight = newImg.height;
				self.zoomImage = largeimage;
				self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });
				self.swapAction(smallimage, largeimage);
				return;              
			}          
		newImg.src = largeimage; // this must be done AFTER setting onload

		},

		swapAction: function(smallimage, largeimage){
			var self = this;    

			var newImg2 = new Image(); 
			newImg2.onload = function() {
			//re-calculate values
			self.nzHeight = newImg2.height;
			self.nzWidth = newImg2.width;
			self.options.onImageSwapComplete(self.$elem);

			self.doneCallback();  
			return;      
			}          
			newImg2.src = smallimage; 

			//reset the zoomlevel to that initially set in options
			self.currentZoomLevel = self.options.zoomLevel;
			self.options.maxZoomLevel = false;

			self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" }); 

			self.currentImage = largeimage;
		},
		doneCallback: function(){

			var self = this;
			if(self.options.loadingIcon){
				self.spinner.hide();     
			}   

			self.nzOffset = self.$elem.offset();
			self.nzWidth = self.$elem.width();
			self.nzHeight = self.$elem.height();

			// reset the zoomlevel back to default
			self.currentZoomLevel = self.options.zoomLevel;

			//ratio of the large to small image
			self.widthRatio = self.largeWidth / self.nzWidth;
			self.heightRatio = self.largeHeight / self.nzHeight; 

			//NEED TO ADD THE LENS SIZE FOR ROUND
			// adjust images less than the window height
			if(self.options.zoomType == "window") {

				if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
					lensHeight = self.nzHeight;  

				}
				else{
					lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
				}

				if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){
					lensWidth = self.nzWidth;
				}       
				else{
					lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
				}


				if(self.zoomLens){

					self.zoomLens.css('width', lensWidth);    
					self.zoomLens.css('height', lensHeight); 


				}
			}
		},
		getCurrentImage: function(){
		}, 

		getGalleryList: function(){
		},

		changeZoomLevel: function(value){			
		},

		closeAll: function(){
			self.zoomLens.hide();
		},
		changeState: function(value){
			var self = this;
			if(value == 'enable'){self.options.zoomEnabled = true;}
			if(value == 'disable'){self.options.zoomEnabled = false;}

		}

	};

$.fn.elevateZoom = function( options ) {
	return this.each(function() {
		var elevate = Object.create( ElevateZoom );

		elevate.init( options, this );

		$.data( this, 'elevateZoom', elevate );

	});
};

$.fn.elevateZoom.options = {
	zoomActivation: "hover", // Can also be click (PLACEHOLDER FOR NEXT VERSION)
	zoomEnabled: true, //false disables zoomwindow from showing
	preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
	zoomLevel: 1, //default zoom level of image

	easing: false,
	easingAmount: 12,
	lensSize: 200,
	zoomWindowWidth: 400,
	zoomWindowHeight: 400,
	zoomWindowOffetx: 0,
	zoomWindowOffety: 0,
	zoomWindowPosition: 1,
	zoomWindowBgColour: "#fff",
	lensFadeIn: false,
	lensFadeOut: false,
	debug: false,
	zoomWindowFadeIn: false,
	zoomWindowFadeOut: false,
	zoomWindowAlwaysShow: false,

	borderSize: 4,
	showLens: true,
	borderColour: "#888",
	lensBorderSize: 1,
	lensBorderColour: "#000",
	lensShape: "square", //can be "round"
	zoomType: "window", //window is default,  also "lens" available -
	containLensZoom: false,
	lensColour: "white", //colour of the lens background
	lensOpacity:1, //opacity of the lens
	lenszoom: false,

	constrainType: false,  //width or height
	constrainSize: false,  //in pixels the dimensions you want to constrain on
	loadingIcon: false, //http://www.example.com/spinner.gif
	responsive:true,
	onComplete: $.noop,
	onDestroy: function() {},
	onZoomedImageLoaded: function() {},
	onImageSwap: $.noop,
	onImageSwapComplete: $.noop
	};

})( jQuery, window, document );