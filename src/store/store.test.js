import configure from './'
import axios from 'axios'

describe('store', () => {
  it('returns initial state', () => {
    const store = configure()

    expect(store.getState()).toEqual({
      entities: {
        posts: {}
      },
      control: {
        posts: {
          fetch: {
            status: 'success',
            error: ''
          }
        }
      }
    })
  })
})

describe('API base URL', () => {
  it('matches endpoint', () => {
    expect(axios.defaults.baseURL).toEqual('https://api.taringa.net')
  })
})
