import _ from 'lodash'
import * as types from '../types/posts'

export const addPage = (posts) => ({
  type: types.ADD_PAGE,
  posts: posts
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
  message: message,
  id: id
})

export const fetch = (id, category, count, trending) => {
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
        const postsIds = _.map(data, 'id')
        dispatch(addPage(data))
        dispatch(fetchSuccess(id, postsIds))
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}
