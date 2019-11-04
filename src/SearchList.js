/* Created By: Patrick Conboy
 * Created On: November 4, 2019
 * Description: This file handles creation of the lis to of anime on the
 * search page of AniTracker.
*/

import React, { Component } from 'react'

// This class will display the list of anime from the database.
class SearchList extends Component {
  constructor() {
    super()

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
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchList