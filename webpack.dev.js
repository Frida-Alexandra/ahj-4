const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 9000,
  },
  plugins: [ new HotModuleReplacementPlugin() ],
});