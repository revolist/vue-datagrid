const path = require('path');

let libraryName = 'vue2-datagrid';
const common = {
  mode: 'production',
  entry: {
    [libraryName]: './lib/index.ts',
  },
  externals: [
    'vue',
    '@revolist/revogrid',
    /^@revolist\/revogrid\//,
    '@stencil/core',
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
};
module.exports = [{
  ...common,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].umd.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
}, {
  ...common,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true // Enables experimental support for ESM output
  },
}];
