import { createSelector } from 'reselect'

export const defaultSelector = createSelector(
  (state, props) => state.entities.reader[props.match.params.id],
  (post) => post
)

export const controlSelector = createSelector(
  (state, props) => state.control.reader[props.match.params.id],
  (control) => control
)
