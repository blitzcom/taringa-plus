import { readerEntities, readerControl } from '../reader'
import * as types from '../../types/reader'

describe('Reader reducers', () => {
  describe('Entities', () => {
    it('returns initial state', () => {
      expect(readerEntities(undefined, {})).toEqual({})
    })

    it('handles ADD', () => {
      const action = {
        type: types.ADD,
        post: { id: 1 }
      }

      expect(readerEntities({}, action)).toEqual({
        1: { id: 1 }
      })
    })

    it('handles REMOVE_ALL', () => {
      const state = {
        1: { id: 1 },
        2: { id: 2 }
      }

      const action = {
        type: types.REMOVE_ALL
      }

      expect(readerEntities(state, action)).toEqual({})
    })
  })

  describe('Control', () => {
    it('returns initial state', () => {
      expect(readerControl(undefined, {})).toEqual({})
    })

    it('handles FETCH_REQUEST', () => {
      const action = {
        type: types.FETCH_REQUEST,
        id: 2
      }

      const state = {
        1: { status: 'success', error: '' }
      }

      expect(readerControl(state, action)).toEqual({
        1: { status: 'success', error: '' },
        2: { status: 'fetching', error: '' }
      })
    })

    it('handles FETCH_SUCCESS', () => {
      const action = {
        type: types.FETCH_SUCCESS,
        id: 2
      }

      const state = {
        1: { status: 'success', error: '' },
        2: { status: 'fetching', error: '' }
      }

      expect(readerControl(state, action)).toEqual({
        1: { status: 'success', error: '' },
        2: { status: 'success', error: '' }
      })
    })

    it('handles FETCH_FAILURE', () => {
      const action = {
        type: types.FETCH_FAILURE,
        id: 2,
        message: 'foobar'
      }

      const state = {
        1: { status: 'success', error: '' },
        2: { status: 'fetching', error: '' }
      }

      expect(readerControl(state, action)).toEqual({
        1: { status: 'success', error: '' },
        2: { status: 'failure', error: 'foobar' }
      })
    })
  })
})
