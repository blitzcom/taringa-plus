import { commentsEntities } from '../comments'
import * as types from '../../types/comments'

describe('Comment Entities Reducer', () => {
  it('returns initial state', () => {
    expect(commentsEntities(undefined, {})).toEqual({})
  })

  it('handles ADD', () => {
    const action = {
      type: types.ADD,
      comments: [
        { id: 1, body: 'bar' },
        { id: 2, body: 'baz' }
      ]
    }

    expect(commentsEntities({}, action)).toEqual({
      1: { id: 1, body: 'bar' },
      2: { id: 2, body: 'baz' }
    })
  })

  it('handles FETCH_REQUEST', () => {
    const comments = {
      1: { id: 1, body: 'bar' },
      2: { id: 2, body: 'baz' }
    }

    const action = {
      type: types.FETCH_REQUEST
    }

    expect(commentsEntities(comments, action)).toEqual({})
  })
})
