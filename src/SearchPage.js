/* Author: Patrick Conboy
 * Date Created: 11/4/2019
 * Description: This page allows the user to search our database list of anime.
 * The FilterSearchList provides most of the actual functionality code.
 */

import React, { Component } from 'react'
import FilteredSearchList from './FilteredSearchList'
import firebase from './components/firebase'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = { animeList: [] }
  }

  // componentDidMount will load things before the webpage is displayed
  async componentDidMount() {
    const db = await firebase.firestore()
    const animeFromDb = []
    await db.collection("anime").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let anime = doc.data()
        let animeName = anime['name']
        animeFromDb.push(animeName)
      })
    })

    this.setState({ animeList: animeFromDb})
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