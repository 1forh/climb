'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var src = 'src/';
var dist = 'dist/';

gulp.task('scripts', function() {
  return gulp.src(src + 'climb.js')

    .pipe(rename('climb.js'))
    .pipe(gulp.dest(dist))

    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dist));

});
