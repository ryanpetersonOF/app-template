const path = require('path');

module.exports = [{
  entry: './public/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
},
{
    entry: './public/js/test.js',
    output: {
      filename: 'test.js',
      path: path.resolve(__dirname, 'public/dist'),
    },
  }];