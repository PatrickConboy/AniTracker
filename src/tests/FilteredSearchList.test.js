import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { render } from '../enzyme'

import FilteredSearchList from '../FilteredSearchList'

describe('FilteredSearchList Tests', () => {
  test('filtered search list renders correctly', () => {
    const anime = ['Naruto', 'Bleach', 'Haikyuu!', 'Toradora']   
    const wrapper = render(<FilteredSearchList props={anime} />)
    expect(wrapper.find('#FilteredSearchList')).toBeDefined()
    expect(wrapper.find('.input')).toBeDefined()
  })

  test('test clicking on list item works as expected', () => {
    const anime = ['Naruto', 'Bleach', 'Haikyuu!', 'Toradora']   
    const wrapper = render(<FilteredSearchList props={anime} />)
    expect(wrapper.find('.Naruto')).toBeDefined()
  })
})