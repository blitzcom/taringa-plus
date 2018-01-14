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

export const shoutVisorControl = (state = null, action) => {
  switch (action.type) {
    case types.OPEN:
      return action.id
    case types.CLOSE:
      return null
    default:
      return state
  }
}
