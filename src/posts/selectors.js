import _ from 'lodash'
import { createSelector } from 'reselect'

const postsState = (state) => state.entities.posts
const recentState = (state) => state.control.recent

export const recentSelector = createSelector(
  postsState,
  recentState,
  (posts, recent) => {
    return _.map(recent.ids, (id) => posts[id])
  }
)
