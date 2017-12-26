import { combineReducers } from 'redux'

import { postsEntities } from './posts'
import { sectionsControl } from './sections'

const entities = combineReducers({
  posts: postsEntities
})

const control = combineReducers({
  sections: sectionsControl
})

export default combineReducers({
  control,
  entities
})
