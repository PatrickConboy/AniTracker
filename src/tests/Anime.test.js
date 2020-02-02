import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import Anime from '../Anime'

describe('Anime Tests', () => {
  test('anime page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Anime />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('anime page renders correctly', () => {
    const wrapper = shallow(<Anime />)

    expect(wrapper.find('#Anime')).toBeDefined()
  })

  test('snapshot of anime page hasn\'t changed', () => {
    const tree = renderer.create(<Anime />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})