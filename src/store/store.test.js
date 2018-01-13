import configure from './'
import axios from 'axios'

describe('store', () => {
  it('returns initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      entities: {
        posts: {},
        shouts: {},
        users: {},
      },
      control: {
        populars: {
          error: '',
          ids: [],
          page: 1,
          status: 'success',
        },
        recent: {
          error: '',
          ids: [],
          page: 1,
          status: 'success',
        },
        trending: {
          error: '',
          ids: [],
          page: 1,
          status: 'success',
        },
        shouts: {
          error: '',
          ids: [],
          status: 'success',
        },
        postReader: null,
      },
    })
  })
})

describe('API base URL', () => {
  it('matches endpoint', () => {
    expect(axios.defaults.baseURL).toEqual('/api')
  })
})
