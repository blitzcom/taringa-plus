import configure from './'

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
