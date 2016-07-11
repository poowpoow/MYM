var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.less$/,
      loader:  'style!css!less'
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.png$/,
      loader: "url-loader?limit=10000&minetype=image/png" 
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  exclude: /node_modules/,
  loader: "babel",
  query: {
	presets:['react']
  }
};
