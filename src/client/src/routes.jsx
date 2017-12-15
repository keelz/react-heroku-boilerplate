/**
 * @file
 */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/**
 * Material-UI Components.
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppFrame from './components/common/AppFrame'

import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'
// import Links from './components/Links'

const Routes = (props) => (
  <Router {...props}>
    <MuiThemeProvider>
      <div>
        <div>
          <AppFrame />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </MuiThemeProvider>
  </Router>
)

export default Routes
