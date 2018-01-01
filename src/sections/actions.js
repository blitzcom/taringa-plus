import _ from 'lodash'
import * as types from './types'
import { add, removeAll as removeAllPosts } from '../posts/actions'

export const clearPostsIds = () => ({
  type: types.CLEAR_POSTS_IDS
})

export const fetchRequest = (id) => ({
  type: types.FETCH_REQUEST,
  id: id
})

export const fetchSuccess = (id, posts) => ({
  type: types.FETCH_SUCCESS,
  id: id,
  posts: posts
})

export const fetchFailure = (id, message) => ({
  type: types.FETCH_FAILURE,
  id: id,
  message: message
})

export const clear = () => {
  return (dispatch) => {
    dispatch(clearPostsIds())
    dispatch(removeAllPosts())
    return Promise.resolve()
  }
}

export const fetch = (id, category, count, trending = false) => {
  return (dispatch, getState, axios) => {
    dispatch(fetchRequest(id))

    const url = trending ? '/post/trending/view' : `/post/recent/view/${category}`

    return axios.get(url, {
      params: {
        count: count
      }
    })
      .then(response => response.data)
      .then(data => {
        dispatch(add(data))
        dispatch(fetchSuccess(id, _.map(data, 'id')))
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}
