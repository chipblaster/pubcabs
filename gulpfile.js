'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');



gulp.task('sass', function () {
 return gulp.src('./assets/css/scss/main.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./assets/css/'));
});

gulp.task("watch", function () {
    return gulp.watch("assets/css/scss/*.scss",['sass'])
})





//npm install gulp-sass --save-dev
//npm install --save-dev gulp-watch
//npm install browser-sync -g
//browser-sync start --server --files "*.html, ./assets/css/scss/*.scss"