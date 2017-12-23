import * as types from './types'

export const addPage = (posts) => ({
  type: types.ADD_PAGE,
  posts: posts
})

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST
})

export const fetchSuccess = () => ({
  type: types.FETCH_SUCCESS
})

export const fetchFailure = (message) => ({
  type: types.FETCH_FAILURE,
  message: message
})

export const fetch = () => {
  return (dispatch, getState, axios) => {
    dispatch(fetchRequest())
    return axios.get('/post/trending/view?count=24')
      .then(response => response.data)
      .then(data => {
        dispatch(addPage(data))
        dispatch(fetchSuccess())
      })
      .catch(error => dispatch(fetchFailure(error.message)))
  }
}
