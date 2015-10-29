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