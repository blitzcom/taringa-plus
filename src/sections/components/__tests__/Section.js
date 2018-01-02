import React from 'react'
import renderer from 'react-test-renderer'
import { Section } from '../Section'

describe('Section', () => {
  it('renders', () => {
    const component = renderer.create(
      <Section/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('loads post when componentDidMount', () => {
    const mock = jest.fn()

    renderer.create(
      <Section fetch={mock}/>
    )

    expect(mock).toBeCalled()
  })
})
