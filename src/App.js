/* Author: Patrick Conboy
 * Date Created: 11/1/2019
 * Description: This file just pulls together the various main web page components
 * of our project.
 */

import React, { Component } from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import SearchPage from './SearchPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>

          <ul className='navLinks'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/searchpage'>Search Page</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/searchpage">
              <SearchPage />
            </Route>
          </Switch>

          {/* <Route path='/searchpage' component={SearchPage} /> */}
        </div >
      </Router>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
