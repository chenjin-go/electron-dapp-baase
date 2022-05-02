module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "https": require.resolve("https-browserify"),
        "http": require.resolve("stream-http"),
        "os": require.resolve("os-browserify/browser"),
    }
  },
  module: {
    rules: require('./rules.webpack'),
  },
}