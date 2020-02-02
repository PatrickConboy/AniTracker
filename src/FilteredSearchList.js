/* Author: Patrick Conboy
 * Date Created: 11/4/2019
 * Description: This file creates a separate list from our original database
 * list of anime that we can filter without worrying about effecting the original.
 * It essentially just filters the list displayed on the website based on whatever
 * is typed in the input box. It also provides functionality to click an item in the 
 * list and go to the individual page for that anime.
 */

import React, { Component } from 'react'

import AnimePage from './AnimePage'
import './css/FilteredSearchList.css'

class FilteredSearchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
      isSearchList: true,
      isAnimePage: false,
      animeName: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.showAnimePage = this.showAnimePage.bind(this)
  }

  // Passes in list of anime when intially rendered.
  componentDidMount() {
    this.setState({
      filtered: this.props.items
    })
  }

  // Passes in list of anime everytime the page re-renders. AKA, when user types in search bar.
  // NOTE: componentWillReceiveProps is an unsafe lifecycle in newest version of JS
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    })
  }

  handleChange(event) {
    let currentList = []
    let newList = []

    if (event.target.value !== "") {
      currentList = this.props.items
      newList = currentList.filter(item => {
        const lc = item.toLowerCase()
        const filter = event.target.value.toLowerCase()
        return lc.includes(filter)
      })
    }
    else {
      newList = this.props.items;
    }

    this.setState({
      filtered: newList
    })
  }

  showAnimePage(anime) {
    this.setState({
      isSearchList: false,
      isAnimePage: true,
      animeName: anime
    })
  }

  animePage() {
    return (
      <div>
        <AnimePage animeName={this.state.animeName} />
      </div>
    )
  }

  searchList() {
    return (
      <div>
        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        <ul>
          {this.state.filtered.map(item => (<li className={item} onClick={this.showAnimePage.bind(this, item)} key={item}>{item}</li>))}
        </ul>
      </div>
    )
  }

  render() {
    // This is saying that if isSearchList is true, render that component. 
    // Otherwise, render isAnimePage's component.
    return (
      <div>
        {this.state.isSearchList ? this.searchList() : null}
        {this.state.isAnimePage ? this.animePage() : null}
      </div>
    )
  }
}

export default FilteredSearchList