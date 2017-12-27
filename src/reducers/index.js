import { combineReducers } from 'redux'

import { postsEntities } from './posts'
import { sectionsControl } from './sections'
import { readerEntities, readerControl } from './reader'

const entities = combineReducers({
  posts: postsEntities,
  reader: readerEntities
})

const control = combineReducers({
  sections: sectionsControl,
  reader: readerControl
})

export default combineReducers({
  control,
  entities
})
