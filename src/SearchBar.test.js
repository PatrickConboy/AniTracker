import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})

//TODO: test that list contents are correct