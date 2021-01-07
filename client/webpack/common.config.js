const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./client/src/index.js",
	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				exclude: /node_modules/,
				loader: "babel-loader?cacheDirectory",
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: "file-loader",
			},

			{
				test: /\.s?[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader", // Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	output: {
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: "./client/src/favicon.ico",
			template: "./client/src/index.html",
		}),
	],
};
