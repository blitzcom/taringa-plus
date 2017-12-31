import { combineReducers } from 'redux'

import { postsEntities } from './posts'
import { sectionsControl } from './sections'
import { readerEntities, readerControl } from './reader'
import { recommendsControl } from './recommends'
import { commentsEntities } from './comments'

const entities = combineReducers({
  comments: commentsEntities,
  posts: postsEntities,
  reader: readerEntities
})

const control = combineReducers({
  reader: readerControl,
  recommends: recommendsControl,
  sections: sectionsControl
})

export default combineReducers({
  control,
  entities
})
