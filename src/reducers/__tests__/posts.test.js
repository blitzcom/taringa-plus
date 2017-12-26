import { postsEntities, fetchControl } from '../posts'
import * as types from '../../types/posts'

describe('posts entities reducer', () => {
  it('returns initial state', () => {
    expect(postsEntities({}, {})).toEqual({})
  })

  it('handles ADD_PAGE', () => {
    const action = {
      type: types.ADD_PAGE,
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

describe('posts control reducer', () => {
  it('returns initial state', () => {
    expect(fetchControl(undefined, {})).toEqual({
      status: 'success',
      error: ''
    })
  })

  it('handles FETCH_SECTION_REQUEST', () => {
    const action = {
      type: types.FETCH_SECTION_REQUEST
    }

    expect(fetchControl(undefined, action)).toEqual({
      status: 'fetching',
      error: ''
    })
  })

  it('clears error message when FETCH_SECTION_REQUEST', () => {
    const action = {
      type: types.FETCH_SECTION_REQUEST
    }

    const state = {
      status: 'failure',
      error: 'foobar'
    }

    expect(fetchControl(state, action)).toEqual({
      status: 'fetching',
      error: ''
    })
  })

  it('handles FETCH_SECTION_SUCCESS', () => {
    const action = {
      type: types.FETCH_SECTION_SUCCESS
    }

    expect(fetchControl(undefined, action)).toEqual({
      status: 'success',
      error: ''
    })
  })

  it('handles FETCH_SECTION_FAILURE', () => {
    const action = {
      type: types.FETCH_SECTION_FAILURE,
      message: 'foobar'
    }

    expect(fetchControl(undefined, action)).toEqual({
      status: 'failure',
      error: 'foobar'
    })
  })
})
