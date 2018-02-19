const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/index.js' ]
	},
	output: {
		filename: 'dist/[name].bundle.js',
		path: path.resolve(__dirname)
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'Views/Index.cshtml'
		}),
		new webpack.NamedModulesPlugin()
	]
};
