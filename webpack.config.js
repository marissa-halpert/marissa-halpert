const path = require('path')
const webpack = require('webpack')
const projectConfig = require('./config')

const config = {
  devtool: 'source-map',
   entry: {
    app: './src/static/js/app',
    webslides: './src/static/js/webslides.min'
  },
  output: {
    path: path.resolve(__dirname, 'public/static/js'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2017']
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      SECRET_MESSAGE: JSON.stringify(projectConfig.get('SECRET_MESSAGE'))
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
}

module.exports = config
