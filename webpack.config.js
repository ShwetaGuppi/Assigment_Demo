const webpack = require("webpack");
const path = require("path");

module.exports = () => ({
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
