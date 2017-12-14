/**
 * @file
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import './style.css'

class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  static state = {}

  componentDidMount() {
    //TODO: implement.
  }

  render() {
    const { className, props } = this.props

    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1>Whoops... Not Found</h1>
      </div>
    )
  }
}

export default NotFound
