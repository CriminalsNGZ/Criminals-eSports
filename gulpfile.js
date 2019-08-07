/**
 * Created by pharaoh on 10/1/2018.
 */

'use strict';
const gulp = require('gulp');
const sass = require("gulp-ruby-sass");
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require("gulp-livereload");



gulp.task('style',function () {
    sass('server/public/assets/scss/**/*.scss',{ style: 'expanded' })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('server/public/assets/css/'))
        .pipe(livereload());
});

//minify all js to one js file
gulp.task('minscripts', function() {
    return gulp.src(['server/public/assets/js/jquery-migrate.js', 'server/public/assets/js/jquery.waypoints.min.js','server/public/assets/js/popper.js', 'assets/js/bootstrap.min.js','assets/js/wow.min.js','assets/js/bootstrap-progressbar.min.js', 'server/public/assets/js/jquery.counterup.min.js','server/public/assets/js/slick.min.js', 'server/public/assets/js/jquery.magnific-popup.min.js' ,'server/public/assets/js/jquery.filterizr.min.js'])
        .pipe(concat('plugins.js'))
        .pipe(gulp.dest('server/public/assets/'));
});

//minify all css to one css file

gulp.task('mincss',function () {
    return gulp.src(['server/public/assets/css/bootstrap.min.css','server/public/assets/css/animate.min.css','server/public/assets/css/et-line.css','server/public/assets/css/font-awesome.min.css','server/public/assets/css/magnific-popup.css','server/public/assets/css/slick.css','server/public/assets/css/ionicons.min.css'])
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('server/public/assets/'))
});


gulp.task('watch',function () {
    livereload.listen();
    gulp.watch('server/public/assets/scss/**/*.scss',['style'])
});

gulp.task('default',['style','watch','minscripts']);