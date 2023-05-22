const path = require('path');

module.exports = {
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: [ ".ts", ".js", ".jsx", ".tsx", ".css", ".json"],
  },
};