/**
 * @file
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import './style.css'

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  componentDidMount() {
  }

  render() {
    const { className, props } = this.props

    return (
      <div className="container-fluid">
        <div className="row">
          <div className={classnames('About mt-3', className)} {...props}>
            <h2>About</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default About
