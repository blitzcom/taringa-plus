import * as types from './types'

export const add = (posts) => ({
  type: types.ADD,
  posts: posts
})

export const removeAll = (posts) => ({
  type: types.REMOVE_ALL
})

export const removeIds = (ids) => ({
  type: types.REMOVE_IDS,
  ids: ids
})
