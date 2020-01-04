import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from '../enzyme'

import SearchPage from '../SearchPage'

describe('SearchPage Tests', () => {
  test('search page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('search page renders correctly', () => {
    const wrapper = shallow(<SearchPage props={""}/>)

    expect(wrapper.find('.props')).toBeDefined()
    expect(wrapper.find('.animeList')).toBeDefined()
  })

  test('snapshot of search page hasn\'t changed', () => {
    const tree = renderer.create(<SearchPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})