import _ from 'lodash'
import { normalize } from 'normalizr'

import * as types from './types'
import { post } from './schemas'

const shouldFetch = (state, which) => {
  const { status } = state.control[which]

  return status !== 'fetching'
}

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

export const fetchRecent = (page = 1) => {
  return (dispatch, getState, axios) => {
    if (!shouldFetch(getState(), 'recent')) {
      return Promise.resolve()
    }

    dispatch(recentFetchRequest())

    return axios.get(`/post/recent/view/all?page=${page}`)
      .then(response => response.data)
      .then(data => {
        const nextAction = _.assign({ page }, normalize(data, [post]), recentFetchSuccess())
        return dispatch(nextAction)
      })
      .catch(error => dispatch(recentFetchFailure(error.message)))
  }
}

export const trendingFetchRequest = () => ({
  type: types.TRENDING_FETCH_REQUEST
})

export const trendingFetchSuccess = () => ({
  type: types.TRENDING_FETCH_SUCCESS
})

export const trendingFetchFailure = (message) => ({
  type: types.TRENDING_FETCH_FAILURE,
  message: message
})

export const fetchTrending = () => {
  return (dispatch, getState, axios) => {
    if (!shouldFetch(getState(), 'trending')) {
      return Promise.resolve()
    }

    dispatch(trendingFetchRequest())

    return axios.get('/post/trending/view?count=10')
      .then(response => response.data)
      .then(data => {
        const nextAction = _.assign({}, normalize(data, [post]), trendingFetchSuccess())
        return dispatch(nextAction)
      })
      .catch(error => dispatch(trendingFetchFailure(error.message)))
  }
}

export const popularsFetchRequest = () => ({
  type: types.POPULARS_FETCH_REQUEST
})

export const popularsFetchSuccess = () => ({
  type: types.POPULARS_FETCH_SUCCESS
})

export const popularsFetchFailure = (message) => ({
  type: types.POPULARS_FETCH_FAILURE,
  message: message
})

export const fetchPopulars = () => {
  return (dispatch, getState, axios) => {
    if (!shouldFetch(getState(), 'populars')) {
      return Promise.resolve()
    }

    dispatch(popularsFetchRequest())

    return axios.get('/post/populars/view/week?count=16&sort=relevance')
      .then(response => response.data)
      .then(data => {
        const nextAction = _.assign({}, normalize(data, [post]), popularsFetchSuccess())
        return dispatch(nextAction)
      })
      .catch(error => dispatch(popularsFetchFailure(error.message)))
  }
}

export const readPost = (url) => ({
  type: types.READ_POST,
  url: url
})

export const closeReader = () => ({
  type: types.CLOSE_READER
})
