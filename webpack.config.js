module.exports = {
  context: __dirname,

  entry: "./index.js",

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      // so modern man
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?stage=0' }
    ]
  }
}
