import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import SearchPage from './SearchPage'

describe('SearchPage Tests', () => {
  it('search page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SearchPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })


  test('snapshot of search page hasn\'t changed', () => {
    const component = renderer.create(<SearchPage />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });


  // For this test, probably need to render so mounting happens and then test the state.
  // This will give time for the database query to run properly.
  it('anime list length is correct', () => {
    let searchList = new SearchPage("props")
    let animeList = searchList.state["animeList"]
    expect(animeList.length).toEqual(4)
  })
})