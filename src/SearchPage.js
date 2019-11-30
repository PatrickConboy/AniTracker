/* Author: Patrick Conboy
 * Date Created: 11/4/2019
 * Description: This page allows the user to search our database list of anime.
 * The FilterSearchList provides most of the actual functionality code.
 */

import React, { Component } from 'react'
import FilteredSearchList from './FilteredSearchList'

class SearchPage extends Component {
  constructor(props) {
    super(props)

    // TODO: this list should be populated by database from Firebase
    this.state = {
      list: [
        "Tokyo Ghoul",
        "Haikyuu",
        "Naruto",
        "My Hero Academia"
      ]
    }
  }

  render() {
    return (
      <div className="searchList">
        <section className="section">
          <FilteredSearchList items={this.state.list} />
        </section>
      </div>
    )
  }
}

export default SearchPage