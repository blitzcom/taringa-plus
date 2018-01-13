import { combineReducers } from 'redux'

import {
  popularsControl,
  postReaderControl,
  postsEntities,
  recentControl,
  trendingControl,
} from '../posts/reducers'

import {
  shoutsEntities,
  shoutsRecentControl,
} from '../shouts/reducers'

import {
  usersEntities
} from '../users/reducers'

const entities = combineReducers({
  posts: postsEntities,
  shouts: shoutsEntities,
  users: usersEntities,
})

const control = combineReducers({
  populars: popularsControl,
  postReader: postReaderControl,
  recent: recentControl,
  shouts: shoutsRecentControl,
  trending: trendingControl,
})

export default combineReducers({
  control,
  entities
})
