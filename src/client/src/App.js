/**
 * @file
 */
import React, { Component } from 'react'
import './App.css'

class App extends Component {
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
    const { passwords } = this.state

    return (
      <div className="App">
        <h1>Passwords!</h1>
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
