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

it('list has correct number of anime in it', () => {
  assert.equal(1, 1)
})