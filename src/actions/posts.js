import * as types from '../types/posts'

export const add = (posts) => ({
  type: types.ADD,
  posts: posts
})

export const removeAll = (posts) => ({
  type: types.REMOVE_ALL
})
