/**
 * @file
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'

/**
 * NOTE: this is a temporary injection and should not be required soon.
 * {@link: https://www.npmjs.com/package/material-ui}
 */
import injectTapEventPlugin from 'react-tap-event-plugin'

// Inject base style sheet.
import './index.css'

// Inject tap event plugin.
injectTapEventPlugin()

// Render root node.
ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
)

/**
 * Register service worker (offline support).
 */
registerServiceWorker()
