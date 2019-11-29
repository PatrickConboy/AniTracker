import React, { Component } from 'react'
import FilteredSearchList from './FilteredSearchList'

class SearchPage extends Component {
  constructor(props) {
    super(props)

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