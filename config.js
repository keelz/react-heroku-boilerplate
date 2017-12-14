/**
 * @file
 */
import path from 'path'
require('dotenv').config()

const {
  NODE_ENV = 'development',
} = process.env

// Paths.
const rootPath = __dirname
const distPath = path.join(rootPath, './dist')
const srcPath = path.join(rootPath, './src')
const srcCommonPath = path.join(srcPath, './common')
const srcClientPath = path.join(srcPath, './client')
const srcServerPath = path.join(srcPath, './server')

// Environment switch.
const isProduction = process.env.NODE_ENV === 'production'

// PORT.
const PORT = isProduction ? process.env.PORT : 3001

export default {
  NODE_ENV,
  PORT,
  rootPath,
  distPath,
  srcPath,
  srcCommonPath,
  srcClientPath,
  srcServerPath,
  isProduction
}
