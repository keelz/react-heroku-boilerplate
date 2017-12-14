/**
 * @file
 */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import NotFound from './components/NotFound'
import Links from './components/Links'

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Links />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default Routes
