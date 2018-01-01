import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { REMOVE_ALL as REMOVE_ALL_POSTS } from '../../types/posts'
import { REMOVE_ALL as REMOVE_ALL_READERS } from '../../types/reader'
import * as types from '../../types/reader'
import * as actions from '../reader'

describe('Reader actions', () => {
  it('creates an action to add a post', () => {
    expect(actions.add({ id: 1})).toEqual({
      type: types.ADD,
      post: { id: 1 }
    })
  })

  it('creates an action to remove all reader posts', () => {
    expect(actions.removeAll()).toEqual({
      type: types.REMOVE_ALL
    })
  })

  it('creates an action to start fetching post', () => {
    expect(actions.fetchRequest(1)).toEqual({
      type: types.FETCH_REQUEST,
      id: 1
    })
  })

  it('creates an action to stop fetching post with success', () => {
    expect(actions.fetchSuccess(1)).toEqual({
      type: types.FETCH_SUCCESS,
      id: 1
    })
  })

  it('creates an action to stop fetching post with failure', () => {
    expect(actions.fetchFailure(1, 'foobar')).toEqual({
      type: types.FETCH_FAILURE,
      id: 1,
      message: 'foobar'
    })
  })


  const middlewares = [thunk.withExtraArgument(axios)]
  const mockStore = configureMockStore(middlewares)
  const mock = new MockAdapter(axios)

  describe('Fetch post async', () => {
    afterEach(() => mock.reset())

    it('return success', () => {
      mock.onGet('/post/view/1')
        .reply(200, { id: 1, foo: 'bar' })

      const store = mockStore()

      return store.dispatch(actions.fetch(1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: REMOVE_ALL_POSTS },
          { type: REMOVE_ALL_READERS },
          { type: types.FETCH_REQUEST, id: 1 },
          { type: types.ADD, post: { id: 1, foo: 'bar' } },
          { type: types.FETCH_SUCCESS, id: 1 }
        ])
      })
    })

    it('return failure', () => {
      mock.onGet('/post/view/1')
        .networkError()

      const store = mockStore()

      return store.dispatch(actions.fetch(1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: REMOVE_ALL_POSTS },
          { type: REMOVE_ALL_READERS },
          { type: types.FETCH_REQUEST, id: 1 },
          { type: types.FETCH_FAILURE, id: 1 , message: 'Network Error' }
        ])
      })
    })
  })
})
