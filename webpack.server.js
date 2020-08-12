const path = require("path");

module.exports = {
  // Tell webpack we're building a bundle for Node, not browser
  target: "node",
  // Server entry point
  entry: "./server.js",
  // Tell webpack where to output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  // Tell webpack to run babel
  module: {
    rules: [
      {
        test: /\.js?$/, // Compile js files only
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
