const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

console.log(path.resolve(__dirname, '/src/assets/img/icon.png'));

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    {
      test: /\.(s*)css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'sass-loader',
      ],
    },
    {
      test: /\.(png|gif|jpg|svg)$/,
      use: [{
        'loader': 'file-loader',
        options: {
          name: 'assets/[hash].[ext]',
        },
      }],
    },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaManifest({
      short_name: 'Blog',
      name: 'FrcGustavo - Blog',
      icons: [{
        src: './src/assets/img/icon.png',
        sizes: '512x512',
        type: 'image/png',
        ios: true,
      }],
      ios: true,
      start_url: '../index.html',
      scope: '/',
      display: 'standalone',
      theme_color: '#ffa500',
      background_color: '#ffffff',
      related_applications: [],
      prefer_related_applications: false,
    }),
  ],
};
