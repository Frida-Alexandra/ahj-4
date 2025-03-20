const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

export default merge(common, {
  mode: 'production',
  optimization: { minimizer: [ new CssMinimizerPlugin() ] },
});