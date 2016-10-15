var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: /*'eval-source-map'*/'cheap-module-source-map',
	entry: {
		main: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
      './src/main.js' //made a mistake by specifying source alone,it needs the full
		]
	},

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
            {
            	test: /\.jsx?$/,
            	//exclude: /node_modules/,
							include: path.join(__dirname, 'src'),
              loader: 'react-hot-loader/webpack!babel'
 							//loader: 'react-hot!babel'
            },
						{
							test: /\.scss$/,
							include: path.join(__dirname, 'src'),
							loader: 'style!css!sass'
						}
		]
	}
}
