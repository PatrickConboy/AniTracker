import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import Home from '../Home'

describe('Home Tests', () => {
  test('home page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('home page renders correctly', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper.find('#Home')).toBeDefined()
  })

  test('snapshot of home page hasn\'t changed', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})