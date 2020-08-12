const path = require("path");

module.exports = {
  // Client entry point
  entry: "./client/src/index.js",
  // Tell webpack where to output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
