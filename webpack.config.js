const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './packages/main/src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'build'),
    hot: true
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /nede_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      },
      {
        test: /(\.global)?\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: "index.html", template: "./packages/main/src/index.html" })
  ]
}