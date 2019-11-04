/* Created By: Patrick Conboy
 * Created On: November 4, 2019
 * Description: This file is the main file for the search page of AniTracker.
*/

import React, { Component } from 'react'

import SearchBar from "./SearchBar"
import SearchList from "./SearchList"

// This page is the entire page for searching the database for anime.
class SearchPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchList />
      </div>
    )
  }
}

export default SearchPage