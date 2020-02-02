/* Author: Patrick Conboy
 * Date Created: 12/22/2019
 * Description: This file creates the static navigation bar that
 * sits at the top of the AniTracker website.
 */

import React, { Component } from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'

import './css/NavBar.css'
import SearchPage from './SearchPage'
import Home from './Home'
import AnimeList from './AnimeList'

class NavBar extends Component {
  render() {
    return (
      <Router>
        <div className='NavBar'>

          <ul id='navLinks'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/search-page'>Search Page</NavLink>
            </li>
            <li>
              <NavLink to='/anime-list'>Anime List</NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/search-page" component={SearchPage}/>
            <Route path="/anime-list" component={AnimeList}/>
          </Switch>

        </div >
      </Router>
    )
  }
}

export default NavBar;