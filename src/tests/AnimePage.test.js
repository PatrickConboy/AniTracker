import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from '../enzyme'

import AnimePage from '../AnimePage'

describe('AnimePage Tests', () => {
  test('anime page renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AnimePage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('anime page renders correctly', () => {
    const wrapper = shallow(<AnimePage />)

    expect(wrapper.find('#AnimePage')).toBeDefined()
  })

  test('snapshot of anime page hasn\'t changed', () => {
    const tree = renderer.create(<AnimePage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})