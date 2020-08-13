module.exports = {
  // Tell webpack to run babel
  module: {
    rules: [
      {
        test: /\.js?$/, // Compile js files only
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
    ],
  },
};
