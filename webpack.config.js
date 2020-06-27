const path = require('path');

module.exports = {
  entry: './mjs/controller.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js'),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200
  }
};