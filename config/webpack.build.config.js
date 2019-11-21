const { resolve } = require('path')
const { DefinePlugin } = require('webpack')
const merge = require('webpack-merge')
const HappyPack = require('happypack')
const { config: baseWebpackConfig, happyThreadPool } = require('./webpack.base.config')

const openDEBUG = !!process.env.DEBUG

console.log('openDEBUG: ', openDEBUG)

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: resolve(__dirname, '..', 'src', 'index.tsx')
  },
  output: {
    path: resolve(__dirname, '..', 'dist'),
    pathinfo: true,
    filename: '[name].js',
    futureEmitAssets: true,
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: 'happypack/loader?id=scripts',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'scripts',
      threadPool: happyThreadPool,
      loaders: [
        'cache-loader',
        'babel-loader',
        {
          loader: 'ts-loader',
          options: { happyPackMode: true }
        },
        'eslint-loader?cache=true?emitWarning=true?emitError=true'
      ]
    }),
    new DefinePlugin({
      DEBUG: openDEBUG
    })
  ],
  devtool: openDEBUG ? 'source-map' : undefined
})
