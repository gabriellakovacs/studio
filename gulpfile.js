// Gulpfile.js

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    swig = require("gulp-swig"),
    concat = require("gulp-concat");



//concatenate js files
gulp.task("concatenate", function() {
  return gulp.src("./src/js/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./dist/"));
});

//concatenate and minify js files
gulp.task("minify", function() {
  return gulp.src("./src/js/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
});

//create new subproject with template

gulp.task("templates", function() {
  gulp.src("./src/template/ancientcity.html")
    .pipe(swig())
    .pipe(gulp.dest("./dist/"))
});


// //create new subproject with template
// var opts = {
//   data: {
//     mainProjectTitle: "Drawings that Count",
//     mainProjectFolder: "drawings-that-count",
//     mainProjectPublisher:"Architectural Association Publications, 2013",
//     coverImageSrc: "../images/projects/"+ "drawings-that-count" + "/cover.jpg",
//     coverImageAlt: "Drawings that count cover",
//     subProjectTitle: "Cartography of RelativeIndeterminacy: Hannibal’s Alpine Passage",
//     subProjectAuthor:"Karl Kjelstrup-Johnson",
//     subProjectInfo:"2009, Diploma Unit 15, Architectural Association",
//     subProjectImgFileName:"hannibalpassage",
//     aboutProject:"Kjelstrup-Johnson maps a landscape of relative indeterminacy/determinacy for the Alpine topography using the ‘marching day’ in Livy’s account of the passage as a space–time unit. Each square is one marching day, with size indicating the difficulty of the terrain crossed: a big square means easy conditions, a small one more difficult routes. Embedded in this model is a semi-indeterminate event-network in which known instances – such as setting frozen rocks on fire, losing yet another elephant or skirmishes with hostile tribes – mediate with each other in order to establish the most likely ‘optimised’ route.",
//     nextProjectHref:"ancientcity" + ".html",
//     prevProjectHref:"neutrality" + ".html",
//     mainImgSrc: "../images/projects/" + "drawings-that-count" + "/" + "hannibalpassage" + ".jpg",
//     mainImgZoomSrc: "../images/projects/" + "drawings-that-count" + "/zoom/" + "hannibalpassage" + ".jpg"
//   }
// };
// gulp.task("templates", function() {
//   gulp.src("./src/template/*.html")
//     .pipe(swig(opts))
//     .pipe(gulp.dest("./dist/"))
// });

// //create new subproject with template
// var opts = {
//   load_json: true
// };
// gulp.task("templates", function() {
//   gulp.src("./src/template/*.html")
//     .pipe(swig(opts))
//     .pipe(gulp.dest("./dist/"))
// });

// // compile, minify, and copy templates
// gulp.task("templates", function(){
//   gulp.src("./src/templates/*.swig")
//     .pipe(swig())
//     .pipe(gulp.dest("./public/"));
// });

// // minify and copy styles
// gulp.task("styles", function(){
//   gulp.src("./src/assets/css/*.css")
//     .pipe(minifycss())
//     .pipe(gulp.dest("./public/assets/css"));
// });


// gulp.task("default", function(){
//   gulp.run("templates", "styles");

//   // watch files and run scripts if they change
//   gulp.watch("./src/templates/*.swig", function(event){
//     gulp.run("templates");
//   });

//   gulp.watch("./src/assets/css/*.css", function(event){
//     gulp.run("styles");
//   });

// });