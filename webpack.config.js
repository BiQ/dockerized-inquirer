'use strict';

require('webpack');
const path = require('path');

module.exports = {

  mode: process.env.NODE_ENV || 'development',

  entry: {
    application: './src/index.jsx'
  },

  output: {
    path: path.join(__dirname+'/dist'),
    publicPath: path.join(__dirname, '/dist/'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js','.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png|git|svg|woff2?|eot|ttf)$/i,
        exclude: /node_modules/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }

};