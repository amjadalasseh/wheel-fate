(function () {
  'use strict';

  var gulp = require('gulp'),
    babel = require('gulp-babel'),
    paths = require('../paths');


  gulp.task('build:json', ['clean'], function (done) {
    return gulp.src(paths.json)
      .pipe(gulp.dest(paths.build), done);
  })

  gulp.task('build', ['clean', 'build:json'], function (done) {
    return gulp.src([paths.js, '!src/serverless/**'])
      .pipe(babel())
      .pipe(gulp.dest(paths.build), done);
  });

})();