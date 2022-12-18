const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const dev = {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	// plugins: [new ReactRefreshWebpackPlugin()],
	devServer: {
		hot: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
		client: {
			progress: false,
			overlay: {
				errors: false, // Change to true if needed!
				warnings: false,
			},
		},
		// publicPath: "/",
		historyApiFallback: true,
		port: 9008,
		// stats: 'errors-only',
		// disableHostCheck: true,
	},
	optimization: {
		minimize: false,
	},
};

module.exports = () => {
	return merge(common, dev);
};
