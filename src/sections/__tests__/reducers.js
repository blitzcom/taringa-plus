import { sectionsControl } from '../reducers'
import * as types from '../types'

const state = {
  1: {
    category: null,
    count: 8,
    error: '',
    id: 1,
    name: 'Foo',
    postsIds: [],
    status: 'success',
    trending: true
  },
  2: {
    category: 'bar',
    count: 8,
    error: '',
    id: 2,
    name: 'Bar',
    postsIds: [],
    status: 'success',
    trending: false
  }
}

describe('Sections control reducer', () => {
  it('return initial state', () => {
    expect(sectionsControl('foo', {})).toEqual('foo')
  })

  it('handles FETCH_REQUEST', () => {
    const action = {
      type: types.FETCH_REQUEST,
      id: 1
    }

    expect(sectionsControl(state, action)).toEqual({
      1: {
        category: null,
        count: 8,
        error: '',
        id: 1,
        name: 'Foo',
        postsIds: [],
        status: 'fetching',
        trending: true
      },
      2: {
        category: 'bar',
        count: 8,
        error: '',
        id: 2,
        name: 'Bar',
        postsIds: [],
        status: 'success',
        trending: false
      }
    })
  })

  it('handles FETCH_SUCCESS', () => {
    const action = {
      type: types.FETCH_SUCCESS,
      id: 1,
      posts: [1, 2, 3]
    }

    expect(sectionsControl(state, action)).toEqual({
      1: {
        category: null,
        count: 8,
        error: '',
        id: 1,
        name: 'Foo',
        postsIds: [1, 2, 3],
        status: 'success',
        trending: true
      },
      2: {
        category: 'bar',
        count: 8,
        error: '',
        id: 2,
        name: 'Bar',
        postsIds: [],
        status: 'success',
        trending: false
      }
    })
  })

  it('handles FETCH_FAILURE', () => {
    const action = {
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'foobar'
    }

    expect(sectionsControl(state, action)).toEqual({
      1: {
        category: null,
        count: 8,
        error: 'foobar',
        id: 1,
        name: 'Foo',
        postsIds: [],
        status: 'failure',
        trending: true
      },
      2: {
        category: 'bar',
        count: 8,
        error: '',
        id: 2,
        name: 'Bar',
        postsIds: [],
        status: 'success',
        trending: false
      }
    })
  })

  it('handles RESTORE', () => {
    const action = {
      type: types.RESTORE,
      id: 1
    }

    const nextState = {
      1: {
        category: null,
        count: 8,
        error: '',
        id: 1,
        name: 'Foo',
        postsIds: [1, 2, 3, 4, 5],
        status: 'success',
        trending: true
      },
      2: {
        category: 'bar',
        count: 8,
        error: '',
        id: 2,
        name: 'Bar',
        postsIds: [6, 7, 8, 9, 10],
        status: 'success',
        trending: false
      }
    }

    expect(sectionsControl(nextState, action)).toEqual({
      1: {
        category: null,
        count: 8,
        error: '',
        id: 1,
        name: 'Foo',
        postsIds: [],
        status: 'success',
        trending: true
      },
      2: {
        category: 'bar',
        count: 8,
        error: '',
        id: 2,
        name: 'Bar',
        postsIds: [6, 7, 8, 9, 10],
        status: 'success',
        trending: false
      }
    })
  })
})
