/* Author: Patrick Conboy
 * Date Created: 1/4/2020
 * Description: This file will be the React component that
 * is the personal anime list webpage for each user.
 */

import React, { Component } from 'react'
import firebase from './components/firebase'

import Anime from './Anime'

class AnimeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalList: [],
      isPersonalList: true,
      isAnimePage: false,
      animeName: ""
    }

    this.showAnimePage = this.showAnimePage.bind(this)
  }

  async componentDidMount() {
    const db = await firebase.firestore()
    const personalListFromDb = []
    await db.collection("personalList").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let anime = doc.data()
        let animeName = anime['name']
        personalListFromDb.push(animeName)
      })
    })
    .catch(function(error) {
      console.error("Error reading document: ", error)
    })

    this.setState({ personalList: personalListFromDb })
  }

  showAnimePage(anime) {
    this.setState({
      isPersonalList: false,
      isAnimePage: true,
      animeName: anime
    })
  }

  animePage() {
    return (
      <div>
        <Anime animeName={this.state.animeName} />
      </div>
    )
  }

  personalListPage() {
    return (
      <div>
        <ul>
          {this.state.personalList.map(item => (<li className={item} onClick={this.showAnimePage.bind(this, item)} key={item}>{item}</li>))}
        </ul>
      </div>
    )
  }

  render() {
    // This is saying that if isPersonalList is true, render that component. 
    // Otherwise, render isAnimePage's component.
    return (
      <div>
        {this.state.isPersonalList ? this.personalListPage() : null}
        {this.state.isAnimePage ? this.animePage() : null}
      </div>
    )
  }
}

export default AnimeList;