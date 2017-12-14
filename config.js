/**
 * @file
 */
import path from 'path'
require('dotenv').config()

const {
  NODE_ENV = 'development',
  PORT = 3001
} = process.env

// Paths.
const rootPath = __dirname
const distPath = path.join(rootPath, './dist')
const srcPath = path.join(rootPath, './src')
const srcCommonPath = path.join(srcPath, './common')

// Environment switch.
const isProduction = process.env.NODE_ENV === 'production'

export default {
  NODE_ENV,
  PORT,
  rootPath,
  distPath,
  srcPath,
  srcCommonPath,
  isProduction
}
