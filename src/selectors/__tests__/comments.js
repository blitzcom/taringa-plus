import { commentsSelector } from '../comments'

describe('Comments selector', () => {
  it('returns comments', () => {
    const comments = {
      0: { id: 0, body: 'foo' },
      1: { id: 1, body: 'foo' },
      2: { id: 2, body: 'foo' }
    }

    const state = { entities: { comments } }

    expect(commentsSelector(state)).toEqual([
      { id: 0, body: 'foo' },
      { id: 1, body: 'foo' },
      { id: 2, body: 'foo' }
    ])
  })
})
