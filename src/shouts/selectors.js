import _ from 'lodash'
import { createSelector } from 'reselect'

const shoutsState = (state) => state.entities.shouts
const recentState = (state) => state.control.shouts
const usersState = (state) => state.entities.users
const searchState = (state) => state.control.searchShouts
const shoutVisorState = (state) => state.control.shoutVisor

export const shoutsSelector = createSelector(
  shoutsState,
  recentState,
  usersState,
  searchState,
  (shouts, recent, users, search) => {
    const ids = (search.query.length > 0 && search.status === 'success')
      ? search.ids
      : recent.ids

    const items = _.map(ids, (id) => shouts[id])
    return _.map(items, (item) => _.assign({}, item, { owner: users[item.owner] }))
  }
)

export const shoutSelector = createSelector(
  shoutsState,
  shoutVisorState,
  (shouts, selected) => shouts[selected]
)
