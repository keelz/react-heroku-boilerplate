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
  name: 'server',
  entry: path.join(srcPath, 'app.js'),
  target: 'node',
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
    new webpack.optimize.DedupePlugin(),
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
      routes: path.join(srcPath, 'routes'),
      common: path.join(srcPath, 'common')
    },
    modules: [srcPath, path.join(rootPath, 'node_modules')]
  }
}
