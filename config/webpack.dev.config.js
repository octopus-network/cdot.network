const { resolve } = require('path')

const merge = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const HappyPack = require('happypack')
const { config: baseWebpackConfig, happyThreadPool } = require('./webpack.base.config')

const isProd = process.env.NODE_ENV === 'production'
const extractCSS = isProd || process.env.TARGET === 'development'

module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
  entry: [
    require.resolve('react-hot-loader/patch'),
    resolve(__dirname, '..', 'src', 'index.tsx')
  ].filter(Boolean),
  output: {
    path: resolve(__dirname, '..', 'dist'),
    pathinfo: true,
    filename: '[name].js',
    futureEmitAssets: true,
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => resolve(info.absoluteResourcePath)
      .replace(/\\/g, '/')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'happypack/loader?id=ts',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'happypack/loader?id=js',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:7].[ext]'
            }
          }]
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '3000',
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new HappyPack({
      id: 'ts',
      threadPool: happyThreadPool,
      loaders: [
        'cache-loader',
        'babel-loader',
        { loader: 'ts-loader', options: { happyPackMode: true } }
      ]
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [
        'cache-loader',
        'babel-loader'
      ]
    }),
    new DefinePlugin({
      DEBUG: true
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
})
