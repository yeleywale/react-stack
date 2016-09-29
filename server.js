var webpack = require('webpack');
var webPackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webPackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost')
