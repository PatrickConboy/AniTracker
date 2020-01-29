import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from '../enzyme'

import AnimeListPage from '../AnimeListPage'

describe('AnimeListPage Tests', () => {
  test('anime list page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AnimeListPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('anime list page renders correctly', () => {
    const wrapper = shallow(<AnimeListPage />)

    expect(wrapper.find('#AnimeListPage')).toBeDefined()
  })

  test('snapshot of anime list page hasn\'t changed', () => {
    const tree = renderer.create(<AnimeListPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})