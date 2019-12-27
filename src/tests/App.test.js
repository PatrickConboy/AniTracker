import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import App from '../App'

describe('App Tests', () => {
  test('app renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })


  test('snapshot of app hasn\'t changed', () => {
    const component = renderer.create(<App />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})