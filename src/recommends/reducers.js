import _ from 'lodash'

import * as types from './types'

const initialState = {
  error: '',
  postIds: [],
  status: 'success'
}

export const recommendsControl = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return _.assign({}, state, { status: 'fetching', error: '', postIds: [] })
    case types.FETCH_SUCCESS:
      return _.assign({}, state, { status: 'success', postIds: action.ids })
    case types.FETCH_FAILURE:
      return _.assign({}, state, { status: 'failure', error: action.message })
    case types.CLEAR:
      return _.assign({}, state, { status: 'success', postIds: [] })
    default:
      return state
  }
}
