import { combineReducers } from 'redux'

import { postsEntities } from '../posts/reducers'
import { sectionsControl } from '../sections/reducers'
import { readerEntities, readerControl } from '../readers/reducers'
import { recommendsControl } from '../recommends/reducers'
import { commentsEntities } from '../comments/reducers'

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
