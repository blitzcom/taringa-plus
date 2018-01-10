import { combineReducers } from 'redux'

import { postsEntities, recentControl } from '../posts/reducers'

const entities = combineReducers({
  posts: postsEntities,
})

const control = combineReducers({
  recent: recentControl
})

export default combineReducers({
  control,
  entities
})
