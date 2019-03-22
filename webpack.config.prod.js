module.exports = {
  entry: './js/src/master.jsx',
  output: {
    path: 'www/js',
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
