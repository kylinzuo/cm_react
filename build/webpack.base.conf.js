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
            loader: "css-loader", // translates CSS into CommonJS
            query: { 
              modules: true,
              localIdentName: '[name]___[hash:base64:5]'
            }
        },
        // {
        //   loader: 'px2rem-loader',
        //   options: {
        //     remUnit:75,
        //     remPrecision:8
        //   }
        // },
        {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
          query: { 
            modules: true,
            localIdentName: '[name]___[hash:base64:5]'
          }
        },
        // {
        //   loader: 'px2rem-loader',
        //   options: {
        //     remUnit:75,
        //     remPrecision:8
        //   }
        // },
        {
          loader: 'postcss-loader'
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}
