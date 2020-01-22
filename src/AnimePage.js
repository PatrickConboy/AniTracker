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
      animeSynopsis: "",
      animeBackground: "",
      typeOfAnime: "",
      numberOfEpisodes: null,
      animeStatus: "",
      dateAired: "",
      seasonPremiered: "",
      animeProducers: "",
      animeLicensors: "",
      animeStudios: "",
      sourceMaterial: "",
      animeGenres: "",
      animeDuration: "",
      animeRating: ""
    }
  }

  // function here that queries database for all of the given animes info
  async componentDidMount() {
    const db = await firebase.firestore()
    await db.collection("anime").doc(this.state.animeName).get().then((snapshot) => {
      let animeData = snapshot.data()

      this.setState({
        animeSynopsis: animeData['synopsis'],
        animeBackground: animeData['background'],
        typeOfAnime: animeData['type'],
        numberOfEpisodes: animeData['episodes'],
        animeStatus: animeData['status'],
        dateAired: animeData['aired'],
        seasonPremiered: animeData['premiered'],
        animeProducers: animeData['producers'],
        animeLicensors: animeData['licensors'],
        animeStudios: animeData['studios'],
        sourceMaterial: animeData['source'],
        animeGenres: animeData['genres'],
        animeDuration: animeData['duration'],
        animeRating: animeData['rating'],
      })
    })
  }

  render() {
    return (
      <div className="animeInfo">
        <div className="nameSpace">
          <h2>{this.state.animeName}</h2>
          <button type="button" className="btn">Add to list</button>
        </div>

        <div className="animeBlurbs">
          <h3>Synopsis: {this.state.animeSynopsis}</h3>
          <h3>Background: {this.state.animeBackground}</h3>
        </div>

        <div className="animeDataColumn">
          <h3>Type: {this.state.typeOfAnime}</h3>
          <h3>Episodes: {this.state.numberOfEpisodes}</h3>
          <h3>Status: {this.state.animeStatus}</h3>
          <h3>Aired: {this.state.dateAired}</h3>
          <h3>Premiered: {this.state.seasonPremiered}</h3>
          <h3>Producers: {this.state.animeProducers}</h3>
          <h3>Licensors: {this.state.animeLicensors}</h3>
          <h3>Studios: {this.state.animeStudios}</h3>
          <h3>Source: {this.state.sourceMaterial}</h3>
          <h3>Genres: {this.state.animeGenres}</h3>
          <h3>Duration: {this.state.animeDuration}</h3>
          <h3>Rating: {this.state.animeRating}</h3>
        </div>
      </div>
    )
  }
}

export default AnimePage;