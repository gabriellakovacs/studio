"use strict";var tallestImgHeight=373,tallestImgWidth=150,headerH=37,borders=2,lowerImages=[["errorL",250],["pianoTrajectory",350],["qanat",250],["drawings",250],["rochesterOutside2",250],["colosseum",250],["sketchpad",350],["wings",150],["gap",150],["fokker",250],["manAndComputer",150],["concrete",150],["tablet",150],["whirligig",250],["uluo",350],["steamRender",250],["hannibalpassage",250],["trackAndField",350],["preserve",250],["ancientcity",250],["casting",150],["stampede",150],["steamroom",350],["herPractice",250],["pianoTesting2",350]],upperImages=[["chance",150],["forAllIntenets",250],["hanging",250],["balfron",250],["release",150],["verne",150],["fullStop",250],["unionStockyards",350],["piranesi",150],["workInProgress",150],["USAFhangar",150],["pianoTesting1",250],["tamper",150],["rochesterOutside1",150],["smallrock",150],["rochesterConst",250],["frot",250],["embryos",250],["smote",150],["inversion",250],["insertaeSedis",250],["needle",150],["skypode",250],["futuresexchange",250],["steamInsulation",350],["merDeGlace",350],["error",150],["hold",150],["enso",250],["rochester",250],["workInProgress2",150]];$(document).ready(function(e){function t(){function e(e,t){t.style.height=o}var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=(l.length,(t/2-headerH-borders).toString().concat("px"));$.each(l,e),$.each(a,e);for(var n=t/2-headerH-borders,i=tallestImgWidth/tallestImgHeight*n,r=16*upperImages.length,d=16*lowerImages.length,c=lowerImages.length,m=upperImages.length,g=0;c>g;g++)document.getElementById(lowerImages[g][0]).style.width=(lowerImages[g][1]/tallestImgWidth*i).toString().concat("px"),d+=lowerImages[g][1]/tallestImgWidth*i;for(var g=0;m>g;g++)document.getElementById(upperImages[g][0]).style.width=(upperImages[g][1]/tallestImgWidth*i).toString().concat("px"),r+=upperImages[g][1]/tallestImgWidth*i;s.style.width=(Math.max(r,d)+100).toString().concat("px")}function o(e){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.documentElement.scrollLeft-=40*t,document.body.scrollLeft-=40*t,e.preventDefault()}function n(){var e=window.innerWidth-d-c,t=window.innerHeight-2*m;u.style.width=e.toString().concat("px");for(var o=g.length,n=[],i=1;o>=i;i++)(0===n.length||Math.ceil(o/i)<Math.ceil(o/(i-1)))&&n.push([i,Math.ceil(o/i)]);for(var r=[],i=0;i<n.length;i++)(0===r.length||Math.min(e/(n[i][0]+1),t/n[i][1])>Math.min(e/(r[0]+1),t/r[1]))&&(r=[n[i][0],n[i][1]]);if(e/(r[0]+1)<=t/r[1])var l=e/window.innerWidth/(r[0]+1)*80,a="vw";else var l=t/window.innerHeight/r[1]*80,a="vh";var s=l.toString().concat(a),h=(l/8).toString().concat(a),y=(2*l/8).toString().concat(a);for(i=0;o>i;i++)g[i].style.width=s,g[i].style.height=s,g[i].style.marginLeft=h,g[i].style.marginRight=h,g[i].style.marginBottom=y}function i(){var e={center:new google.maps.LatLng(51.52963,-.061613),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP},t=new google.maps.Map(y,e),o=[{featureType:"all",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#292929"},{visibility:"on"}]},{featureType:"all",elementType:"labels.icon",stylers:[{saturation:"-100"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#000000"},{visibility:"on"}]},{featureType:"transit.station",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{visibility:"on"},{weight:"1"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{weight:"1"},{color:"#cccccc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#353535"}]}];t.set("styles",o);new google.maps.Marker({position:new google.maps.LatLng(51.52963,-.061613),map:t,title:"Hughes Meyer Studio",icon:"images/marker.png"})}var r=document.getElementById("horizontalScroll")||void 0,l=document.querySelectorAll(".upperImages")||void 0,a=document.querySelectorAll(".lowerImages")||void 0,s=document.getElementById("indexPicturesGridContainer")||void 0,d=320,c=20,m=37,g=document.querySelectorAll(".mainProjectGridBlock")||void 0,u=document.getElementById("mainProjectGridContainer")||void 0,h=document.getElementById("sub-project-container")||void 0,y=document.getElementById("map")||void 0,p=document.getElementById("hamburgerMenu")||void 0,w=document.getElementById("mainNav")||void 0,f=document.getElementById("projectHeader")||void 0;r&&(o(),window.addEventListener?(window.addEventListener("mousewheel",o,!1),window.addEventListener("DOMMouseScroll",o,!1)):window.attachEvent("onmousewheel",o)),s&&t(),u&&n(),y&&i(),$(window).resize(function(e){u&&n(),s&&t()}),p.click(function(){w.toggle(),p.hasClass("active")?p.removeClass("active"):p.addClass("active")}),$(window).resize(function(){window.innerWidth>580&&(w.removeAttr("style"),p.removeClass("active"))}),$(window).scroll(function(){f.css("top",$(window).scrollTop())}),h&&(window.onresize=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;h.style.width=(e-d-c).toString().concat("px")},window.onload=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;h.style.width=(e-d-c).toString().concat("px")}),zoom&&$("#zoom").elevateZoom({zoomType:"lens",containLensZoom:!0})});