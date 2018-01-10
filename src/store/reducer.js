import { combineReducers } from 'redux'

import {
  postsEntities,
  recentControl,
  trendingControl
} from '../posts/reducers'

const entities = combineReducers({
  posts: postsEntities,
})

const control = combineReducers({
  recent: recentControl,
  trending: trendingControl
})

export default combineReducers({
  control,
  entities
})
