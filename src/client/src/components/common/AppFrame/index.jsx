/**
 * @flow
 * @file
 */
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import { blue500, green500 } from 'material-ui/styles/colors'
import { Link } from 'react-router-dom'

import './style.css'

export default class AppFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <AppBar
          className="app-frame-app-bar"
          title="React Heroku Boilerplate"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem
            primaryText="Home"
            containerElement={<Link to="/" />}
            leftIcon={
              <FontIcon className="material-icons" color={ green500 }>home</FontIcon>
            }
            onClick={this.handleClose}
          />
          <MenuItem
            primaryText="About"
            containerElement={<Link to="/about" />}
            leftIcon={
              <FontIcon className="material-icons" color={ blue500 }>help_outline</FontIcon>
            }
            onClick={this.handleClose}
          />
        </Drawer>
      </div>
    )
  }
}
