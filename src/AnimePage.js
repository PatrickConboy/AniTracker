/* Author: Patrick Conboy
 * Date Created: 1/5/2020
 * Description: This file creats the dynamic page for each 
 * individual anime in the database. On this page you see all
 * the information about the specific anime that is stored
 * in the database.
 */

import React, { Component } from 'react'

class AnimePage extends Component {
  constructor(props) {
    super(props)
    this.state = { animeName: props.animeName }
  }

  // function here that queries database for all of the given animes info

  // render takes all data from the query and displays it properly 
  render() {
    return (
      <h3>{this.state.animeName}</h3>
    )
  }
}

export default AnimePage;