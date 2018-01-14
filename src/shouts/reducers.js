import _ from 'lodash'

import * as types from './types'

export const shoutsEntities = (state = {}, action) => {
  if (action.entities && action.entities.shouts) {
    return _.merge({}, state, action.entities.shouts)
  }

  return state
}

const shoutsRecentState = {
  error: '',
  ids: [],
  status: 'success',
}

export const shoutsRecentControl = (state = shoutsRecentState, action) => {
  switch (action.type) {
    case types.RECENT_FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.RECENT_FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result })
    case types.RECENT_FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

const searchState = {
  error: '',
  ids: [],
  query: '',
  status: 'success',
}

export const searchShoutsControl = (state = searchState, action) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '', query: action.query })
    case types.SEARCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result })
    case types.SEARCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.CLEAR_SEARCH:
      return _.assign({}, state, { query: '' })
    default:
      return state
  }
}
