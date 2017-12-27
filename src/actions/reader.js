import * as types from '../types/reader'

export const add = (post) => ({
  type: types.ADD,
  post: post
})

export const fetchRequest = (id) => ({
  type: types.FETCH_REQUEST,
  id: id
})

export const fetchSuccess = (id) => ({
  type: types.FETCH_SUCCESS,
  id: id
})

export const fetchFailure = (id, message) => ({
  type: types.FETCH_FAILURE,
  id: id,
  message: message
})

export const fetch = (id) => {
  return (dispatch, getState, axios) => {
    dispatch(fetchRequest(id))

    return axios.get(`/post/view/${id}`)
      .then(response => response.data)
      .then(data => {
        dispatch(add(data))
        dispatch(fetchSuccess(id))
      })
      .catch(error => dispatch(fetchFailure(id, error.message)))
  }
}
