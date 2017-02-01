const path = require('path');
const webpack = require('webpack');

function getBaseConfig() {
  return {
    output: {
      filename: '[name].js',
      path: 'dist'
    },
    entry: {
      'home': path.resolve('./src/home.vue?entry=true')
    },
    module:{
      rules:[
        //enforce: "pre",
        // {
        //   test: /\.js$/,
        //   enforce: "pre",
        //   exclude: /node_modules/,
        //   loader: "eslint-loader"
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(we|vue)(\?[^?]+)?$/,
          loader: 'weex-loader'
        }
      ]
    },
    plugins:[
      //this is important for native engine reg.
      new webpack.BannerPlugin(
        {
          raw: true ,
          banner: '// { "framework": "Vue" }'
        }
      )
    ]
        // //------------
  };
}

module.exports = getBaseConfig();
