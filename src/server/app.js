/**
 * @file
 */
import app from './server'
import config from '../../config'
import debug from 'debug'
import http from 'http'
import chalk from 'chalk'

const { PORT } = config

const port = normalizePort(PORT)
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') throw error

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges')
    process.exit(1)
    break
  case 'EADDRINUSE':
    console.error(bind + ' is already in use')
    process.exit(1)
    break
  default:
    throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
  console.log(chalk.green(`APP IS RUNNING ON PORT ${PORT}`))
}
