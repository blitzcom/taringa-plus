import * as types from '../../types/recommends'
import { recommendsControl } from '../recommends'

describe('Recommends control reducer', () => {
  it('returns initial state', () => {
    expect(recommendsControl(undefined, {})).toEqual({
      error: '',
      postIds: [],
      status: 'success'
    })
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST
    }

    expect(recommendsControl(undefined, action)).toEqual({
      error: '',
      postIds: [],
      status: 'fetching'
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      ids: [1, 2, 3, 4, 5]
    }

    expect(recommendsControl(undefined, action)).toEqual({
      error: '',
      postIds: [1, 2, 3, 4, 5],
      status: 'success'
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      message: 'foobar'
    }

    expect(recommendsControl(undefined, action)).toEqual({
      error: 'foobar',
      postIds: [],
      status: 'failure'
    })
  })
})
