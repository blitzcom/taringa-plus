import _ from 'lodash'
import { createSelector } from 'reselect'

const commentsEntities = (state) => state.entities.comments

export const commentsSelector = createSelector(
  commentsEntities,
  (comments) => {
    return _.values(comments)
  }
)
