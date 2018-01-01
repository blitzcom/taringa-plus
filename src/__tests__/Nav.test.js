import React from 'react'
import Nav from '../Nav'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'

it('Render nav', () => {
  const component = renderer.create(
    <StaticRouter location='/' context={{}}>
      <Nav/>
    </StaticRouter>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
