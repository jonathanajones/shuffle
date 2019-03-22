var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './js/src/master.jsx'
  ],
  output: {
    path: path.join(__dirname, 'www/js'),
    filename: 'app.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'js/src')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
