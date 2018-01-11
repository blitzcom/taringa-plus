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

const postsControlState = {
  error: '',
  ids: [],
  page: 1,
  status: 'success',
}

export const recentControl = (state = postsControlState, action) => {
  switch (action.type) {
    case types.RECENT_FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching' })
    case types.RECENT_FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result, page: action.page })
    case types.RECENT_FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const trendingControl = (state = postsControlState, action) => {
  switch (action.type) {
    case types.TRENDING_FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching' })
    case types.TRENDING_FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result })
    case types.TRENDING_FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}

export const popularsControl = (state = postsControlState, action) => {
  switch (action.type) {
    case types.POPULARS_FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching' })
    case types.POPULARS_FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', ids: action.result })
    case types.POPULARS_FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state
  }
}
