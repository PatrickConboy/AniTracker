import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import AnimeList from '../AnimeList'

describe('AnimeList Tests', () => {
  test('anime list page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AnimeList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('anime list page renders correctly', () => {
    const wrapper = shallow(<AnimeList />)

    expect(wrapper.find('#AnimeList')).toBeDefined()
  })

  test('snapshot of anime list page hasn\'t changed', () => {
    const tree = renderer.create(<AnimeList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})