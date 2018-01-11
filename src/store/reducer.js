import { combineReducers } from 'redux'

import {
  popularsControl,
  postsEntities,
  recentControl,
  trendingControl,
} from '../posts/reducers'

const entities = combineReducers({
  posts: postsEntities,
})

const control = combineReducers({
  populars: popularsControl,
  recent: recentControl,
  trending: trendingControl,
})

export default combineReducers({
  control,
  entities
})
