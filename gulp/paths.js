(function () {
  'use strict';

  module.exports = {
    'build': 'dist',
    'startupFile': 'src/server.js',
    'js': 'src/**/*.js',
    'json': ['src/**/*.json', '!src/serverless/**'],
    'unit_tests': ['test/**/*.spec.js', 'src/**/*.spec.js'],
    'unit_tests_files': ['test/**/*.js', 'src/**/*.spec.js'],
    'smoke_tests': 'smoke/*_spec.js',
    'coverage': 'coverage'
  };
})();
