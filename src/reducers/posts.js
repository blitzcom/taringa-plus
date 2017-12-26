import _ from 'lodash'
import { combineReducers } from 'redux'

import * as types from '../types/posts'

const reducePostsPage = (posts) => {
  return _.reduce(posts, (container, post) => {
    return _.assign({}, container, { [post.id]: post })
  }, {})
}

export const postsEntities = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_PAGE:
      return _.assign({}, state, reducePostsPage(action.posts))
    default:
      return state
  }
}

export const fetchControl = (state = { status: 'success', error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_SECTION_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SECTION_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    case types.FETCH_SECTION_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state;
  }
}

const sectionsState = {
  1: {
    category: null,
    count: 8,
    error: '',
    id: 1,
    name: 'Posts Populares',
    postsIds: [],
    status: 'success',
    trending: true
  },
  2: {
    category: 'humor',
    count: 8,
    error: '',
    id: 2,
    name: 'Humor',
    postsIds: [],
    status: 'success',
    trending: false
  },
  3: {
    category: 'juegos',
    count: 8,
    error: '',
    id: 3,
    name: 'Juegos',
    postsIds: [],
    status: 'success',
    trending: false
  },
  4: {
    category: 'imagenes',
    count: 8,
    error: '',
    id: 4,
    name: 'Imágenes',
    postsIds: [],
    status: 'success',
    trending: false
  }
}

const sectionReducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_SECTION_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SECTION_SUCCESS:
      return _.assign({}, state, { status: 'success', postsIds: action.posts })
    case types.FETCH_SECTION_FAILURE:
      return _.assign({}, state, { status: 'failure' })
    default:
      return state
  }
}

export const sectionsControl = (state = sectionsState, action) => {
  switch (action.type) {
    case types.FETCH_SECTION_REQUEST:
    case types.FETCH_SECTION_SUCCESS:
    case types.FETCH_SECTION_FAILURE:
      return _.assign(
        {},
        state,
        { [action.id]: sectionReducer(state[action.id], action) }
      )
    default:
      return state
  }
}

export const postsControl = combineReducers({
  sections: sectionsControl
})
