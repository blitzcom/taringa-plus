import { combineReducers } from 'redux'

import { postsEntities } from './posts'
import { sectionsControl } from './sections'
import { readerEntities, readerControl } from './reader'
import { recommendsControl } from './recommends'

const entities = combineReducers({
  posts: postsEntities,
  reader: readerEntities
})

const control = combineReducers({
  sections: sectionsControl,
  reader: readerControl,
  recommends: recommendsControl
})

export default combineReducers({
  control,
  entities
})
