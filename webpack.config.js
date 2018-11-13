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
  externals: {
    "babel-core": {
      commonjs: "babel-core",
      commonjs2: "babel-core",
      amd: "babel-core",
      root: "babel-core"
    },
    "babel-jest": {
      commonjs: "babel-jest",
      commonjs2: "babel-jest",
      amd: "babel-jest",
      root: "babel-jest"
    },
    "babel-loader": {
      commonjs: "babel-loader",
      commonjs2: "babel-loader",
      amd: "babel-loader",
      root: "babel-loader"
    },
    "babel-preset-env": {
      commonjs: "babel-preset-env",
      commonjs2: "babel-preset-env",
      amd: "babel-preset-env",
      root: "babel-preset-env"
    },
    jest: {
      commonjs: "jest",
      commonjs2: "jest",
      amd: "jest",
      root: "jest"
    }
  }
};
