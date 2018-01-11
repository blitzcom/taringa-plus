import * as actions from '../actions'
import * as types from '../types'

describe('add actions', () => {
  it('creates an action to start fetching recent posts', () => {
    expect(actions.recentFetchRequest()).toEqual({
      type: types.RECENT_FETCH_REQUEST
    })
  })
})
