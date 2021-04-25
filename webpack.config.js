const path = require('path');

module.exports = {
  mode: 'production',
  entry: './source/index.ts',
  output: {
    publicPath: 'srh-rvl-typescript',
    filename: 'assets/bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBasePublicPath: '/srh-rvl-typescript',
    contentBase: './docs',
    hot: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'source')],
        use: 'ts-loader',
      },
    ],
  },
};
