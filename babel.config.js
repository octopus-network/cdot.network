module.exports = {
  presets: [
    ['react-app', { flow: false, typescript: true }],
    '@babel/preset-env'
  ],
  plugins: ['react-hot-loader/babel']
}
