import _ from 'lodash'
import { createSelector } from 'reselect'

const shoutsState = (state) => state.entities.shouts

export const shoutsSelector = createSelector(
  shoutsState,
  (shouts) => {
    return _.values(shouts)
  }
)
