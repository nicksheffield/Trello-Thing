const path               = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './client/index.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/,   loader: 'babel-loader',  exclude: /node_modules/ },
			{ test: /\.jsx$/,  loader: 'babel-loader',  exclude: /node_modules/ },
			{ test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },

			{ test: /\.css$/,  loader: "style-loader!css-loader" },
			{ test: /\.png$/,  loader: "url-loader?limit=100000" },
			{ test: /\.jpg$/,  loader: "file-loader" },
			{ test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/, loader: 'url-loader' }
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}