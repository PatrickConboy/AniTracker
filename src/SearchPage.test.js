import React from 'react'
import ReactDOM from 'react-dom'
import SearchPage from './SearchPage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('My Test Case', () => {
  let searchList = new SearchPage("props")
<<<<<<< HEAD
  let animeList = searchList.state["animeList"]
  expect(animeList.length).toEqual(0)
=======
  let animeList = searchList.state["list"]
  expect(animeList.length).toEqual(4)
>>>>>>> dev
})