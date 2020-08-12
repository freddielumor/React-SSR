const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Tell webpack we're building a bundle for Node, not browser
  target: "node",
  // Server entry point
  entry: "./server.js",
  // Tell webpack where to output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()], // Do not add any packages in node_modules into final SS bundle
};

module.exports = merge(baseConfig, config);
