'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var src = 'src/';
var dist = 'dist/';

gulp.task('styles', function() {
    return gulp.src(src + 'site.scss')

      .pipe(plumber())
      .pipe(changed(dist))
      .pipe(sourcemaps.init())
      .pipe(sass() .on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions','ie >= 9']
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(dist))

  });

gulp.task('scripts', function() {
  return gulp.src(src + 'climb.js')

    .pipe(rename('climb.js'))
    .pipe(gulp.dest(dist))

    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dist));

});

gulp.task('default', function() {
  gulp.watch(src + '*.scss', ['styles']);
  gulp.watch(src + '*.js', ['scripts']);
});
