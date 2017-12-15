/**
 * @file
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import './style.css'

class App extends Component {
  /**
   * Properties.
   * @public
   */
  static propTypes = {}
  static defaultProps = {}
  state = { passwords: [] }

  /**
   * React Event Handler.
   * @public
   */
  componentDidMount() {
    _getPasswords.call(this)
  }

  /**
   * React rener.
   * @public
   */
  render() {
    const { className, props } = this.props
    const { passwords } = this.state

    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <h2>Home</h2>
        </div>
        <div className="row">
          <h4>passwords</h4>
        </div>
        <div className={classnames('App mt-3', className)} {...props}>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scopse="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {passwords.map((password, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="col-sm-12 mt-3 text-center">
            <button
              className="btn btn-primary text-center"
              onClick={_ => {
                _getPasswords.call(this)
              }}>
              Get More
            </button>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * Fetch a set of passwords.
 * @private
 */
function _getPasswords() {
  fetch('/api/genpass')
    .then(res => res.json())
    .then(passwords => this.setState({ passwords }))
}

export default App
