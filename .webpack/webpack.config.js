const path = require('path');

let libraryName = 'vgrid';
module.exports = {
  mode: 'production',
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
  externals: [
    {
      vue: 'vue',
      '@stencil/core': '@stencil/core'
    }, 
    /^(\@revolist\/revogrid)/i
  ],
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
