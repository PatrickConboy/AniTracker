import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import NavBar from './NavBar'

describe('NavBar Tests', () => {
  it('nav bar renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NavBar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })


  test('snapshot of nav bar hasn\'t changed', () => {
    const component = renderer.create(<NavBar />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})