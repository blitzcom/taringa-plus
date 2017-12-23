import React from 'react'
import { Posts } from './Posts'
import renderer from 'react-test-renderer'

describe('Posts component', () => {
  it('renders posts', () => {
    Date.now = jest.fn(() => 1513924592705)

    const posts = [
      {
        id: 1,
        created: 1513920502005,
        canonical: 'canonical-url-1',
        title: 'post-title-1',
        owner: {
          avatar: {
            medium: 'medium-avatar-1'
          },
          nick: 'owner-nick-1'
        }
      },
      {
        id: 2,
        created: 1513920512005,
        canonical: 'canonical-url-2',
        title: 'post-title-2',
        owner: {
          avatar: {
            medium: 'medium-avatar-2'
          },
          nick: 'owner-nick-2'
        }
      }
    ]

    const component = renderer.create(
      <Posts posts={posts}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders blank slate if not posts', () => {
    const component = renderer.create(
      <Posts/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders loader when fetching posts', () => {
    const control = {
      status: 'fetching',
      error: ''
    }

    const component = renderer.create(
      <Posts fetchControl={control}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders error message when fetching posts fails', () => {
    const control = {
      status: 'failure',
      error: 'network error'
    }

    const component = renderer.create(
      <Posts fetchControl={control}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls fetch action', () => {
    const mock = jest.fn()

    const component = renderer.create(
      <Posts fetch={mock}/>
    )

    expect(mock).toBeCalled()
  })
})
