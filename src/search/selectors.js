import { createSelector } from 'reselect'

const searchShoutsState = (state) => state.control.searchShouts

export const searchSelector = createSelector(
  searchShoutsState,
  (search) => search
)
