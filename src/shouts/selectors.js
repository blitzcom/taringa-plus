import _ from 'lodash'
import { createSelector } from 'reselect'

const shoutsState = (state) => state.entities.shouts
const recentState = (state) => state.control.shouts
const usersState = (state) => state.entities.users

export const shoutsSelector = createSelector(
  shoutsState,
  recentState,
  usersState,
  (shouts, recent, users) => {
    const items = _.map(recent.ids, (id) => shouts[id])
    return _.map(items, (item) => _.assign({}, item, { owner: users[item.owner] }))
  }
)
