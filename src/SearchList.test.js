import React from 'react'
import ReactDOM from 'react-dom'
import SearchList from './SearchList'
import List from './SearchList'
import { exportAllDeclaration } from '@babel/types'
import { AssertionError } from 'assert'
import { string } from 'postcss-selector-parser'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchList />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('My Test Case', () => {

  // This eventually needs to be the actual list from a SearchList object.
  let testList = [
      "Tokyo Ghoul",
      "Haikyuu",
      "Naruto"
    ]

  expect(testList.length).toEqual(3);
})