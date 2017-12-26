import { postsEntities, fetchControl } from '../posts'
import * as types from '../../types/posts'

describe('posts entities reducer', () => {
  it('returns initial state', () => {
    expect(postsEntities({}, {})).toEqual({})
  })

  it('handles ADD', () => {
    const action = {
      type: types.ADD,
      posts: [
        { id: 1, foo: 'bar' },
        { id: 2, foo: 'baz' }
      ]
    }

    expect(postsEntities({}, action)).toEqual({
      1: { id: 1, foo: 'bar' },
      2: { id: 2, foo: 'baz' }
    })
  })
})
