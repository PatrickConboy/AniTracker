import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from '../enzyme'

import FilteredSearchList from '../FilteredSearchList'

describe('FilteredSearchList Tests', () => {
  test('filtered search list renders correctly', () => {
    const anime = ['Naruto', 'Bleach', 'Haikyuu!', 'Toradora']   
    const wrapper = render(<FilteredSearchList props={anime} />)
    expect(wrapper.find('#FilteredSearchList')).toBeDefined()
    expect(wrapper.find('.input')).toBeDefined()
  })

  test('snapshot of filtered search list hasn\'t changed', () => {
    const anime = { animeList: ['Naruto', 'Bleach', 'Haikyuu!', 'Toradora'] }
    const tree = renderer.create(<FilteredSearchList props={anime} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})