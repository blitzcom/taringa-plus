import { combineReducers } from 'redux'

import { postsEntities, postsControl } from './posts'

const entities = combineReducers({
  posts: postsEntities
})

const control = combineReducers({
  posts: postsControl
})

export default combineReducers({
  control,
  entities
})
