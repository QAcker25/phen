const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


const rootPath = './';

module.exports = {
	entry: {
		core: path.resolve(rootPath, 'src/core'),
		chapter_1: path.resolve(rootPath, 'src/chapters/1')
	},
	output: {
		path: path.resolve(rootPath, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.ts?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.html?$/,
				loader: 'raw-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts'],
		modules: [path.resolve(rootPath, 'src'), 'node_modules']
	},
	externals: {
		jquery: 'jQuery'
	},
	devtool: 'cheap-module-source-map',
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: {
				baseDir: ['dist']
			},
			notify: false
		})
	],
	watch: true
};