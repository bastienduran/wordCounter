const path = require("path");
//const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/wordCounter.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "word-counter.js",
    library: "wordCounter",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  externals: {}
};
