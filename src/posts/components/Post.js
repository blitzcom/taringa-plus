import React from 'react'
import TimeAgo from 'react-timeago'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Post.css'
import { getPostImageURL, esFormatter } from '../../Utils'

const Post = (props) => {
  if (props.placeholder) {
    return (
      <Card>
        <div className='animated-background'>
          <div className='ph-post-img'/>
          <div className='bg-masker top-separator'/>
          <div className='bg-masker left-separator'/>
          <div className='bg-masker right-separator'/>
          <div className='bg-masker mid-separator'/>
          <div className='bg-masker date-separator'/>
          <div className='bg-masker extra-separator'/>
          <div className='bg-masker bottom-separator'/>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <Image src={getPostImageURL(props)} style={{ height: 199.8 }}/>
      <Card.Content>
        <Card.Header
          as={Link}
          to={`/post/${props.id}`}
        >
          {props.title}
        </Card.Header>
        <Card.Meta>
          <TimeAgo
            date={props.created}
            formatter={esFormatter}
          />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Image src={props.owner.avatar.medium} avatar/>
        {props.owner.nick}
      </Card.Content>
    </Card>
  )
}

export default Post
