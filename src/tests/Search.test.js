import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import Search from '../Search'

describe('Search Tests', () => {
  test('search page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('search page renders correctly', () => {
    const wrapper = shallow(<Search props={""}/>)

    expect(wrapper.find('.props')).toBeDefined()
    expect(wrapper.find('.animeList')).toBeDefined()
  })

  test('snapshot of search page hasn\'t changed', () => {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})