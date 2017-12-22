import React, { Component } from 'react'
import { Card, Loader } from 'semantic-ui-react'
import axios from 'axios'

import Post from './Post'

class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      status: 'success'
    }
  }

  componentDidMount () {
    this.setState({ status: 'fetching' }, () => {
      axios.get('https://api.taringa.net/post/trending/view?count=24')
        .then(response => {
          if (response.status === 200) {
            return response.data
          }

          throw new Error(response.statusText)
        })
        .then(data => this.setState({ posts: data, status: 'success' }))
    })
  }

  render () {
    const { posts, status } = this.state

    if (status === 'fetching') {
      return (
        <Loader active inline='centered'/>
      )
    }

    return (
      <Card.Group itemsPerRow={4}>
        {
          posts.map(post => <Post key={post.id} {...post}/>)
        }
      </Card.Group>
    )
  }
}

export default Posts
