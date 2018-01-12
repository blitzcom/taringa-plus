import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { shout } from './schemas'

export const fetchRecentRequest = () => ({
  type: types.RECENT_FETCH_REQUEST
})

export const fetchRecentSuccess = () => ({
  type: types.RECENT_FETCH_SUCCESS
})

export const fetchRecentFailure = (message) => ({
  type: types.RECENT_FETCH_FAILURE,
  message
})

export const fetchRecentShouts = () => {
  return (dispatch, getState, axios) => {
    dispatch(fetchRecentRequest())

    return axios.get('/shout/trends/view/3h?count=6')
      .then(response => response.data)
      .then(data => {
        const nextAction = _.assign({}, normalize(data, [shout]), fetchRecentSuccess())
        return dispatch(nextAction)
      })
      .catch(error => dispatch(fetchRecentFailure(error.message)))
  }
}
