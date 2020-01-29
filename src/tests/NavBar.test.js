import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import NavBar from '../NavBar'

describe('NavBar Tests', () => {
  test('nav bar renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NavBar />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('nav bar renders correctly', () => {
    const wrapper = shallow(<NavBar />)

    expect(wrapper.find('#NavBar')).toBeDefined()
    expect(wrapper.find('#navLinks')).toBeDefined()
  })

  test('snapshot of nav bar hasn\'t changed', () => {
    const tree = renderer.create(<NavBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})