import * as types from './types'

export const add = (comments) => ({
  type: types.ADD,
  comments: comments
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

export const fetch = (id) => {
  return (dispatch, getState, axios) => {
    dispatch(fetchRequest())

    return axios.get('/post/comment/view', {
      params: {
        object_id: id
      }
    })
      .then(response => response.data)
      .then(data => {
        dispatch(add(data))
        dispatch(fetchSuccess())
      })
      .catch(error => dispatch(fetchFailure(error.message)))
  }
}
