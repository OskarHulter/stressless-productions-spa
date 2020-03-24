module.exports = {
  module: {
    rules: [
      {
        use: ['babel-loader', 'eslint-loader'],
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/
      }
    ]
  }
}