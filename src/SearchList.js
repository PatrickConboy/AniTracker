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
        "Naruto",
        "My Hero Academia"
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

    this.handleChange = this.handleChange.bind(this);
  }

  // Passes in list of anime when intially rendered.
  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  // Passes in list of anime everytime it renders again.
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }

  handleChange(event) {
    let currentList = [];
    let newList = [];

    if (event.target.value !== "") {
      currentList = this.props.items;
      newList = currentList.filter(item => {
        const lc = item.toLowerCase();
        const filter = event.target.value.toLowerCase()
        return lc.includes(filter);
      })
    } else {
      newList = this.props.items;
    }
    
    this.setState({
      filtered: newList
    })
  }

  render() {
    return (
      <div>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        <ul>
          {this.state.filtered.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchList