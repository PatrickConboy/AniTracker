/* Author: Patrick Conboy
 * Date Created: 11/1/2019
 * Description: This file just pulls together the various main web page components
 * of our project.
 */

import React, { Component } from 'react'

import './App.css'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
      </div >
    )
  }
}

export default App;