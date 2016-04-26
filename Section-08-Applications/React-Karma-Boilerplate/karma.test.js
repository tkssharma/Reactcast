/**
 * Use the babel polyfill
 * to support all ES6 features
 * in tests
 */
require('babel-polyfill');

/**
 * Dependencies
 */
const React = require('react');

/**
 * Make console.warn throw
 */
let warn = console.warn;
console.warn = function(warning) {
  throw new Error(warning);
  warn.apply(console, arguments);
};

/**
 * Make console.error throw
 */
let err = console.error;
console.error = function(warning) {
  throw new Error(warning);
  err.apply(console, arguments);
};

/**
 * Automatically include all test files
 * of the pattern './src/***.test.js(x)'
 * (this is webpack "magic")
 */
const context = require.context('./src/', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);

/**
 * Export all the required tests
 */
module.exports = context;
