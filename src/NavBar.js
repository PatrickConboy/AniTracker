/* Author: Patrick Conboy
 * Date Created: 12/22/2019
 * Description: This file creates the static navigation bar that
 * sits at the top of the AniTracker website.
 */

import React, { Component } from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'

import './NavBar.css'
import SearchPage from './SearchPage'
import HomePage from './HomePage'
import AnimeListPage from './AnimeListPage'

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div className='NavBar'>

          <ul id='navLinks'>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/searchpage'>Search Page</NavLink>
            </li>
            <li>
              <NavLink to='/animelist'>Anime List</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/searchpage">
              <SearchPage />
            </Route>
            <Route path="/animelist">
              <AnimeListPage />
            </Route>
          </Switch>

        </div >
      </Router>
    )
  }
}

export default NavBar;