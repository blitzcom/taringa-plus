import _ from 'lodash'
import { createSelector } from 'reselect'

const shoutsState = (state) => state.entities.shouts
const usersState = (state) => state.entities.users

export const shoutsSelector = createSelector(
  shoutsState,
  usersState,
  (shouts, users) => {
    const items = _.values(shouts)
    return _.map(items, (item) => _.assign({}, item, { owner: users[item.owner] }))
  }
)
