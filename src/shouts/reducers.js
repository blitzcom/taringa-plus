import _ from 'lodash'

export const shoutsEntities = (state = {}, action) => {
  if (action.entities && action.entities.shouts) {
    return _.merge({}, state, action.entities.shouts)
  }

  return state
}
