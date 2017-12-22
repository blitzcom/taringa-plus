import * as redux from 'redux'
import thunk from 'redux-thunk'
import reduxInmmutable from 'redux-immutable-state-invariant'
import axios from 'axios'

const buildThunk = () => thunk.withExtraArgument(axios)

const buildDevTools = () => window.devToolsExtension ?
  window.devToolsExtension() :
  f => f

const globalState = {}

let compose = null

export const configure = (initialState = globalState) => {
  if (process.env.NODE_ENV === 'development') {
    compose = redux.compose(
      redux.applyMiddleware(buildThunk(), reduxInmmutable()),
      buildDevTools()
    )
  } else {
    compose = redux.compose(
      redux.applyMiddleware(buildThunk())
    )
  }

  return redux.createStore(f => f, initialState, compose)
}

export default configure
