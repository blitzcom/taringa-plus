import * as types from '../types/posts'

export const add = (posts) => ({
  type: types.ADD,
  posts: posts
})
