import HtmlWebPackPlugin from "html-webpack-plugin";
import path from 'path';
import { Configuration } from "webpack";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./root/index.html",
  filename: "./index.html"
});

const config: Configuration = {
  mode: "production",
  entry: "/root/index.tsx",
  output: {
    path: path.resolve(__dirname, '..', "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;
