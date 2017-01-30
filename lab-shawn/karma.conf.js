const webpack = require('./webpack.config.js');
webpack.entry = {};

module.exports = function(config) {
  config.set({
    webpack,
    port: 9876,
    colors: true,
    autoWatch: true,
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    files: [
      'app/entry.js',
      'test/**/*-test.js',
      'node_modules/angular-mocks/angular-mocks.js'
    ],
    preprocessors: {
      'test/**/*-test.js': ['webpack'],
      'app/entry.js': ['webpack']
    }
  })
};
