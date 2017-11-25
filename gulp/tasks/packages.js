(function () {
  const gulp = require('gulp'),
    paths = require('../paths');

  gulp.task('packages', function (done) {
    gulp.src(paths.source_packages, { base: '.' })
      .on('finish', done);
  });
})();