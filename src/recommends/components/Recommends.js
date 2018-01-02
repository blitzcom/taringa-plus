import _ from 'lodash'
import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

import * as actions from '../actions'
import Recommend from './Recommend'

export class Recommends extends Component {
  render () {
    const { status, posts } = this.props

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
}

Recommends.defaultProps = {
  dispatch: () => {},
  posts: [],
  status: 'success'
}

export default Recommends
