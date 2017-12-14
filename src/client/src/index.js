/**
 * @file
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'

import './index.css'

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
)

registerServiceWorker()
