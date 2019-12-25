/* Author: Patrick Conboy
 * Date Created: 11/4/2019
 * Description: This page allows the user to search our database list of anime.
 * The FilterSearchList provides most of the actual functionality code.
 */

import React, { Component } from 'react'
import FilteredSearchList from './FilteredSearchList'
import firebase from './components/Firebase/firebase'

class SearchPage extends Component {
  constructor(props) {
    super(props)

    const db = firebase.firestore()

    const animeList = []
    db.collection("anime").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let anime = doc.data()
        let animeName = anime['name']
        animeList.push(animeName)
      })
    })

    this.state = {animeList}
  }

  render() {
    return (
      <div className="searchList">
        <section className="section">
          <FilteredSearchList items={this.state.animeList} />
        </section>
      </div>
    )
  }
}

export default SearchPage