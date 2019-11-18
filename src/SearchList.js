/* Created By: Patrick Conboy
 * Created On: November 4, 2019
 * Description: This file handles creation of the lis to of anime on the
 * search page of AniTracker.
*/

import React, { Component } from 'react'
// import List from './DatabaseList'

// This class will display the list of anime from the database.
class SearchList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        "Tokyo Ghoul",
        "Haikyuu",
        "Naruto"
      ]
    }
  }

  render() {
    return (
      <div className="searchList">
        <section className="section">
          <List items={this.state.list} />
        </section>
      </div>
    )
  }
}

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: []
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchList