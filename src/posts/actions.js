import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { post } from './schemas'

export const recentFetchRequest = () => ({
  type: types.RECENT_FETCH_REQUEST
})

export const recentFetchSuccess = () => ({
  type: types.RECENT_FETCH_SUCCESS
})

export const recentFetchFailure = (message) => ({
  type: types.RECENT_FETCH_FAILURE,
  message: message
})

export const fetchRecent = () => {
  return (dispatch, getState, axios) => {
    dispatch(recentFetchRequest())

    return axios.get('/post/recent/view/all')
      .then(response => response.data)
      .then(data => {
        const nextAction = _.assign({}, normalize(data, [post]), recentFetchSuccess())
        return dispatch(nextAction)
      })
      .catch(error => dispatch(recentFetchFailure(error.message)))
  }
}
