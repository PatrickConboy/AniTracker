import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import App from '../App'

describe('App Tests', () => {
  test('app renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('app renders correctly', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('#App')).toBeDefined()
  })

  test('snapshot of app hasn\'t changed', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})