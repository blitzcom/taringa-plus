import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../../types/recommends'
import * as actions from '../recommends'

describe('Recommends', () => {
  it('creates an action to start fetching posts', () => {
    expect(actions.fetchRequest()).toEqual({
      type: types.FETCH_REQUEST
    })
  })

  it('creates an action to stop fetching posts with success', () => {
    expect(actions.fetchSuccess([1, 2, 3, 4])).toEqual({
      type: types.FETCH_SUCCESS,
      ids: [1, 2, 3, 4]
    })
  })

  it('creates an action to stop fetching posts with failure', () => {
    expect(actions.fetchFailure('foobar')).toEqual({
      type: types.FETCH_FAILURE,
      message: 'foobar'
    })
  })

  const data = [
    { id: 1, foo: 'foo' },
    { id: 2, foo: 'bar' },
    { id: 3, foo: 'baz' }
  ]

  const middlewares = [thunk.withExtraArgument(axios)]
  const mockStore = configureMockStore(middlewares)
  const mock = new MockAdapter(axios)

  describe('Fetch recommends async', () => {
    afterEach(() => mock.reset())

    it('returns success', () => {
      mock.onGet('/post/related/view/1')
        .reply(200, data)

      const store = mockStore()

      return store.dispatch(actions.fetch(1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_REQUEST },
          { type: 'posts/ADD', posts: data },
          { type: types.FETCH_SUCCESS, ids: [1, 2, 3] }
        ])
      })
    })

    it('returns failure', () => {
      mock.onGet('/post/related/view/1')
        .networkError()

      const store = mockStore()

      return store.dispatch(actions.fetch(1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_REQUEST },
          { type: types.FETCH_FAILURE, message: 'Network Error' }
        ])
      })
    })
  })
})
