import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../../types/comments'
import * as actions from '../comments'

const data = [
  { id: 1, foo: 'foo' },
  { id: 2, foo: 'bar' },
  { id: 3, foo: 'baz' }
]

describe('Comments Actions', () => {
  it('creates an action to add comments', () => {
    expect(actions.add(data)).toEqual({
      type: types.ADD,
      comments: data
    })
  })

  it('creates an action to start fetching comments', () => {
    expect(actions.fetchRequest()).toEqual({
      type: types.FETCH_REQUEST
    })
  })

  it('creates an action to stop fetching comments with success', () => {
    expect(actions.fetchSuccess()).toEqual({
      type: types.FETCH_SUCCESS
    })
  })

  it('creates an action to stop fetching comments with failure', () => {
    expect(actions.fetchFailure('foobar')).toEqual({
      type: types.FETCH_FAILURE,
      message: 'foobar'
    })
  })

  const middlewares = [thunk.withExtraArgument(axios)]
  const mockStore = configureMockStore(middlewares)
  const mock = new MockAdapter(axios)

  describe('Fetch comments async', () => {
    afterEach(() => mock.reset())

    it('return success', () => {
      mock.onGet('/post/comment/view')
        .reply(200, data)

      const store = mockStore()

      return store.dispatch(actions.fetch(1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_REQUEST },
          { type: types.ADD, comments: data },
          { type: types.FETCH_SUCCESS }
        ])
      })
    })

    it('return failure', () => {
      mock.onGet('/post/comment/view')
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
