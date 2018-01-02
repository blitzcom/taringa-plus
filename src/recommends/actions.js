import _ from 'lodash'
import * as types from './types'
import { add, removeIds } from '../posts/actions'

export const clearRecommends = () => ({
  type: types.CLEAR
})

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST
})

export const fetchSuccess = (ids) => ({
  type: types.FETCH_SUCCESS,
  ids: ids
})

export const fetchFailure = (message) => ({
  type: types.FETCH_FAILURE,
  message: message
})

export const clear = () => (dispatch, getState) => {
  const ids = getState().control.recommends.postIds
  dispatch(clearRecommends())
  dispatch(removeIds(ids))
  return Promise.resolve()
}

export const fetch = (id) => {
  return (dispatch, getState, axios) => {
    dispatch(clear())
    dispatch(fetchRequest())

    return axios.get(`/post/related/view/${id}`, {
      params: {
        count: 20
      }
    })
      .then(response => response.data)
      .then(data => {
        dispatch(add(data))
        dispatch(fetchSuccess(_.map(data, 'id')))
      })
      .catch(error => dispatch(fetchFailure(error.message)))
  }
}
