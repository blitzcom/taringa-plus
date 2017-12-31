import _ from 'lodash'
import * as types from '../types/comments'

const reduceComments = (comments) => {
  return _.reduce(comments, (container, comment) => {
    return _.assign({}, container, { [comment.id]: comment })
  }, {})
}

export const commentsEntities = (state = {}, action) => {
  switch (action.type) {
    case types.ADD:
      return _.assign({}, state, reduceComments(action.comments))
    case types.FETCH_REQUEST:
      return {}
    default:
      return state
  }
}
