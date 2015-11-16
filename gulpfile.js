// Gulpfile.js

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    swig = require("gulp-swig"),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

//minify js files
gulp.task("jsmin", function() {
  return gulp.src("./src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
});

//create all files from templates
gulp.task("alltemplates", function() {
  gulp.src("./src/template/**/*.html")
    .pipe(swig())
    .pipe(gulp.dest("./dist/"))
});

//compress images
gulp.task('imgmin', () => {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});