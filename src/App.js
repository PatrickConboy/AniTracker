/* Author: Patrick Conboy

 * Date Created: 11/1/2019

 * Description: This file just pulls together the various main web page components
 * of our project.
 */

import React, { Component } from 'react'
import SearchPage from './SearchPage'
import './App.css'

class App extends Component {
  // Constructor currently does nothing, but
  // might need later for login functionality.
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <SearchPage />
      </div>
    )
  }
}

export default App;
