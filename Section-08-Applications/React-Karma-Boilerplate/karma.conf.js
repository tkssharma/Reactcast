/**
 * Import the existing webpack config
 */
var webpackConfig = require('./webpack.config.js');

/**
 * Export configuration for Karma
 */
module.exports = function(config) {
  config.set({
    /**
     * Run tests in Chrome and Firefox
     */
    browsers: [ 'Chrome'],

    /**
     * Just run once by default
     */
    singleRun: true,

    /**
     * Use the mocha test framework
     */
    frameworks: ['mocha'],

    /**
     * Just load this file (contains a reference to all the tests)
     */
    files: [
      './karma.test.js'
    ],

    /**
     * Preprocess with webpack and our sourcemap loader
     */
    preprocessors: {
      './karma.test.js': ['webpack', 'sourcemap']
    },

    /**
     * Report results in this format
     */
    reporters: ['mocha'],

    /**
     * Webpack config for Karma
     * (can reuse stuff from you existing webpack config)
     */
    webpack: {
      devtool: 'inline-source-map',

      /**
       * Ignore node specific modules/requires
       */
      node : {
        fs: 'empty'
      },

      /**
       * Reuse loader setup from webpack config
       */
      module: {
        loaders: webpackConfig.module.loaders
      }
    },

    /**
     * Please don't spam the console when running in karma!
     */
    webpackServer: {
      noInfo: true
    },

    /**
     * Colors is always nice
     */
    colors: true,
  });
};
