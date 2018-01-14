import { combineReducers } from 'redux'

import {
  popularsControl,
  postReaderControl,
  postsEntities,
  recentControl,
  trendingControl,
} from '../posts/reducers'

import {
  shoutVisorControl,
  shoutsEntities,
  shoutsRecentControl,
  searchShoutsControl,
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
  searchShouts: searchShoutsControl,
  shoutVisor: shoutVisorControl,
  shouts: shoutsRecentControl,
  trending: trendingControl,
})

export default combineReducers({
  control,
  entities
})
