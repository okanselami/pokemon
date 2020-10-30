const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './app/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@fonts': path.resolve('./public/fonts')
    }
  },
  module: {
    rules: [
      { test: /\.js$|jsx/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./public/styles/vars.scss']
          },
        },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff2|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '@assets/'
          }
        }
      }
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      filename: "index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new FaviconsWebpackPlugin({
      logo: './public/images/pokedex.png', 
      mode: 'webapp', 
      devMode: 'webapp',
      favicons: {
        appName: 'pokemon',
        appDescription: 'POKEMON APP',
        icons: {
          coast: false,
          yandex: false,
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: false,
          firefox: false,
          windows: false,
          yandex: false 
        }
      }
    }),
    new CompressionPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
};
