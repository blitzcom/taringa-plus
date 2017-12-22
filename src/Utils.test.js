import { getPostImageURL } from './Utils'

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
