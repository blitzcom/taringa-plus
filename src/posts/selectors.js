import _ from 'lodash'
import { createSelector } from 'reselect'

const postsSelector = (state) => state.entities.posts

export const defaultSelector = createSelector(
  postsSelector,
  (posts) => _.values(posts)
)
