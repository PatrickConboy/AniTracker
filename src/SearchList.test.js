import React from 'react'
import ReactDOM from 'react-dom'
import SearchList from './SearchList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchList />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('My Test Case', () => {
  let searchList = new SearchList("props")
  let animeList = searchList.state["list"]
  expect(animeList.length).toEqual(3)
})