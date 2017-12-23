import _ from 'lodash'
import { combineReducers } from 'redux'

import * as types from './types'

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
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '' })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success' })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    default:
      return state;
  }
}

export const postsControl = combineReducers({
  fetch: fetchControl
})
