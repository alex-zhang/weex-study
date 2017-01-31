const path = require('path');
const webpack = require('webpack');

module.exports = {
	output: {
		filename: '[name].js',
		path: 'dist/assets'
	},
	entry: {
		'home': './src/home.vue?entry=true'
	},
	module:{
		rules:[
      //enforce: "pre",
		  {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      //------------
			{
				test: /\.js$/,
				exclude: /node_modules/,
        loader: 'babel-loader',
			},
      {
        test: /\.vue(\?[^?]+)?$/,
        loader: 'vue-loader'
      }
		]
	},
  plugins:[
    new webpack.BannerPlugin(
      {
        raw: true ,
        banner: '// { "framework": "Vue" }\n'
      }
    )
  ]
};
