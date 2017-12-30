import _ from 'lodash'
import * as types from '../types/recommends'
import { add } from './posts'

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

export const fetch = (id) => {
  return (dispatch, getState, axios) => {
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
