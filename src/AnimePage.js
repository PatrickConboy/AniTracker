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
    this.state = { animeName: "haikyuu" }
  }

  render() {
    return (
      <h3>this.state.animeName</h3>
    )
  }
}

export default AnimePage;