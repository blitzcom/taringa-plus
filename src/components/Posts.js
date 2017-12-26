import React from 'react'
import { Card, Loader, Message } from 'semantic-ui-react'

import Post from './Post'

export const Posts = (props) => {
  const { posts, fetchControl } = props

  if (fetchControl.status === 'fetching') {
    return (
      <Loader active inline='centered'/>
    )
  }

  if (fetchControl.status === 'failure') {
    const errorMessage = `Intenta recargar la página. Error: ${fetchControl.error}`

    return (
      <Message
        icon='frown'
        header='Houston, tenemos un problema!'
        content={errorMessage}
        negative
      />
    )
  }

  if (fetchControl.status === 'success' && posts.length === 0) {
    return (
      <Message
        icon='smile'
        header='No hay posts!'
        content='Prueba recargando la página para intentar descargar los últimos posts.'
      />
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

Posts.defaultProps = {
  posts: [],
  fetchControl: {
    status: 'success',
    error: ''
  }
}

export default Posts
