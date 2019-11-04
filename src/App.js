/* Created By: Patrick Conboy
 * Created On: November 1, 2019
 * Description: This is the main App file for the AniTracker website.
 * It simply calls Main and handles any basic constructor stuff.
*/

import React, { Component } from 'react'

import Main from './Main'
import './App.css';

class App extends Component {
  // Constructor currently does nothing, but
  // will need later for login functionality.
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
