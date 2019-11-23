require('dotenv').config()

const os = require('os')
const isWsl = require('is-wsl')
const { resolve } = require('path')
const HappyPack = require('happypack')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const WatchMissingNodeModulesPlugin = require(
  'react-dev-utils/WatchMissingNodeModulesPlugin')

const isProd = process.env.NODE_ENV === 'production'
const extractCSS = isProd || process.env.TARGET === 'development'

const cssLoaders = [
  extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    loader: 'css-loader',
    options: {
      sourceMap: !isProd,
      importLoaders: 1
    }
  }
]

const lessLoaders = [
  ...cssLoaders, {
    loader: 'less-loader',
    options: {
      javascriptEnabled: true
    }
  }
]

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
)

exports.happyThreadPool = HappyPack.ThreadPool({
  size: Math.min(os.cpus().length, 4)
})

exports.config = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['*', '.js', '.json', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '~type': resolve(__dirname, '..', 'types'),
      '~api': resolve(__dirname, '..', 'src', 'api'),
      '~component': resolve(__dirname, '..', 'src', 'components'),
      '~store': resolve(__dirname, '..', 'src', 'store'),
      '~style': resolve(__dirname, '..', 'src', 'style'),
      '~util': resolve(__dirname, '..', 'src', 'utils'),
      '~view': resolve(__dirname, '..', 'src', 'views')
    }
  },
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.less$/,
        use: lessLoaders
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    }),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: resolve(__dirname, '..', 'public', 'index.html')
        },
        isProd ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        } : undefined
      )
    ),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: ''
    }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      tsconfig: resolve(__dirname, '..', 'tsconfig.json')
    }),
    new ModuleNotFoundPlugin(resolve(__dirname, '..')),
    // tip: remove HotModuleReplacementPlugin from webpack.config.
    // because "--hot" option for webpack-dev-server is doing the same.
    !isProd && new CaseSensitivePathsPlugin(),
    !isProd &&
    new WatchMissingNodeModulesPlugin(resolve(__dirname, '..', 'node_modules')),
    isProd &&
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    }),
    isProd &&
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      importWorkboxFrom: 'cdn',
      navigateFallback: '/index.html',
      navigateFallbackBlacklist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp('^/_'),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp('/[^/?]+\\.[^/]+$')
      ]
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/'
    }),
    new CopyPlugin([
      {
        from: resolve(__dirname, '..', 'public'),
        to: resolve(__dirname, '..', 'dist'),
        ignore: ['index.html', 'manifest.json']
      },
      {
        from: resolve(__dirname, '..', 'src', 'assets'),
        to: resolve(__dirname, '..', 'dist', 'assets')
      }])
  ].filter(Boolean),
  performance: {
    hints: false
  },
  stats: { children: false },
  optimization: {
    minimize: isProd,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        },
        // Use multi-process parallel running to improve the config speed
        // Default number of concurrent runs: os.cpus().length - 1
        // Disabled on WSL (Windows Subsystem for Linux) due to an issue with Terser
        // https://github.com/webpack-contrib/terser-webpack-plugin/issues/21
        parallel: !isWsl,
        // Enable file caching
        cache: true,
        sourceMap: true
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 400,
      automaticNameDelimiter: '~'
    },
    runtimeChunk: true
  }
}
