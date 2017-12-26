import _ from 'lodash'
import * as types from '../types/posts'

export const addPage = (posts) => ({
  type: types.ADD_PAGE,
  posts: posts
})

export const fetchSectionRequest = (id) => ({
  type: types.FETCH_SECTION_REQUEST,
  id: id
})

export const fetchSectionSuccess = (id, posts) => ({
  type: types.FETCH_SECTION_SUCCESS,
  id: id,
  posts: posts
})

export const fetchSectionFailure = (id, message) => ({
  type: types.FETCH_SECTION_FAILURE,
  message: message,
  id: id
})

export const fetch = (id, category, count, trending = false) => {
  return (dispatch, getState, axios) => {
    dispatch(fetchSectionRequest(id))

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
        dispatch(fetchSectionSuccess(id, postsIds))
      })
      .catch(error => dispatch(fetchSectionFailure(id, error.message)))
  }
}
