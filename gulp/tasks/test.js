(function () {
  'use strict';

  const gulp = require('gulp'),
    paths = require('../paths'),
    mocha = require('gulp-mocha');

  require('babel-polyfill');
  require('babel-core/register');

  process.env.NODE_ENV = 'test';
  gulp.task('test', [], function () {

    return gulp.src(paths.unit_tests, { read: false })
      .pipe(mocha({
        timeout: 10000,
        reporter: process.env.TEAMCITY_VERSION ? 'mocha-teamcity-reporter' : 'spec'
      }));

  });
})();