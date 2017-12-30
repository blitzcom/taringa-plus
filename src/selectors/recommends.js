import _ from 'lodash'
import { createSelector } from 'reselect'

export const recommendsSelector = createSelector(
  (state) => state.control.recommends,
  (state) => state.entities.posts,
  (control, posts) => {
    const ids = control.postIds
    const postsArray = ids.map(id => posts[id])
    return _.assign({}, control, { posts: postsArray })
  }
)
