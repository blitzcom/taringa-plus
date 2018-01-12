import _ from 'lodash'

export const usersEntities = (state = {}, action) => {
  if (action && action.entities && action.entities.users) {
    return _.merge({}, state, action.entities.users)
  }

  return state
}
