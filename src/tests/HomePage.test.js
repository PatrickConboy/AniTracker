import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import HomePage from '../HomePage'

describe('HomePage Tests', () => {
  test('home page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HomePage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })


  test('snapshot of home page hasn\'t changed', () => {
    const component = renderer.create(<HomePage />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})