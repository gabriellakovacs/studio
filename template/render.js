var swig  = require("swig");
swig.renderFile("/template/template.html", {

	mainProjectTitle: "Drawings that Count",
	mainProjectFolder: "drawings-that-count",
	mainProjectPublisher:"Architectural Association Publications, 2013",
    coverImageSrc: "../images/projects/"+ mainProjectFolder + "/cover.jpg",
    coverImageAlt: "Cover of the book: 'Drawings that count'",
    subProjectTitle: "",
    subProjectAuthor:"",
    subProjectInfo:"",
    subProjectImg:"",
    aboutProject:"",
    nextProjectHref:"" + ".html",
    prevProjectHref:"" + ".html",
    mainImgSrc: "../images/projects/" + mainProjectFolder + "/" + subProjectImg + ".jpg",
    mainImgZoomSrc: "../images/projects/" + mainProjectFolder + "/zoom/" + subProjectImg + ".jpg"
});