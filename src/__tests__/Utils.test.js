import {
  getPostImageURL,
  humanizeNum,
} from '../Utils'

it('gets 4:3 image url', () => {
  const images = [
    { ratio: '4:3', url: '4:3-url' },
    { ratio: '1:1', url: '1:1-url' }
  ]

  const post = {
    images
  }

  const actual = getPostImageURL(post)

  expect(actual).toEqual('4:3-url')
})

describe('Humanize numbers', () => {
  it('returns hundreds', () => {
    expect(humanizeNum(999)).toEqual('999')
    expect(humanizeNum(1)).toEqual('1')
  })

  it('returns thousands', () => {
    expect(humanizeNum(1000)).toEqual('1k')
    expect(humanizeNum(10000)).toEqual('10k')
    expect(humanizeNum(100000)).toEqual('100k')
    expect(humanizeNum(999999)).toEqual('1m')
  })

  it('returns millions', () => {
    expect(humanizeNum(2000000)).toEqual('2m')
  })

  it('returns billions', () => {
    expect(humanizeNum(2000000000)).toEqual('2b')
  })

  it('returns two decimals', () => {
    expect(humanizeNum(1499)).toEqual('1.5k')
  })

  it('returns more decimals', () => {
    expect(humanizeNum(1499, 3)).toEqual('1.499k')
  })
})
