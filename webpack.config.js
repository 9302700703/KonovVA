const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = env => {
  const mode = env.prod ? 'production' : 'development'
  const devtool = env.prod ? 'eval' : 'eval-source-map'
  return {
    mode,
    entry: './packages/main/src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].bundle.js'
    },
    devtool,
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
              presets: [ '@babel/preset-react' ],
              plugins: [ '@babel/plugin-proposal-class-properties' ]
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ filename: "index.html", template: "./packages/main/src/index.html" })
    ]
  }
}

module.exports = config
