module.exports = ctx => ({
  plugins: [
    require('precss'),
    require('cssnano'),
    require('autoprefixer')({
      remove: false
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('postcss-normalize')()
  ]
})
