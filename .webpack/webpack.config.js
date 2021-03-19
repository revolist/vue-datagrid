const path = require('path');

let libraryName = 'vgrid';
module.exports = {
  entry: {
    [libraryName]: './src/vgrid.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'VGrid',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: 'vue',
    '@revolist/revogrid': '@revolist/revogrid',
    '@revolist/revogrid/loader': '@revolist/revogrid/loader',
    '@stencil/core': '@stencil/core'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
