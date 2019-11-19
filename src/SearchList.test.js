import React from 'react'
import ReactDOM from 'react-dom'
import SearchList from './SearchList'
import List from './SearchList'
import { exportAllDeclaration } from '@babel/types'
import { AssertionError } from 'assert'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchList />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('My Test Case', () => {

  // This eventually needs to be the actual list from a SearchList object.
  var testList = {
    list: [
      "Tokyo Ghoul",
      "Haikyuu",
      "Naruto"
    ]
  }

  var testLength = testList.length
  expect(testLength).toEqual(3);
})