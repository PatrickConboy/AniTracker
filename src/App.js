import React, { Component } from 'react'
import Main from './Main'
import './App.css';

class App extends Component {
  // Constructor currently does nothing, but
  // might need later for login functionality.
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    )
  }
}

export default App;
