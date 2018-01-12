import _ from 'lodash'

import * as types from './types'

export const shoutsEntities = (state = {}, action) => {
  switch (action.type) {
    default:
      if (action.entities && action.entities.shouts) {
        return _.merge({}, state, action.entities.shouts)
      }

      return state
  }
}
