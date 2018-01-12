import { schema } from 'normalizr'

const user = new schema.Entity('users')

export const shout = new schema.Entity('shouts', {
  owner: user
})
