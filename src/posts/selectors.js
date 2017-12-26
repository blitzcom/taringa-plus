import _ from 'lodash'
import { createSelector } from 'reselect'

const postsSelector = (state) => state.entities.posts

export const defaultSelector = createSelector(
  postsSelector,
  (posts) => _.values(posts)
)

const sectionsState = (state) => state.control.posts.sections

const sectionsArray = (state) => createSelector(
  sectionsState,
  (sections) => _.values(sections)
)

export const sectionsSelector = createSelector(
  sectionsState,
  postsSelector,
  (sections, posts) => {
    let items = _.values(sections)
    items = items.map(item => {

      if (item.status === 'success') {
        const _posts = item.postsIds.map(postId => posts[postId])
        return _.assign({}, item, { posts: _posts })
      }

      return _.assign({}, item)
    })
    console.log(items)
    return items
  }
)
