const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	resolve: {     // resolve是分解的意思， extensions是扩展的意思(扩展名)
		extensions: ['.js', '.jsx']    // 不用写.js和.jsx文件的后缀名
	},
	devtool: 'inline-source-map',
	entry: {
		app: './src/index.jsx'
	},
	output: {
		filename: 'assets/js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}, {
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}, {
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
			}]
	},
	plugins: [
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		}),
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([{
			from: 'assets'
		}]),
		new HtmlWebpackPlugin({
			title: 'React Demo',
			filename: 'index.html',
			chunks:['app'],
			//template: path.resolve(__dirname, 'src/index.ejs'),
			hash: true
			//inject: false
		}),
		//new ExtractTextPlugin("assets/css/site.min.css"),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
}