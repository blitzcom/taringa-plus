import _ from 'lodash'

import * as types from '../types/reader'

export const readerEntities = (state = {}, action) => {
  switch (action.type) {
    case types.ADD:
      return _.assign({}, state, { [action.post.id]: action.post })
    case types.REMOVE_ALL:
      return {}
    default:
      return state
  }
}

const postControl = (state = { status: 'success', error: '' }, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const readerControl = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
    case types.FETCH_FAILURE:
      return _.assign({}, state,
        { [action.id]: postControl(state[action.id], action) })
    default:
      return state
  }
}
