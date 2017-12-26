import _ from 'lodash'
import * as types from '../types/sections'

const initialState = {
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
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', postsIds: action.posts })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const sectionsControl = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state,
        { [action.id]: sectionReducer(state[action.id], action) })
    default:
      return state
  }
}
