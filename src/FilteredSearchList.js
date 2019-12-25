/* Author: Patrick Conboy
 * Date Created: 11/4/2019
 * Description: This file creates a separate list from our original database
 * list of anime that we can filter without worrying about effecting the original.
 * It essentially just filters the list displayed on the website based on whatever
 * is typed in the input box.
 */

import React, { Component } from 'react'

class FilteredSearchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // Passes in list of anime when intially rendered.
  componentDidMount() {
    this.setState({
      filtered: this.props.items
    })
  }

  // Passes in list of anime everytime it renders again.
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

  render() {
    return (<div>
      <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
      <ul>
        {this.state.filtered.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </div>)
  }
}

export default FilteredSearchList
