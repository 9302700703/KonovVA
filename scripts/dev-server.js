const minimist = require('minimist')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack.config')

const { env } = minimist(process.argv.slice(2))

const webpackEnv = env && env.prod ? { prod: true } : { dev: true }

const server = new WebpackDevServer(webpack(config(webpackEnv)))

server.listen(3000)