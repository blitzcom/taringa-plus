import { shoutsEntities } from '../reducers'
import * as types from '../types'

describe('Shouts entities reducer', () => {
  it('returns initial state', () => {
    expect(shoutsEntities(undefined, {})).toEqual({})
  })

  it('handles shouts entities', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      result: [1, 2],
      entities: {
        shouts: {
          1: { id: 1, foo: 'bar' },
          2: { id: 2, foo: 'baz' }
        }
      }
    }

    expect(shoutsEntities({}, action)).toEqual({
      1: { id: 1, foo: 'bar' },
      2: { id: 2, foo: 'baz' },
    })
  })
})
