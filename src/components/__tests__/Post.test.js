import React from 'react'
import Post from '../Post'
import renderer from 'react-test-renderer'

it('Renders Post', () => {
  Date.now = jest.fn(() => 1513924592705)

  const item = {
    id: 1,
    created: 1513920502005,
    canonical: 'canonical-url',
    title: 'post-title',
    owner: {
      avatar: {
        medium: 'medium-avatar'
      },
      nick: 'owner-nick'
    }
  }

  const component = renderer.create(
    <Post {...item}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
