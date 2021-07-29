import HtmlWebpackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebpackPlugin({
  template: './root/index.html',
});

const config = {
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  entry: '/root/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
