import _ from 'lodash'

import * as types from './types'

export const postsEntities = (state = {}, action) => {
  switch (action.type) {
    default:
      if (action.entities && action.entities.posts) {
        return _.merge({}, state, action.entities.posts)
      }

      return state
  }
}

const recentControlState = {
  error: '',
  ids: [],
  status: 'success'
}

export const recentControl = (state = recentControlState, action) => {
  switch (action.type) {
    case types.RECENT_FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching' })
    case types.RECENT_FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result })
    case types.RECENT_FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}
