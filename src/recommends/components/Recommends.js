import _ from 'lodash'
import React from 'react'
import { Item } from 'semantic-ui-react'

import Recommend from './Recommend'

export const Recommends = ({ status, posts }) => {
  if (status === 'fetching') {
    return (
      <Item.Group>
        {
          _.times(20, (i) => ({ id: i})).map(item => (
            <Recommend key={item.id} placeholder/>
          ))
        }
      </Item.Group>
    )
  }

  return (
    <Item.Group>
      {
        posts.map(post => (
          <Recommend key={post.id} {...post}/>
        ))
      }
    </Item.Group>
  )
}

Recommends.defaultProps = {
  dispatch: () => {},
  posts: [],
  status: 'success'
}

export default Recommends
