'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;
  process.env.NODE_ENV = 'production';

  runSequence('bootstrap', 'flagIcon', 'nodeScripts', 'styles', 'images',
    'views', 'misc', 'templateCache', 'preprocess', 'browserify', 'server', cb);
});
