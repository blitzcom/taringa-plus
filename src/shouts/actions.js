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

export const clearSearch = () => ({
  type: types.CLEAR_SEARCH
})

export const searchRequest = (query) => ({
  type: types.SEARCH_REQUEST,
  query: query
})

export const searchSuccess = () => ({
  type: types.SEARCH_SUCCESS
})

export const searchFailure = (message) => ({
  type: types.SEARCH_FAILURE,
  message: message
})

const canSearch = (state, nextQuery) => {
  const { status, query } = state.control.searchShouts
  return status !== 'fetching' &&
    query !== nextQuery
}

export const searchShouts = (query) => {
  return (dispatch, getState, axios) => {

    if (!canSearch(getState(), query)) {
      return Promise.resolve()
    }

    if (query.length === 0) {
      return dispatch(clearSearch())
    }

    if (query.length <= 3) {
      return Promise.resolve()
    }

    dispatch(searchRequest(query))

    return axios.get('/shout/search/view', {
      params: {
        q: query,
        count: 6,
        sort: 'likes'
      }
    })
      .then(response => response.data.result)
      .then(data => {
        const nextAction = _.assign({}, normalize(data, [shout]), searchSuccess())
        return dispatch(nextAction)
      })
      .catch(error => dispatch(searchFailure(error.message)))
  }
}
export const openShout = (id) => ({
  type: types.OPEN,
  id: id
})

export const closeShout = (close) => ({
  type: types.CLOSE
})
