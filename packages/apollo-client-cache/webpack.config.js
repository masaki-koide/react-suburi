const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            rootMode: 'upward'
          }
        }],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new DotenvPlugin({
      systemvars: true
    })
  ]
}

module.exports = config
