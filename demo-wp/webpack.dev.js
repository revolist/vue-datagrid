const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    app: './index.ts'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3332
  },
  output: {
    path: path.resolve(__dirname, '../distServe'),
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html',
      appMountId: 'app',
      "exJs": [], // [ "dist/vgrid.js"],
    }),
    new VueLoaderPlugin.VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@revolist/vue-datagrid': path.resolve(__dirname, '..')
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'vue-style-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
            }
          },
          'sass-loader'
        ]
      },
    ],
  },
};
