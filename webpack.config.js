const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
	const isProduction = argv.mode === "production";

	// Base paths for static files and output
	const paths = {
		src: path.resolve(__dirname, "src"), // Source folder
		public: path.resolve(__dirname, "public"), // Static files folder
		output: path.resolve(__dirname, "dist"), // Build output folder
	};

	return {
		// Entry point for your application
		entry: {
			app: path.join(paths.src, "index.ts"),
		},

		// Mode: production or development
		mode: isProduction ? "production" : "development",

		// Source maps: easier debugging in development
		devtool: isProduction ? false : "source-map",

		// File caching for faster rebuilds
		cache: {
			type: "filesystem",
		},

		// Module rules: Loaders for different file types
		module: {
			rules: [
				// TypeScript loader
				{
					test: /\.tsx?$/,
					use: {
						loader: "ts-loader",
						options: {
							configFile: isProduction
								? "tsconfig.prod.json"
								: "tsconfig.dev.json",
						},
					},
					exclude: /node_modules/,
				},
				// SCSS and CSS loader
				{
					test: /\.(scss|css)$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : "style-loader",
						{
							loader: "css-loader",
							options: {
								sourceMap: !isProduction,
							},
						},
						{
							loader: "postcss-loader",
							options: {
								sourceMap: !isProduction,
								postcssOptions: {
									plugins: [autoprefixer()],
								},
							},
						},
						"sass-loader",
					],
				},
			],
		},

		// Resolve file extensions
		resolve: {
			extensions: [".ts", ".js"],
		},

		// Output configuration
		output: {
			filename: isProduction ? "[name].[contenthash].js" : "[name].js",
			path: paths.output,
			publicPath: "/", // Serve files from the root for production
			clean: true,
		},

		// Optimization: Minification and chunk splitting
		optimization: {
			minimize: isProduction,
			minimizer: [
				new CssMinimizerPlugin(),
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: true,
							drop_debugger: true,
							passes: 2,
							pure_funcs: ["console.info", "console.debug"],
						},
						mangle: true,
						output: {
							comments: false,
						},
					},
					extractComments: false,
					parallel: true,
				}),
			],
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						chunks: "all",
					},
				},
			},
			runtimeChunk: "single",
		},

		// Plugins
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(paths.src, "index.html"),
				filename: "index.html",
				minify: isProduction
					? {
						collapseWhitespace: true,
						removeComments: true,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeStyleLinkTypeAttributes: true,
						keepClosingSlash: true,
						minifyJS: true,
						minifyCSS: true,
					}
					: false,
			}),
			new MiniCssExtractPlugin({
				filename: isProduction
					? "css/[name].[contenthash].css"
					: "css/[name].css",
			}),
		],

		// Dev Server for development workflow
		devServer: {
			static: {
				directory: paths.public,
			},
			port: 8080,
			compress: true,
			open: true,
			historyApiFallback: true,
		},

		// Suppress excessive build output
		stats: {
			warnings: false,
		},

		// Performance improvements: Warn on large files in production
		performance: {
			hints: isProduction ? "warning" : false,
		},
	};
};
