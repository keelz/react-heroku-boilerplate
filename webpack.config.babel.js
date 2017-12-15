/**
 * webpack configuration.
 * @file
 */
import config from './config'
import path from 'path'
import webpack from 'webpack'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import fs from 'fs'

const {
  NODE_ENV,
  rootPath,
  distPath,
  srcPath,
  srcClientPath,
  srcCommonPath,
  srcServerPath
} = config

const definePluginArgs = {
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
}

let nodeModules = {}
fs
  .readdirSync('node_modules')
  .filter(x => {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(mod => {
    nodeModules[mod] = 'commonjs ' + mod
  })

export default {
  devtool: 'source-map',
  name: 'server',
  entry: path.join(srcPath, 'server/app.js'),
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    path: distPath,
    filename: 'app.bundle.js'
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin(definePluginArgs)
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      client: path.join(srcClientPath),
      common: path.join(srcCommonPath),
      controller: path.join(srcServerPath, '/controller'),
      routes: path.join(srcServerPath, '/routes')
    },
    modules: [srcPath, path.join(rootPath, 'node_modules')]
  }
}
