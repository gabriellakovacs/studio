"use strict";var tallestImgHeight=373,tallestImgWidth=150,headerH=37,borders=2,lowerImages=[["undercut",250],["facilitiesForCorrection",250],["errorL",250],["pianoTrajectory",350],["qanat",250],["drawings",250],["rochesterOutside2",250],["colosseum",250],["sketchpad",350],["wings",150],["gap",150],["fokker",250],["manAndComputer",150],["concrete",150],["tablet",150],["whirligig",250],["uluo",350],["steamRender",250],["hannibalpassage",250],["trackAndField",350],["preserve",250],["ancientcity",250],["casting",150],["stampede",150],["steamroom",350],["herPractice",250],["pianoTesting2",350]],upperImages=[["aeolian",350],["fearIsInTheDetail",350],["chance",150],["forAllIntenets",250],["hanging",250],["balfron",250],["release",150],["verne",150],["fullStop",250],["unionStockyards",350],["piranesi",150],["workInProgress",150],["USAFhangar",150],["pianoTesting1",250],["tamper",150],["rochesterOutside1",150],["smallrock",150],["rochesterConst",250],["frot",250],["embryos",250],["smote",150],["inversion",250],["insertaeSedis",250],["needle",150],["skypode",250],["futuresexchange",250],["steamInsulation",350],["merDeGlace",350],["error",150],["hold",150],["enso",250],["rochester",250],["workInProgress2",150]];$(document).ready(function(e){function t(){function e(e,t){t.style.height=n}var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=(r.length,(t/2-headerH-borders).toString().concat("px"));$.each(r,e),$.each(l,e);for(var o=t/2-headerH-borders,i=tallestImgWidth/tallestImgHeight*o,s=16*upperImages.length,c=16*lowerImages.length,m=lowerImages.length,d=upperImages.length,g=0;g<m;g++)document.getElementById(lowerImages[g][0]).style.width=(lowerImages[g][1]/tallestImgWidth*i).toString().concat("px"),c+=lowerImages[g][1]/tallestImgWidth*i;for(var g=0;g<d;g++)document.getElementById(upperImages[g][0]).style.width=(upperImages[g][1]/tallestImgWidth*i).toString().concat("px"),s+=upperImages[g][1]/tallestImgWidth*i;a.style.width=(Math.max(s,c)+100).toString().concat("px")}function n(e){if(e){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.documentElement.scrollLeft-=40*t,document.body.scrollLeft-=40*t,e.preventDefault()}}function o(){var e=window.innerWidth-s-c,t=window.innerHeight-2*m;g.style.width=e.toString().concat("px");for(var n=d.length,o=[],i=1;i<=n;i++)(0===o.length||Math.ceil(n/i)<Math.ceil(n/(i-1)))&&o.push([i,Math.ceil(n/i)]);for(var r=[],i=0;i<o.length;i++)(0===r.length||Math.min(e/(o[i][0]+1),t/o[i][1])>Math.min(e/(r[0]+1),t/r[1]))&&(r=[o[i][0],o[i][1]]);if(e/(r[0]+1)<=t/r[1])var l=e/window.innerWidth/(r[0]+1)*80,a="vw";else var l=t/window.innerHeight/r[1]*80,a="vh";var y=l.toString().concat(a),p=(l/8).toString().concat(a),u=(2*l/8).toString().concat(a);for(i=0;i<n;i++)d[i].style.width=y,d[i].style.height=y,d[i].style.marginLeft=p,d[i].style.marginRight=p,d[i].style.marginBottom=u}var i=document.getElementById("horizontalScroll")||void 0,r=document.querySelectorAll(".upperImages")||void 0,l=document.querySelectorAll(".lowerImages")||void 0,a=document.getElementById("indexPicturesGridContainer")||void 0,s=320,c=20,m=37,d=document.querySelectorAll(".mainProjectGridBlock")||void 0,g=document.getElementById("mainProjectGridContainer")||void 0,y=(document.getElementById("sub-project-container"),document.getElementById("map")||void 0),p=document.getElementById("hamburgerMenu")||void 0,u=document.getElementById("mainNav")||void 0,h=document.getElementById("projectHeader")||void 0,w=document.getElementById("zoom")||void 0;i&&(n(),window.addEventListener?(window.addEventListener("mousewheel",n,!1),window.addEventListener("DOMMouseScroll",n,!1)):window.attachEvent("onmousewheel",n)),a&&t(),g&&window.innerWidth>580&&o(),y&&function(){var e={center:new google.maps.LatLng(51.52963,-.061613),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP},t=new google.maps.Map(y,e),n=[{featureType:"all",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#292929"},{visibility:"on"}]},{featureType:"all",elementType:"labels.icon",stylers:[{saturation:"-100"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#000000"},{visibility:"on"}]},{featureType:"transit.station",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{visibility:"on"},{weight:"1"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{weight:"1"},{color:"#cccccc"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#353535"}]}];t.set("styles",n),new google.maps.Marker({position:new google.maps.LatLng(51.52963,-.061613),map:t,title:"Hughes Meyer Studio",icon:"images/marker.png"})}(),$(window).resize(function(e){g&&window.innerWidth>580&&o(),a&&t()}),p.onclick=function(){p.className.indexOf("active")!=-1?(p.className=p.className.replace("active",""),p.innerHTML="&#9776",u.style.display="none"):(p.className=p.className+"active",p.innerHTML="&times;",u.style.display="block")},$(window).resize(function(){window.innerWidth>580&&(u.removeAttribute("style"),p.className.indexOf("active")!=-1&&(p.className[p.className.indexOf("active")]=""))}),h&&$(window).scroll(function(){h.css("top",$(window).scrollTop())}),w&&$("#zoom").elevateZoom({zoomType:"lens",containLensZoom:!0})});