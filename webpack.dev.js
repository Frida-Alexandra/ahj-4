import { HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

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