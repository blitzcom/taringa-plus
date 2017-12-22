import React from 'react'
import Post from './Post'
import renderer from 'react-test-renderer'

it('Renders Post', () => {
  const now = Date.now('Dec 21, 2017')
  Date.now = jest.genMockFunction().mockReturnValue(now)

  const item = {
    id: 1,
    created: new Date('Dec 20, 2017'),
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
