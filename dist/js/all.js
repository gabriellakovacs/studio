"use strict";var tallestImgHeight=373,tallestImgWidth=150,headerH=37,borders=2,lowerImages=[["errorL",250],["pianoTrajectory",350],["qanat",250],["drawings",250],["rochesterOutside2",250],["colosseum",250],["sketchpad",350],["wings",150],["gap",150],["fokker",250],["manAndComputer",150],["concrete",150],["tablet",150],["whirligig",250],["uluo",350],["steamRender",250],["hannibalpassage",250],["trackAndField",350],["preserve",250],["ancientcity",250],["casting",150],["stampede",150],["steamroom",350],["herPractice",250],["pianoTesting2",350]],upperImages=[["chance",150],["forAllIntenets",250],["hanging",250],["balfron",250],["release",150],["verne",150],["fullStop",250],["unionStockyards",350],["piranesi",150],["workInProgress",150],["USAFhangar",150],["pianoTesting1",250],["tamper",150],["rochesterOutside1",150],["smallrock",150],["rochesterConst",250],["frot",250],["embryos",250],["smote",150],["inversion",250],["insertaeSedis",250],["needle",150],["skypode",250],["futuresexchange",250],["steamInsulation",350],["merDeGlace",350],["error",150],["hold",150],["enso",250],["rochester",250],["workInProgress2",150]];$(document).ready(function(e){function t(){function e(e,t){t.style.height=n}var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=(r.length,(t/2-headerH-borders).toString().concat("px"));$.each(r,e),$.each(a,e);for(var o=t/2-headerH-borders,l=tallestImgWidth/tallestImgHeight*o,i=16*upperImages.length,c=16*lowerImages.length,d=lowerImages.length,m=upperImages.length,g=0;d>g;g++)document.getElementById(lowerImages[g][0]).style.width=(lowerImages[g][1]/tallestImgWidth*l).toString().concat("px"),c+=lowerImages[g][1]/tallestImgWidth*l;for(var g=0;m>g;g++)document.getElementById(upperImages[g][0]).style.width=(upperImages[g][1]/tallestImgWidth*l).toString().concat("px"),i+=upperImages[g][1]/tallestImgWidth*l;s.style.width=(Math.max(i,c)+100).toString().concat("px")}function n(e){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.documentElement.scrollLeft-=40*t,document.body.scrollLeft-=40*t,e.preventDefault()}function o(){var e=window.innerWidth-c-d,t=window.innerHeight-2*m;y.style.width=e.toString().concat("px");for(var n=g.length,o=[],l=1;n>=l;l++)(0===o.length||Math.ceil(n/l)<Math.ceil(n/(l-1)))&&o.push([l,Math.ceil(n/l)]);for(var i=[],l=0;l<o.length;l++)(0===i.length||Math.min(e/(o[l][0]+1),t/o[l][1])>Math.min(e/(i[0]+1),t/i[1]))&&(i=[o[l][0],o[l][1]]);if(e/(i[0]+1)<=t/i[1])var r=e/window.innerWidth/(i[0]+1)*80,a="vw";else var r=t/window.innerHeight/i[1]*80,a="vh";var s=r.toString().concat(a),u=(r/8).toString().concat(a),h=(2*r/8).toString().concat(a);for(l=0;n>l;l++)g[l].style.width=s,g[l].style.height=s,g[l].style.marginLeft=u,g[l].style.marginRight=u,g[l].style.marginBottom=h}function l(){var e={center:new google.maps.LatLng(51.52963,-.061613),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP},t=new google.maps.Map(h,e),n=[{featureType:"all",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#292929"},{visibility:"on"}]},{featureType:"all",elementType:"labels.icon",stylers:[{saturation:"-100"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#000000"},{visibility:"on"}]},{featureType:"transit.station",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{visibility:"on"},{weight:"1"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{weight:"1"},{color:"#cccccc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#353535"}]}];t.set("styles",n);new google.maps.Marker({position:new google.maps.LatLng(51.52963,-.061613),map:t,title:"Hughes Meyer Studio",icon:"images/marker.png"})}var i=document.getElementById("horizontalScroll")||void 0,r=document.querySelectorAll(".upperImages")||void 0,a=document.querySelectorAll(".lowerImages")||void 0,s=document.getElementById("indexPicturesGridContainer")||void 0,c=320,d=20,m=37,g=document.querySelectorAll(".mainProjectGridBlock")||void 0,y=document.getElementById("mainProjectGridContainer")||void 0,u=document.getElementById("sub-project-container")||void 0,h=document.getElementById("map")||void 0,p=document.getElementById("hamburgerMenu")||void 0,w=document.getElementById("mainNav")||void 0,f=document.getElementById("projectHeader")||void 0,v=document.getElementById("zoom")||void 0;i&&(n(),window.addEventListener?(window.addEventListener("mousewheel",n,!1),window.addEventListener("DOMMouseScroll",n,!1)):window.attachEvent("onmousewheel",n)),s&&t(),y&&window.innerWidth>smallScreenWsmallScreenW&&o(),h&&l(),$(window).resize(function(e){y&&window.innerWidth>smallScreenWsmallScreenW&&o(),s&&t()}),p.onclick=function(){-1!=p.className.indexOf("active")?(p.className=p.className.replace("active",""),p.innerHTML="&#9776",w.style.display="none"):(p.className=p.className+"active",p.innerHTML="&times;",w.style.display="block")},$(window).resize(function(){window.innerWidth>smallScreenWsmallScreenW&&(w.removeAttribute("style"),-1!=p.className.indexOf("active")&&(p.className[p.className.indexOf("active")]=""))}),f&&$(window).scroll(function(){f.css("top",$(window).scrollTop())}),u&&(window.onresize=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e>smallScreenWsmallScreenW&&(u.style.width=(e-c-d).toString().concat("px"))},window.onload=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e>smallScreenWsmallScreenW&&(u.style.width=(e-c-d).toString().concat("px"))}),v&&$("#zoom").elevateZoom({zoomType:"lens",containLensZoom:!0})});