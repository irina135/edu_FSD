var gulp = require('gulp');

var del = require('del');

var includer = require("gulp-x-includer");

var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require("css-mqpacker");
var sortCSSmq = require('sort-css-media-queries');
var minify = require('gulp-csso');
var rename = require('gulp-rename');

var uglifyes = require('gulp-uglifyes');

var imagemin = require('gulp-imagemin');

var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');

var runSequence = require('run-sequence');
var server = require('browser-sync');

gulp.task('clean', function(){
  return del('dist');
});

gulp.task('copy', function() {
  return gulp.src([
    'src/assets/icons/**/*.*',
    '!src/assets/icons/svg-sprite/*.*',
    'src/assets/fonts/**/*.{woff,woff2}',
    'src/assets/video/**/*.{mp4,webm}',
    'src/assets/audio/**/*.{mp3,ogg,wav,aac}',
    'src/json/**/*.json',
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('dist/'));
});

gulp.task('include-html', function () {
    gulp.src('src/html/*.html')
      .pipe(includer())
      .pipe(gulp.dest('dist'));
});

gulp.task('style', function() {
  gulp.src('src/styles/styles.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: ['last 4 version']}),
      mqpacker({
        sort: sortCSSmq.desktopFirst
      })
    ]))
    .pipe(gulp.dest('dist/styles'))
    .pipe(minify())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('js-copy', function() {
  gulp.src('src/scripts-ready/**/*.js')
  .pipe(plumber())
  .pipe(gulp.dest('dist/scripts'));
});

gulp.task('js-uglify', function() {
  gulp.src('src/scripts/**/*.js')
  .pipe(plumber())
  .pipe(gulp.dest('dist/scripts'))
  .pipe(uglify())
  .pipe(rename(function(path){
    path.basename += '.min';
  }))
  .pipe(gulp.dest('dist/scripts'));
});

function es(){
  return gulp.src('src/scripts/*.js')
    .pipe(includer())
    .pipe(plumber())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(uglifyes())
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist/scripts'));
}

gulp.task('uglifyes', es);

gulp.task('images', function(){
  gulp.src('src/assets/images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('symbols', function(){
  gulp.src('src/assets/icons/svg-sprite/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('dist/assets/icons'));
});

gulp.task('build', function(fn){
  runSequence('clean','copy','include-html','style','js-copy','uglifyes','images','symbols', fn);
});

var afterChange = setTimeout(function(){},0);
gulp.task('reload-serv', function(){
  clearTimeout(afterChange);
  afterChange = setTimeout(function(){
    server.reload();
  }, 500);
});

gulp.task('serv', function() {
  server.init({
      server: "dist"
  });
  gulp.watch('src/html/**/*.html', ['include-html']);
  gulp.watch('src/styles/**/*.less', ['style']);
  gulp.watch('src/html/**/*.less', ['style']);
  gulp.watch('src/scripts-ready/**/*.js', ['js-copy']);
  gulp.watch('src/scripts/**/*.js', ['uglifyes']);
  gulp.watch('src/assets/logo/**/*.{png,jpg,jpeg,gif,svg}', ['images']);
  gulp.watch('src/assets/icons/svg-sprite/*.svg', ['symbols']);
  gulp.watch('dist/**/*.*', ['reload-serv']);
});









// x-includer syntax:

// HTML :
// <!-- include "path/to/xxx.html" -->

// JavaScript :
// // include "path/to/xxx.js"

// CSS :
// /* include "path/to/xxx.css" */