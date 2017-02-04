const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function entry(dir='./', root='src', entry={}) {
  let directory = path.join(__dirname, root, dir);
  fs.readdirSync(directory).forEach(function (file) {
    let fullpath = path.join(directory, file);
    let stat = fs.statSync(fullpath);
    // support for vue file
    if (stat.isFile() && (path.extname(fullpath) === '.vue')) {
      let name = path.basename(file, path.extname(file));
      entry[name] = fullpath + '?entry=true'
    }
  });

  return entry;
}

function getBaseConfig() {
  return {
    output: {
      filename: '[name].js',
      path: 'dist'
    },

    entry: entry(),

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

    resolve: {
      extensions: [".js", ".json", ".vue", ".css"],
    },

    plugins:[
      //this is important for native engine .vue for weex.
      new webpack.BannerPlugin(
        {
          raw: true ,
          banner: '// { "framework": "Vue" }'
          // banner: '// { "framework": "Weex" }'
        }
      ),

      // new HtmlWebpackPlugin({
      //   title: 'app',
      //   template: './src/index.html',
      //   inject: false
      // }),

      // new CopyWebpackPlugin([
      //   {
      //     from: `./node_modules/weex-html5/dist/weex.js`, to: 'weex.js',
      //     from: `./node_modules/vue/dist/vue.js`, to: 'vue.js'
      //   }
      // ])
    ]
  };
}

module.exports = getBaseConfig();
