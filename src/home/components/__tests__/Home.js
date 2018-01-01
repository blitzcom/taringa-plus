import React from 'react'
import { Home } from '../Home'
import renderer from 'react-test-renderer'

describe('Home', () => {
  it('renders', () => {
    const component = renderer.create(
      <Home/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('moves scroll to 0,0 on mount', () => {
    const mock = jest.fn()

    window.scrollTo = mock

    renderer.create(
      <Home/>
    )

    expect(mock).toBeCalledWith(0, 0)
  })
})
