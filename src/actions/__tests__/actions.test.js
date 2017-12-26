import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../posts'
import * as types from '../../types/posts'

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
    expect(actions.fetchSectionRequest(1)).toEqual({
      type: types.FETCH_SECTION_REQUEST,
      id: 1
    })
  })

  it('creates an action to end fetching posts with success', () => {
    expect(actions.fetchSectionSuccess(1, [1, 2, 3])).toEqual({
      type: types.FETCH_SECTION_SUCCESS,
      id: 1,
      posts: [1, 2, 3]
    })
  })

  it('creates an action to end fetching posts with failure', () => {
    expect(actions.fetchSectionFailure(1, 'message error')).toEqual({
      type: types.FETCH_SECTION_FAILURE,
      message: 'message error',
      id: 1
    })
  })

  describe('fetch posts async', () => {
    afterEach(() => {
      mock.reset()
    })

    it('returns success', () => {
      mock.onGet('/post/recent/view/foo')
        .reply(200, data)

      const store = mockStore()

      return store.dispatch(actions.fetch(1, 'foo', 1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_SECTION_REQUEST, id: 1 },
          { type: types.ADD_PAGE, posts: data },
          { type: types.FETCH_SECTION_SUCCESS, id: 1, posts: [1, 2, 3] }
        ])
      })
    })

    it('returns failure', () => {
      mock.onGet('/post/recent/view/foo')
        .networkError()

      const store = mockStore()

      return store.dispatch(actions.fetch(1, 'foo', 1)).then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_SECTION_REQUEST, id: 1 },
          { type: types.FETCH_SECTION_FAILURE, message: 'Network Error', id: 1 }
        ])
      })
    })
  })
})
