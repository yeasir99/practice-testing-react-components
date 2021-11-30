const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  devtool: 'source-map',
  // plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
})
