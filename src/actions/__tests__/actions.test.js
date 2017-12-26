import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './actions'
import * as types from './types'

const data = [
  { id: 1, foo: 'foo' },
  { id: 2, foo: 'bar' },
  { id: 3, foo: 'baz' }
]

describe('add actions', () => {
  it('creates an action to add posts', () => {
    const data = [
      { id: 1, foo: 'foo' },
      { id: 2, foo: 'bar' },
      { id: 3, foo: 'baz' }
    ]

    expect(actions.addPage(data)).toEqual({
      type: types.ADD_PAGE,
      posts: data
    })
  })
})

const middlewares = [thunk.withExtraArgument(axios)]
const mockStore = configureMockStore(middlewares)
const mock = new MockAdapter(axios)

describe('fetch actions', () => {
  it('creates an action to start fetching posts', () => {
    expect(actions.fetchRequest()).toEqual({
      type: types.FETCH_REQUEST
    })
  })

  it('creates an action to end fetching posts with success', () => {
    expect(actions.fetchSuccess()).toEqual({
      type: types.FETCH_SUCCESS
    })
  })

  it('creates an action to end fetching posts with failure', () => {
    expect(actions.fetchFailure('message error')).toEqual({
      type: types.FETCH_FAILURE,
      message: 'message error'
    })
  })

  describe('fetch posts async', () => {
    afterEach(() => {
      mock.reset()
    })

    it('returns success', () => {
      mock.onGet('/post/trending/view?count=24')
        .reply(200, data)

      const store = mockStore()

      return store.dispatch(actions.fetch()).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_REQUEST },
          { type: types.ADD_PAGE, posts: data },
          { type: types.FETCH_SUCCESS }
        ])
      })
    })

    it('returns failure', () => {
      mock.onGet('/post/trending/view?count=24')
        .networkError()

      const store = mockStore()

      return store.dispatch(actions.fetch()).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_REQUEST },
          { type: types.FETCH_FAILURE, message: 'Network Error' }
        ])
      })
    })
  })
})
