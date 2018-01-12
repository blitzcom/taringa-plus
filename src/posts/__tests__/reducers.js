import { postsEntities, fetchControl } from '../reducers'
import * as types from '../types'

describe('posts entities reducer', () => {
  it('returns initial state', () => {
    expect(postsEntities(undefined, {})).toEqual({})
  })

  it('handles posts entities', () => {
    const action = {
      type: types.RECENT_FETCH_SUCCESS,
      page: 1,
      result: [1, 2],
      entities: {
        posts: {
          1: { id: 1, foo: 'bar' },
          2: { id: 2, foo: 'baz' }
        }
      }
    }

    expect(postsEntities({}, action)).toEqual({
      1: { id: 1, foo: 'bar' },
      2: { id: 2, foo: 'baz' }
    })
  })
})
