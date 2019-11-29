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
  componentWillReceiveProps(nextProps) {
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
