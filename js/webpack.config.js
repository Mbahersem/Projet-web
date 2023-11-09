const path = require('path');

module.exports = {
  entry: './script.js', // Replace with the path to your JavaScript entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'), // Replace with the desired output folder for the bundle
  },
};