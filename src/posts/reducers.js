import _ from 'lodash'

import * as types from './types'

const reducePostsPage = (posts) => {
  return _.reduce(posts, (container, post) => {
    return _.assign({}, container, { [post.id]: post })
  }, {})
}

export const postsEntities = (state = {}, action) => {
  switch (action.type) {
    case types.ADD:
      return _.assign({}, state, reducePostsPage(action.posts))
    case types.REMOVE_ALL:
      return {}
    case types.REMOVE_IDS:
      return _.omit(state, action.ids)
    default:
      return state
  }
}