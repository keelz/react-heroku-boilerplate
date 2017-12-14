/**
 * @file
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import './App.css'

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  state = { passwords: [] }

  componentDidMount() {
    this.getPasswords()
  }

  getPasswords = () => {
    fetch('/api/genpass')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }))
  }

  render() {
    const { className, props } = this.props
    const { passwords } = this.state

    return (
      <div className={classnames('App', className)} {...props}>
        <h1>passwords</h1>
        <ul>
          {passwords.map((password, index) => (
            <li key={index}>{password}</li>
          ))}
        </ul>
        <button
          className="more"
          onClick={this.getPasswords}>
          Get More
        </button>
      </div>
    )
  }
}

export default App