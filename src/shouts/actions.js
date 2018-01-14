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

const shouldFetchRecentShouts = (state) => {
  const { status } = state.control.shouts

  return status !== 'fetching'
}

export const fetchRecentShouts = () => {
  return (dispatch, getState, axios) => {

    if (!shouldFetchRecentShouts(getState())) {
      return Promise.resolve()
    }

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

export const openShout = (id) => ({
  type: types.OPEN,
  id: id
})

export const closeShout = (close) => ({
  type: types.CLOSE
})
