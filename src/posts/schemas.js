import { schema } from 'normalizr'

const user = new schema.Entity('users')

export const post = new schema.Entity('posts', {
  owner: user
})
