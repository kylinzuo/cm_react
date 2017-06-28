var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV

module.exports = {
  entry: {
    app: [
      './src/main.jsx'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'less': path.resolve(__dirname, '../src/less')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: "eslint-loader",
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
  // resolveLoader: {
  //   fallback: [path.join(__dirname, '../node_modules')]
  // }
  // module: {
  //   preLoaders: [
  //     {
  //       test: /\.js$/,
  //       loader: 'eslint',
  //       include: projectRoot,
  //       exclude: /node_modules/
  //     }
  //   ],
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'babel',
  //       include: projectRoot,
  //       exclude: [
  //         /node_modules/,
  //         /static/
  //       ]
  //     },
  //     {
  //       test: /\.json$/,
  //       use: 'json'
  //     },
  //     {
  //       test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  //       loader: 'url',
  //       query: {
  //         limit: 10000,
  //         name: utils.assetsPath('img/[name].[hash:7].[ext]')
  //       }
  //     },
  //     {
  //       test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  //       loader: 'url',
  //       query: {
  //         limit: 10000,
  //         name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
  //       }
  //     }
  //   ]
  // },
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // }
}
