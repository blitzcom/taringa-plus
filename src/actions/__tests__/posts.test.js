import * as actions from '../posts'
import * as types from '../../types/posts'

describe('add actions', () => {
  it('creates an action to add posts', () => {
    const data = [
      { id: 1, foo: 'foo' },
      { id: 2, foo: 'bar' },
      { id: 3, foo: 'baz' }
    ]

    expect(actions.add(data)).toEqual({
      type: types.ADD,
      posts: data
    })
  })

  it('creates an action to remove all posts', () => {
    expect(actions.removeAll()).toEqual({
      type: types.REMOVE_ALL
    })
  })
})
