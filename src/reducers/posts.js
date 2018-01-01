import _ from 'lodash'

import * as types from '../types/posts'

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
    default:
      return state
  }
}
