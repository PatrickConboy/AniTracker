import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from '../enzyme'

import HomePage from '../HomePage'

describe('HomePage Tests', () => {
  test('home page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<HomePage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('home page renders correctly', () => {
    const wrapper = shallow(<HomePage />)

    expect(wrapper.find('#HomePage')).toBeDefined()
  })

  test('snapshot of home page hasn\'t changed', () => {
    const tree = renderer.create(<HomePage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})