/* Author: Patrick Conboy
 * Date Created: 1/5/2020
 * Description: This file creats the dynamic page for each 
 * individual anime in the database. On this page you see all
 * the information about the specific anime that is stored
 * in the database.
 */

import React, { Component } from 'react'
import firebase from './components/firebase'

class AnimePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animeName: props.animeName,
      numberOfEpisodes: null,
      animeGenre: ""
    }
  }

  // function here that queries database for all of the given animes info
  async componentDidMount() {
    const db = await firebase.firestore()
    await db.collection("anime").doc("One Piece").get().then((snapshot) => {
      let animeData = snapshot.data()
      let animeEpisodes = animeData['episodes']
      let animeGenre = animeData['genre']
      this.setState({
        numberOfEpisodes: animeEpisodes,
        animeGenre: animeGenre
      })
    })
  }

  // render takes all data from the query and displays it properly 
  render() {
    return (
      <div className="animeData">
        <h2>{this.state.animeName}</h2>
        <h3>Episodes: {this.state.numberOfEpisodes}</h3>
        <h3>Genre: {this.state.animeGenre}</h3>
      </div>
    )
  }
}

export default AnimePage;